import './wiki.less'
import {useState} from 'react'
import WikiCard from '../../component/wiki_card'
import {getListThunkAction} from '../../dao/action'
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
          setSelectList([...selectList, wikiList[id]])
          break
        case 'DEL':
          const index = selectList.findIndex(item => item.uuid === id)
          setSelectList([...selectList.slice(0,index), ...selectList.slice(index+1)])
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