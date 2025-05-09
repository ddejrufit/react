const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
})

app.use(express.json());
var cors = require('cors');
app.use(cors());


app.get('/blog',function(요청, 응답){
  응답.sendFile(path.join(__dirname,'/react/blog/index.html'))
})

app.get('/shop', function (요청, 응답) {
  응답.sendFile(path.join(__dirname,'/react/shop/index.html'))
});

