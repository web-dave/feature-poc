import { Component, Input } from '@angular/core';
import { PeriodicElement } from '../feature.service';

@Component({
  selector: 'app-table',
  template: `
    <table>
      <thead role="rowgroup">
        <th>id</th>
        <th>Name</th>
        <th>Weight</th>
        <th>Symbol</th>
      </thead>
      <tbody role="rowgroup">
        <tr *ngFor="let element of data">
          <td>{{ element.id }}</td>
          <td>{{ element.name }}</td>
          <td>{{ element.weight }}</td>
          <td>{{ element.symbol }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
})
export class TableComponent {
  @Input() data: PeriodicElement[] = [];
}
