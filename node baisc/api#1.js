const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    
    if(name == "dog"){
        res.json({'sound' : '멍멍'})
    } else if(name == "cat"){
        res.json({'sound' : '야옹'})
    } else if(name == "pig"){
        res.json({'sound' : '꿀꿀'})
    } else {
        res.json({'sound' : '알수없음'})
    }
})

app.listen(3000)