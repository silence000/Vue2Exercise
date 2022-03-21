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
      // 1. 判断 数组的元素中是否有 id, 如果有 id, 直接深拷贝, 如果没有, 则添加 id
      const myList = this.list[this.idName] ? cloneDeep(this.list) : addIdInList(this.list, this.childName, this.idName)
      // 2. 初始化数组, 向数组添加页面中需要的属性, 添加 isLoading 属性, isShowChild 属性, child 属性
      const kvMap = {
        isLoading: () => false,
        isShowChild: () => false
      }
      kvMap[this.childName] = () => []
      // 3. 使用公共方法, 进行添加属性
      this.myList = recursionArr(myList, this.childName, kvMap)
    },
    switchChild (node) {
      // 1. 切换子级显示
      node.isShowChild = !node.isShowChild
      // 2. 如果有子级, 且子级数组长度为 0, 则向父组件请求子级数据
      if (node.isShowChild && node[this.childName].length === 0) {
        // 3. 设置开启 加载中动画
        node.isLoading = true
        // 4. 新建 Promise
        new Promise(resolve => {
          // 5. 向父级发送事件, 并携带, 用户点击的当前节点和 resolve方法, 当父级 执行 resolve方法时, 子级可拿到父级请求到的数据
          this.$emit('fetchChildData', { node, resolve })
        }).then(data => {
          // 6. 处理父级返回来的数据
          const kvMap = {
            isLoading: () => false,
            isShowChild: () => false
          }
          kvMap[this.childName] = () => []
          // 7. 使用公共方法进行初始化
          node[this.childName] = recursionArr(data, this.childName, kvMap)
          // 8. 全部处理完毕后, 将加载中动画关闭
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
