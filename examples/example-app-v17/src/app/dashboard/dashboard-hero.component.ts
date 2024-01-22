import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, input, Output, untracked } from '@angular/core';

import { Hero } from '../model/hero';

@Component({
  selector: 'dashboard-hero',
  template: ` <div (click)="click()" class="hero">
    {{ hero().name | uppercase }}
  </div>`,
  styleUrls: ['./dashboard-hero.component.css'],
  standalone: true,
  imports: [UpperCasePipe],
})
export class DashboardHeroComponent {
  hero = input.required<Hero>();
  @Output() selected = new EventEmitter<Hero>();
  click() {
    this.selected.emit(untracked(this.hero));
  }
}
