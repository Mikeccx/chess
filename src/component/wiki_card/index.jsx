import { useEffect, useState } from 'react'
import {Checkbox} from 'antd'
import './wiki_card.less'
import { useModal } from '../../hooks/modal/useModal'
import {updateCardThunkAction, getListThunkAction} from '../../dao/action'
import { useDispatch } from 'react-redux'
export default function WikiCard (props) {
    const { selectOp } = props
    const { name, uuid } = props.info
    // console.log('name', name)
    const dispatch = useDispatch()
    // 设置选中的卡片
    const cb = (e) => {
        setCheck(!isChecked)
    }
    let [isChecked, setCheck] = useState(false)
    // 选中卡片
    const selectCard = (e) => {
        if (!isChecked) {
            selectOp(uuid, 'ADD')
        } else {
            selectOp(uuid, 'DEL')
        }
        setCheck(!isChecked)
    }
    // 用于修改后确认
    const handleOkModal = (updatedValue)=>{
      // console.log('ok', updatedValue)
      const {name} = updatedValue
      dispatch(updateCardThunkAction({name, uuid}))
      dispatch(getListThunkAction())

    }

    const { showModal, closeModal , content: ModalComponent } = useModal(
      {
        formArr: [{title: '空间名', name: 'name'}],
        formObj: {
          zoneValue: name,
          modelTitle: '修改'
        },
        handleOkCb: handleOkModal
      }
    )
    const ModifyCard = (id) => {
      console.log('id',id)
      showModal()
    }
    return (
        <>
          <div className='item-wraper' onClick={(e)=>{
            ModifyCard(uuid);
          }}>
                <div className='info'>
                    <div>
                        <div className='title'>{name}</div>
                        <div className='title'>{uuid}</div>
                    </div>
                    <Checkbox 
                      onChange={(e) => {
                        selectCard(e)
                      }} 
                      onClick={(e)=>{
                        e.stopPropagation()
                      }}
                      checked={isChecked}
                    >
                    </Checkbox>
                </div>
                <div className=''>
                </div>
          </div>

          {
            ModalComponent() 
          }

        </>
    )
}

