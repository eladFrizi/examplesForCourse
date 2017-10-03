var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
var value ='elad';
app.get('/value', (req, res) => {
    console.log('someone ask for value')
    setTimeout(()=>{
        res.send(JSON.stringify({value}))
    }, 3000)
})
    
app.listen(3000, ()=> {
    console.log('started on port 3000')
})