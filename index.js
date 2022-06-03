require('dotenv').config()
require('./config/db')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('layout', './index')
app.set('view engine', 'ejs');

app.use(
    express.json({
        limit: '1024mb',
    }),
)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

// fileupload
app.use(fileUpload())

const corsOptionsDelegate = require('./middleware/cors')
app.use(cors(corsOptionsDelegate))

const routes = require('./routes/index')
app.use('/api', routes)
app.use('/uploads', express.static('uploads'))

const swaggerJson = require('./swagger/swagger.json')
const swaggerUi = require("swagger-ui-express");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

// var cron = require('node-cron');
// cron.schedule('1-5 * * * *', () => {
//   console.log(new Date());
// });

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`The web server has started on port ${port}`);
});
