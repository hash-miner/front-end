import superagent from 'superagent';

export const setInventory = inventory => ({
  type: 'SET_INVENTORY',
  payload: inventory,
});

export const inventoryGetRequest = (search) => dispatch => {
  return superagent.get(`${__NODE_URL__}/inventory/${search}`)
    .then(res => {
      dispatch(setInventory(res.body));
    });
};

