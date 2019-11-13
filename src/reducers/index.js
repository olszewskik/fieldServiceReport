const initialState = {
  dummyData: [
    {
      id: 1,
      date: '01/11',
      time: '3,5',
      percentage: 18
    },
    {
      id: 2,
      date: '02/11',
      time: '2,0',
      percentage: 80
    },
    {
      id: 3,
      date: '03/11',
      time: '5,3',
      percentage: 45
    },
    {
      id: 4,
      date: '04/11',
      time: '3,1',
      percentage: 50
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('REMOVE_REPORT'):
      return {
        ...state,
        dummyData: [...state.dummyData].filter(item => item.id !== action.payload.id),
      };
    default:
      return state
  }
};

export default rootReducer;