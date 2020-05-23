import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { CheckList } from './check-list.model';

export const loadCheckLists = createAction('[CheckList/API] Load CheckLists', props<{ checkLists: CheckList[] }>());

export const addCheckList = createAction('[CheckList/API] Add CheckList', props<{ checkList: CheckList }>());

export const upsertCheckList = createAction('[CheckList/API] Upsert CheckList', props<{ checkList: CheckList }>());

export const addCheckLists = createAction('[CheckList/API] Add CheckLists', props<{ checkLists: CheckList[] }>());

export const upsertCheckLists = createAction('[CheckList/API] Upsert CheckLists', props<{ checkLists: CheckList[] }>());

export const updateCheckList = createAction('[CheckList/API] Update CheckList', props<{ checkList: Update<CheckList> }>());

export const updateCheckLists = createAction('[CheckList/API] Update CheckLists', props<{ checkLists: Update<CheckList>[] }>());

export const deleteCheckList = createAction('[CheckList/API] Delete CheckList', props<{ id: string }>());

export const deleteCheckLists = createAction('[CheckList/API] Delete CheckLists', props<{ ids: string[] }>());

export const clearCheckLists = createAction('[CheckList/API] Clear CheckLists');
