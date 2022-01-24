// plain data management
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    fname: "",
    lname: ""
  });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleUser = () => {
    setUser({
      fname: fname,
      lname: lname
    });
  };

  return (
    <div className="app">
      <div className="form">
        <div className="wrap">
          <input type="text" value={fname} onChange={handleFname} />
        </div>
        <div className="wrap">
          <input type="text" value={lname} onChange={handleLname} />
        </div>
        <button onClick={handleUser}> Submit </button>
      </div>

      <div className="info">
        <h2>{user.fname}</h2>
        <h2>{user.lname}</h2>
      </div>
    </div>
  );
}

export default App;
