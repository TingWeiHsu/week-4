const express = require('express')
const app = express()

app.get('/',(req, res) => res.send('Hello My Server!'))
app.get('/getData',(req, res)=> {
    const query = req.query.number
    if (query) {
    let plusResult = 0;
    for (let i = 1 ; i <= query ; i++ ){
    plusResult += i;
    }
    res.send(plusResult.toString());
    } else {
    res.send('Wrong Parameters')
    }
})

app.use(express.static('public'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))