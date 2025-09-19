import React, { useState } from "react";

const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, email, gender, phoneNumber, password } = formData;

    if (!name || !email || !phoneNumber || !password || !gender) {
      return "All fields are mandatory";
    }

    const nameRegex = /^[a-zA-Z0-9 ]+$/;
    if (!nameRegex.test(name)) {
      return "Name is not alphanumeric";
    }

    if (!email.includes("@")) {
      return "email must contain @";
    }

    if (!["male", "female", "others"].includes(gender.toLowerCase())) {
      return "Please identify as male, female or others";
    }

    if (!/^\d+$/.test(phoneNumber)) {
      return "Phone Number must contain only numbers";
    }

    if (password.length < 6) {
      return "Password must contain atleast 6 letters";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setMessage(error);
    } else {
      const username = formData.email.split("@")[0];
      setMessage(`Hello ${username.toUpperCase()}`);
      setSubmitted(true);
    }
  };

  return (
    <div>
      {!submitted && (
        <>
          <h2>Signup Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                data-testid="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                data-testid="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                data-testid="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
            <div>
              <input
                data-testid="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                data-testid="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button data-testid="submit" type="submit">
              Submit
            </button>
          </form>
        </>
      )}

      {/* Show Message */}
      {!submitted && message && <span>{message}</span>}
      {submitted && <h2>{message}</h2>}
    </div>
  );
};

export default SignupForm;
