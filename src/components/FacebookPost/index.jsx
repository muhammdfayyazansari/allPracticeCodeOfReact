import React from "react";
import { useEffect, useState } from "react";
import FacebookPost from "./FacebookPost";
import Loader from "./Loader";

const MainFacebookPostComponent = () => {
  const [post, setPost] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log("response>> " , response)
        const result = await response.json();

        console.log("result >>> ", result);
        setPost(result);
        // .then(response => response.json())
        // .then(result => console.log("Result >> ",result[0]))
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection:"column", 
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(2,0,36)",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 
      }}
    >
     {/* {console.log(post)} */}
      {/* <Loader /> */}
      {post ? post.map((item,index)=>{
          console.log("map Image>> ", item.image)
          console.log("map Image>> ", item)
          return <FacebookPost title={item.title}  image={item.image} description={item.description}  userId={item.id} />
      }): <Loader />}
      {/* <FacebookPost /> */}
      {/* <img src={post} style={{width:"300px"}} alt="" /> */}
    </div>
  );
};

export default MainFacebookPostComponent;
