const initialState = { value: { background: "#F7F8F8", color: "#002F34", darkTheme : false} };

function themeReducer(state = initialState, action) {
  console.log("action payload in reducer>>> ", action.payload);

  switch (action.type) {
    case "darktheme":
      return { value: action.payload };
    case 'lighttheme': 
      return { value: action.payload}
    default:
      return state;
  }
}

export default themeReducer;
