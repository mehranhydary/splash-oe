import { LIST } from '../actions/index';

export default function( state = [], action ) {
   switch(action.type){
      case LIST:
        return { ...state, members: action.payload.data }
   }
   return state;
}