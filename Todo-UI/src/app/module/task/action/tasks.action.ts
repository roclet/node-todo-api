import {createAction, props} from '@ngrx/store';
import {TaskModel} from '../../../shared/model/task';
import { Action } from "@ngrx/store";

export enum ActionTypes {
  LoadTaskBegin = "[TASK] Load TASK begin",
  LoadTaskSuccess = "[TASK] Load TASK success",
  LoadTaskFailure = "[TASK] Load TASK failure"
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

export type ActionsUnion = LoadTaskBegin | LoadTaskSuccess | LoadTaskFailure;
// export const search = createAction(
//   '[Products/API] Search is needed',
//   props<{ query: string }>()
// );
//
//
// export const searchSuccess = createAction(
//   '[Products/API] Search Success',
//   props<{ tasks: TaskModel[] }>()
// );
//
// export const searchFailure = createAction(
//   '[Products/API] Search Failure',
//   props<{ errorMsg: string }>()
// );
