export default (state = null, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'USER_TYPE_SET': return payload;
  default: return state;
  }
};
