import { Request, Response } from 'express';
import Book from './model/book.model';

export const allBooks = (req: Request, res: Response) => {
  Book.find((err: any, books: any) => {
    if (err) {
      res.send('Error!');
    } else {
      res.send(books);
    }
  })
    .select('-image -__v')
    .sort({
      [`${req.params.col}`]: req.params.ord
    });
};

export const getBook = (req: Request, res: Response) => {
  Book.findById(req.params.id, (err: any, book: any) => {
    if (err) {
      res.status(401);
      res.send(err);
    } else {
      res.send(book);
    }
  });
};

export const getImage = (req: Request, res: Response) => {
  Book.findById(req.params.id, (err: any, book: any) => {
    if (err) {
      res.status(401);
      res.send(err);
    } else {
      res.send(book.image.toString('base64'));
    }
  });
};

export const deleteBook = (req: Request, res: Response) => {
  Book.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200);
      res.send();
    }
  });
};

export const updateBook = (req: Request, res: Response) => {
  Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any) => {
      if (err) {
        res.status(401);
        res.send(err);
      } else {
        res.send();
      }
    }
  );
};

export const addBook = (req: Request, res: Response) => {
  const book = new Book(req.body);
  book.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
};
