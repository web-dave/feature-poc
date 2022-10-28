import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

export interface IFilter {
  name: string;
  symbol: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private data: PeriodicElement[] = [
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  private filteredData$$ = new BehaviorSubject<PeriodicElement[]>(this.data);

  data$ = this.filteredData$$.asObservable();

  constructor(private router: Router) {}

  filter(filterstring: Partial<IFilter>, s?: any) {
    this.filteredData$$.next(
      this.data.filter(
        (e) =>
          e.name.toLowerCase().includes(filterstring.name || '') &&
          e.symbol.toLowerCase().includes(filterstring.symbol || '')
      )
    );
    this.router.navigate([], { queryParams: filterstring });
  }
}
