export default (state = [], action) => {
  let { type, payload } = action;

  switch (type) {
  case 'SET_INVENTORY': return payload;
  default: return state;
  }
};
