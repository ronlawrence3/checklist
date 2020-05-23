import { CheckListItem } from '../store/checklists/check-list/check-list.model';

export interface CheckList {
  id: string;
  title: string;
  items: CheckListItem[];
  completedItems: CheckListItem[];
}
