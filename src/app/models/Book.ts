export interface Book {
  _id: string;
  id: string;
  title: string;
  authors?: string[];
  description?: string;
  image?: any;
  isbn?: string;
  date?: Date;
}
