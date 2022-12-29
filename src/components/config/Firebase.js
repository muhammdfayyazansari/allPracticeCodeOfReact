// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOUkcvaxAJYNnIXHmI1QEX-OsSZXhtUs",
  authDomain: "todobackhand.firebaseapp.com",
  databaseURL: "https://todobackhand.firebaseio.com",
  projectId: "todobackhand",
  storageBucket: "todobackhand.appspot.com",
  messagingSenderId: "135877128350",
  appId: "1:135877128350:web:6baac5c051b46560e64b8f",
  measurementId: "G-J9XVBMHJRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const createUser = async (userData) => {
  console.log("userData in create User >>>>", userData);
  const { email, password } = userData;
  let userDataWithSignUpKey;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log("resultt in firebase>>>>", res);

    userDataWithSignUpKey = { ...userData, uid: res.user.uid };
    // console.log("userDatawithsignupkey>>>>", userDataWithSignUpKey)

    // Add a new document in collection "Users"
    // try {
    //   const docRef = await addDoc(collection(db, "users"), userDataWithSignUpKey, userDataWithSignUpKey.uid);
    await setDoc(
      doc(db, "users", userDataWithSignUpKey.uid),
      userDataWithSignUpKey
    );

    //   console.log("Document written with USER UID: ", userDataWithSignUpKey.uid);
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    return { error: false, message: res };
  } catch (error) {
    return { error: true, message: error.message };
  }

  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     console.log("4")
  //     const user =  userCredential.user;
  //     console.log("5")
  //     // ...
  //     console.log("New User >>>> ", user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorMessage);
  //     // ..
  //   });
};
const logInUser = async (logInData) => {
  const { email, password } = logInData;
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("result in loginUser Firebase>>>", result);
    return { error: false, message: result };
  } catch (error) {
    return { error: true, message: error.message };
  }

  // console.log(logInData.email)
  // console.log(logInData.password)
  // signInWithEmailAndPassword(auth, logInData.email, logInData.password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //     console.log("User Logged In >>>> ", user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorMessage);
  //   });
};
const getUserDataFromFirebase = async () => {
  // const docRef = doc(db, "users", "UN4g9BiMvePJW45UmwL6S7zSrVY2");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  return querySnapshot;
};

const latestFormData = async (formData) => {
  console.log("userData in create User >>>>", formData);
  const { email, password, name, uid } = formData;
  // Add a new document in collection "Users"
  try {
    const docRef = await addDoc(collection(db, "users"), formData);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const sendProductData = async (product, userUID) => {
  let finalProduct = {
    ...product,
    image:
      "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-4f750982624e527a8b1003408e4febcf.jpg",
    uid: userUID,
  };
  try {
    const docRef = await addDoc(collection(db, "products"), finalProduct);
    console.log("Document written   with Id: ", docRef.id);

    const updateDocRef = doc(db, "products", docRef.id);

    await updateDoc(updateDocRef, {
      docId: docRef.id,
    });

    return { error: false, docRef: docRef.id };
  } catch (error) {
    console.log("Error in adding Document:  >>>", error);
    return { error: true, message: error };
  }
  // console.log("ksdjisjeofjwoj????", finalProduct)
};
// const getProductsData = async()=>{

//   const querySnapshot = await getDocs(collection(db, "products"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
//   return querySnapshot;

// }
const getProductsData = () => {
  // let productArr = [];
  // const colRef = collection(db, "products");
  // onSnapshot(colRef, (snapshot) => {
  //   snapshot.docs.map((doc) => {
  //     console.log("abcd>>>", doc.data());
  //     productArr.push(doc.data());
  //   });
  // });
  // return productArr;
  console.log("icotsolutions>>>.");
};

const getMyProducts = async (uid) => {
  const q = query(collection(db, "products"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  console.log("Querry in firebase >> ", querySnapshot);
  let myproductsArr = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    myproductsArr.push(doc.data());
    console.log(doc.id, " => ", doc.data());
  });
  return myproductsArr;
};

const updateMyProduct = async (productData, docRef) => {
  try {
    const updateDocRef = doc(db, "products", docRef);

    const result = await updateDoc(updateDocRef, { ...productData });

    return {error : false , message: "Product Update ho gai"}
  } catch (error) {
    return {error : true , message: error}

  }
};

export {
  createUser,
  logInUser,
  getUserDataFromFirebase,
  auth,
  latestFormData,
  sendProductData,
  getProductsData,
  db,
  getMyProducts,
  updateMyProduct
};
