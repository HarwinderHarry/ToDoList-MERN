import axios from "axios";
import { Addnew_TODO } from "./type";
const API_URL = 'https://localhost:8080';

export const addNewTodo = (data) => async(dispatch) =>{
    try {
        // axios.post(`$(API_URL)/todos`, {data})
 const res = await axios.post(API_URL , {data});
 dispatch({ type:Addnew_TODO , payload:res.data});
    } catch (error) {
        console.log('Error while calling addNewTodo API', error);
    }
    
}