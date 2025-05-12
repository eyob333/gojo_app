import { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      console.log("Feedback submitted:", feedback); // replace with API call
      setSubmitted(true);
    }
  };

  return (
    <div style={styles.container}>
      <h3>We value your feedback</h3>
      {submitted ? (
        <p style={styles.thankYou}>Thanks for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <textarea
            style={styles.textarea}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            rows={4}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  textarea: {
    resize: "none",
    padding: "0.5rem",
    fontSize: "1rem"
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  thankYou: {
    color: "green",
    fontWeight: "bold"
  }
};

export default Feedback;
