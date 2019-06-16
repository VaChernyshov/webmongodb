import * as mongoose from 'mongoose';

export interface BookModel extends mongoose.Document {
  title: string;
  authors?: string[];
  description?: string;
  isbn?: string;
  date?: Date;
}

export const bookSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: Buffer },
  authors: { type: Array },
  description: { type: String },
  isbn: { type: String },
  date: { type: Date }
});

const Book = mongoose.model<BookModel>('Book', bookSchema, 'book');

export default Book;
