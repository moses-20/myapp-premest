import { useContext } from "react";
import { UserContext } from "../context/user.context";

function UserInfo() {
  const { user } = useContext(UserContext);

  return (
    <div className="info">
      <h2>{user.fname}</h2>
      <h2>{user.lname}</h2>
    </div>
  );
}

export default UserInfo;
