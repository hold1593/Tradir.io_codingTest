import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

/* const FilterButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  border: none;
  float: right;
  background-color: #bcaaa4;
  color: #212121;
  &:hover{
    cursor: pointer;
    background-color: #8c7b75;
    color: #f5f5f5;
  }
`; */
const FilterSection = styled.section`
  padding-top: 10px;
  
`;
const FilterUl = styled.ul`
  display: flex;
  font-size: 16px;
  list-style: none;
`;
const FilterLi = styled.li`
  padding: 5px;
  padding-right: 20px;
`;
const FilterCheck = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  position: relative;
  top: 1.5px;
`;

const Filter = (props) => {
  const {oneCk,twoCk,threeCk,setOneCk,setTwoCk,setThreeCk} = props;
  //const [isModalVisible, setIsModalVisible] = useState(false);
  /* const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
 */
  const handleChange = (e) => {
    switch(e.target.name) {
      case '1st' : e.target.checked ? setOneCk(true) : setOneCk(false);
      break;
      case '2nd' : e.target.checked ? setTwoCk(true) : setTwoCk(false);
      break;
      case '3rd' : e.target.checked ? setThreeCk(true) : setThreeCk(false);
      break;
    }
  };

  return(
    <FilterSection>알콜 도수
     {/*  <FilterButton onClick={showModal}>알콜 필터</FilterButton>
      <Modal title="알콜 도수(중복 선택 가능)" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> */}
        <FilterUl>
          <FilterLi>
            <FilterCheck type="checkbox" id='1st' name='1st' checked={oneCk} 
            onChange={(e) => handleChange(e)} />
            <label htmlFor='1st'>0~5</label>
          </FilterLi>
          <FilterLi>
            <FilterCheck type="checkbox" id='2nd' name='2nd' checked={twoCk}
            onChange={(e) => handleChange(e)} />
            <label htmlFor='2nd'>6~10</label>
          </FilterLi>
          <FilterLi>
            <FilterCheck type="checkbox" id='3rd' name='3rd' checked={threeCk}
            onChange={(e) => handleChange(e)} />
            <label htmlFor='3rd'>11이상</label>
          </FilterLi>
        </FilterUl>
      {/* </Modal> */}
    </FilterSection>
  )

}

export default Filter