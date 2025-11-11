const Express = require('express');
const BodyParser = require('body-parser')
const Morgan = require('morgan')
const MethodOverride = require('method-override')
require('dotenv').config()

const app = Express();

// log by using morgan
app.use(Morgan('combined'));

// parse application/json
app.use(BodyParser.json({
    limit:'5mb'
}));

// parse application/vnd.api+json as json
app.use(BodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({
    limit:'5mb',
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(MethodOverride('X-HTTP-Method-Override'));

// >>>>>>>>>>>>>>>>>>>> route <<<<<<<<<<<<<<<<<<<<
require('./app/route')(app)

const Port = process.env.PORT || 3000
app.listen(Port, () => {
    console.log(`Application listening on port ${Port}`)
})
