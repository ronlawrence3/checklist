import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CheckLists } from '../models/check-lists.model';

export interface AppState {
  initialized: boolean;
  checkLists?: CheckLists;
}

export function reduceInitialized(state = false, action): boolean {
    return state;
}

export const reducers: ActionReducerMap<AppState> = {
  initialized: reduceInitialized
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
