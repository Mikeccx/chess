import './wiki.less'
import {useState} from 'react'
import WikiCard from '../../component/wiki_card'
import {getListThunkAction, setSelectListAction } from '../../dao/action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { wikiListGetter } from '../../dao/selector'
import { useEffect } from 'react'
export default function Wiki() {
    const [selectList, setSelectList] = useState([])
    const disPatch = useDispatch()
    useEffect(() => {
      disPatch(getListThunkAction())
    },  [])
    const wikiList = useSelector(wikiListGetter)


    
    const selectOp = function(id, actionType){
      // console.log(`id:${id}, actionType:${actionType}`)
      switch(actionType){
        case 'ADD':
          const newList = [...selectList, wikiList[id].uuid]
          Promise.resolve().then(()=>{
            setSelectList(newList)
          }).then(()=>{
            // debugger
            disPatch(setSelectListAction(newList))
          })
          break
        case 'DEL':
          const index = selectList.findIndex(item => item === id)
          const newList2 = [...selectList.slice(0,index), ...selectList.slice(index+1)]
          Promise.resolve().then(()=>{
            setSelectList(newList2)
          }).then(()=>{
            disPatch(setSelectListAction(newList2))
          })
          break
      }

    }
    return (
        <>
            <div className="wiki-wraper">
                {
                    wikiList ? 
                    Object.keys(wikiList)?.map((key) => {
                        return <WikiCard selectOp={selectOp} info={wikiList[key]} key={key}/>
                    }) : '暂无数据'
                }

            </div>
        </>
    )
}