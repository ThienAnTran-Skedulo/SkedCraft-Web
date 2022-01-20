const express = require("express")
const app = express()
// const http = require("http")
// const {default: redisRealtime} = require("@space-kit/redis-realtime-node")

const port = 5000
// const skedjob='127.0.0.1'

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Backend is listening on port ${port}`)
})

// const server = http.createServer(app)
// redisRealtime(server, skedjob)

// server.listen(port, () => {
//     console.log(`Backend is listening on port ${port}`)
// })




// const redis = require('redis')

// const redisConfig = {
//     host: 'localhost',
//     port: '6379',
//     pass: ''
// }
// const client = redis.createClient(redisConfig)

// client.on("error", (err) => {
//     console.log("Error: ", err)
// })

// client.on("connect", (err) => {
//     console.log("Connected to Redis")
// })

// client.set("test", "testValue", redis.print)
// client.get("test", redis.print)