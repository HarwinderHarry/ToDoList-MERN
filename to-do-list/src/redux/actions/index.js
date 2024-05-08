// ------ Define Actions ------ //

export const addNewTodo = (data) => {
    return {
        type:'Addnew_TODO',
        payload:{
            id : new Date().getTime().toString(),
            data:data
        }
    }
}

// export const deleteTodo = (data) => {
//     return {
//         type:'Delete-TODO',
//         payload:data
//     }
// }

// export const deleteAllTodo = (data) => {
//     return {
//         type:'DeleteAll-TODO',
//         payload:data
//     }
// }