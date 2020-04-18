import axios from 'axios';

import {
  IS_USER_LOGGED,
  userLogged,
  failedAuth,
  USER_FORM_SUBMITTED,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  THOUGHT_SUBMITTED,
  thoughtAdded,
  THOUGHTS_REQUIRED,
  thoughtsFetched,
} from 'src/store/reducer';

import tokenConfiguration from './tokenConfiguration';


const middleware = (store) => (next) => (action) => {
  const { token } = store.getState();
  switch (action.type) {
    case IS_USER_LOGGED: {

      axios.get(`${process.env.API}/users/info`, tokenConfiguration(token))
        .then((response) => {
          store.dispatch(userLogged(response.data));
        })
        .catch((err) => {
          console.log(err.response.data)
          store.dispatch(failedAuth());
        })
      
      next(action);
      break;
    }
    case USER_FORM_SUBMITTED: {
      const {
        firstname,
        signUpEmail,
        signUpPassword,
        signUpConfirmPwd,
        signInEmail,
        signInPassword
      } = store.getState();
      
      const signup = window.location.pathname !== '/connexion';

      const user = {
        firstname: firstname,
        email: signup ? signUpEmail : signInEmail,
        password: signup ? signUpPassword : signInPassword,
        confirmPassword: signup ? signUpConfirmPwd : '',
      };

      const API_URI = signup ? 'add' : 'login';
      axios.post(`${process.env.API}/users/${API_URI}`, user)
        .then((response) => {
          store.dispatch(signup ? signUpSuccess() : signInSuccess(response.data));

        })
        .catch(() => {
          store.dispatch(signup ? signUpFail() : signInFail());

        })
        .finally(() => {
          // to scroll to bottom after form submission, 
          // in order to see
          window.scrollTo(0,9999);
        })

      next(action);
      break;
    }
    case THOUGHT_SUBMITTED: {
      const { newThought, thoughts } = store.getState();

      const thoughtToAdd = {
        // _id will not be exploited back-side (as _id wil be automatically generated by MongoDB),
        // only front-side,
        // when iterating through thoughts array
        // to display each thought. _id will then be used as the key value.
        _id: thoughts.length,
        content: newThought
      };

      axios.post(`${process.env.API}/thoughts/add`, thoughtToAdd, tokenConfiguration(token))
      .then((response)=> {
        store.dispatch(thoughtAdded(thoughtToAdd));
      })
      .catch((err) => {
       /*  console.log(err) */
      })
      
      next(action);
      break;
    }
    case THOUGHTS_REQUIRED: {
      axios.get(`${process.env.API}/thoughts/all`, tokenConfiguration(token))
      .then((response) => {
        console.log(response.data)

        store.dispatch(thoughtsFetched(response.data));
      
      })
      .catch((err) => {
        /* console.log(err) */
      })
      
      next(action);
      break;
    }
  }
  next(action);
};

export default middleware;
