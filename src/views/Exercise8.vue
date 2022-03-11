<template>
  <div class="exercise8">
    <div v-for="one in treeData" :key="one.id">
      <div @click="one.isShow = !one.isShow">{{ one.content }}</div>
      <div v-for="two in one.children" :key="two.id" style="margin-left: 15px">
        <div @click="two.isShow = !two.isShow" v-show="!one.isShow">{{ two.content }}</div>
        <div v-for="three in two.children" :key="three.id" style="margin-left: 15px">
          <div @click="(three.isShow = !three.isShow) && (two.isShow = !two.isShow)" v-show="two.isShow && !one.isShow">{{ three.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise8', // 组件名称
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
      treeData: []
    }
  },
  methods: {
    initComp () {
      this.treeData = [
        {
          id: '100',
          content: '一级 1',
          isShow: true,
          children: [
            {
              id: '110',
              content: '二级 1-1',
              isShow: false,
              children: [
                {
                  id: '111',
                  content: '三级 1-1-1',
                  isShow: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: '200',
          content: '一级 2',
          isShow: true,
          children: [
            {
              id: '210',
              content: '二级 2-1',
              isShow: false,
              children: [
                {
                  id: '211',
                  content: '三级 2-1-1',
                  isShow: false,
                  children: []
                }
              ]
            },
            {
              id: '220',
              content: '二级 2-2',
              isShow: false,
              children: [
                {
                  id: '221',
                  content: '三级 2-2-1',
                  isShow: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: '300',
          content: '一级 3',
          isShow: true,
          children: [
            {
              id: '310',
              content: '二级 3-1',
              isShow: false,
              children: [
                {
                  id: '311',
                  content: '三级 3-1-1',
                  isShow: false,
                  children: []
                },
                {
                  id: '312',
                  content: '三级 3-1-2',
                  isShow: false,
                  children: []
                }
              ]
            },
            {
              id: '320',
              content: '二级 3-2',
              isShow: false,
              children: [
                {
                  id: '321',
                  content: '三级 3-2-1',
                  isShow: false,
                  children: []
                },
                {
                  id: '322',
                  content: '三级 3-2-2',
                  isShow: false,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  },
  beforeCreate () { // 播放加载动画
  },
  created () { // 结束加载动画, 发起异步请求
    this.initComp()
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
