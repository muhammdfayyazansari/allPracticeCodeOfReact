import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import QuizApp from "./components/QuizApp/index";
import Form from "./screen/Form";
import Aapractice from "./Aapractice";
import OlxRouter from "./components/olxclone/OlxRouter";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/Store";

// store.subscribe(()=> console.log(store.getState()))

// import FirstAssignment from './components/z.basic assignment/FirstAssignment'
// import FirstTask from './components/z.basic assignment/firstTask'
// import TodoApp from './components/z.basic assignment/todopractice';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstAssignment /> */}
    {/* <FirstTask /> */}
    {/* {<TodoApp />} */}
    {/* <QuizApp />  */}
    {/* <Form />  */}

    {/* <OlxRouter /> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Aapractice />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
