import superagent from 'superagent';

export const setTransaction = transaction => ({
  type: 'SET_TRANSACTION',
  payload: transaction,
});

export const transactionSendRequest = (transaction, token) => dispatch => {
  let searchString = transaction.user_type === 'Distributor'? `batchId=${transaction.batchId}` : transaction.user_type === 'Retailer'? `itemId=${transaction.itemId}` : undefined;
  return superagent.get(`${__NODE_URL__}/inventory/${searchString}`)
    .then(result => {
      if (result.user_type) delete result.user_type;
      let data = transaction.user_type === 'Grower'? {...transaction} : {...result[0], ...transaction};
      return superagent.post(`${__MAIN_URL__}/transactions`)
        .set('Authorization', `Bearer ${token}`)
        .send(data)
        .then(() => {
          dispatch(setTransaction(transaction));
        });
    });};
