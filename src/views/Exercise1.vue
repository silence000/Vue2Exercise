<template>
  <div class="exercise1">
    <div>问题描述: 下面有一个方块, 需求如下: 需要在开关关闭的时候(白天模式)显示黄色方块, 开关开启的时候(夜间模式)显示黑色方块</div>
    <div class="square yellow"></div>
    <el-switch
      inactive-color="#ff4949"
      active-text="夜间模式"
      inactive-text="白天模式"
    ></el-switch>
  </div>
</template>

<script>
export default {
  name: 'Exercise1', // 组件名称
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
.square {
  height: 100px;
  width: 100px;
}
.yellow {
  background-color: yellow;
}
</style>
