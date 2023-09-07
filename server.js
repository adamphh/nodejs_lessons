const app = require('./src/app')

const PORT = 3055;

const server = app.listen(PORT, () => {
    console.log(`Node js lessons start with port: ${PORT}`)
})

// Hiển thị message thông báo khi ấn ctrl+c để tắt server
process.on('SIGINT', () => {
    server.close(() => {
        console.log(`Exit server express`)
    })
    // notify.send('abc xz')
})