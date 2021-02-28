import * as fromData from "../action/tasks.action";

export interface DataState {
  items: string[];
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

    default: {
      return state;
    }
  }
}

export const getItems = (state: DataState) => state.items;
