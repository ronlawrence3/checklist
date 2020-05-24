import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCheckList from './check-list.reducer';

export const selectChecklistsState = createFeatureSelector(fromCheckList.checkListsFeatureKey);

export const selectAllChecklists = createSelector(selectChecklistsState, fromCheckList.selectAll);
