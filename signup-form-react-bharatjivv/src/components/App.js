import React, {Component, useState} from "react";
import '../styles/App.css';
import SignupForm from './SignupForm';
import Testing from "./Testing";
import Button from './Button';
import ButtonDecrement from "./ButtonDecrement";
import RefButton from "./RefButton";

const App = () => {
  return (
    <div id="main">
      {/* <SignupForm /> */}
      <Testing />
      <Button />
      <ButtonDecrement />
      <RefButton />
    </div>
  )
}


export default App;
