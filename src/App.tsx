import React, { useEffect, useState } from "react";
import "./App.css";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json() as IUser[];
      setUsers(data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="App">
      <Card
        onClick={() => console.log("Clicked")}
        variant={CardVariant.outlined}
        width="450px"
        height="150px"
      >
        <button>click me</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
