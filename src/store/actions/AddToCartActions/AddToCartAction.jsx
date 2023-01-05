const ADDTOCARTACTION = "addToCartAction";
const DELETEFROMCARTACTION = 'deleteFromCartAction';
const QUANTITYMINUSACTION = "quantityMinusAction";
const QUANTITYPLUSACTION = "quantityPlusAction";
const CLEARCARTACTION = "clearCartAction";
const TOTAL = "total";
const SUBTOTAL = "subTotal";



function addToCartAction(product){
  return {
    type : ADDTOCARTACTION,
    payload : product
  }

}

function deleteFromCartAction(product){
  return{
    type : DELETEFROMCARTACTION,
    payload : product
  }
}

function quantityMinusAction(product){
  console.log("fayyaz ansari in action >>> ", product)
  return{
    type : QUANTITYMINUSACTION,
    payload : product
  }
}
function quantityPlusAction(product){
  return{
    type : QUANTITYPLUSACTION,
    payload : product
  }
}

function clearCartAction(product){
  return{
    type : CLEARCARTACTION,
    payload : product
  }
}
function total(total){
  return{
    type : TOTAL,
    payload : total
  }
}
function subTotal(subTotal){
  console.log("mysubtotal", subTotal)
  return{
    type : SUBTOTAL,
    payload : subTotal
  }
}



export {addToCartAction, deleteFromCartAction, quantityMinusAction, quantityPlusAction, clearCartAction, total, subTotal};