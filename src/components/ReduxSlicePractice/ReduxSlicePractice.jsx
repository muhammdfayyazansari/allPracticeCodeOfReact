import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increament, decreament, increamentByAmount , decreamentByAmount} from '../../store/slices/counterSlice';

const ReduxSlicePractice = () => { 
  const reduxData = useSelector(state  => state.counterSlice.value);
  const dispatch = useDispatch();
  console.log("redux data in redux slice practice >> ", reduxData)
  return (
    <>


    <h1>ReduxSlicePractice</h1>
    <button onClick={()=>{dispatch(increament())}}>incre</button>
    <button onClick={()=>{dispatch(increamentByAmount(5))}}>increase by 5</button>
    <input type="text" value={reduxData} readOnly size="5" />
    <button onClick={()=>{dispatch(decreamentByAmount(5))}}>decrease by 5</button>
    <button onClick={()=>{dispatch(decreament())}}>decre</button>
    </>
  )
}

export default ReduxSlicePractice