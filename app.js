const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const brand = require('./content/brand');
const site = require('./content/site');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let nextId = 1;

app.use((req, res, next) => {

  if(!req.cookies.id)
    res.cookie('id', nextId);

  console.log(req.cookies);

  next();
});

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const htmlTagsRouter = require('./routes/htmltags');
app.use('/htmltags', htmlTagsRouter);

const feedbackRouter = require('./routes/feedback');
app.use('/feedback', feedbackRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    brand: brand,
    site: site
  });
});

module.exports = app;
