import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddIconComponent } from '../material-icons/add-icon/add-icon.component';
import { SearchIconComponent } from '../material-icons/search-icon/search-icon.component';
import { ArrowIconComponent } from '../material-icons/arrow-icon/arrow-icon.component';
import { SettingsIconComponent } from '../material-icons/settings-icon/settings-icon.component';

@Component({
  selector: 'cars-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatInputModule, MatFormFieldModule, AddIconComponent, SearchIconComponent, ArrowIconComponent, SettingsIconComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {
  searchIconIsHidden: boolean = false;
  settingconIsHidden: boolean = false;

  focusHandler() {
    this.searchIconIsHidden = true;
    this.settingconIsHidden = true;
  }

  blurHandler() {
    this.searchIconIsHidden=false;
    this.settingconIsHidden=false;
  }
}
