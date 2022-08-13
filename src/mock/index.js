import Mock from 'mockjs'
import { space } from './data'
// 设置延时
Mock.setup({
    timeout:500
})

// 增
Mock.mock('/api/add','post',({body}) => {
    const data = JSON.parse(body)
    space.push({
        uudi: +new Date(),
        name: data.name
    })
    return {
        success: true
    }
})
// 删
Mock.mock('/api/delete','post',(id) => {
    return {
            data: {
                spaces: space
            }
        }
})
// 改
Mock.mock('/api/update','post',({uuid}) => {
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

