import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CheckListItem } from '../../store/checklists/check-list/check-list.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecklistItemComponent implements OnInit, OnChanges, OnDestroy {
  itemForm = this.fb.group({
    text: ['', Validators.required],
    checked: [false],
    quantity: [1],
    units: [''],
  });

  @Input() item: CheckListItem;
  @Output() itemChanged: EventEmitter<CheckListItem> = new EventEmitter<CheckListItem>();
  private subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription.add(
      this.itemForm.valueChanges.subscribe(ifc => {
        this.itemChanged.emit({ ...ifc, id: this.item.id });
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.itemForm.patchValue({ ...changes.item.currentValue });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  menu() {}
}
