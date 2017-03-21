var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;
const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'http') { return res.redirect(['http://', req.get('Host'), req.url].join('')); }
        next();
    }
}


//app.use(forceSSL());
app.use('/public',express.static(__dirname + '/public'));


app.all('/',(req,res)=>res.sendFile(path.join(__dirname + '/index.html')))

app.listen(port,()=>console.log('Server is live on port : ',port));
