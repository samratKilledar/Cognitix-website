import React, { useState } from "react";

function ContactNewBranch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    console.log({ name, email, message });
    setSuccess(true);

    // Clear fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>

      {success && (
        <p style={{ color: "green" }}>Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
  },
  textarea: {
    padding: "8px",
    fontSize: "14px",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ContactNewBranch;
