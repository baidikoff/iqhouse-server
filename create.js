var Room = require('./model/room').Room;

var room = new Room({
  description: '1',
  mainimg: 'lala'
})

room.save(function(err,data) {
  if(err){
    console.log('error');
  }
  console.log(data);
});

//  var promise = room.save();
//     assert.ok(promise instanceof require('mpromise'));

//     promise.then(function (doc) {
//       assert.equal(doc.name, "Guns N' Roses");
//     });
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });