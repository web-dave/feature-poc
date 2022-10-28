import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-tabs',
  template: `
    <mat-tab-group [style.background]="'hotpink'">
      <mat-tab label="Tab 1" #one>
        <ng-container *ngIf="one.isActive">
          <mat-grid-list cols="4" rowHeight="100px">
            <mat-grid-tile
              colspan="2"
              rowspan="1"
              [style.background]="'lightblue'"
            >
              <app-display></app-display>
            </mat-grid-tile>
            <mat-grid-tile
              colspan="2"
              rowspan="1"
              [style.background]="'lightgreen'"
              ><app-text text="Hallo"></app-text>
            </mat-grid-tile>

            <mat-grid-tile
              colspan="4"
              rowspan="2"
              [style.background]="'#DDBDF1'"
            >
              <app-filter
                (filter)="service.filter($event, 'tabs')"
              ></app-filter>
            </mat-grid-tile>
            <mat-grid-tile
              colspan="4"
              rowspan="4"
              [style.background]="'#DDBDF1'"
            >
              <app-table [data]="(service.data$ | async) || []"></app-table>
            </mat-grid-tile>
          </mat-grid-list>
        </ng-container>
      </mat-tab>
      <mat-tab label="Tab 2"> Content 2 </mat-tab>
    </mat-tab-group>
  `,
})
export class TabsComponent {
  constructor(public service: FeatureService, private route: ActivatedRoute) {
    this.service.filter({
      ...{
        name: '',
        symbol: '',
      },
      ...this.route.snapshot.queryParams,
    });
  }
}
