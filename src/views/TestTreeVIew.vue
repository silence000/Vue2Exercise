<template>
  <div class="DocumentTest">
    <div>This is DocumentTest</div>
    <TestComp
      :list="myList"
      labelName="name"
      childName="child"
      @fetchChildData="fetchChildData"
    >
    </TestComp>
  </div>
</template>

<script>
import { ajaxGet } from '@/utils/ajaxUtil'
import TestComp from '@/components/TreeComp'

export default {
  name: 'DocumentTest', // 组件名称
  components: { TestComp },
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
      myList: [
        {
          name: '小明',
          child: []
        },
        {
          name: '小红',
          child: []
        }
      ],
      /*
      * 页面数据
      * */
      checked: false
    }
  },
  methods: {
    async fetchChildData (node) {
      const mockData = [
        {
          name: '小明的儿子1',
          child: []
        },
        {
          name: '小明的儿子2',
          child: []
        }
      ]
      node.child = await ajaxGet('/get/', node.id, mockData)
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
