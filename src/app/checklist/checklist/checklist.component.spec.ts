import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistComponent } from './checklist.component';
import { ChecklistModule } from '../checklist.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ChecklistComponent', () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChecklistModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep in same order', () => {
    // component.checkList = {};
  });
});
