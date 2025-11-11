//const userService = require('../services/user-service')
export function helloServer(req, res) {
    console.log('Say Hi From Server')  
    res.send('Hello From Server')
}