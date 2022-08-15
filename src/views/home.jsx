import { useDispatch, useSelector } from "react-redux"
import { changeTest } from '../dao/action'
import { selectAGetter, selectBGetter, selectTestGetter } from '../dao/selector'
export default function Home() {
    const dispatch = useDispatch()
    const a = useSelector(selectAGetter)
    const b = useSelector(selectBGetter)
    const test = useSelector(selectTestGetter)

    const change = () => {
        dispatch(changeTest(4))
    }
    return (
        <>
            <div>
                <span>a: {a}</span>
                <span>b: {b}</span>
                <div>test.a：{test.a}</div>
                <div>test.b：{test.b}</div>
                <button onClick={change}>改变</button>
            </div>
        </>
    )
}