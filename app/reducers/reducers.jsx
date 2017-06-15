export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    };
};

// showCompletedReducer, defualt false, TOOGLE_SHOW_COMPLETED

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
      case 'TOOGLE_SHOW_COMPLETED':
          return  !state;
      default:
          return state;
  }
};