import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CheckListItem} from '../../store/checklists/check-list/check-list.model';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss'],
})
export class ChecklistItemComponent implements OnInit, OnChanges {
  itemForm = this.fb.group({
    text: ['', Validators.required],
    checked: [false],
    quantity: [1],
    units: [''],
  });

  @Input() item: CheckListItem;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.itemForm.patchValue({...changes.item.currentValue});
    }
  }

  menu() {

  }
}
