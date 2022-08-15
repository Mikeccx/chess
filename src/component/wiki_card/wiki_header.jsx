import { getListThunkAction, addCardThunkAction, changeSelectList, deleteCard } from '../../dao/action'
import { useDispatch } from 'react-redux'
import { Button, message } from 'antd'
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
        dispatch(addCardThunkAction(e))
        dispatch(getListThunkAction())
        closeAddModal()
        message.info('新增成功')
    }
    const deleteItem = () => {
        dispatch(deleteCard(selectedList))
        dispatch(getListThunkAction())
        dispatch(changeSelectList([]))
        closeDeleteModal()
        message.info('删除成功')
    }
    const { showModal: showAddModal, closeModal: closeAddModal , content: addModal } = useModal({formArr: formArr, handleOkCb: addModalHandleOk})
    const { showModal: showUpdateModal, content: updateModal } = useModal({formArr: formArr, handleOkCb: addModalHandleOk})
    const { showModal: showDeleteModal, closeModal: closeDeleteModal, content: deleteModal } = useModal({formArr: [], tips:'是否删除？' , title: '提示', handleOkCb: deleteItem})

    const refretchList = () => {
        dispatch(getListThunkAction())
    }
    const addCard = () => {
        showAddModal()
    }

    return (
        <>
            <div className='button-wraper'>
                <Button onClick={() => addCard()}>新增</Button>
                <Button onClick={showDeleteModal}>删除</Button>
            </div>
            {
               addModal()
            }
            {
               updateModal()
            }
            {
               deleteModal()
            }
        </>
    )
}