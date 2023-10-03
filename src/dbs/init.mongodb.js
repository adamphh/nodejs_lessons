'use strict'

// Using Node.js `require()`
const mongoose = require('mongoose');
const { db: { host, name, port } } = require('../configs/config.mongodb')

// Using ES6 imports
// import mongoose from 'mongoose';

// const connectString = `mongodb://localhost:27017/shopDEV`
const connectString = `mongodb://${host}}:${port}/${name}`
// mongoose.connect( connectString ).then(
//     () => console.log(`Connected MongoDB`)
// ).catch( err => console.log(`Error Connect!`))

const { countConnect } = require('../helpers/check.connect')

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectString, {
            maxPoolSize: 100
        }).then(
            () => console.log(`Connected MongoDB`, countConnect())
        ).catch(err => console.log(`Error Connect!`))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongoDb = Database.getInstance()

module.exports = instanceMongoDb