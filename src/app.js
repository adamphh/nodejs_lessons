const express = require('express');
const morgan = require('morgan')
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// Init middlewares
//  install morgan:  npm i morgan --save-dev
/* use morgan: in ra các log khi 1 người dùng chạy một request. Morgan  có  5  loại */
app.use(morgan('dev'))  //Trạng thái code được tô màu
// app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))

/* use Helmet*/
app.use(helmet())   //ngăn chặn đọc các thông tin nhạy cảm, cookie...  =>  bảo  mật

/* use compression */
app.use(compression())

// Init db
// require('./dbs/init.mongodb.lv0')
require('./dbs/init.mongodb')
// const { countConnect } = require('./helpers/check.connect')
// countConnect()
const { checkOverLoad } = require('./helpers/check.connect')
checkOverLoad()

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