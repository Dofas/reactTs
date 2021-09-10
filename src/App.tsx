import React from "react";
import "./App.css";
import Card, { CardVariant } from "./components/CardComponent/Card";
import EventsExample from "./components/EventExample/EventsExample";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import UserPage from "./components/Pages/UserPage";
import TodoPage from "./components/Pages/TodoPage";
import UserItemPage from "./components/Pages/UserItemPage";

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>
      <Route path={'/users'} exact>
        < UserPage />
      </Route>
      <Route path={'/todos'} exact>
        < TodoPage />
      </Route>
      <Route path={'/users/:id'} exact>
        < UserItemPage />
      </Route>
      <EventsExample />
      <Card
        onClick={() => console.log("Clicked")}
        variant={CardVariant.outlined}
        width="450px"
        height="150px"
      >
        <button>click me</button>
      </Card>
    </div>
    </BrowserRouter>
  );
}

export default App;
