import React from "react";
import Form from "./Form";

var isLoggedIn = false;
var currentTime = new Date(2022, 6, 1, 6).getHours();

function App() {
  return (
    <div className="container">
      {
        <Form isLoggedIn={isLoggedIn} />
        //isLoggedIn ? <h1> Welcome back!</h1> : <Form />
        //currentTime > 12 ? <h1>Good afternoon</h1> : null
        //currentTime > 12 && <h1>Good afternoon</h1>
      }
    </div>
  );
}

export default App;
