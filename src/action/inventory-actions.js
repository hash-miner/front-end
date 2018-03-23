import superagent from 'superagent';

export const setInventory = inventory => ({
  type: 'SET_INVENTORY',
  payload: inventory,
});

export const inventoryGetRequest = (state) => dispatch => {
  let param = '';
  for (let key in state) if (state[key]) param ? param += `&${key}=${state[key]}` : param = `${key}=${state[key]}`;
  return superagent.get(`${__NODE_URL__}/inventory/${param}`)
    .then(res => {
      dispatch(setInventory(res.body));
      console.log(res.body)
    });
};

