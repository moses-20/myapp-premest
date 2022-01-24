import { useContext } from "react";
import { UserContext } from "../context/user.context";

function UserForm() {
  const { user, handleChange, handleReset, handleUser } =
    useContext(UserContext);

  return (
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
      <div className="wrap">
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="btns">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleUser}>Submit</button>
      </div>
    </div>
  );
}

export default UserForm;
