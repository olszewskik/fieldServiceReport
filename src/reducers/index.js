const initialState = {
  dummyData: [
    {
      date: '01/11',
      time: '3,5'
    },
    {
      date: '02/11',
      time: '2,0'
    },
    {
      date: '03/11',
      time: '5,3'
    },
    {
      date: '04/11',
      time: '3,1'
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;