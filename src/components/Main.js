import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import styled,{ keyframes } from 'styled-components';
import { getBeerList } from '../Modules/getListReducer';
import '../css/main.css';

const ani = keyframes`
  0%{
    letter-spacing:-.5em;
    filter:blur(12px);
    opacity:0;
    }
  100%{
    filter:blur(0);
    opacity:1;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0.6
  }
  to {
    opacity: 1
  }
`;
const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${ani} 1.2s cubic-bezier(.25,.46,.45,.94) both;
  text-shadow: 4px 3px 3px rgba(0, 0, 0, 0.3);
`;
const HomeTitle = styled.div`
  margin-bottom: 3rem;
  font-size: 4rem;
`;
const Button = styled.button`
  height: 40px;
  width: 250px;
  border: none;
  background-color: #bcaaa4;
  color: #212121;
  margin-bottom: 20px;
  &:hover{
    cursor: pointer;
    color: #f5f5f5;
    background-color: #8c7b75;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
  
`;

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const moveToBeerList = () => {
    dispatch(getBeerList());
    history.push('./beerList');
  }

  const moveToCart = async() => {
    history.push('./cart');
  }
  
  return (
    <Home>
      <HomeTitle>Tradir Beer</HomeTitle>
      <Button onClick={() => moveToBeerList()}>맥주 리스트</Button>
      <Button onClick={() => moveToCart()}>장바구니</Button>
    </Home>
  )
}

export default Main
