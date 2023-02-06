/*import { useState } from "react";
import Button from "../button";*/
import Button from '../button';
import React, { useState } from 'react';

//const [valor, setValor] = useState(0);

const Input = ({ button, returnMenu, tickets, setTickets, valueTickets }) => {
  const [inputState, setInputState] = useState({
    age: 0,
    inputAge: 0,
  });

  /**
   * const handleAgeChange = (event) => {
    setInputState({
      ...inputState,
      inputAge: parseFloat(event.target.value) || 0,
    });
  };
   * 
   */
  console.log(valueTickets);
  const handleAgeChange = (event) => {
    setTickets(parseInt(event.target.value) || 0);
  };

  return (
    <>
      <div className="container">
        <h2>Please input the tickets count</h2>
        <input
          className="form-control me-2"
          onChange={handleAgeChange}
          type="search"
        />
        <Button
          className="btn btn-primary"
          onClick={returnMenu(tickets, 'Add')}
        >
          Continue
        </Button>

        {button ? <p>You have {valueTickets} tickets! </p> : null}
      </div>
    </>
  );
};

/**const [state, setState] = useState({
    age: 0,
    inputAge: 0
  });

  const handleAgeChange = (event) => {
    setState({ ...state, inputAge: parseInt(event.target.value) || 0 });
  };

  return (
    <div>
      <input type="text" value={state.inputAge} onChange={handleAgeChange} />
      <button onClick={() => {
        setState({ ...state, age: state.inputAge });
        setState(prevState => ({ ...prevState, inputAge: 0 }));
      }}>Set Age</button>
      <p>Age: {state.age}</p>
    </div>
  ); */
export default Input;
