var http = require('http');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db');
var topic = require('./lib/topic');
var authors = require('./lib/authors')
const { authorSelect } = require('./lib/template.js');
 
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        topic.home(request, response);
      } else {
        topic.page(request, response);
      }
    } else if(pathname === '/create'){
      topic.create(request, response);
    } else if(pathname === '/create_process'){
      topic.create_process(request, response);
    } else if(pathname === '/update'){
      topic.update(request, response);
    } else if(pathname === '/update_process'){
      topic.update_process(request, response);
    } else if(pathname === '/delete_process'){
      topic.delete_process(request, response);
    } else if(pathname === '/author'){
      authors.home(request, response);
    } else if(pathname === '/author/create_process'){
      authors.create_process(request, response);
    } else if(pathname === '/author/update'){
      authors.update(request, response);
    } else if(pathname === '/author/update_process'){
      authors.update_process(request, response);
    } else if(pathname === '/author/delete_process'){
      authors.delete_process(request, response);
    } else {
      response.writeHead(404);
      response.end('Not found');
    };
});
app.listen(3000);