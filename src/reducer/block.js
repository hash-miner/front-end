export default (state = null, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'SET_TRANSACTION': return payload;
  default: return state;
  }
};
