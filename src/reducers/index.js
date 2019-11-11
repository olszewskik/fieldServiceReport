const initialState = {
  dummyData: [
    {
      date: '01/11',
      time: '3,5',
      percentage: 20
    },
    {
      date: '02/11',
      time: '2,0',
      percentage: 80
    },
    {
      date: '03/11',
      time: '5,3',
      percentage: 45
    },
    {
      date: '04/11',
      time: '3,1',
      percentage: 50
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;