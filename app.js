const express = require('express');
// const { resolve } = require('path');
const path = require('path')
const app = express()
const port = process.env.PORT|| 5000
app.use(express.static('build'));
app.get('*', (req, res) => {
    req.sendFile(path,resolve(__dirname,'build','index.html'));
});
app.listen(port, 
    (err) => {
        if(err) throw err;
     console.log(`Example app listening on port ${port}!`);
    })
    