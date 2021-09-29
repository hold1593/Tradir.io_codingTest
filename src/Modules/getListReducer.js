import axios from 'axios';

export const GET_LIST = 'GET_LIST';

export const getBeerList = () => async dispatch => {
  const beerList = await axios.get('https://api.punkapi.com/v2/beers');
  dispatch({type: GET_LIST, beerList});
}

const initialState = {
  list : []
}

export default function getListReducer(state=initialState, action){
  switch(action.type) {
    case GET_LIST :
      return {
        ...state,
        list: action.beerList.data,
      }
    default : return state;
  }
}