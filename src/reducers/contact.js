import { CONTACT } from '../actions/index';

export default function( state = [], action ) {
   switch(action.type){
      case CONTACT:
        return { ...state, contact: action.payload.data }
   }
   return state;
}