import { useContext } from "react";
import { UserContext } from "../context/user.context";

function UserForm() {
  const { user, handleChange, handleReset } = useContext(UserContext);

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
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UserForm;
