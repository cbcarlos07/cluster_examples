const restify = require('restify')
let app = restify.createServer()
app.get('/', (req, resp, next) => {
    for(let i = 0; i< 1e8; i++){
        resp.json({pid: process.pid, echo: req.query})
    }
})
app.listen(4000, ()=>{
    console.log('Listening on port 4000')
})