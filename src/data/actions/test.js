import { GET_STATE } from "../actions/types";


export const getTest = () => (dispatch) => {
    console.log('get test');
 dispatch({
    type: GET_STATE,
    payload: ['test1' , 'test2' ,'test3'],
 });
   
};