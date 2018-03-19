import superagent from 'superagent';

export const setTransaction = transaction => ({
  type: 'SET_TRANSACTION',
  payload: transaction,
});

export const transactionSendRequest = (transaction, token) => dispatch => {
  return superagent.post(`${__MAIN_URL__}/transactions`)
    .set('Authorization', `Bearer ${token}`)
    .send(transaction)
    .then(() => {
      dispatch(setTransaction(transaction));
    });
};
