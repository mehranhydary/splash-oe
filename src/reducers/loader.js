import { LOADER } from '../actions/index';

export default function( state = { 'width': '0%', 'display': 'none' }, action ) {
   switch(action.type){
      case LOADER:
        return action.payload
   }
   return state;
}