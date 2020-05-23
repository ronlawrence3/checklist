import { Component, Input, OnInit } from '@angular/core';
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
  items: CheckListItem[] = [
    { checked: false, id: '1', text: 'First' },
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
  ];
  @Input()
  completedItems: CheckListItem[] = [];

  constructor() {}

  ngOnInit() {}
}
