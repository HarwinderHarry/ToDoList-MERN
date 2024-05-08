const initialData = {
  list : []
}


const todosReducers = (state = initialData, action) => {

  switch (action.type){
    case "Addnew_TODO":
    const { id,data} = action.payload;

    return{
      ...state,
      list : [
        ...state.list,
        {
          id:id,
          data:data
      }]
    }

    default:
      return state;
  }
}

export default todosReducers;