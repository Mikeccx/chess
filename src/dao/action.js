import { createActions } from 'redux-actions';
import Dao from './dao'
export const {fetchList, addCard, update, deleteArr, setSelectListAction} = createActions({
    FETCH_LIST: (data) => {
        return data
    },
    ADD_CARD: (data) => {
        return data
    },
    UPDATE: (data) => {
      return data
    },
    DELETE_ARR: (data) => {
      console.log('DELETE_ARR', data)
      return data
    },
    SET_SELECT_LIST_ACTION: (data) => {
      console.log('SET_SELECT_LIST', data)
      return data
    }
  });
export const getListThunkAction = (payload) => {
    return function(dispatch){
        return Dao.fetchList().then((res) => {
            dispatch(fetchList(res?.data?.data?.spaces))
        })
    }
}
export const addCardThunkAction = (payload) => {
    return function(dispatch){
        return Dao.addCard(payload).then((res) => {
            dispatch(addCard())
        })
    }
}

export const updateCardThunkAction = (payload) => {
  // debugger
  return function(dispatch){
    return Dao.updateCard(payload).then((res)=>{      
      dispatch(update())
    })
  }
}

export const deleteCardsThunkAction = (payload) => {
  return function(dispatch){    
    return Dao.deleteCard(payload).then((res)=>{      
      dispatch(deleteArr())
    })
  }  
}
