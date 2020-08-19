var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');
var bcrypt = require('bcryptjs');

var DateSchema = new Schema({

   
    name: {type:String,dropDups:true},
    date: {type:Number},
    month:{type:String},
    eight: {type:Object },
    nine: {type:Object },
    ten: {type:Object },
    eleven: {type:Object },
    twelve: {type:Object },
    one: {type:Object },
    two: {type:Object },
    three: {type:Object },
    twenty: {type:Array },
    thirty: {type:Array},
    fourty: {type:Array },
    fifty: {type:Array }

   
    
    


})


module.exports = mongoose.model('Date', DateSchema);

var Date = mongoose.model('Date', DateSchema);