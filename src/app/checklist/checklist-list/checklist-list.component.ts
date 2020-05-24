import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckList } from '../../store/checklists/check-list/check-list.model';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss'],
})
export class ChecklistListComponent implements OnInit {
  @Input()
  lists: CheckList[];

  @Output()
  listClicked: EventEmitter<CheckList> = new EventEmitter<CheckList>();

  constructor() {}

  ngOnInit() {}

  openList(list: CheckList, $event: MouseEvent) {
    if ($event) {
      $event.stopPropagation();
    }
    this.listClicked.emit(list);
  }
}
