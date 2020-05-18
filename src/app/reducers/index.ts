import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CheckLists } from '../models/check-lists.model';

export interface AppState {
  initialized: boolean;
  checkLists?: CheckLists;
}

export const reducers: ActionReducerMap<AppState> = {
  initialized: (state = false, action) => {
    return state;
  }
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
