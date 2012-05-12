/*jshint node:true strict:true laxcomma:true es5:true*/
// require __dirname module exports process
// window document
(function () {
  "use strict";

  var connect = require('connect')
    , path = require('path')
    , fs = require('fs')
    , db
    , connectRouter = require('connect_router')
    , app
    , baseDir = process.cwd()
    ;

  function getDb(req, res) {
    var data = {
            success: true
          , result: db 
        }
      ;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  }

  function putDb(req, res) {
    if (req.body) {
      db.push(req.body)
      saveDb(db);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "success": true }));
  }

  function greeter(request, response) {
    response.end('Hello ' + request.params.first + ' ' + request.params.last);
  }

  function router(routes) {
    routes.get('/greet/:first/:last', greeter);
    routes.get('/db', getDb);
    routes.post('/db', putDb);
    routes.put('/db', putDb);
  }

  function loadDb() {
    try {
      db = JSON.parse(fs.readFileSync('db.json'));
    } catch(e) {
      try {
        db = JSON.parse(fs.readFileSync('db.json.bak'));
      } catch(e) {
        db = [];
        saveDb(db);
      }
    }
  }

  function saveDb(_db) {
    var dbFile = path.join(baseDir, 'db.json')
      , dbFileBak = path.join(baseDir, 'db.json.bak')
      ;

    fs.writeFile(dbFile, JSON.stringify(_db), function (err) {
      if (err) {
        throw err;
      }
      fs.writeFile(dbFileBak, JSON.stringify(_db), function (err) {
        if (err) {
          throw err;
        }
        db = _db;
      });
    });
  }

  loadDb();
  app = connect();
  app.use(connect.favicon(path.join(baseDir, 'public/favicon.ico')));
  app.use(connect.static(path.join(baseDir, 'public')));
  app.use(connect.json());
  app.use(connectRouter(router));

  function main() {
    var server
      , port = process.argv[2] || process.env.PORT || 3000
      ;

    function onListening() {
      var address = server.address()
        ;

      console.log('Listening on ' + address.address + ':' + address.port);
    }

    server = app.listen(port, onListening);
  }

  if (require.main === module) {
    main();
  }

  module.exports = app;
}());
