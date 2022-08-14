import { useState } from 'react'
import {Checkbox} from 'antd'
import './wiki_card.less'
import { changeSelectList, updateCardThunkAction, getListThunkAction } from '../../dao/action'
import { useDispatch } from 'react-redux'
import { useModal } from '../../hooks/modal/useModal'
import { selectedListGetter } from '../../dao/selector'
import { useSelector } from 'react-redux'
export default function WikiCard (props) {
    const { selectOp } = props
    const { info } = props
    const dispatch = useDispatch()
    const selectedList = useSelector(selectedListGetter)
    const [formArr, setForm] = useState([{
        title: '空间名',
        name: 'name',
        value: info.name
    }])
    const handleOkCb = (val) => {
        dispatch(updateCardThunkAction({
            uuid: info.uuid,
            name: val.name
        }))
        dispatch(getListThunkAction())
        closeModal()
    }
    const { showModal, closeModal , content } = useModal({formArr: formArr, handleOkCb: handleOkCb})

    const { name, uuid } = props.info
    // 设置选中的卡片
    const cb = (e) => {
        setCheck(!isChecked)
    }
    let [isChecked, setCheck] = useState(false)
    // 选中卡片
    // dispatch(changeSelectList([1,2]))

    const selectCard = (e) => {
        const nList = selectedList.slice()
        e.stopPropagation()
        if (!isChecked) {
            nList.push(props.info)
        } else {
            const index = nList.findIndex((item) => item.uuid === props.info.uuid)
            nList.splice(index, 1)
        }
        setCheck(!isChecked)
        dispatch(changeSelectList(nList))
    }
    return (
        <>
            <div className='item-wraper' onClick={showModal}>
                <div className='info'>
                    <div>
                        <div className='title'>{name}</div>
                        <div className='title'>{uuid}</div>
                    </div>
                    <Checkbox onChange={(e) => {selectCard(e) }} checked={isChecked}  onClick={(e) => e.stopPropagation()}>
                    </Checkbox>
                </div>
                <div className=''>
                </div>
            </div>
            {
                content()
            }
        </>
    )
}

