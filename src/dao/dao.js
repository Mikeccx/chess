import axios from 'axios'
import '../mock/index'
class Dao {
    constructor(){}
    fetchList() {
        return axios.post('/api/get')
    }
    updateCard() {}
    deleteCard() {}
    addCard() {}
}

export default new Dao()