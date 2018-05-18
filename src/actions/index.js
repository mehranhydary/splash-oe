import axios from 'axios';

export const CONTACT = 'CONTACT';
export const LIST = 'LIST';
export const ALERT = 'ALERT';
export const LOADER = 'LOADER';

export function contact( email, firstname, lastname ){
   const request = axios.post('/api/mailchimp/', { params : { email: email, firstname: firstname, lastname: lastname } });
   return {
      type: CONTACT,
      payload: request
   }
}

export function list(){
   const request = axios.get('/api/mailchimp/');
   return {
      type: LIST,
      payload: request
   }
}

export function showHideAlert( _message, _class ){
  return {
    type: ALERT,
    payload: {
       _message,
       _class
    }
  }
}

export function showHideLoader(style){
  return {
    type: LOADER,
    payload: style
  }
}