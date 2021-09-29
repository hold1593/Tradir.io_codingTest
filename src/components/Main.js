import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { getBeerList } from '../Modules/getListReducer';

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const moveToBeerList = async() => {
    await dispatch(getBeerList());
    history.push('./beerList');
  }
  const moveToCart = async() => {
    history.push('./cart');
  }

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => moveToBeerList()}>맥주 리스트</button>
      <button onClick={() => moveToCart()}>장바구니</button>
    </div>
  )
}

export default Main
