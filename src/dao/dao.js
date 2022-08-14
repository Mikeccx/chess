import axios from 'axios'
import '../mock/index'
class Dao {
    constructor(){}
    fetchList() {
        return axios.post('/api/get')
    }
    updateCard(data) {
      // debugger
      return axios.post('/api/update',data)
    }
    deleteCard(arr) {
      return axios.post('/api/delete', arr)
    }
    addCard(data) {
        return axios.post('/api/add', data)
    }
}

export default new Dao()