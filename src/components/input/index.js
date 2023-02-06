import Button from '../button';
import React, { useState } from 'react';

const Input = ({ button, returnMenu, tickets, setTickets, valueTickets }) => {
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

export default Input;
