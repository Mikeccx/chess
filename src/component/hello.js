import { useDispatch } from "react-redux";
import {getListThunkAction} from '../store/actions'
import { normalize, schema } from 'normalizr'

const a =[{
        "id": "PUcHCsa3",
        "owner_uuid": "B9ei3VVV",
        "is_archive": false,
        "title": "示例知识库",
        "description": "",
        "create_time": 1600678192,
        "updated_time": 1600678192,
        "admins": ["B9ei3VVV"],
        "page_count": 12,
        "is_pin": false,
        "is_open_share_page": false,
        "is_sample": true
    }, {
        "id": "BSqyFEi1",
        "owner_uuid": "B9ei3VVV",
        "is_archive": false,
        "title": "知识库2",
        "description": "",
        "create_time": 1629733995,
        "updated_time": 1629733995,
        "admins": ["B9ei3VVV"],
        "page_count": 1,
        "is_pin": false,
        "is_open_share_page": false,
        "is_sample": false
    }]
const space = new schema.Entity('space')
console.log('tt', normalize(a, [space]))
export function Hello () {
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(getListThunkAction(111))}>111</button>
        </>
    )
}
