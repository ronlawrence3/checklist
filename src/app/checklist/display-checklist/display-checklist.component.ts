import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, getRouterState } from '../../reducers';
import { CheckList, CheckListItem } from '../../store/checklists/check-list/check-list.model';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { getChecklistById } from '../../store/checklists/check-list/check-list.reducer';
import { updateCheckList } from '../../store/checklists/check-list/check-list.actions';

@Component({
  selector: 'app-display-checklist',
  templateUrl: './display-checklist.component.html',
  styleUrls: ['./display-checklist.component.scss'],
})
export class DisplayChecklistComponent implements OnInit, OnDestroy {
  checklist: CheckList;
  private subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription.add(
      this.store
        .pipe(
          select(getRouterState),
          switchMap(routerState => {
            return this.store.pipe(select(getChecklistById(), { id: routerState.state.params.id }));
          })
        )
        .subscribe(checklist => {
          this.checklist = checklist;
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  completedChanged(completedItems: CheckListItem[]) {
    this.store.dispatch(
      updateCheckList({
        checkList: {
          id: this.checklist.id,
          changes: { ...this.checklist, completedItems },
        },
      })
    );
  }

  itemsChanged(items: CheckListItem[]) {
    this.store.dispatch(updateCheckList({ checkList: { id: this.checklist.id, changes: { ...this.checklist, items } } }));
  }
}
