import {FETCH_INFO} from './types';

export const fetchInfo=(dispatch)=>
{
     
          fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(info => dispatch({
            type:FETCH_INFO,
           payload: info

        }))
    
}