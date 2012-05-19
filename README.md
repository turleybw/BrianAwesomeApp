BrianAwesomeApp
===

This is a simple NodeJS project I created to teach Brian about NodeJS and git and github and all the things!

Install and Run
===

    
    git clone git://github.com/coolaj86/BrianAwesomeApp.git
    # or fork your own and use your read-write github url

    cd BrianAwesomeApp
    ./deploy.sh
    node server/ 4444

Then open your browser to <http://localhost:4444>

The data can be viewed at `/db` (<http://localhost:4444/db>)

The reason this works is because of the HTTP headers, and the route we established

    GET /db HTTP/1.1 --> routes.get('/db', getDb); --> db.json

Updating from me
===

If you want to get my updates, you can't pull them from your branch. You must pull them from mine.

    git remote add upstream git://github.com/coolaj86/BrianAwesomeApp.git
    git pull upstream master