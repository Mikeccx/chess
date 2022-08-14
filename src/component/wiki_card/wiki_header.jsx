import { getListThunkAction, addCardThunkAction } from '../../dao/action'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'antd'
import { useEffect } from 'react'
import { useModal } from '../../hooks/modal/useModal'
import { useState } from 'react'
export default function WikiHeader() {
    const dispatch = useDispatch()
    const formArr = [
      {title: '空间名', name: 'name'}
    ]

    
    const addModalHandleOk = (e) => {
        dispatch(addCardThunkAction(e))
        fetchList()
    }

    const { showModal: showAddModal, closeModal: closeAddModal , content: addModal } = useModal({formArr: formArr, handleOkCb: addModalHandleOk})
    const { showModal: showUpdateModal, content: updateModal } = useModal({formArr: formArr, handleOkCb: addModalHandleOk})

    const fetchList = () => {
        dispatch(getListThunkAction())
    }
    

    const addCard = () => {
        showAddModal()
    }
    return (
        <div>
            <Button onClick={() => addCard()}>新增</Button>
            <Button>删除</Button>
            { addModal() }     
            {updateModal() }
        </div>
    )
}