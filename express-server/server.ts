import * as express from 'express';
import * as book from './book-api';
import { Application } from 'express';
import * as mongoose from 'mongoose';
import * as parser from 'body-parser';

const port = 8000;
const app: Application = express();

mongoose.connect('mongodb://localhost:27017/library', (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Successfully connected!');
  }
});

app.use(parser.urlencoded());
app.use(parser.json({limit: '50mb'}));
app.use(parser.urlencoded({limit: '50mb', extended: true}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.type('json');
  next();
});

app.get('/', book.allBooks);
app.get('/:id', book.getBook);
app.get('/:id', book.getImage);
app.post('/', book.addBook);
app.put('/:id', book.updateBook);
app.delete('/:id', book.deleteBook);

app.listen(port, () => {
  console.log('Server is running');
});
