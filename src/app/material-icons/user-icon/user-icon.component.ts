import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'user-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './user-icon.component.html',
})
export class UserIconComponent {

}
