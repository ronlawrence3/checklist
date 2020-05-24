import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Router } from '@angular/router';
import { selectAllChecklists } from './store/checklists/check-list/check-list.selectors';
import { Subscription } from 'rxjs';
import { loadCheckLists } from './store/checklists/check-list/check-list.actions';
import { CheckList } from './store/checklists/check-list/check-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'checklist';
  sideNavOpened = false;
  allLists: CheckList[] = [];
  allLists$ = this.store.pipe(select(selectAllChecklists));
  private subscription = new Subscription();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.subscription.add(
      this.allLists$.subscribe(lists => {
        this.allLists = lists as any;
      })
    );
    const list1: CheckList = {
      id: 'list1',
      name: 'List 1',
      items: [
        { checked: true, id: '1', text: 'First' },
        { checked: false, id: '2', text: 'Two' },
        { checked: false, id: '3', text: 'three' },
        { checked: false, id: '4', text: 'Four' },
        { checked: false, id: '5', text: 'Five' },
        { checked: false, id: '6', text: 'six' },
        { checked: false, id: '7', text: 'seven' },
        { checked: false, id: '8', text: 'eight' },
        { checked: false, id: '9', text: 'Nine' },
        { checked: false, id: '10', text: '' },
        { checked: false, id: '11', text: '' },
      ],
      completedItems: [],
    };
    this.store.dispatch(loadCheckLists({ checkLists: [list1] }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addList() {
    console.log('here we will add a new list');
  }

  openList(list: CheckList) {
    this.router.navigate([`/lists/${list.id}`]);
  }
}
