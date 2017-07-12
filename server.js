import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import api from './routes/api'
import controllers from './routes/controllers';

import devices from './models/devices';
import users from './models/users';

var app = express();
var hostname = 'localhost';
var port = process.env.PORT || 8080;

// debug messages in the console
app.use(logger('dev'));

// parse http request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', api);
app.use('/controllers', controllers);

//-------------> TESTINIG
devices.getForId(1).then((res) => {
    console.log(res[0].id);
});
users.getForId(1).then((res) => {
    console.log(res[0].id);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    console.log(err);    
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(`<html><h1>${err.message}</h1></html>`);
});

app.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port);
});

export default app;
