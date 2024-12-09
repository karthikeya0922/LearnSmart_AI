import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simple form validation
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/contact", form);
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("There was an issue sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #14142b, #1c0131)",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "2rem",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
          }}
        >
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{
              padding: "10px",
              fontSize: "1rem",
              border: "1px solid #ff6600",
              borderRadius: "5px",
              backgroundColor: "#1c1c2c",
              color: "white",
              outline: "none",
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{
              padding: "10px",
              fontSize: "1rem",
              border: "1px solid #ff6600",
              borderRadius: "5px",
              backgroundColor: "#1c1c2c",
              color: "white",
              outline: "none",
            }}
            required
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{
              padding: "10px",
              fontSize: "1rem",
              border: "1px solid #ff6600",
              borderRadius: "5px",
              backgroundColor: "#1c1c2c",
              color: "white",
              outline: "none",
              height: "100px",
              resize: "none",
            }}
            required
          />
          <button
            type="submit"
            disabled={loading}
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
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {error && (
          <p
            style={{
              marginTop: "15px",
              color: "red",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
