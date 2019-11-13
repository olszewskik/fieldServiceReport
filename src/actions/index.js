export const removeReport = (id) => {
  return {
    type: 'REMOVE_REPORT',
    payload: {id}
  }
};