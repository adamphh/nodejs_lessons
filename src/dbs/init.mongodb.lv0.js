'use strict'

// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';
//  Nên để trong file .env
const connectString = `mongodb://localhost:27017/shopDEV`

mongoose.connect(connectString).then(
    () => console.log(`Connected MongoDB`)
).catch(err => console.log(`Error Connect!`))

if (1 === 1) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose