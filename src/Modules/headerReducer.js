

export const SET_HEADER = 'SET_HEADER';

export const header = (s, d) =>  dispatch => {
  let col = [...initialState.columns];
  let prev = col[s];
  col.splice(s,1);
  col.splice(d,0,prev);
  
  dispatch({type: SET_HEADER, col});
}

const initialState = {
  columns : [
    { title: '이미지', field: 'image' },
    { title: '상품명', field: 'name' },
    { title: '알콜도수', field: 'alcohol' },
    { title: '이스트', field: 'yeast' },
  ]
}

export default function setHeader(state=initialState, action){
  switch(action.type) {
    case SET_HEADER :
      return {
        columns: action.col,
      }
    default : return state;
  }
}