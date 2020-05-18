import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCheckList from './check-list/check-list.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCheckList.checkListsFeatureKey, fromCheckList.reducer),
  ]
})
export class ChecklistsModule {
}
