import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckLists } from './models/check-lists.model';
import { CheckList } from './models/check-list.model';
import { getUuid } from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class ChecklistsService {
  private testData: CheckLists = {
    checkLists: [],
  };

  constructor() {}

  getCheckLists(): Observable<CheckLists> {
    return of(this.testData);
  }

  saveChecklist(checklist: CheckList): Observable<CheckList> {
    for (const cl of this.testData.checkLists) {
      if (cl.id === checklist.id) {
        Object.assign(cl, checklist);
        return of(cl);
      }
    }
    checklist.id = getUuid();
    this.testData.checkLists.push(checklist);
    return of(checklist);
  }

  getCheckList(id: string): Observable<CheckList> {
    const checkList = this.testData.checkLists.find(cl => cl.id === id);
    return of(checkList);
  }
}
