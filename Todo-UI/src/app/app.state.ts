import {TaskModel} from './shared/model/task';

export interface AppState {
  readonly task: TaskModel[];
}
