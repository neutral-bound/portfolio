import { CHECK_TOP_SCROLL } from '../actions/constants';

export default function(state = false, action) {
  switch (action.type) {
    case CHECK_TOP_SCROLL:
      return action.payload;

    default:
      return state;
  }
}
