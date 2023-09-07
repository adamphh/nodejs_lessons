const express = require('express');
const morgan = require('morgan')
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// Init middlewares
/* use morgan */
app.use(morgan('dev'))
// app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))

/* use Helmet*/
app.use(helmet())

/* use compression */
app.use(compression())

// Init db

// Init routers
app.get('/', (req, res, next) => {
    const strCompress = 'Hello world';
    return res.status(200).json({
        message: 'Welcome to node js',

        //VD sử dụng compression
        metadata: strCompress.repeat(10000)
    })

    /** VD sử dụng compression **/

})

// Handling Errors

module.exports = app