<template>
  <div class="exercise5">
    <img v-for="(item, index) in fileList" :key="index" :src="item" height="50" width="50" alt=""/>
    <input type="file" ref="inputRef" @change="uploadPhoto()"/>
  </div>
</template>

<script>
export default {
  name: 'Exercise5', // 组件名称
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
      fileList: []
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    uploadPhoto () {
      const photo = this.$refs.inputRef.files[0]
      this.fileList.push(photo)
    }
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
