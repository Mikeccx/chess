import axios from 'axios'
import '../mock/index'
class Dao {
    constructor(){}
    fetchList() {
        return axios.post('/api/get')
    }
    updateCard() {}
    deleteCard() {}
    addCard(data) {
        return axios.post('/api/add', data)
    }
}

export default new Dao()