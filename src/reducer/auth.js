export default (state = null, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'USER_TYPE_SET': return payload;
  case 'TOKEN_SET': return payload;
  case 'TOKEN_DELETE': {
    delete localStorage.token;
    return null;
  }
  default: return state;
  }
};
