import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getUuid } from '@ngrx/data';
import { CheckList } from './store/checklists/check-list/check-list.model';

@Injectable({
  providedIn: 'root',
})
export class ChecklistsService {
  private testData: CheckList[] = [];

  constructor() {}
}
