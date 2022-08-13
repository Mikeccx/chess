import { createActions } from 'redux-actions';
import Dao from './dao'
export const {fetchList} = createActions({
    FETCH_LIST: (data) => {
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