import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    fname: "",
    lname: ""
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
      lname: ""
    });
  };

  return (
    <UserContext.Provider value={{ user, handleChange, handleReset }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
