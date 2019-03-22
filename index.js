const express = require('express');
const app = express();

app.get('/', (req, resp)=> {
    resp.send({msg: 'hello world'});
});

app.listen(3000, ()=> {
    console.log('hello world running on port 3000');
})