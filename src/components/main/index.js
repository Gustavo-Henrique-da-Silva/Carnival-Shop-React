import React, { useState } from 'react';
import Choice from '../choice';

const Main = () => {
  const [button, setButton] = useState(false);
  const [state, setState] = useState([false, false, false, false, false, true]);
  const [tickets, setTickets] = useState(0);
  const [valueTickets, setValueTickets] = useState(0);

  const [gifts, setGifts] = useState([
    { id: 1, name: 'TeddyBear', price: 10 },
    { id: 2, name: 'BigRedBall', price: 5 },
    { id: 3, name: 'HugeBear', price: 50 },
    { id: 4, name: 'Candy', price: 8 },
    { id: 5, name: 'StuffedTiger', price: 15 },
    { id: 6, name: 'StuffedDragon', price: 30 },
    { id: 7, name: 'SkateBoard', price: 100 },
    { id: 8, name: 'ToyCar', price: 25 },
    { id: 9, name: 'BasketBall', price: 20 },
    { id: 10, name: 'ScaryMask', price: 75 },
  ]);
  const [toyBuyed, setToyBuyed] = useState(0);

  const updateGifts = (index) => {
    const newArray = [...gifts];
    newArray[index].price = 0;
    setGifts(newArray);
  };
  const choiceStatus = (button) => {
    return function () {
      console.log(button);
      if (button == 'Buy') {
        console.log('Buy a gift!');
        setState({ [0]: true, [5]: false });
      } else if (button == 'Add') {
        console.log('Add tickets!');
        setState({ [1]: true, [5]: false });
      } else if (button == 'Check') {
        console.log('Check tickets!');
        setState({ [2]: true, [5]: false });
        console.log('The user has ', valueTickets, 'tickets!');
        setTimeout(() => {
          setState({ [2]: false, [5]: true });
        }, 3000);
      } else if (button == 'Show') {
        console.log('Show gifts!');
        setState({ [3]: true, [5]: false });
        setTimeout(() => {
          setState({ [4]: false, [5]: true });
        }, 3000);
      } else if (button == 'Exit') {
        console.log('Exit...');
        setState({ [4]: true, [5]: false });
      }
    };
  };

  const returnMenu = (choice, button) => {
    return function () {
      console.log(button);
      if (button == 'Buy') {
        setButton(true);
        setToyBuyed(choice);
        setTimeout(() => {
          if (valueTickets - gifts[choice]['price'] > 0) {
            setValueTickets(valueTickets - gifts[choice]['price']);
            updateGifts(choice);
          }
          setButton(false);
          setState({ [0]: false, [5]: true });
        }, 2000);
      } else if (button == 'Add') {
        setValueTickets(valueTickets + tickets);
        setButton(true);
        console.log('The user has collected ', choice, 'tickets!');
        setTickets(0);
        setTimeout(() => {
          setButton(false);
          setState({ [1]: false, [5]: true });
        }, 2000);
      }
    };
  };
  return (
    <>
      <Choice
        state={state}
        choiceStatus={choiceStatus}
        returnMenu={returnMenu}
        button={button}
        tickets={tickets}
        setTickets={setTickets}
        gifts={gifts}
        valueTickets={valueTickets}
        toyBuyed={toyBuyed}
      ></Choice>
    </>
  );
};

export default Main;
