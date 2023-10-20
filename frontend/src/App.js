import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [groupMembers, setGroupMembers] = useState([]);

  let url = "http://localhost:3001/members";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGroupMembers(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <div className="App">
      <h2>Budget Buddy Application</h2>

      <div class="groupMembers">
        <h3>Group Members</h3>
        <ul>
          {groupMembers.map((member, index) => (
            <li key={index}>{member.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
