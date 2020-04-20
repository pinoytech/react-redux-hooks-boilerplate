const lastNameReducer = (state = { last_name: "" }, action) => {
  switch (action.type) {
    case "TYPE_IN_LAST_NAME":
      return { ...state, ...{ last_name: action.payload } };
    default:
      return state;
  }
};

export default lastNameReducer;
