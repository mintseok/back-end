var express = require('express');
var fs = require('fs');
var template = require('../lib/template.js');
var router = express.Router();

router.get('/', (request, response) => {
    fs.readdir('./data', function(error, filelist){
      var title = 'Welcome';
      var description = 'Hello, Node.js';
      var list = template.list(filelist);
      var html = template.HTML(title, list,
        `
        <h2>${title}</h2>${description}
        <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
        `,
        `<a href="/topic/create">create</a>`
      );
      response.send(html);
    });
});
module.exports = router;