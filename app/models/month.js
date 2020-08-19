var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');
var bcrypt = require('bcryptjs');

var MonthSchema = new Schema({

   
    name: {type:String,dropDups:true},
   1:{type:Boolean},
   2:{type:Boolean},
   3:{type:Boolean},
   4:{type:Boolean},
   5:{type:Boolean},
   6:{type:Boolean},
   7:{type:Boolean},
   8:{type:Boolean},
   9:{type:Boolean},
   10:{type:Boolean},
   11:{type:Boolean},
   12:{type:Boolean},
   13:{type:Boolean},
   14:{type:Boolean},
   15:{type:Boolean},
   16:{type:Boolean},
   17:{type:Boolean},
   18:{type:Boolean},
   19:{type:Boolean},
   20:{type:Boolean},
   21:{type:Boolean},
   22:{type:Boolean},
   23:{type:Boolean},
   24:{type:Boolean},
   25:{type:Boolean},
   26:{type:Boolean},
   27:{type:Boolean},
   28:{type:Boolean},
   29:{type:Boolean},
   30:{type:Boolean},
   31:{type:Boolean}

   
    
    


})


module.exports = mongoose.model('Month', MonthSchema);

var Date = mongoose.model('Month', MonthSchema);