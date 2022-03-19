<template>
  <div class="transfer10">
    <div class="transfer-left">
      <div class="left-top">
        <div>
          <input ref="myInput"
                 type="checkbox"
                 :checked="isCheckAllLeft"
                 @click="handleCheckAll(arrLeft, 'isCheckAllLeft')"
          />全选
        </div>
        <div class="checkNum">
          {{ getSelectedNum(arrLeft) }}/{{ arrLeft.length }}
        </div>
      </div>
      <div class="left-bottom">
        <el-checkbox
          v-for="(alternative, index) in arrLeft"
          :key="index"
          v-model="alternative.isSelected"
        >
          {{ alternative.label }}
        </el-checkbox>
      </div>
    </div>
    <div class="transfer-middle">
      <div class="middle-button">
        <el-button :disabled="!isDisableBtn(arrRight)"
                    @click="handleTransfer(arrRight, arrLeft, 'isCheckAllRight')"
                   class="button-left"
                   type="primary"
                    >
          <span>&lt;</span>
        </el-button>
        <el-button
          :disabled="!isDisableBtn(arrLeft)"
          @click="handleTransfer(arrLeft, arrRight, 'isCheckAllLeft')"
          type="primary"
        >
          <span>&gt;</span>
        </el-button>
      </div>
    </div>
    <div class="transfer-right">
      <div class="left-top">
        <div>
          <input ref="myInput"
                 type="checkbox"
                 :checked="isCheckAllRight"
                 @click="handleCheckAll(arrRight, 'isCheckAllRight')"
          />全选
        </div>
        <div class="checkNum">
          {{ getSelectedNum(arrRight) }}/{{ arrRight.length }}
        </div>
      </div>
      <div class="left-bottom">
        <el-checkbox
          v-for="(alternative, index) in arrRight"
          :key="index"
          v-model="alternative.isSelected"
        >
          {{ alternative.label }}
        </el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer10', // 组件名称
  components: {},
  props: ['arrLeft'], // 组件参数
  model: { // 用于 props 绑定父级 v-model
  },
  filters: { // 过滤器
  },
  computed: { // 计算属性
  },
  watch: { // 监听属性
    arrLeft: {
      handler (newVal) {
        this.watchArr(newVal, 'isCheckAllLeft')
      },
      deep: true
    },
    arrRight: {
      handler (newVal) {
        this.watchArr(newVal, 'isCheckAllRight')
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
      isCheckAllRight: false, // 右边全选
      arrRight: [] // 右边备选框
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    init () {
      this.arrLeft.forEach((item, index) => {
        this.$set(item, 'isSelected', false)
        this.$set(item, 'order', index)
      })
    },
    // 点击全选
    handleCheckAll (arr, isCheckAll) {
      arr.forEach(item => (item.isSelected = !this[isCheckAll]))
      this[isCheckAll] = !this[isCheckAll]
    },
    // 选中备选框项, 移到另一边, 然后将原来的这边被移动项删除
    handleTransfer (properArr, afterArr, isCheckAll) {
      for (let index = 0; index < properArr.length; index++) {
        const item = properArr[index]
        if (item.isSelected) {
          afterArr.push(item)
          properArr.splice(index, 1)
          index--
        }
      }
      afterArr.forEach((item) => {
        item.isSelected = false
      })
      // 将新移动到另一边的项 排序
      afterArr.sort((a, b) => a.order - b.order)
      this[isCheckAll] = false
    },
    // 监听数组没有项的时候, 全选为 false
    watchArr (arr, isCheckAll) {
      this[isCheckAll] = arr.every(item => item.isSelected)
      if (arr.length === 0) {
        this[isCheckAll] = false
      }
    },
    // 计算选中项的数量
    getSelectedNum (arr) {
      const newArr = []
      arr.forEach(item => {
        if (item.isSelected) {
          newArr.push(item)
        }
      })
      return newArr.length
    },
    // 没有被选中项的时候, 按钮处于禁用状态
    isDisableBtn (arr) {
      return arr.some(item => item.isSelected)
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
.transfer10 {
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
