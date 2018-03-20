const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect Mongodb server');
  }

  console.log('Connected to MongoDB');

const db = client.db('TodoApp');
// db.collection('users').deleteMany({name:'Anirudh'}).then((result)=>{
//   console.log(result);
// });
// db.collection('users').deleteOne({name:'Ani'}).then((result)=>{
//   console.log(result);
// });
// db.collection('Todos').findOneAndDelete({name:'Anirudh'}).then((result)=>{
//   console.log(result);
// });
db.collection('Todos').findOneAndDelete({_id : ObjectId('5aab3c4eb1597c1104df9587')}).then((result)=>{
  console.log(result);
});

//client.close();
});
