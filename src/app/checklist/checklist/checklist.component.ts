import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckListItem } from '../../store/checklists/check-list/check-list.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {
  @Input()
  title = 'CheckList';
  @Input()
  description = '';
  @Input()
  items: CheckListItem[] = [];
  @Input()
  completedItems: CheckListItem[] = [];
  @Output()
  itemsChanged = new EventEmitter<CheckListItem[]>();
  @Output()
  completedItemsChanged = new EventEmitter<CheckListItem[]>();

  constructor() {}

  ngOnInit() {}

  itemChanged(newItem: CheckListItem, item: CheckListItem) {
    // do the thing ... TODO
    const exitem = this.items.find(i => i.id === item.id);
    const excitem = this.completedItems.find(i => i.id === item.id);
    if (exitem) {
      this.itemsChanged.emit([...this.items.filter(i => i.id !== newItem.id), newItem]);
    } else if (excitem) {
      this.completedItemsChanged.emit([...this.completedItems.filter(i => i.id !== newItem.id), newItem]);
    }
  }
}
