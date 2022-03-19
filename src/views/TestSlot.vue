<template>
  <div class="TestSlot">
    <div>我是父组件</div>
    <slot-comp :user="user" v-slot:default="{ user }">
      <h1>123</h1>
      <div>{{ user.firstName }}</div>
    </slot-comp>
  </div>
</template>

<script>
import SlotComp from '@/components/SlotComp'
export default {
  name: 'TestSlot', // 组件名称
  components: { SlotComp },
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
      user: {
        firstName: '黄',
        lastName: '小明'
      }
      /*
      * 页面数据
      * */
    }
  },
  methods: {
  },
  beforeCreate () { // 播放加载动画
  },
  created () { // 结束加载动画, 发起异步请求
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
