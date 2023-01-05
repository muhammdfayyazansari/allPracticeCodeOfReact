const initialState = {productsInCart : {} , total: 0 };




export default function addToCartReducer (state =  initialState, action){
  // console.log("AddToCartReducer==>", action.payload)
  switch(action.type){
    case "addToCartAction" :
      return {...state, productsInCart: action.payload};
    case "deleteFromCartAction" : 
      return {...state, productsInCart: action.payload};
    case "quantityMinusAction" : 
      return {...state, productsInCart: action.payload};
    case "quantityPlusAction" : 
      return {...state, productsInCart: action.payload};
    case "clearCartAction" : 
      return {...state, productsInCart: action.payload};
    case "total" : 
      return {...state, total : action.payload};
    case "subTotal" : 
      return {...state, subTotal : action.payload};
    default : 
      return state;
  }
}