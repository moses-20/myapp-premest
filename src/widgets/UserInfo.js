import { useContext } from "react";
import { UserContext } from "../context/user.context";

function UserInfo() {
  const { store } = useContext(UserContext);

  return (
    <div className="info">
      {store.map((user) => (
        <div className="card" key={user.email}>
          <h2>
            {user.fname} {user.lname}
          </h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserInfo;
