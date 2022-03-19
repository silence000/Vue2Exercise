<template>
  <div class="TestComp">
    <div v-for="item in myList" :key="item[idName]">
      <div @click="switchChild(item)">
        <span v-show="item.isLoading">[加载中...]</span>
        <span>{{ item[labelName] }}</span>
      </div>

      <div v-show="item.isShowChild">
        <div v-for="atom in item[childName]" :key="atom[idName]">
          <span v-show="atom.isLoading">[加载中...]</span>
          <span>{{ atom[labelName] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APP_CONSTANT from '@/utils/constant'
import { cloneDeep } from 'lodash'
import { recursionArr, addIdInList } from '@/utils/commonUtil'

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
      const myList = this.list[this.idName] ? cloneDeep(this.list) : addIdInList(this.list, this.childName, this.idName)
      const kvMap = {
        isLoading: () => false,
        isShowChild: () => false
      }
      kvMap[this.childName] = () => []
      this.myList = recursionArr(myList, this.childName, kvMap)
    },
    switchChild (node) {
      node.isShowChild = !node.isShowChild
      if (node.isShowChild && node[this.childName].length === 0) {
        node.isLoading = true
        new Promise(resolve => {
          this.$emit('fetchChildData', { node, resolve })
        }).then(data => {
          const kvMap = {}
          kvMap[this.childName] = () => []
          node[this.childName] = recursionArr(data, this.childName, kvMap)
          node.isLoading = false
        })
      }
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
