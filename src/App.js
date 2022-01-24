// optimised data management
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    fname: "",
    lname: ""
  });

  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value
    });
  };

  // const handleChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  const handleReset = () => {
    setUser({
      fname: "",
      lname: ""
    });
  };

  return (
    <div className="app">
      <div className="form">
        <div className="wrap">
          <input
            name="fname"
            type="text"
            value={user.fname}
            onChange={handleChange}
          />
        </div>
        <div className="wrap">
          <input
            name="lname"
            type="text"
            value={user.lname}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="info">
        <h2>{user.fname}</h2>
        <h2>{user.lname}</h2>
      </div>
    </div>
  );
}

export default App;
