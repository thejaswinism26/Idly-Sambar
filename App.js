import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/complaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, issue })
    });

    const data = await response.json();
    console.log(data);

    alert("Complaint submitted!");

    // clear form
    setName("");
    setIssue("");
  };

  return (
    <div className="App">
      <h1>Complaint Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Describe your issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default App;