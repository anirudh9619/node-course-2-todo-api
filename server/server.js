var express=require('express');
var bodyParser=require('body-parser');

var {Todo}=require('./models/todo');
var {user}=require('./models/user');
var {mongoose}=require('./db/mongoose');

var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});


app.listen(3000,()=>{
  console.log('started on 3000');
});
















// var newTodo = new Todo({
//   text:'  edit ths video '
// });
// newTodo.save().then((doc)=>{
//   console.log('saved todo',doc);
// },(e)=>{
//   console.log('unable todo');
// });
//
// var newUser=new user({
//   email:' anirudhgangwar444@gmail.com'
// });
// newUser.save().then((doc)=>{
//   console.log('saved',doc);
// },(e)=>{
//   console.log('unable to save');
// });
