export interface TaskModel {
  completed: boolean;
  createdAt?: string;
  id: string;
  task: string;
  updatedAt?: string;
  userId?: string;
}

export class TaskPostModel {
  completed: boolean;
  createdAt?: string;
  id: string;
  task: string;
  updatedAt?: string;
  userId?: string;
}
