import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-tabs',
  template: `
    <mat-tab-group>
      <mat-tab label="Tab 1" #one>
        <ng-container *ngIf="one.isActive">
          <app-display></app-display>
          <app-text text="Hallo"></app-text>
          <app-filter (filter)="service.filter($event, 'tabs')"></app-filter>
          <app-table [data]="(service.data$ | async) || []"></app-table>
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
