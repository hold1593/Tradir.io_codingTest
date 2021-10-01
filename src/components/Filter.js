import React from 'react';
import styled from 'styled-components';

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
  cursor: pointer;
`;
const FilterLabel = styled.label`
  cursor: pointer;
`;

const Filter = (props) => {
  const {oneCk,twoCk,threeCk,setOneCk,setTwoCk,setThreeCk} = props;
  
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
      <FilterUl>
        <FilterLi>
          <FilterCheck type="checkbox" id='1st' name='1st' checked={oneCk} 
          onChange={(e) => handleChange(e)} />
          <FilterLabel htmlFor='1st'>0~5</FilterLabel>
        </FilterLi>
        <FilterLi>
          <FilterCheck type="checkbox" id='2nd' name='2nd' checked={twoCk}
          onChange={(e) => handleChange(e)} />
          <FilterLabel htmlFor='2nd'>6~10</FilterLabel>
        </FilterLi>
        <FilterLi>
          <FilterCheck type="checkbox" id='3rd' name='3rd' checked={threeCk}
          onChange={(e) => handleChange(e)} />
          <FilterLabel htmlFor='3rd'>11이상</FilterLabel>
        </FilterLi>
      </FilterUl>
    </FilterSection>
  )

}

export default Filter