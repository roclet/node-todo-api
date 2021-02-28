
import {Injectable} from "@angular/core";
import {asyncScheduler, of} from "rxjs";
import {catchError, debounceTime, map, switchMap} from 'rxjs/operators';
import { Actions, Effect, ofType } from "@ngrx/effects";
import {TaskModel} from '../../../shared/model/task';
import {TodoService} from '../../../shared/service/todo.service';
import * as TaskActions from "../action/tasks.action";


@Injectable()
export class TaskEffects{

  // // @ts-ignore
  // getTasks$ = createEffect(() =>
  //
  //   this.actions$.pipe(
  //     ofType(TasksActions.loadTask),
  //     switchMap(({ query }) => {
  //
  //       return this.taskervice.getTasks().pipe(
  //         map((tasks: TaskModel[]) => TasksActions.taskSuccess({ tasks })),
  //         catchError((err) =>
  //           of(TasksActions.taskFailure({ errorMsg: err.message }))
  //         )
  //       );
  //     })
  //   )
  // );

  constructor(
    private actions: Actions,
    private taskervice: TodoService
  ) {}

  // export class DataEffects {
  // constructor(private actions: Actions, private dataService: DataService) {}

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
}
