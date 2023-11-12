import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from '../material-icons/user-icon/user-icon.component';
import { PassIconComponent } from '../material-icons/pass-icon/pass-icon.component';
import { ShowHideIconComponent } from '../material-icons/show-hide-icon/show-hide-icon.component';
import { IsDisplayedChangedArg } from '../material-icons/show-hide-icon/show-hide-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [CommonModule, UserIconComponent, PassIconComponent, ShowHideIconComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor(private router: Router){}

  emailIconIsHidden: boolean = false;
  passIconIsHidden: boolean = false;
  passIsDisplayed: boolean = false;
  placeholderPassword: string = '••••••••';
  placeholderText: string = 'test@gmail.com';
  returnDisplayed: boolean | undefined;

  passIsDisplayedChanged(eventArgs: IsDisplayedChangedArg) {
    this.returnDisplayed = eventArgs.newValue;
  }

  goto() {
    this.router.navigate(['/cars']);
  }
  
}
