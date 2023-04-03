export type Status = 'active' | 'completed';
export type Filter = 'all' | Status;

export interface Todo {
  id: string;
  listId: string;
  description: string;
  completed: boolean;
  status: Status;
  priority: boolean;
}
export interface List {
  description: string;
  id: string;
}
