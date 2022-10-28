import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  template: `
    <mat-progress-spinner
      class="example-margin"
      [color]="'primary'"
      [mode]="'determinate'"
      [value]="value"
    >
    </mat-progress-spinner>
  `,
  styles: [],
})
export class DisplayComponent {
  value = Math.random() * 100;
}
