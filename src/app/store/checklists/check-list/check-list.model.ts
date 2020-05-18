export interface CheckList {
  id: string;
  name: string;
  description?: string;
  author?: string;
  created?: string;
  items: CheckListItem[];
}

export interface CheckListItem {
  id: string;
  text: string;
  checked: boolean;
  quantity?: number;
  units?: string;
}
