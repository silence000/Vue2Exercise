<template>
  <div class="Exercise6">
    <div v-for="(item, index) in list" :key="item.id">
      <span>{{ item.left }}</span>
      <span v-if="index !== list.length - 1">{{ item.right }}</span>
      <span v-else>{{ item.right === 1 ? '是1' : '不是1' }}</span>
    </div>
  </div>
</template>

<script>
import { getList } from '@/assets/mock'

export default {
  name: 'Exercise6', // 组件名称
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
      list: [
        {
          left: '标题1'
        },
        {
          left: '标题2'
        },
        {
          left: '标题3'
        }
      ],
      list2: [
        {
          left: 'Abc'
        },
        {
          left: 'Def'
        }
      ]
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    init () {
      const data = getList('age')
      this.setData('list', data)
      data.splice(0, this.list.length)
      this.setData('list2', data)
      // console.log(this.list, this.list2)
    },
    setData (props, arr) {
      this[props].map((item, index) => {
        this.$set(item, 'id', Math.random().toFixed(8).replace('0.', ''))
        this.$set(item, 'right', JSON.parse(JSON.stringify(arr[index].right)))
      })
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

</style>
