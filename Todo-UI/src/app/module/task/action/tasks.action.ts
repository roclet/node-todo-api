import {createAction, props} from '@ngrx/store';
import {TaskModel} from '../../../shared/model/task';
import { Action } from "@ngrx/store";

export enum ActionTypes {
  LoadTaskBegin = "[TASK] Load TASK begin",
  LoadTaskSuccess = "[TASK] Load TASK success",
  LoadTaskFailure = "[TASK] Load TASK failure",
  ADD_TASK = '[TASK] Add Task',
  ADD_TASK_SUCCESS = '[TASK] Add Task Success',
  ADD_TASK_FAILURE = '[TASK] Add Task Failure',
  DELETE_TASK = '[TASK] Delete Task',
  DELETE_TASK_SUCCESS = '[TASK] Delete Task Success',
  DELETE_TASK_FAILURE = '[SHOPPING] Delete Task Failure'
}
export class LoadTaskBegin implements Action {
  readonly type = ActionTypes.LoadTaskBegin;
}

export class LoadTaskSuccess implements Action {
  readonly type = ActionTypes.LoadTaskSuccess;

  constructor(public payload: { data: any }) {}
}

export class LoadTaskFailure implements Action {
  readonly type = ActionTypes.LoadTaskFailure;

  constructor(public payload: { error: any }) {}
}

export class AddTaskAction implements Action {
  readonly type = ActionTypes.ADD_TASK

  constructor(public payload: TaskModel) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = ActionTypes.ADD_TASK_SUCCESS

  constructor(public payload: TaskModel) { }
}
export class AddItemFailureAction implements Action {
  readonly type = ActionTypes.ADD_TASK_FAILURE

  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = ActionTypes.DELETE_TASK

  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
  readonly type = ActionTypes.DELETE_TASK_SUCCESS

  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = ActionTypes.DELETE_TASK_FAILURE

  constructor(public payload: string) { }
}

export type ActionsUnion = LoadTaskBegin |
  LoadTaskSuccess |
  LoadTaskFailure |
  AddTaskAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction;
