import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">{props.isLoggedIn ? "Welcome" : "Login"}</button>
    </form>
  );
}

export default Form;
