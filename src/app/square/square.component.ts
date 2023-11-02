import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-square',
  template: `
    <button mat-flat-button [color]="value == null ? 'primary' : value == 'X' ? 'accent' : 'warn'">
      {{ value }}
    </button>
  `,
  styles: [
    'button { margin: 0; height: 100% !important; width: 100%; font-size: 3rem; }',
  ],
  standalone: true,
  imports: [MatButtonModule],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
