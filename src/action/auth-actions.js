import superagent from 'superagent';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
  payload: null,
});

export const userTypeSet = type => ({
  type: 'USER_TYPE_SET',
  payload: type,
});

export const signupRequest = user => dispatch => {
  return superagent.post(`${__MAIN_URL__}/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.text));
      dispatch(userTypeSet(user.user_type));
      try {
        localStorage.token = res.text;
        localStorage.user_type = user.user_type;
      } catch (e) {
        throw e;
      }
    });
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__MAIN_URL__}/signin`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.body.token));
      dispatch(userTypeSet(res.body.user_type));
      try {
        localStorage.token = res.body.token;
        localStorage.user_type = res.body.user_type;
      } catch (e) {
        throw e;
      }
    });
};