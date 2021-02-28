
import {Injectable} from "@angular/core";
import {asyncScheduler, of} from "rxjs";
import {catchError, debounceTime, map, mergeMap, switchMap} from 'rxjs/operators';
import { Actions, Effect, ofType } from "@ngrx/effects";
import {TaskModel} from '../../../shared/model/task';
import {TodoService} from '../../../shared/service/todo.service';
import * as TaskActions from "../action/tasks.action";
import {
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction, DeleteItemFailureAction,
  DeleteItemSuccessAction
} from "../action/tasks.action";
import {AddTaskAction} from "../action/tasks.action";


@Injectable()
export class TaskEffects{
  constructor(
    private actions: Actions,
    private taskervice: TodoService
  ) {}

  @Effect()
  loadData = this.actions.pipe(
    ofType(TaskActions.ActionTypes.LoadTaskBegin),
    switchMap(() => {
      return this.taskervice.getTasks().pipe(
        map(data => new TaskActions.LoadTaskSuccess({ data: data })),
        catchError(error =>
          of(new TaskActions.LoadTaskFailure({ error: error }))
        )
      );
    })
  );

  @Effect() addTaskItem$ = this.actions
    .pipe(
      ofType<AddTaskAction>(TaskActions.ActionTypes.ADD_TASK),
      mergeMap(
        (data) => this.taskervice.addTsak(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )

  @Effect() deleteTaskItem$ = this.actions
    .pipe(
      ofType<DeleteItemAction>(TaskActions.ActionTypes.DELETE_TASK),
      mergeMap(
        (data) => this.taskervice.deleteTask(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
    );
}
