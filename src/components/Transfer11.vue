<template>
  <div class="transfer11">
    <div class="transfer-left">
      <div class="left-top">
        <div>
          <input
            type="checkbox"
            :checked="isCheckAllLeft"
            @click="handleSelectAll('left')"
          />全选
        </div>
        <div class="checkNum">
          {{ getListNum('leftSelected') }}/{{ getListNum('leftSum') }}
        </div>
      </div>
      <div class="left-bottom">
        <el-checkbox
          v-for="(item, index) in transferList"
          :key="index"
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
          @click="handleTransferBtn(false)"
          :disabled="!isDisableBtn(false)"
        >
          <span>&lt;</span>
        </el-button>
        <el-button
          type="primary"
          @click="handleTransferBtn(true)"
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
            ref="myInput"
            type="checkbox"
            :checked="isCheckAllRight"
            @click="handleSelectAll('right')"
          />全选
        </div>
        <div class="checkNum">
          {{ getListNum('rightSelected') }}/{{ getListNum('rightSum') }}
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
  name: 'Transfer11', // 组件名称
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
        const leftAfter = newVal.filter(item => item.showAt)
        if (leftAfter.length !== 0) {
          this.isCheckAllLeft = leftAfter.every(item => item.isSelected)
        }
        const rightAfter = newVal.filter(item => !item.showAt)
        if (rightAfter.length !== 0) {
          this.isCheckAllRight = rightAfter.every(item => item.isSelected)
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
      isCheckAllLeft: false, // 左边全选
      isCheckAllRight: false // 右边全选
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
    handleTransferBtn (type) {
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
    getListNum (type) {
      let countLeft = 0
      let countRight = 0
      let selectedLeft = 0
      let selectedRight = 0
      this.transferList.forEach(item => {
        if (item.showAt) {
          countLeft++
          if (item.isSelected) selectedLeft++
        } else {
          countRight++
          if (item.isSelected) selectedRight++
        }
      })
      let result
      switch (type) {
        case 'leftSum':
          result = countLeft
          break
        case 'leftSelected':
          result = selectedLeft
          break
        case 'rightSum':
          result = countRight
          break
        case 'rightSelected':
          result = selectedRight
          break
        default:
          result = 0
      }
      return result
    },
    handleSelectAll (type) {
      this.transferList.forEach(item => {
        if (type === 'left') {
          if (item.showAt) {
            item.isSelected = !this.isCheckAllLeft
          }
        } else if (type === 'right') {
          if (!item.showAt) {
            item.isSelected = !this.isCheckAllRight
          }
        }
      })
    },
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
.transfer11 {
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
