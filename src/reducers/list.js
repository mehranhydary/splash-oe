import { LIST } from '../actions/index';

export default function( state = [], action ) {
   switch(action.type){
      case LIST:
        return { ...state, github: action.payload.data }
   }
   return state;
}