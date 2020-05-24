import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CheckList, CheckListItem } from '../../store/checklists/check-list/check-list.model';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  checkList: CheckList;
  @Output()
  checklistChanged = new EventEmitter<CheckList>();

  checklistForm = this.fb.group({
    name: [''],
    description: [''],
  });
  private subscription = new Subscription();
  headerExpanded = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription.add(
      this.checklistForm.valueChanges.subscribe(vc => {
        if (vc.name) {
          this.checklistChanged.emit({ ...this.checkList, name: vc.name });
        }
        if (vc.description) {
          this.checklistChanged.emit({ ...this.checkList, description: vc.description });
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.checkList.currentValue) {
      this.checklistForm.patchValue(changes.checkList.currentValue);
    }
  }

  itemChanged(newItem: CheckListItem, item: CheckListItem) {
    const ix = this.getItemIndex(this.checkList.items, item);
    if (newItem.checked) {
      // move to completed
      const items = [...this.checkList.items];
      items.splice(ix, 1);
      this.checklistChanged.emit({
        ...this.checkList,
        items,
        completedItems: [...this.checkList.completedItems, newItem],
      });
    } else {
      const items = [...this.checkList.items];
      items[ix] = newItem;
      this.checklistChanged.emit({ ...this.checkList, items });
    }
  }

  completedItemChanged(newItem: CheckListItem, item: CheckListItem) {
    const ix = this.getItemIndex(this.checkList.items, item);
    if (!newItem.checked) {
      // move to completed
      const completedItems = [...this.checkList.completedItems];
      completedItems.splice(ix, 1);
      this.checklistChanged.emit({
        ...this.checkList,
        completedItems,
        items: [...this.checkList.items, newItem],
      });
    } else {
      const completedItems = [...this.checkList.completedItems];
      completedItems[ix] = newItem;
      this.checklistChanged.emit({ ...this.checkList, completedItems });
    }
  }

  private getItemIndex(items: CheckListItem[], item: CheckListItem) {
    let ix = 0;
    items.forEach((v, i) => {
      if (v === item) {
        ix = i;
      }
    });
    return ix;
  }
}
