var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://test:test@ds111319.mlab.com:11319/wellness');

//Create a schema
var wellnessSchema = new mongoose.Schema({
  projectName: String,
              titleHead: String,
              titleBody: String,
              titleBody2: String,
              productLink: String,
              category: String,
              zoom1:String,
              zoom2: String,
              zoom3: String,
              zoom4: String,
              description: String,
              msrpPrice: String,
              yourPrice: String,
              discount: String,
              buttonSrc : String,
              useCode : String,
              additionalInfos: []

});

var Wellness = mongoose.model('Wellness', wellnessSchema);
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });

// var Data = [{item: 'get milk'},{item:'walk dog'}, {item: 'do smth else'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    Wellness.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos:data});
    });

  });

  app.post('/todo', urlencodedParser, function(req, res){
    var newWellness = Wellness(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data);
    })


  });

  app.delete('/todo/:item', function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

};
