import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'search-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-icon.component.html',
})
export class SearchIconComponent {

}
