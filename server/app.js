var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post("/signup_action", function(req, res){
  //클라이언트가 전송한 내용을 콘솔에 출력하기 
  console.log(req.body.id);
  console.log(req.body.pwd);
  console.log(req.body.email);
  res.end("signup ok!");
});

app.get("/signup_action", function(req, res){
  //클라이언트가 전송한 내용을 콘솔에 출력하기 
  console.log(req.query.id);
  console.log(req.body.pwd);
  console.log(req.body.email);
  res.end("signup ok!");
});

// post 방식 /ajax/send 요청 처리 
app.post("/ajax/send", function(req, res){
  console.log(req.body.msg);
  res.end("ok!");
});

// get 방식 /ajax/getlist 요청처리 
app.get("/ajax/getlist", function(req, res){
    var data="<li>one</li>"+
      "<li>two</li>"+
      "<li>three</li>";
    res.end(data);
});

// get 방식 /ajax/getlist2 요청처리 
app.get("/ajax/getlist2", function(req, res){
    var data=["one","two","three"];    
    //json 문자열로 응답하기
    res.json(data);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
