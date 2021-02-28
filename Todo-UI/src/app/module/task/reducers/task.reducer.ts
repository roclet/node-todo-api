import * as fromData from "../action/tasks.action";
import {TaskModel} from '../../../shared/model/task';

export interface DataState {
  items: TaskModel[];
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  items: [],
  loading: false,
  error: null
};

export function reducer(
  state = initialState,
  action: fromData.ActionsUnion
): DataState {
  switch (action.type) {
    case fromData.ActionTypes.LoadTaskBegin: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case fromData.ActionTypes.LoadTaskSuccess: {
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };
    }

    case fromData.ActionTypes.LoadTaskFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    case fromData.ActionTypes.ADD_TASK:
      return {
        ...state,
        loading: true
      }
    case fromData.ActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false
      };
    case fromData.ActionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case fromData.ActionTypes.DELETE_TASK:
      return {
        ...state,
        loading: true
      };
    case fromData.ActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        loading: false
      }
    case fromData.ActionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default: {
      return state;
    }
  }
}

export const getItems = (state: DataState) => state.items;
