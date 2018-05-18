import { ALERT } from '../actions/index';

export default function( state = { _message: '', _class: 'hide-alert' }, action ) {
   switch(action.type){
      case ALERT:
        return action.payload
   }
   return state;
}