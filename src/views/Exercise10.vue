<template>
  <div class="exercise10">
    <div>穿梭框练习(思路一)</div>
    <Transfer12 :transferList="arrLeft"></Transfer12>
  </div>
</template>

<script>
import Transfer12 from '@/components/Transfer12'
export default {
  name: 'Exercise10', // 组件名称
  components: { Transfer12 },
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
      arrLeft: []
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    init () {
      this.arrLeft = [
        {
          label: '备选项1'
        },
        {
          label: '备选项2'
        },
        {
          label: '备选项3'
        },
        {
          label: '备选项4'
        },
        {
          label: '备选项5'
        },
        {
          label: '备选项6'
        }
      ] // 左边备选框
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
