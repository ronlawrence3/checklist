import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistListComponent } from './checklist-list.component';
import { ChecklistModule } from '../checklist.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('ChecklistListComponent', () => {
  let component: ChecklistListComponent;
  let fixture: ComponentFixture<ChecklistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChecklistModule],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
