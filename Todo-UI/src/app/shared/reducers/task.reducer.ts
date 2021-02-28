import { Action } from '@ngrx/store';
import * as TaskActions from '../actions/task.actions';
import {TaskModel} from '../model/task';

// Section 1
const initialState: TaskModel = {
  id: '',
  task: '',
  completed: true,
}

// Section 2
export function reducer(state: TaskModel[] = [initialState], action: TaskActions.Actions) {

  switch (action.type) {
    case TaskActions.ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
