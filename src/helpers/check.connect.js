'use strict'

const { default: mongoose } = require("mongoose")
const os = require('os')
const process = require('process')
const _SECONDS = 5000

/** Count connection */
const countConnect = () => {
    const numConnection = mongoose.connect.length
    console.log(`Number of connection: ${numConnection} `)
}

/** Check overload connection */
checkOverLoad = () => {
    setInterval(() => {
        // get num of connections
        const numConnections = mongoose.connect.length

        //  Kiểm tra xem máy tính (server) có bao nhiêu core cpu
        const numCores = os.cpus().length

        // Lấy memory đã sử dụng
        const memoryUsage = process.memoryUsage().rss

        console.log(`Active connections:: ${numConnections}`)
        // Đổi ra Megabyte
        console.log(`Memory usage:: ${memoryUsage / (1024 * 1024)} MB`)

        // Giả sử mỗi core chịu được 5 connections đến mongoose (mongo db),  máy  có 8 core
        const maxConnections = numCores * 5     // tối đa chịu được 40 connections

        if (numConnections > maxConnections) {
            console.log('Connection overload detected')
        }
    }, _SECONDS)    // Monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverLoad
}