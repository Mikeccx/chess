import { createActions } from 'redux-actions';
import Dao from './dao'
export const {fetchList, addCard, changeSelectList, updateCard, deleteCard, changeTest} = createActions({
    FETCH_LIST: (data) => {
        return data
    },
    ADD_CARD: async (data) => {
        return data
    },
    CHANGE_SELECT_LIST: (data) => {
        return data
    },
    UPDATE_CARD: (data) => {
        return data
    },
    DELETE_CARD: async (data) => {
        await Dao.deleteCard(data)
        return {}
    },
    CHANGE_TEST: (data) => data
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
    return function(dispatch){
        return Dao.updateCard(payload).then((res) => {
            dispatch(updateCard())
        })
    }
}

