function getList (param) {
  const data = {
    name: '小明',
    age: 18
  }
  console.log(data['param'])
  return [
    {
      right: '巧克力'
    },
    {
      right: '牛奶'
    },
    {
      right: 1
    },
    {
      right: 'abc'
    },
    {
      right: 'def'
    }
  ]
}

export {
  getList
}
