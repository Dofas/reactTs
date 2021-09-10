import React, { useEffect, useState } from "react";
import "./App.css";
import Card, { CardVariant } from "./components/Card";
import TodoItem from "./components/TodoItem";
import { IUser, ITodo } from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route} from 'react-router-dom'

function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = (await response.json()) as IUser[];
      setUsers(data);
    } catch (e) {
      alert(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = (await response.json()) as ITodo[];
      setTodos(data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="App">
      <EventsExample />
      <Card
        onClick={() => console.log("Clicked")}
        variant={CardVariant.outlined}
        width="450px"
        height="150px"
      >
        <button>click me</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <div>
        Posts:
      </div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
