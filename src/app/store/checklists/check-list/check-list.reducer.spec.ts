import { initialState, reducer } from './check-list.reducer';
import {
  addCheckList,
  clearCheckLists,
  deleteCheckList,
  loadCheckLists,
  updateCheckList,
  updateCheckLists,
  upsertCheckList,
  upsertCheckLists,
} from './check-list.actions';
import { Action } from '@ngrx/store';

describe('CheckList Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should add / delete', () => {
      let action: Action = addCheckList({ checkList: { id: '1', name: '1_name', items: [], completedItems: [] } });

      let result = reducer(initialState, action);
      expect(result).toEqual({ entities: { 1: { id: '1', items: [], name: '1_name', completedItems: [] } }, ids: ['1'] });

      action = upsertCheckList({ checkList: { id: '1', items: [], name: '1_name_1', completedItems: [] } });
      result = reducer(result, action);
      expect(result).toEqual({ entities: { 1: { id: '1', items: [], name: '1_name_1', completedItems: [] } }, ids: ['1'] });

      action = loadCheckLists({ checkLists: [{ id: '1', items: [], name: '1_name_2', completedItems: [] }] });
      result = reducer(result, action);
      expect(result).toEqual({ entities: { 1: { id: '1', items: [], name: '1_name_2', completedItems: [] } }, ids: ['1'] });

      action = updateCheckList({ checkList: { id: '1', changes: { name: '1_name_3', completedItems: [] } } });
      result = reducer(result, action);
      expect(result).toEqual({ entities: { 1: { id: '1', items: [], name: '1_name_3', completedItems: [] } }, ids: ['1'] });

      action = updateCheckLists({ checkLists: [{ id: '1', changes: { name: '1_name_4', completedItems: [] } }] });
      result = reducer(result, action);
      expect(result).toEqual({ entities: { 1: { id: '1', items: [], name: '1_name_4', completedItems: [] } }, ids: ['1'] });

      action = upsertCheckLists({
        checkLists: [
          { id: '1', name: '1_name_5', items: [], completedItems: [] },
          {
            id: '2',
            name: '2_name_5',
            items: [],
            completedItems: [],
          },
        ],
      });
      result = reducer(result, action);
      expect(result).toEqual({
        entities: {
          1: { id: '1', items: [], name: '1_name_5', completedItems: [] },
          2: { id: '2', items: [], name: '2_name_5', completedItems: [] },
        },
        ids: ['1', '2'],
      });

      action = deleteCheckList({ id: '1' });
      result = reducer(result, action);
      expect(result).toEqual({ entities: { 2: { id: '2', items: [], name: '2_name_5', completedItems: [] } }, ids: ['2'] });

      action = clearCheckLists();
      result = reducer(result, action);
      expect(result).toEqual({ entities: {}, ids: [] });
    });
  });
});