import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myFlix-Angular-Client';

  constructor(public dialog: MatDialog) {}

  // function that will open dialog when signup button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      //assigning dialog width
      width: '280px',
    });
  }
}
