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
Mock.mock('/api/delete','post',({body: data}) => {
  const idArr = JSON.parse(data)
  // debugger
  space = space.filter(item => !idArr.includes( item.uuid))
  console.log('space', space)
    return {
            data: {
                spaces: space
            }
        }
})
// 改
Mock.mock('/api/update','post',({body: data}) => {
  // debugger
  // console.log(data)
  const {uuid, name} = JSON.parse(data)
  const index = space.findIndex(item => item.uuid == uuid)
  space[index].name = name
  // debugger
  // console.log(space[index])
    return {
        success: true
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

