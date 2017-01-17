var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lolo',function(err,db){
  if(err) throw err;
});

module.exports = mongoose;
