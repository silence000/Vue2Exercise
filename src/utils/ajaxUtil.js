const ajaxGet = (url, param, mockData) => {
  return new Promise(resolve => {
    console.log('请求后台中...')
    setTimeout(() => {
      console.log('ajaxGet', url, param)
      resolve(mockData)
      console.log('请求完成...')
    }, 1500)
  })
}

export {
  ajaxGet
}
