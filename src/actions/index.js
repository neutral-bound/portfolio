import { SET_HEAD_URL, CHECK_TOP_SCROLL, SEND_CONTACT_EMAIL } from "./constants";
import { push } from "react-router-redux";
import axios from "axios";

/* Changes the browser url when visiting sections
   i. when the browser is on the education section, changes the browser url to /education */
export const setUrl = to => dispatch => {
  dispatch(push("/" + to));
  dispatch({ type: SET_HEAD_URL, payload: to });
};

// Sets the topButton reducer state to true or false if the top navbar is sticky
export const checkTopButton = status => dispatch => {
  dispatch({ type: CHECK_TOP_SCROLL, payload: status });
};

// Submit the email to the formcarry API with Axios
export const sendEmail = (emailFrom, message) => async dispatch => {
  let loading = "loading";
  let success = false;
  let status = { loading, success };
  // Setting the status to 'loading'
  dispatch({ type: SEND_CONTACT_EMAIL, payload: status });
  try {
    // eslint-disable-next-line
    const submitForm = await axios.post("https://formcarry.com/s/ZyjjdlcLEuB", {
      name: emailFrom,
      email: emailFrom,
      message: message
    });

    // Email successfully sent
    success = true;
    loading = "ended";
    status = { loading, success };
  } catch (error) {
    // If an error occured
    success = false;
    loading = "ended";
    status = { loading, success };
  }
  dispatch({ type: SEND_CONTACT_EMAIL, payload: status });
};
