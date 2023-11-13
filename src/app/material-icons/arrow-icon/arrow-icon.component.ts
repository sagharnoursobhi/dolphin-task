import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'arrow-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './arrow-icon.component.html',
})
export class ArrowIconComponent {
  rightIsClicked:boolean = false;
  leftIsClicked:boolean = false;

  arrowLeftHandler() {
    this.leftIsClicked = !this.leftIsClicked;
    this.rightIsClicked = false;
  }

  arrowRightHandler() {
    this.rightIsClicked = !this.rightIsClicked;
    this.leftIsClicked = false;
  }
}
