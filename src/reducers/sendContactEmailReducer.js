import { SEND_CONTACT_EMAIL } from '../actions/constants';

export default function(state = { loading: 'new', success: false }, action) {
  switch (action.type) {
    case SEND_CONTACT_EMAIL:
      return action.payload;

    default:
      return state;
  }
}
