import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { createEntityAdapter, Dictionary, EntityAdapter, EntityState } from '@ngrx/entity';
import { CheckList } from './check-list.model';
import * as CheckListActions from './check-list.actions';

export const checkListsFeatureKey = 'checkLists';

export interface ChecklistState extends EntityState<CheckList> {
  // additional entities state properties
}

export const adapter: EntityAdapter<CheckList> = createEntityAdapter<CheckList>();

export const initialState: ChecklistState = adapter.getInitialState({});

export function reducer(state, action) {
  return internalReducer(state, action);
}

const internalReducer = createReducer(
  initialState,
  on(CheckListActions.addCheckList, (state, action) => adapter.addOne(action.checkList, state)),
  on(CheckListActions.upsertCheckList, (state, action) => adapter.upsertOne(action.checkList, state)),
  on(CheckListActions.addCheckLists, (state, action) => adapter.addMany(action.checkLists, state)),
  on(CheckListActions.upsertCheckLists, (state, action) => adapter.upsertMany(action.checkLists, state)),
  on(CheckListActions.updateCheckList, (state, action) => adapter.updateOne(action.checkList, state)),
  on(CheckListActions.updateCheckLists, (state, action) => adapter.updateMany(action.checkLists, state)),
  on(CheckListActions.deleteCheckList, (state, action) => adapter.removeOne(action.id, state)),
  on(CheckListActions.deleteCheckLists, (state, action) => adapter.removeMany(action.ids, state)),
  on(CheckListActions.loadCheckLists, (state, action) => adapter.addAll(action.checkLists, state)),
  on(CheckListActions.clearCheckLists, state => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const getChecklistsState = createFeatureSelector<ChecklistState>(checkListsFeatureKey);
export const getChecklistEntities = createSelector(getChecklistsState, selectEntities);
export const getChecklistById = () => {
  return createSelector(getChecklistEntities, (entities: Dictionary<CheckList>, props: { id: string }) => {
    return entities[props.id];
  });
};
