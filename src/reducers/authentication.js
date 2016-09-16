

import { CHANGE_AUTH } from '../actions/types';


export default function ( state = false, action ) {

  console.log(`ReducerAuthenticate : ${action.payload} ${action.type} `);

  switch (action.type) {
    case CHANGE_AUTH:
      console.log(`case : ${action.payload}`);
      return action.payload
    default:
      return state;
  };
}
