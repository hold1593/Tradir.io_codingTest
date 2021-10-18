import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { header } from '../Modules/headerReducer';
import MaterialTable from 'material-table';
import { Modal } from 'antd';
import '../css/main.css';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Filter from './Filter';
// 아이콘용
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const BeerList = styled.div`
  padding: 50px;
`;
const HomeButton = styled.button`
  border: none;
  color: #bcaaa4;
  background-color: transparent;
  font-size: 2rem;
  margin-bottom: 20px;
  &:hover{
    cursor: pointer;
    color: #8c7b75;
  }
`
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const List = () => {
  const [oneCk, setOneCk] = useState(true);
  const [twoCk, setTwoCk] = useState(true);
  const [threeCk, setThreeCk] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const beers = useSelector(state => state.getListReducer.list);
  const headers = useSelector(state => state.headerReducer.columns);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleColumnDrag = async(sourceIndex, destinationIndex) => {
    await dispatch(header(sourceIndex,destinationIndex));
  }
  const moveToHome = () => {
    history.push('./');
  }
  const filterFunc = () => {
    let arr = beers.reduce((acc, cur) => {
      // 0이상이면서 6미만인 경우
      if(oneCk && cur.abv >= 0 && cur.abv < 6){
        acc.push(cur);
      }else if(twoCk && cur.abv >=6 && cur.abv < 11){// 6이상이면서 11미만인 경우
        acc.push(cur);
      }else if(threeCk && cur.abv >= 11){ // 11 이상일 경우
        acc.push(cur);
      }
      return acc;
    },[]);
    return arr;
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
 

  return (
    <>
    <BeerList>
      <HomeButton onClick={() => moveToHome()}>⇦ Home</HomeButton>
      <Filter 
      oneCk={oneCk}
      twoCk={twoCk}
      threeCk={threeCk}
      setOneCk={setOneCk}
      setTwoCk={setTwoCk}
      setThreeCk={setThreeCk}
      />
      <MaterialTable
        onRowClick={(event, rowData) => {
          showModal();
          console.log(rowData)
        }}
        onColumnDragged={handleColumnDrag}
        icons={tableIcons}
        columns={headers}
        data={
          oneCk&&twoCk&&threeCk ?
          beers.map((e) => {
            return (
              {
                image: <img src={e.image_url} height="50" width="auto"/>,
                name: e.name, 
                alcohol: e.abv, 
                yeast: e.ingredients.yeast
              }
            )
          })
          :
          filterFunc().map((e) => {
            return (
              {
                image: <img src={e.image_url} height="50" width="auto"/>,
                name: e.name, 
                alcohol: e.abv, 
                yeast: e.ingredients.yeast
              }
            )
          })
        }
        options={{
          search: false,
          filtering: false,
          selection:false,
        }}
        title="Beer List"
      />
    </BeerList>
    <Modal title="알콜 도수(중복 선택 가능)" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> 
      서비스 준비중입니다.
    </Modal>
    </>
  )
}

export default List
