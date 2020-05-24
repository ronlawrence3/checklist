import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCheckList from './check-list/check-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CheckListEffects } from './check-list/check-list.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCheckList.checkListsFeatureKey, fromCheckList.reducer),
    EffectsModule.forFeature([CheckListEffects]),
  ],
})
export class ChecklistsModule {}
