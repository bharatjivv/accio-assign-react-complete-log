import React from 'react';
import Card from "../components/Card"; // ✅ Correct



function Form() {
  return (
    <Card>
      <form id="info-form">
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input id="full_name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input id="password_confirmation" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;