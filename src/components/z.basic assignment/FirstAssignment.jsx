import React from "react";
// import '../../App.css';


function FirstAssignment() {
  const name = "Hello World";
  const obj = { message: "Welcome to expertizo" }
  const data = ['We', 'are', 'United'] //Show these in separate tags
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in separate tags
  const complex = [{ company: 'XYZ', jobs: ['JavaScript', 'React'] }, { company: 'ABC', jobs: ['Angular', 'Ionic'] }] //Show these in a Table

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}><h1><span style={{ color: "blue" }}>Task 1 :</span> &nbsp;&nbsp;&nbsp;&nbsp; {name} </h1></div>  {/*Task 1*/}
      <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}><h1><span style={{ color: "blue" }}>Task 2 :</span> &nbsp;&nbsp;&nbsp;&nbsp; {obj['message']}</h1></div>                   {/*Task 2*/}

      {/* OR */}
      {/* <h1>{obj.message}</h1> */}
      {/*Task 3*/}
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center", marginLeft: "10px" }}>
        <h1><span style={{ color: "blue" }}>Task 3 :</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h1>{data[0]}</h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h2>{data[1]}</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h3>{data[2]}</h3>
      </div>
      {/*Task 4*/}
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center", marginLeft: "10px" }}>
        <h1><span style={{ color: "blue" }}>Task 4 :</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>

        <h1>{list[0].name}</h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h2>{list[1].name}</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h3>{list[2].name}</h3>
      </div>
      {/*Task 5*/}
      <div style={{ display: "flex", justifyContent: "start", alignItems: "start", marginLeft: "10px" }}>
        <h1><span style={{ color: "blue" }}>Task 5 :</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>

        <table border={"2px solid #000"} cellPadding={"5px"} cellSpacing={"5px"}>
          {/* <tr>
          <td><h1>{complex[0]['company']}</h1></td> <td><h1 >{complex[0]['jobs'].map((item,index)=>{
          return <span style={{paddingRight: "10px"}}>{item}</span>
        })}</h1></td>
        </tr> */}

          {/* {<thead><th><h1>{Object.keys(complex[0])}</h1></th> <th><h1>JOBS</h1></th></thead>} */}
          <thead>
            {Object.keys(complex[0]).map((item, index) => { return <th key={index}><h1  style={{textAlign:"center"}}>{item}</h1></th> })}

          </thead>
          {complex.map((item, index) => {
            return <tr key={index}><td><h1>{item.company}</h1></td>
              <td><h1>{item.jobs.map((jobs, index) => {
                return <span key={index} style={{ paddingRight: "10px" }}>{jobs}</span>
              })}</h1></td>
            </tr>
          })}


        </table>
      </div>

    </>




  );
}

export default FirstAssignment;
