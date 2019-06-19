import { Book } from '../models/Book';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Subscription } from 'rxjs';
import { BookDataService } from '../services/book-data-service';
import { Injectable } from '@angular/core';

export interface BooksState extends EntityState<Book> {
}

const initialState = {
  active: null
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'books' })
export class BooksStore extends EntityStore<BooksState, Book> {
  private updateSubscription: Subscription;

  constructor(
    private dataService: BookDataService,
  ) {
    super(initialState);
  }

  public updateEntitiesStore(): void {
    this.updateSubscription && this.updateSubscription.unsubscribe();
    this.setLoading(true);
    this.updateSubscription = this.dataService.getAll()
      .subscribe((entities: Book[]) => {
        const aa = entities.map((entity: Book) => {
          return {
            ...entity,
            id: entity._id
          };
        });
        this.set(aa);
      });
  }
}
