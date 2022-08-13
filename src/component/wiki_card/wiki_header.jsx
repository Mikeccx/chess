import { getListThunkAction } from '../../dao/action'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { useEffect } from 'react'
export default function WikiHeader() {
    const dispatch = useDispatch()
    const refretchList = () => {
        dispatch(getListThunkAction())
    }
    return (
        <>
            <Button>新增</Button>
            <Button>删除</Button>
            <Button onClick={() => refretchList()}>刷新</Button>
        </>
    )
}