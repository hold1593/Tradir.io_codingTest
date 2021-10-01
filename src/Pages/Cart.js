import React from 'react';
import { useHistory } from 'react-router-dom'

const Cart = () => {
  const history = useHistory();

  const msg = () => {
    if (window.confirm('서비스 준비 중 입니다.'))
      {
        history.push('./beerList');
      }
      else
      {
        history.push('./beerList');
      }
  }
  return (
    <div>
      {msg()}
    </div>
  )
}

export default Cart;
