const nameReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "TYPE_IN":
      return { ...state, ...{ name: action.payload } };
    default:
      return state;
  }
};

export default nameReducer;
