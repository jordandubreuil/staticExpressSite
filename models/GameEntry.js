var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameEntrySchema = new Schema({
   //game:String
    game:{
        type:String,
        required:true
    }
});

mongoose.model('game', GameEntrySchema);