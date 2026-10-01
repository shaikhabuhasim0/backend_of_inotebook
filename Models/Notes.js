const mongoose = require('mongoose');

const Notesschema = new Schema({
  
title : {
type : String ,
required : true ,

}
,

 discription: {
type : String ,
required : true ,
unique : true 

}
,

 tag: {
type : String ,
required : true ,
default : " general"
}
,

date : {
type : String ,
default : Date.now

}

});

module.exports = mongoose.model('notes ' , Noteschema) ;