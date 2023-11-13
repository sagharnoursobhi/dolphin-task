import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'settings-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './settings-icon.component.html',
})
export class SettingsIconComponent {

}
