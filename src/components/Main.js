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

  return (
    <div>
      <h1>홈페이지</h1>
      <button onClick={() => moveToBeerList()}>맥주리스트로</button>
    </div>
  )
}

export default Main
