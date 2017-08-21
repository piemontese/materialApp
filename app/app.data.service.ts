import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AppDataService {

  // Observable string sources
  private listFilterSource = new Subject<string>();
  
  // Observable string streams
  listFilter$ = this.listFilterSource.asObservable();

  // Service message commands
  setListFilter(listFilter: string) {
    this.listFilterSource.next(listFilter);
    console.log('setListFilter='+listFilter);
  }

}
