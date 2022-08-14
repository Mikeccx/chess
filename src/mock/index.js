import Mock from 'mockjs'
import { spaceData } from './data'
// 设置延时
Mock.setup({
    timeout:500
})
let space = spaceData
// 增
Mock.mock('/api/add','post',({body}) => {
    const data = JSON.parse(body)
    space.push({
        uuid: +new Date(),
        name: data.name
    })
    return {
        success: true
    }
})
// 删
Mock.mock('/api/delete','post',({body}) => {
    const data = JSON.parse(body)
    const listId = data.map((item) => (item.uuid))
    space = space.filter((item) => !listId.includes(item.uuid))
    return {
            data: {
                spaces: space
            }
        }
})
// 改
Mock.mock('/api/update','post',({body}) => {
    const data = JSON.parse(body)
    const res = space.find((item) => item.uuid === data.uuid)
    res.name = data.name
    return {
            data: {
                spaces: space
            }
        }
})
// 获取列表
Mock.mock('/api/get','post',(op) => {
    return {
            data: {
                spaces: space
            }
        }
})

