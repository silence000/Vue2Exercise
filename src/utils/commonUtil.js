import APP_CONSTANT from '@/utils/constant'
import { cloneDeep } from 'lodash'

/**
 * 给一个数组添加 ID
 * @param arr 待添加 ID 的数组
 * @param childName 数组自己的字段名
 * @param idName ID名
 * @returns { any [] } 添加 ID 后的数组
 */
const addIdInList = (
  arr,
  childName = APP_CONSTANT.LABEL_NAME.childName,
  idName = APP_CONSTANT.LABEL_NAME.idName
) => {
  // 1. 进行深拷贝, 防止修改原数组
  const myArr = cloneDeep(arr)
  // 2. 新建递归函数, 用来递归自己 n 层子级数组
  const doAddIdInList = (myArr) => {
    myArr.forEach(item => {
      // 对当前层级设置随机 8位 ID
      item[idName] = Math.random().toFixed(8).replace('0.', '')
      // 判断是否有子级数组, 有的话再调用自己, 形成递归
      if (item[childName] && item[childName].length !== 0) {
        // 递归子级
        doAddIdInList(item[childName])
      }
    })
  }
  // 3. 执行递归
  doAddIdInList(myArr)
  // 4. 返回处理后的数组
  return myArr
}

export {
  addIdInList
}
