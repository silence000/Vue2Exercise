<template>
  <div class="exercise2">
    <div :class="matchColors(item.color)" v-for="(item) in dataList" :key="item.id">
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise2', // 组件名称
  components: {},
  props: {}, // 组件参数
  model: { // 用于 props 绑定父级 v-model
  },
  filters: { // 过滤器
  },
  computed: { // 计算属性
  },
  watch: { // 监听属性
  },
  data () {
    return {
      /*
      * 页面状态
      * */
      dataList: []
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    init () {
      this.dataList = [
        {
          id: '1',
          title: '支付',
          url: '123',
          color: 'red1'
        },
        {
          id: '2',
          title: '收藏',
          url: '456',
          color: 'yellow2'
        },
        {
          id: '3',
          title: '朋友圈',
          url: '789',
          color: 'green3'
        },
        {
          id: '4',
          title: '设置',
          url: '10JQ',
          color: 'blue4'
        }
      ]
    },
    matchColors (color) {
      switch (color) {
        case 'red1':
          return 'red'
        case 'yellow2':
          return 'yellow'
        case 'green3':
          return 'green'
        case 'blue4':
          return 'blue'
      }
    }
  },
  beforeCreate () { // 播放加载动画
  },
  created () { // 结束加载动画, 发起异步请求
    this.init()
  },
  mounted () { // DOM构建完成, 即将显示页面
  },
  updated () { // view重新渲染, 数据更新
  },
  beforeDestroy () { // 组件实例销毁之前
  }
}
</script>

<style scoped lang="scss">
.bottom-border {
  border-bottom: 2px solid black;
}
.red {
  color: red;
}
.yellow {
  color: yellow;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
</style>
