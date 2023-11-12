import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'show-hide-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './show-hide-icon.component.html',
})
export class ShowHideIconComponent {
  @Input() passIsDisplayed:boolean | undefined;
  @Input() iconIsActive:boolean | undefined;
  @Output() change = new EventEmitter();

  toggle() {
    this.passIsDisplayed = !this.passIsDisplayed;
    this.iconIsActive = !this.iconIsActive;
    this.change.emit({ newValue: this.passIsDisplayed});
  }
}

export interface IsDisplayedChangedArg {
  newValue: boolean
}
