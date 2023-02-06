import React, { useState } from 'react';
import Button from '../button';

const BuyGift = ({ returnMenu, gifts, button, toyBuyed, valueTickets }) => {
  const [showButton, setShowButton] = useState(true);
  console.log(gifts[0]['price']);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {!gifts[0]['price'] == 0 ? (
            <Button
              className="col btn cyan-lighten-3"
              onClick={returnMenu(0, 'Buy')}
            >
              Teddy Bear
            </Button>
          ) : null}

          {!gifts[1]['price'] == 0 ? (
            <Button
              onClick={() => setShowButton(false)}
              onClick={returnMenu(1, 'Buy')}
              className="col btn indigo"
            >
              Big Red Ball
            </Button>
          ) : null}

          {!gifts[2]['price'] == 0 ? (
            <Button
              className="col btn light-blue"
              onClick={returnMenu(2, 'Buy')}
            >
              Huge Bear
            </Button>
          ) : null}

          {!gifts[3]['price'] == 0 ? (
            <Button className="col btn teal" onClick={returnMenu(3, 'Buy')}>
              Candy
            </Button>
          ) : null}

          {!gifts[4]['price'] == 0 ? (
            <Button
              className="col btn indigo-darken"
              onClick={returnMenu(4, 'Buy')}
            >
              Stuffed Tiger
            </Button>
          ) : null}
        </div>
        <div className="row">
          {!gifts[5]['price'] == 0 ? (
            <Button className="col btn lime" onClick={returnMenu(5, 'Buy')}>
              Stuffed Dragon
            </Button>
          ) : null}

          {!gifts[6]['price'] == 0 ? (
            <Button className="col btn green" onClick={returnMenu(6, 'Buy')}>
              Skateboard
            </Button>
          ) : null}

          {!gifts[7]['price'] == 0 ? (
            <Button className="col btn amber" onClick={returnMenu(7, 'Buy')}>
              Toy Car
            </Button>
          ) : null}

          {!gifts[8]['price'] == 0 ? (
            <Button className="col btn orange" onClick={returnMenu(8, 'Buy')}>
              Basketball
            </Button>
          ) : null}

          {!gifts[9]['price'] == 0 ? (
            <Button
              className="col btn blue-grey"
              onClick={returnMenu(9, 'Buy')}
            >
              Scary Mask
            </Button>
          ) : null}
        </div>
      </div>
      <div>
        {button ? (
          <div>
            {valueTickets - gifts[toyBuyed]['price'] < 0 ? (
              <p>Ops! You don't have suficient money to this action.</p>
            ) : (
              <p>You has collected the: {gifts[toyBuyed]['name']}</p>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BuyGift;
