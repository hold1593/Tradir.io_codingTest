import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { header } from '../Modules/headerReducer';
import MaterialTable from 'material-table';
import '../css/main.css';
import styled,{ keyframes } from 'styled-components';
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
  height: 100vh;
  background-color: #bcaaa4;
`;
const HomeButton = styled.button`
  margin: 20px;
  border: none;
  color: #212121;
  background-color: #bcaaa4;
  font-size: 2rem;
  margin-bottom: 20px;
  &:hover{
    cursor: pointer;
    color: #ffffff;
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
  const beers = useSelector(state => state.getListReducer.list);
  const headers = useSelector(state => state.headerReducer.columns);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleColumnDrag = async(sourceIndex, destinationIndex) => {
    await dispatch(header(sourceIndex,destinationIndex));
  }

  const moveToHome = () => {
    history.push('./home');
  }

  return (
    <BeerList>
      <HomeButton onClick={() => moveToHome()}>⇦ Home</HomeButton>
      <MaterialTable
        onColumnDragged={handleColumnDrag}
        icons={tableIcons}
        columns={headers}
        data={
          beers.map((e) => {
            return(
              {
                image: <img src={e.image_url} height="50" width="auto"/>,
                name: e.name, 
                alcohol: e.abv, 
                yeast: e.ingredients.yeast
              }
            )
          })
        }
        title="Beer List"
      />
    </BeerList>
  )
}

export default List
