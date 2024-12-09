import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Internal CSS styles as JavaScript objects
  const styles = {
    container: {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.png"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "150vh",
      width: "100vw",
      color: "white",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
    },
    logo: {
      maxWidth: "400px",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "30px",
      padding: 0,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
    },
    welcomeText: {
      textAlign: "center",
      marginTop: "100px",
    },
    part1: {
      textAlign: "center",
      margin: "20px auto",
      padding: "10px 20px",
      maxWidth: "800px",
    },
    part2: {
      margin: "30px auto",
      maxWidth: "800px",
      padding: "10px 20px",
    },
    part2Heading: {
      textAlign: "center",
      marginBottom: "20px",
    },
    join: {
      textAlign: "center",
      marginTop: "30px",
    },
    joinButton: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <img src="/preview.png" alt="Learn Smart Logo" style={styles.logo} />
        </div>
        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ ...styles.navLink, fontSize: "20px" }}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" style={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1CxT6QXYAqgNdwI75oodAwEeGM8vcQlYO/edit?usp=sharing&ouid=103605067893077557351&rtpof=true&sd=true"
              style={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Study Material/Text Book
            </a>
          </li>
          <li>
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" style={styles.navLink}>
              Signup
            </Link>
          </li>
        </ul>
      </header>
      <div style={styles.welcomeText}>
        <h1>Welcome to Learn Smart!</h1>
        <p>AI-Powered Personalized Learning App</p>
      </div>
      <div style={styles.part1}>
        <p>
          SmartStudy is a personalized learning platform designed to help
          students excel academically and improve their skills. Whether you're a
          beginner or striving to achieve mastery, our AI-powered tools are here
          to guide you every step of the way.
        </p>
      </div>
      <div style={styles.part2}>
        <h1 style={styles.part2Heading}>How it works?</h1>
        <dl>
          <li>
            <strong>Set Up Your Profile:</strong>
            <br />
            Tell us about yourself—your class, subjects, and areas of interest.
            This helps us tailor the experience to suit your needs.
          </li>
          <li>
            <strong>Take a Quiz:</strong>
            <br />
            Challenge yourself with quizzes across various subjects. Our AI
            evaluates your performance to identify your strengths and areas for
            improvement.
          </li>
          <li>
            <strong>Get Insights & Resources:</strong>
            <br />
            Based on your quiz results, we provide personalized feedback,
            suggest areas to focus on, and recommend resources such as videos,
            articles, and exercises.
          </li>
          <li>
            <strong>Study Smarter:</strong>
            <br />
            Schedule study sessions and let our AI suggest the best times to
            study. Stay on track with alarms and reminders designed to boost
            productivity.
          </li>
        </dl>
      </div>
      <div style={styles.join}>
        <button style={styles.joinButton}>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Want to join us?
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
