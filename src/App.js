// context-a
import UserContextProvider from "./context/user.context";
import UserForm from "./widgets/UserForm";
import UserInfo from "./widgets/UserInfo";

function App() {
  return (
    <div className="app">
      <UserContextProvider>
        <UserForm />
        <UserInfo />
      </UserContextProvider>
    </div>
  );
}

export default App;
