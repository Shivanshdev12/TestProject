import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const adduserHandler = (uname, uage, ucollege) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        {
          username: uname,
          userage: uage,
          usercollege: ucollege,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={adduserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
