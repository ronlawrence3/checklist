import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChecklistComponent } from './display-checklist.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChecklistComponent } from '../checklist/checklist.component';
import { ChecklistItemComponent } from '../checklist-item/checklist-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DisplayChecklistComponent', () => {
  let component: DisplayChecklistComponent;
  let fixture: ComponentFixture<DisplayChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        NoopAnimationsModule,
      ],
      declarations: [DisplayChecklistComponent, ChecklistComponent, ChecklistItemComponent],
      providers: [
        { provide: Router, useValue: {} },
        {
          provide: Store,
          useValue: {
            pipe: () => {
              return { subscribe: () => {} };
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
