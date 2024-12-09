import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [quiz, setQuiz] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateQuiz = async () => {
    if (!topic) {
      setError("Please enter a topic.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post("http://localhost:3004/api/quiz/generate-quiz", {
        topic,
        difficulty,
      });
      setQuiz(data.quiz);
    } catch (error) {
      console.error("Error generating quiz:", error.message);
      setError("There was an issue generating the quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="dashboard"
      style={{
        background: "linear-gradient(to bottom, #14142b, #1c0131)",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
          background: "rgba(0, 0, 0, 0.8)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
          }}
        >
          Take a Quiz
        </h1>

        <div
          className="forms"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <label style={{ color: "#ffffff", fontSize: "1.2rem" }}>
            Topic:
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ff6600",
                borderRadius: "5px",
                backgroundColor: "#1c1c2c",
                color: "white",
                fontSize: "1rem",
                outline: "none",
                marginTop: "5px",
              }}
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter topic (e.g., Math)"
            />
          </label>

          <label style={{ color: "#ffffff", fontSize: "1.2rem" }}>
            Difficulty:
            <select
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ff6600",
                borderRadius: "5px",
                backgroundColor: "#1c1c2c",
                color: "white",
                fontSize: "1rem",
                outline: "none",
                marginTop: "5px",
              }}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#ff6600",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={handleGenerateQuiz}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Quiz"}
          </button>
        </div>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {quiz && (
          <div
            className="quiz-section"
            style={{
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Your Quiz:</h3>
            <pre
              style={{
                background: "#1c1c2c",
                padding: "10px",
                borderRadius: "5px",
                overflowX: "auto",
                color: "white",
              }}
            >
              {quiz}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
