import APP_CONSTANT from '@/utils/constant'
import { cloneDeep } from 'lodash'

/**
 * 递归处理数组
 * @param arr 待处理的数组
 * @param childName 数组子级的字段名
 * @param kvMap = {
 *   key: () => {} // 映射关系
 * }
 * @returns { any [] } 处理后的数组
 */
const recursionArr = (
  arr,
  childName = APP_CONSTANT.LABEL_NAME.childName,
  kvMap
) => {
  const myArr = cloneDeep(arr)
  const doAddIdInList = (myArr) => {
    myArr.forEach(item => {
      Object.keys(kvMap).forEach(key => {
        item[key] = kvMap[key]()
      })
      if (item[childName] && item[childName].length !== 0) {
        doAddIdInList(item[childName])
      }
    })
  }
  doAddIdInList(myArr)
  return myArr
}

/**
 * 给一个数组添加 ID
 * @param arr 待添加 ID 的数组
 * @param childName 数组子级的字段名
 * @param idName ID名
 * @returns { any [] } 添加 ID 后的数组
 */
const addIdInList = (
  arr,
  childName = APP_CONSTANT.LABEL_NAME.childName,
  idName = APP_CONSTANT.LABEL_NAME.idName
) => {
  const kvMap = {}
  kvMap[idName] = () => Math.random().toFixed(8).replace('0.', '')
  return recursionArr(arr, childName, kvMap)
}

export {
  recursionArr,
  addIdInList
}
