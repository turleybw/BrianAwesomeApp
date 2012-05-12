BrianAwesomeApp
===

This is a simple NodeJS project I created to teach Brian about NodeJS and git and github and all the things!

Install and Run
===

    
    git clone git://github.com/coolaj86/BrianAwesomeApp.git
    cd BrianAwesomeApp
    node server/ 3333

Then open your browser to <http://localhost:4444>

The data can be viewed at `/db` (<http://localhost:4444/db>)

The reason this works is because of the HTTP headers, and the route we established

    GET /db HTTP/1.1 --> routes.get('/db', getDb); --> db.json
