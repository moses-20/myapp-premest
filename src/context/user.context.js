import { createContext, useReducer, useState } from "react";
import userReducer from "../redux/user.reducer";
import { userActions } from "../redux/user.actions";
import people from "../data";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [store, dispatch] = useReducer(userReducer, people);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReset = () => {
    setUser({
      fname: "",
      lname: "",
      email: ""
    });
  };

  const handleUser = () => {
    dispatch(userActions.add(user));
    handleReset();
  };

  return (
    <UserContext.Provider
      value={{ user, store, handleChange, handleReset, handleUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
