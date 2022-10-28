import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: ` <h3>{{ text }}</h3>`,
  styles: [],
})
export class TextComponent {
  @Input() text: string = '';
}
