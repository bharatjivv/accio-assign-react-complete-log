import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      setSuccess("");
      return;
    }

    const token = Math.random().toString(36).substr(2);
    const user = { ...form, token };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user));

    setError("");
    setSuccess("Signup successful!");
    setTimeout(() => navigate("/profile"), 1000);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      navigate("/profile");
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Sign Up</button>
      </form>

      {success && <p style={styles.success}>{success}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

export default SignupForm;

// 👇 Styling Object
const styles = {
  container: {
    padding: "2rem",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.2s ease",
  },
  success: {
    marginTop: "1rem",
    color: "green",
    textAlign: "center",
  },
  error: {
    marginTop: "1rem",
    color: "red",
    textAlign: "center",
  },
};
