import React from "react";
import { useState, useEffect } from "react";
import { getUserDataFromFirebase } from "../../components/config/Firebase";


const Dashboard = (props) => {
  const loader = "Loading...";
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  

  useEffect(() => {
    async function firebaseDatabase() {
      const dataBaseAllData = await getUserDataFromFirebase();
      let allUserData = [];
      dataBaseAllData.forEach((doc) => {
        let userObjectUID = doc.data().uid;
        if(props.UIDcurrentUser !== userObjectUID){
          allUserData.unshift(doc.data())
        }else{
          setCurrentUser(doc.data())
        }
        // console.log(doc.id, " ==>>", doc.data());
      });
            
      setUser(allUserData);
      // console.log("Dashboard users>>>>", dataBaseAllData)
      // setUser(dataBaseAllData)
    }
    firebaseDatabase();
  }, []);

  return <div>
    
    <h1>DashBoard</h1>
    {
      user.map((item)=>{
        return <li key={item.uid}> {item.firstName}</li>
      })
    }
  </div>;
};

export default Dashboard;
