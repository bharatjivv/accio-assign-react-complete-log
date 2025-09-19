import React, { useState } from 'react';
import Card from "../components/Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted with useState:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input id="full_name" type="text" value={formData.full_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input id="password_confirmation" type="password" value={formData.password_confirmation} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;