import React, { useState } from 'react';
import Button from '../button';

const Menu = ({ state, choiceStatus }) => {
  return (
    <>
      {state[5] ? (
        <div className="container text-center">
          <div className="row">
            <Button
              onClick={choiceStatus('Buy')}
              className="col btn btn-primary"
            >
              Buy a Gift
            </Button>
            <Button
              onClick={choiceStatus('Add')}
              className="col btn btn btn-warning"
            >
              Add Tickets
            </Button>
            <Button
              onClick={choiceStatus('Check')}
              className="col btn btn-secondary"
            >
              Check tickets
            </Button>
            <Button onClick={choiceStatus('Show')} className="col btn btn-info">
              Show gifts
            </Button>
            <Button
              onClick={choiceStatus('Exit')}
              className="col btn btn-danger"
            >
              Exit the shop
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
