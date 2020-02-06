var http = require('http');
var url = require('url');
var fs = require('fs');
var log = require('./log.js')

http.createServer(function (req, res) {
  var date = new Date();
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    console.log(date+'file name:'+filename)
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
     
    else{
      var dotoffset = req.url.lastIndexOf('.');
      var mimetype = dotoffset == -1
                      ? 'text/plain'
                      : {
                          '.html' : 'text/html',
                          '.txt' : 'text/text',
                          '.xml' : 'text/xml',
                          '.ico' : 'image/x-icon',
                          '.jpg' : 'image/jpeg',
                          '.png' : 'image/png',
                          '.gif' : 'image/gif',
                          '.css' : 'text/css',
                          '.js' : 'text/javascript'
                          }[ req.url.substr(dotoffset) ];
    }
    console.log(date+'mimetype:'+mimetype)
    res.writeHead(200, {'Content-Type':mimetype});
    res.write(data);
    return res.end();
  });
}).listen(9080);
var date = new Date();
  console.log(date+`Server running at http://127.0.0.1:9080}/`)
