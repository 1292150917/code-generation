/*
 * @Author: your name
 * @Date: 2020-05-19 19:26:16
 * @LastEditTime: 2020-06-16 21:18:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\app.js
 */
var express = require('express');

var app = express();

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
