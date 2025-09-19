import React, { useRef } from 'react';
import Card from "../components/Card.js";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm: confirmRef.current.value
    };
    console.log("Submitted with useRef:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input id="full_name" type="text" ref={fullNameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input id="password_confirmation" type="password" ref={confirmRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;