const initialState = {
    news: [],
    people: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PEOPLE_SUCCESS': {
        const { results } = action.payload;
        return {
          ...state,
          people: results
        };
      }
      case 'FETCH_PEOPLE_ERROR': {
        return {
          ...state
        };
      }
      default: {
          return state;
      }
    }
  };
  
  export default rootReducer;