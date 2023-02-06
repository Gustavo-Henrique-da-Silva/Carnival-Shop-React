import React from 'react';
import BuyGift from '../bgift';
import Menu from '../menu';
import Input from '../input';

const Choice = ({
  state,
  returnMenu,
  choiceStatus,
  setButton,
  button,
  tickets,
  setTickets,
  gifts,
  valueTickets,
  toyBuyed,
}) => {
  //console.log(gifts.TeddyBear);
  const filteredList = gifts.filter((gift) => gift.price != 0);
  const style = {
    color: 'dodgerblue',
  };
  return (
    <>
      {state[0] ? (
        <BuyGift
          state={state}
          returnMenu={returnMenu}
          gifts={gifts}
          button={button}
          BuyGift={BuyGift}
          toyBuyed={toyBuyed}
          valueTickets={valueTickets}
        ></BuyGift>
      ) : null}
      <Menu state={state} choiceStatus={choiceStatus} />
      {state[1] ? (
        <Input
          setButton={setButton}
          button={button}
          returnMenu={returnMenu}
          tickets={tickets}
          setTickets={setTickets}
          valueTickets={valueTickets}
        ></Input>
      ) : null}
      {state[2] ? <p>Your quantity of tickets are: {valueTickets}</p> : null}
      {state[3] ? (
        <div>
          {' '}
          <p>The gifts are: </p>{' '}
          <ul style={style}>
            {' '}
            {filteredList.map((gift, index) => (
              <li key={index}>
                {index + 1}º {gift.name}: {gift.price} tickets
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {state[4] ? <p>Oh... Goodbye</p> : null}
    </>
  );
};
/**
 * const [state, setState] = useState({
    buy: false,
    add: false,
    check: false,
    show: false,
    exit: false,
    menu: false,
  });
 */
export default Choice;
