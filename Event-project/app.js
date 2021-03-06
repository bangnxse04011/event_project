var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var events = require('./routes/events_demo');
var users = require('./routes/users');
var gallery = require('./routes/gallery');
var details = require('./routes/details');
var feed_back = require('./routes/feed_back');
var news = require('./routes/news');
var URL = require('./routes/lang');
var authen = require('./routes/authen');
var events_details = require('./routes/event_details');
var admin_home = require('./routes/admin');
var update_language = require('./routes/updating');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
  secret: 'ssshhhhh'
}));

app.use('/', index);
app.use('/events', events);
app.use('/users', users);
app.use('/gallery', gallery);
app.use('/details', details);
app.use('/news', news);
app.use('/lang', URL);
app.use('/admin', authen);
app.use('/admin-home', admin_home);
app.use('/events-details', events_details);
app.use('/updating', update_language);

app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}))
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;