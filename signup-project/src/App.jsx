import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>Signup</Link>
          <Link to="/profile" style={styles.link}>Profile</Link>
        </nav>

        <div style={styles.page}>
          <Routes>
            <Route path="/" element={<SignupForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: black,
    minHeight: "100vh",
  },
  navbar: {
    backgroundColor: "#282c34",
    padding: "1rem 2rem",
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  page: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "2rem",
    borderRadius: "8px",
  }
};

export default App;
