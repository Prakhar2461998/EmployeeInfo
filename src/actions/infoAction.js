import {FETCH_INFO} from './types';
import { NEW_INFO } from './types';

export const fetchInfo= infoData =>(dispatch)=>
{
     
          fetch('http://dummy.restapiexample.com/api/v1/employees',{
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(infoData)
          })

        .then(res => res.json())
        .then(info => dispatch({
            type:FETCH_INFO,
           payload: info

        }))
      }


      export const createInfo= infoEmployee =>(dispatch)=>
      {
           
        fetch('http://dummy.restapiexample.com/api/v1/create',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(infoEmployee)
          })
          .then(res =>res.json())
          .then(detail=> dispatch({
                 type:NEW_INFO,
                 payload:detail

          }))
            }