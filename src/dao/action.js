import { createActions } from 'redux-actions';
import Dao from './dao'
export const {fetchList, addCard, update} = createActions({
    FETCH_LIST: (data) => {
        return data
    },
    ADD_CARD: (data) => {
        return data
    },
    UPDATE: (data) => {
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
  debugger
  return function(dispatch){
    return Dao.updateCard(payload).then((res)=>{      
      dispatch(update())
    })
  }
}
