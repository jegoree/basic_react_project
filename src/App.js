import { useState } from "react";

import UserList from "./components/UserList/UserList";
import AddUser from "./components/InputForm/AddUser";

const USERS_LIST = [
  {
    username: "Nomad",
    age: "22",
    id: "e1",
  },
];

function App() {
  const [users, setUsers] = useState(USERS_LIST);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
