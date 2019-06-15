import * as express from 'express';
import * as book from './book-api';
import { Application } from 'express';
import * as mongoose from 'mongoose';

const port = 8000;
const app: Application = express();

mongoose.connect('mongodb://localhost:27017/library', (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Succesfully Connected!');
  }
});


app.get('/', book.allBooks);
app.get('/:id', book.getBook);
app.post('/', book.addBook);
app.put('/:id', book.updateBook);
app.delete('/:id', book.deleteBook);

app.listen(port, () => {
  console.log('Server is running');
});

// const express = require('express');
// const mongoClient = MongoClient;
//
// import { Application } from 'express';
//
// const app: Application = express();
// const port = 8000;
//
// app.listen(port, () => {
//   console.log('We are live on ' + port);
// });
