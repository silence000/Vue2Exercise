<template>
  <div class="transfer12">

    <div class="transfer-left">
      <div class="left-top">
        <div>
          <input
            type="checkbox"
            :checked="isSelectedAllLeft"
            :disabled="isDisabledLeft"
            @click="handlerSelectedAll('left')"
          />全选
        </div>
        <div class="checkNum">
          {{ getListNum('leftCount') }}/{{ getListNum('leftSum') }}
        </div>
      </div>
      <div class="left-bottom">
        <el-checkbox
          v-for="(item, index) in transferList" :key="index"
          v-model="item.isSelected"
          v-show="item.showAt"
        >
          {{ item.label }}
        </el-checkbox>
      </div>
    </div>
    <div class="transfer-middle">
      <div class="middle-button">
        <el-button
          class="button-left"
          type="primary"
          @click="handleSelectedBtn(false)"
          :disabled="!isDisableBtn(false)"
        >
          <span>&lt;</span>
        </el-button>
        <el-button
          type="primary"
          @click="handleSelectedBtn(true)"
          :disabled="!isDisableBtn(true)"
        >
          <span>&gt;</span>
        </el-button>
      </div>
    </div>
    <div class="transfer-right">
      <div class="left-top">
        <div>
          <input
            type="checkbox"
            :checked="isSelectedAllRight"
            :disabled="isDisabledRight"
            @click="handlerSelectedAll('right')"
          />全选
        </div>
        <div class="checkNum">
          {{ getListNum('rightCount') }}/{{ getListNum('rightSum') }}
        </div>
      </div>
      <div class="left-bottom">
        <el-checkbox
          v-for="(item, index) in transferList"
          :key="index"
          v-model="item.isSelected"
          v-show="!item.showAt"
        >
          {{ item.label }}
        </el-checkbox>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Transfer12', // 组件名称
  components: {},
  props: ['transferList'], // 组件参数
  model: { // 用于 props 绑定父级 v-model
  },
  filters: { // 过滤器
  },
  computed: { // 计算属性
  },
  watch: { // 监听属性
    transferList: {
      handler (newVal) {
        const afterLeft = newVal.filter(item => item.showAt)
        this.isDisabledLeft = afterLeft.length === 0
        if (afterLeft.length !== 0) {
          this.isSelectedAllLeft = afterLeft.every(item => item.isSelected)
        }
        const afterRight = newVal.filter(item => !item.showAt)
        this.isDisabledRight = afterRight.length === 0
        if (afterRight.length !== 0) {
          this.isSelectedAllRight = afterRight.every(item => item.isSelected)
        }
      },
      deep: true
    }
  },
  data () {
    return {
      /*
      * 页面状态
      * */
      isSelectedAllLeft: false,
      isSelectedAllRight: false,
      isDisabledLeft: false,
      isDisabledRight: false
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    init () {
      this.transferList.forEach(item => {
        this.$set(item, 'isSelected', false)
        this.$set(item, 'showAt', true)
      })
    },
    // 选中之后点击按钮移动
    handleSelectedBtn (type) {
      this.transferList.filter(item => (item.showAt === type && item.isSelected)).forEach(item => {
        item.showAt = !item.showAt
        item.isSelected = false
      })
      if (type) {
        this.isSelectedAllLeft = false
      } else {
        this.isSelectedAllRight = false
      }
    },
    // 非选禁用
    isDisableBtn (type) {
      if (type) {
        return this.transferList.some(item => {
          return (item.showAt && item.isSelected)
        })
      } else {
        return this.transferList.some(item => {
          return (!item.showAt && item.isSelected)
        })
      }
    },
    // 右上角计数
    getListNum (type) {
      let leftCount = 0
      let leftSum = 0
      let rightCount = 0
      let rightSum = 0
      this.transferList.forEach(item => {
        if (item.showAt) {
          leftSum++
          if (item.isSelected) leftCount++
        } else {
          rightSum++
          if (item.isSelected) rightCount++
        }
      })
      let result
      switch (type) {
        case 'leftCount':
          result = leftCount
          break
        case 'leftSum':
          result = leftSum
          break
        case 'rightCount':
          result = rightCount
          break
        case 'rightSum':
          result = rightSum
          break
        default:
          result = 0
      }
      return result
    },
    // 全选
    handlerSelectedAll (type) {
      this.transferList.forEach(item => {
        if (type === 'left') {
          if (item.showAt) {
            item.isSelected = !this.isSelectedAllLeft
          }
        } else if (type === 'right') {
          if (!item.showAt) {
            item.isSelected = !this.isSelectedAllRight
          }
        }
      })
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
.transfer12 {
  width: 400px;
  display: flex;
}

.transfer-left, .transfer-right {
  width: 130px;
  margin-left: 20px;
}

.transfer-middle {
  width: 130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.middle-button {
  margin: 0 auto;
  text-align: center;
}

.el-button--primary.is-disabled {
  width: 40px;
  height: 30px;
}

.left-top {
  display: flex;
  flex: auto;
}

.checkNum {
  font-size: 14px;
  line-height: 24px;
  flex-wrap: inherit;
  margin-left: 40px;
}
</style>
