import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Female");
  const [hobby, setHobby] = useState("Cricket");
  const [skills, setSkills] = useState([]);

  const handleCheckchange = (e) => {
    const value = e.target.value;
    if (skills.includes(value)) {
      // Remove skill if already selected
      setSkills(skills.filter((skill) => skill !== value));
    } else {
      // Add skill if not present
      setSkills([...skills, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Hobby:", hobby);
    console.log("Skills:", skills);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Hobbies */}
        <div style={{ marginBottom: "10px" }}>
          <label>Hobbies:</label><br />
          <label>
            <input
              type="radio"
              name="hobby"
              value="Badminton"
              checked={hobby === "Badminton"}
              onChange={(e) => setHobby(e.target.value)}
            />
            Badminton
          </label><br />
          <label>
            <input
              type="radio"
              name="hobby"
              value="Cricket"
              checked={hobby === "Cricket"}
              onChange={(e) => setHobby(e.target.value)}
            />
            Cricket
          </label><br />
          <label>
            <input
              type="radio"
              name="hobby"
              value="Swimming"
              checked={hobby === "Swimming"}
              onChange={(e) => setHobby(e.target.value)}
            />
            Swimming
          </label>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "10px" }}>
          <label>Skills:</label><br />
          <label>
            <input
              type="checkbox"
              value="HTML"
              checked={skills.includes("HTML")}
              onChange={handleCheckchange}
            />
            HTML
          </label><br />
          <label>
            <input
              type="checkbox"
              value="React"
              checked={skills.includes("React")}
              onChange={handleCheckchange}
            />
            React
          </label><br />
          <label>
            <input
              type="checkbox"
              value="Node"
              checked={skills.includes("Node")}
              onChange={handleCheckchange}
            />
            Node
          </label>
        </div>

        {/* Gender */}
        <div style={{ marginBottom: "10px" }}>
          <label>Gender:</label><br />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
