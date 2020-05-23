import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {CheckList} from '../../models/check-list.model';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss'],
})
export class ChecklistListComponent implements OnInit {
  @Input()
  lists: CheckList[] = [{id: 'list1', title: 'List 1', items: [], completedItems: []}];
  @Output()
  listChanges: EventEmitter<CheckList[]> = new EventEmitter();

  constructor(store: Store<AppState>) {
  }

  ngOnInit() {
  }
}
