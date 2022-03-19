<template>
  <div class="TestComp">
    <div>This is TestComp</div>
    <div v-for="item in myList" :key="item[idName]">
      <div @click="fetchChildData(item)">{{ item[labelName] }}</div>
      <div v-for="atom in item[childName]" :key="atom[idName]">
        <div>{{ atom[labelName] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import APP_CONSTANT from '@/utils/constant'
import { cloneDeep } from 'lodash'
import { addIdInList } from '@/utils/commonUtil'

const { labelName, childName, idName } = APP_CONSTANT.LABEL_NAME

export default {
  name: 'TestComp', // 组件名称
  components: {},
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    },
    labelName: {
      type: String,
      default: labelName
    },
    childName: {
      type: String,
      default: childName
    },
    idName: {
      type: String,
      default: idName
    }
  }, // 组件参数
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
      myList: []
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    initComp () {
      if (this.list[this.idName]) {
        this.myList = cloneDeep(this.list)
      } else {
        this.myList = addIdInList(this.list, this.childName, this.idName)
      }
    },
    fetchChildData (node) {
      this.$emit('fetchChildData', node)
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
