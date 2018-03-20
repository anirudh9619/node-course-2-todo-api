const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect Mongodb server');
  }
  console.log('Connected to MongoDB');
  // const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });
  // const db=client.db('TodoApp');
  // db.collection('users').insertOne({
  //   name:'Anirudh',
  //   age:'23',
  //   location: 'fbd',
  //   Sirname:'gangwar'
  // },
  // (err,result)=>{
  //   if(err){
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
client.close();
});
