import * as actionTypes from '../actions/type';

export const todosReducers = (state = [], action) => {

  switch (action.type){
    case actionTypes.Addnew_TODO:
    return [action.payload, ...state]

    default:
      return state;
  }
}