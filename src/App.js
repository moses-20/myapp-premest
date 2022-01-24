// dependency array
import { useState, useEffect } from "react";

const card = {
  width: "300px",
  margin: "15px auto",
  padding: "20px",
  backgroundColor: "#4cf",
  textAlign: "center"
};

function App() {
  const [users, setUsers] = useState(null);
  const [txt, setTxt] = useState("");

  useEffect(() => {
    async function getUsers() {
      let response = await fetch("users.json");
      let result = await response.json();

      setUsers(result);
    }

    if (users == null) {
      setTxt("loading people data...");
    }

    setTimeout(() => {
      getUsers();
    }, 5000);
  }, [users]);

  if (users == null) {
    return (
      <div style={card}>
        <h1> {txt} </h1>
      </div>
    );
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.username} style={card}>
          <h2> {user.username}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
