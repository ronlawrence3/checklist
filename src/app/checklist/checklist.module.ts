import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ChecklistListComponent,
  },
  {
    path: ':id',
    component: ChecklistComponent,
  },
];

@NgModule({
  declarations: [ChecklistListComponent, ChecklistComponent, ChecklistItemComponent],
  exports: [ChecklistItemComponent, ChecklistListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTreeModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ChecklistModule {}
