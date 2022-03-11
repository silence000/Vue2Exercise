<template>
  <div class="Exercise7">
    <div class="border">
      <div :class="isShrink ? 'shrink': 'expand'">
        <div v-for="(item, index) in list" :key="item.id">
          <div>
            <span v-show="index === 0">{{ item.orginmentLi }}</span>
            <span :class="index !== 0 ? 'marginLeft': ''">{{ item.repaymentLi }}</span>
            <span v-show="index === 0">优惠</span>
          </div>
        </div>
      </div>
      <div v-show="isShrink" class="arrow" @click="isShrink = false">向下Icon</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise7', // 组件名称
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
      list: [
        {
          periodsLi: 1,
          dateLi: '2021-09-16',
          orginmentLi: 40000, // 原始价格
          repaymentLi: 20000 // 实际还款
        },
        {
          periodsLi: 2,
          dateLi: '2021-10-16',
          orginmentLi: 20000,
          repaymentLi: 20000
        },
        {
          periodsLi: 3,
          dateLi: '2021-11-16',
          orginmentLi: 20000,
          repaymentLi: 20000
        },
        {
          periodsLi: 4,
          dateLi: '2021-12-16',
          orginmentLi: 20000,
          repaymentLi: 20000
        },
        {
          periodsLi: 5,
          dateLi: '2022-01-16',
          orginmentLi: 20000,
          repaymentLi: 20000
        },
        {
          periodsLi: 5,
          dateLi: '2022-01-16',
          orginmentLi: 20000,
          repaymentLi: 20000
        }
      ],
      isShrink: true
    }
  },
  methods: {
    init () {
      this.list.map(item => {
        this.$set(item, 'id', Math.random().toFixed(8).replace('0.', ''))
      })
      const abc = () => {
      }
      abc()
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
.marginLeft {
  margin-left: 47px;
}
.border {
  border: 1px solid black;
}
.shrink {
  height: 88px;
  max-height: 88px;
  overflow: hidden;
}
.expand {
  height: 110px;
  max-height: 110px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.expand::-webkit-scrollbar {
  display: none;
}
.arrow {
  margin-left: 50px;
}
</style>
