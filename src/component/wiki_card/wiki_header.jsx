import { getListThunkAction, addCardThunkAction, changeSelectList, deleteCard } from '../../dao/action'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'antd'
import { useEffect } from 'react'
import { useModal } from '../../hooks/modal/useModal'
import { useState } from 'react'
import { selectedListGetter } from '../../dao/selector'
import { useSelector } from 'react-redux'
export default function WikiHeader() {
    const dispatch = useDispatch()
    const [formArr, serFormArr] = useState([
        {title: '空间名', name: 'name'}
    ])
    const selectedList = useSelector(selectedListGetter)
    const addModalHandleOk = (e) => {
        console.log('e', e)
        dispatch(addCardThunkAction(e))
        dispatch(getListThunkAction())
        closeAddModal()
    }
    const { showModal: showAddModal, closeModal: closeAddModal , content: addModal } = useModal({formArr: formArr, handleOkCb: addModalHandleOk})
    const { showModal: showUpdateModal, content: updateModal } = useModal({formArr: formArr, handleOkCb: addModalHandleOk})

    const refretchList = () => {
        dispatch(getListThunkAction())
    }
    const addCard = () => {
        showAddModal()
    }
    const deleteItem = () => {
        dispatch(deleteCard(selectedList))
        dispatch(getListThunkAction())
        dispatch(changeSelectList([]))
    }
    return (
        <>
            <Button onClick={() => addCard()}>新增</Button>
            <Button onClick={deleteItem}>删除</Button>
            {
               addModal()
            }
            {
               updateModal()
            }
        </>
    )
}