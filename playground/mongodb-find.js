const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect Mongodb server');
  }

  console.log('Connected to MongoDB');
// const db = client.db('TodoApp677');
// db.collection('users').find().toArray().then((docs)=>{
//   console.log('users');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// console.log('unable to fetch',err);
// });
const db = client.db('TodoApp');
db.collection('users').find({name: 'Ani'}).toArray().then((docs)=>{
  //console.log(`count: ${count}`);
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log('unable to fetch',err);
});
//client.close();
});
