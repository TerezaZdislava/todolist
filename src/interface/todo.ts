export type Status = 'active' | 'completed';
export type Filter = 'all' | Status;

export interface Todo {
  id: string;
  listId: string;
  title: string;
  description: string;
  completed: boolean;
  status: Status;
  priority: boolean;
  timeCreated: string;
}
export interface List {
  title: string;
  id: string;
}
