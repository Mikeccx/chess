import './wiki.less'
import {useState} from 'react'
import WikiCard from '../../component/wiki_card'
import {getListThunkAction} from '../../dao/action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { wikiListGetter } from '../../dao/selector'
import { useEffect } from 'react'
export default function Wiki() {
    const [selectOp, setSelect] = useState([])
    const disPatch = useDispatch()
    useEffect(() => {
        disPatch(getListThunkAction())
    },  [])
    const wikiList = useSelector(wikiListGetter)
    return (
        <>
            <div className="wiki-wraper">
                {
                    wikiList ? 
                    Object.keys(wikiList)?.map((key) => {
                        return <WikiCard selectOp={selectOp} info={wikiList[key]} key={key}/>
                    }) : null
                    // wikiList?.map((item) => <WikiCard selectOp={selectOp} info={item}/>)
                }

            </div>
        </>
    )
}