import { FETCH_INFO, NEW_INFO } from '../actions/types';

const initialState=
{
    details: [],
   detail:{}
}
export default function(state = initialState , action)
{
    switch(action.type)
    {
        case FETCH_INFO:
          
            return {
                ...state,
                details:action.payload
            }

            case NEW_INFO:
                return{
                    ...state,
                    detail:action.payload
                }
            default:
                return state;
                    
                

    }
}