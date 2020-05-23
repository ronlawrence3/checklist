import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'checklist';
  sideNavOpened = false;

  addList() {
    console.log('here we will add a new list');
  }
}
