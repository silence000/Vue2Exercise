<template>
  <div class="exercise3">
    Exercise3
    测试防抖
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Exercise3', // 组件名称
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
    handleSubmit: _.debounce(() => {
      console.log('debounce')
    }, 1000, {
      leading: true,
      trailing: false
    })
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
