import { Component, Output } from '@angular/core';
import { BehaviorSubject, scan, skip, Subject } from 'rxjs';
import { IFilter } from '../feature.service';

@Component({
  selector: 'app-filter',
  styles: [
    `
      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }
    `,
  ],
  template: `
    <mat-form-field appearance="standard">
      <mat-label>Filter 1</mat-label>
      <input
        matInput
        (input)="applyFilter($event, 'name')"
        placeholder="Filter 1"
      />
    </mat-form-field>
    <mat-form-field appearance="standard">
      <mat-label>Filter 2</mat-label>
      <input
        matInput
        (input)="applyFilter($event, 'symbol')"
        placeholder="Filter 2"
      />
    </mat-form-field>
  `,
})
export class FilterComponent {
  filterValue$$ = new Subject<Partial<IFilter>>();

  @Output() filter = this.filterValue$$.pipe(
    scan((prev, next) => ({ ...prev, ...next }))
  );

  applyFilter(event: Event, key: 'name' | 'symbol') {
    const filterValue: Partial<IFilter> = {};
    (event.target as HTMLInputElement).value;
    filterValue[key] = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filterValue$$.next(filterValue);
  }
}
