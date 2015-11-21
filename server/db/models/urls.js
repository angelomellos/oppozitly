'use strict';
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  url: {type: String},
  zitly: {type: String},
});

schema.pre('save', function(next) {
  var appRoot = 'http://localhost:1337/api/zitly/';
  this.zitly = appRoot;
  for (var i=0; i < (250 - appRoot.length); i++){
    if (Math.random()>  0.5){
      this.zitly += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }else{
      this.zitly += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
  }
  this.zitly += "___HI_MOM___";
  for (var i=0; i < (3700 - appRoot.length); i++){
    if (Math.random()>  0.5){
      this.zitly += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }else{
      this.zitly += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
  }
  next();
});

mongoose.model('Url', schema);