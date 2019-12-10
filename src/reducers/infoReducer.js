import { FETCH_INFO } from '../actions/types';

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
            console.log("reducer");
            return {
                ...state,
                details:action.payload
            }
            default:
                return state;
                    
                

    }
}