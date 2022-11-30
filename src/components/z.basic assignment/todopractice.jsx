import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import './todolist.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { type } from "@testing-library/user-event/dist/type";
import { computeHeadingLevel } from "@testing-library/react";



function TodoApp() {
  // const [todoList, setTodoList] = useState(['Breakfast', 'Sleep', 'Lunch', 'Sleep', 'Dinner', 'Sleep']);
  // const [inputValue, setInputValue] = useState("");

  // const pushInputValue = (e) => {
  //   let copyTodoList = [...todoList];
  //   copyTodoList.push(inputValue);
  //   setTodoList(copyTodoList);
  //   e.preventDefault();
  //   setInputValue('');
  // }
  // const [isCheck, setIsCheck ] = useState([]); 
  const [myTodos, setMyTodos] = useState([]);
  const [getInputValue, setGetInputValue] = useState('');
  const addItem = (e) => {
    let copyTodoList = [...myTodos];
    copyTodoList.push(getInputValue);
    setMyTodos(copyTodoList);
    // setIsCheck((oldFalse)=>{
    //     return [...oldFalse, true]
    // })
    // console.log(myTodos)
    setGetInputValue('');
    e.preventDefault();
  };
  
  
  const crossTodo = (e, rowIndex)=>{
    let elementClasses = e.target.classList;
    let lengthOfClasses = elementClasses.length - 1;
    if(elementClasses[lengthOfClasses] != "text-decoration-line-through"){
      e.target.classList.add("text-decoration-line-through")
      // console.log('if chalala')
    }else{
      e.target.classList.remove("text-decoration-line-through")
      // console.log("else chala")
    }
    
    // console.log(e.target);
    // e.target.setAttribute("className","col-12 col-sm-12 m-0 px-2 text-break text-decoration-line-through py-1")
    // console.log(elementClasses[lengthOfClasses])
    // console.log("e ki classes >>>>>>>", e.target.classList.add("text-decoration-line-through"))
    // console.log(rowIndex);



    // let copyTodoList = [...myTodos];
    // let delItem = <del>{copyTodoList[rowIndex]}</del>
    // copyTodoList.splice(rowIndex,1,delItem);
    // setMyTodos(copyTodoList)
    
    // let copyTodoList = [...myTodos];
    // let delItem = <del>{copyTodoList[rowIndex]}</del>
    // copyTodoList.splice(rowIndex,1,delItem);
    // setMyTodos(copyTodoList)






    // console.log('isCheck >>>>> ', isCheck)
    // console.log("delItem", delItem)
    // console.log("myTodos", myTodos)
    // console.log("copytodolist", copyTodoList)
  
  }

  return (
    <div className="mainBody">




<div className="container d-flex flex-column  ">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-4 pt-3">
          <h1 className="text-break">ToDo List</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 bg-img-color  px-sm-5 px-3">
          <div className="row d-flex justify-content-center pb-4 ">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0 ">
              <div className="form-row d-flex align-items-center wrap-nowrap">
                <div className="col-12 col-sm-12">
                  {/* Input user enter items here */}
                  <form onSubmit={addItem} className="d-flex justify-content-between">
                    <input type="text" value={getInputValue} onChange={(e) => {
                      setGetInputValue(e.target.value);
                    }} className="form-control form-control-md" placeholder="Enter Items...."
                    />
                      <button style={{marginLeft:"5px", padding:'10px'}}
                    type="submit"
                    className="btn btn-outline-success text-lead "
                  >

                    {/* <i class="fa-solid fa-square-plus px-1" ></i> */}
                    <FontAwesomeIcon className="mx-2" onClick={addItem} icon={faSquarePlus}></FontAwesomeIcon>
                  </button>
                  </form>
                </div>
                {/* <div className="col-2 col-sm-2 d-flex align-items-center justify-content-end pr-2"> */}
                  {/* ADD ITEMS  BUTTON HERE  */}
                  {/* <button
                    type="submit"
                    className="btn btn-outline-success mr-1 px-1 px-md-2 px-lg-2 text-lead font-weight-lighter "
                  > */}

                    {/* <i class="fa-solid fa-square-plus px-1" ></i> */}
                    {/* <FontAwesomeIcon className="mx-3" onClick={addItem} icon={faSquarePlus}></FontAwesomeIcon>
                  </button> */}

                  {/* DELETE ALL BUTTON HERE */}
                  {/* <button
                    type="button"
                    className="btn btn-outline-danger ml-1 px-1 px-md-2 w-45 px-lg-2 text-lead font-weight-lighter"
                  >
                    <FontAwesomeIcon className="mx-1" icon={faTrashCan}></FontAwesomeIcon>
                    <i className="fa-solid fa-trash-can px-1" />
                  </button> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-1 ">
            <div
              className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0"
              id="display"
            >
              {myTodos.map((item, index) => {
                // console.log(myTodos)
                return <div key={index} className="form-row d-flex align-items-start wrap-nowrap rounded bck-trans mb-1 pt-1" onClick={e =>   crossTodo(e,index)}>
                <div className="col-12 col-sm-12 m-0 px-2 text-break py-1" >
                  {/* <span className="text-break text-uppercase text-justify text-light "   > */}
                    {item}
                  {/* </span> */}
                </div>
                </div>
          
              })}
              {/* Main row which develop in JAVASCRIPT  */}
              {/* <div className="form-row d-flex align-items-start wrap-nowrap rounded bck-trans mb-1 pt-1">
              <div className="col-9 col-sm-9 m-0 px-2 text-break ">
                <span className="text-break text-justify text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                  lore
                </span>
              </div>
              <div className="col-3 col-sm-3 d-flex align-items-start justify-content-center m-0 p-0 ">
                <button
                  type="button"
                  className="btn btn-outline-success mr-2 px-1 px-md-2 px-lg-3 text-lead font-weight-lighter"
                >
                  <FontAwesomeIcon className="px-1" icon={faPen}></FontAwesomeIcon>
                  <i className="fa-solid fa-pen px-1" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger px-1 px-md-2 w-45 px-lg-3 text-lead font-weight-lighter"
                >
                  <FontAwesomeIcon className="px-1" icon={faTrashCan}></FontAwesomeIcon>

                  <i className="fa-solid fa-trash-can px-1" />
                </button>
              </div>
            </div> */}
              {/* <div className="form-row d-flex align-items-start wrap-nowrap rounded bck-trans mb-1 pt-1">
              <div className="col-9 col-sm-9 m-0 px-2 text-break  ">
                <span className="text-break text-justify text-light ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                  lore
                </span>
              </div>
              <div className="col-3 col-sm-3 d-flex align-items-start justify-content-center m-0 p-0 ">
                <button
                  type="button"
                  className="btn btn-outline-success mr-2 px-1 px-md-2 px-lg-3 text-lead font-weight-lighter"
                >
                  <FontAwesomeIcon className="px-1" icon={faPen}></FontAwesomeIcon>

                  <i className="fa-solid fa-pen px-1" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger px-1 px-md-2 w-45 px-lg-3 text-lead font-weight-lighter"
                >
                  <FontAwesomeIcon className="px-1" icon={faTrashCan}></FontAwesomeIcon>

                  <i className="fa-solid fa-trash-can px-1" />
                </button>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
    
















    // <div className="todo-app-div"><h1>Muhammad Fayyaz Ansari</h1>

    //   <h1>{inputValue}</h1>

    //   <form onSubmit={pushInputValue}>
    //     <input type="text" value={inputValue} onChange={(e) => {
    //       setInputValue(e.target.value)

    //     }} />

    //     <button type="submit">add item</button>
    //   </form>

    //   {
    //     todoList.map((item, index) => {
    //       return <h1 key={index}> {index}) {item}</h1>
    //     })
    //   }
    // </div>











  )

}

export default TodoApp;


