var paginate = require('mongoose-paginate');
var mongoose = require('../db/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	description: {
		type:String
	},
	mainimg:{
		type: String
	},
	formatdate:{
		type: Date,
		default: Date.now
	}
});

schema.plugin(paginate);

exports.Room = mongoose.model('Room',schema);
