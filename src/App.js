import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/actions/loginActions";
import { increment, decrement } from "./store/actions/counterActions";
import { updateName } from "./store/actions/nameActions";
import { updateLastName } from "./store/actions/lastNameActions";

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const { name, lastName } = useSelector(state => ({
    ...state.name,
    ...state.lastNameReducer
  }));
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>counter: {counter}</p>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      <br />
      <br />
      <br />
      <input
        onChange={event => dispatch(updateName(event.target.value))}
        value={name}
        name="firstName"
      />
      <input
        onChange={event => dispatch(updateLastName(event.target.value))}
        value={lastName}
        name="lastName"
      />
      <br />
      <br />
      <br />
      <h3>{`${loggedIn ? "Logged In" : "Logged Out"}`}</h3>
      {loggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
}

export default App;
