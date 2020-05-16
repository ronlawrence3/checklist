import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ChecklistListComponent,
  }
];

@NgModule({
  declarations: [ChecklistListComponent, ChecklistComponent, ChecklistItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChecklistModule {
}
