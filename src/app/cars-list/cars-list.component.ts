import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddIconComponent } from '../material-icons/add-icon/add-icon.component';
import { SearchIconComponent } from '../material-icons/search-icon/search-icon.component';

@Component({
  selector: 'cars-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatInputModule, MatFormFieldModule, AddIconComponent, SearchIconComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {

}
