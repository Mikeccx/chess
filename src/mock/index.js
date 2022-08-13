// // import list from './list'
// export default Mock.mock('/list', 'get', () => {
//     return {
//         status: 200,
//         success: true
//     }
// })
import Mock from 'mockjs'
Mock.setup({
    timeout:500
  })
Mock.mock('/api/list','post',(op) => {
    debugger
    return {
        status: 200,
        msg: 'post成功'
    }
})