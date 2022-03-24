<template>
  <div class="slideShow1">
    <div class="container">
      <div
        class="leftButton"
        @click="cutImg(-1)"
      >左
      </div>
      <div class="image">
        <div class="bigImg">
          <img :src="currentImg.url" v-show="currentImg.url" alt=""/>
        </div>
        <div class="smallImg">
          <div
            :class="cutBorderColor(item)"
            @click="getBigImg(item, index)"
            v-for="(item, index) in imgUrl" :key="item.id"
          >
            <img :src="item.url" alt=""/>
          </div>
        </div>
      </div>
      <div
        class="rightButton"
        @click="cutImg(1)"
      >右
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShow1', // 组件名称
  components: {},
  props: ['imgUrl'], // 组件参数
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
      currentImg: { // 当前激活的图片
        index: '',
        url: ''
      }
      /*
      * 页面数据
      * */
    }
  },
  methods: {
    init () {
      this.currentImg.index = 0
      this.currentImg.url = this.imgUrl[0].url
      // 把图片的每一个状态循环进图片数组
      this.imgUrl.forEach(item => {
        this.$set(item, 'isActivated', false)
      })
      // 将图片数组中的第一个状态 默认改成true
      this.imgUrl[0].isActivated = true
    },
    getBigImg (item, index) {
      this.currentImg.url = item.url
      this.imgUrl[this.currentImg.index].isActivated = false
      this.currentImg.index = index
      this.imgUrl[this.currentImg.index].isActivated = true
    },
    cutImg (val) {
      this.imgUrl[this.currentImg.index].isActivated = false
      this.currentImg.index += val
      if (this.currentImg.index > this.imgUrl.length - 1) {
        this.currentImg.index = 0
      } else if (this.currentImg.index < 0) {
        this.currentImg.index = this.imgUrl.length - 1
      }
      this.currentImg.url = this.imgUrl[this.currentImg.index].url
      this.imgUrl[this.currentImg.index].isActivated = true
    },
    cutBorderColor (item) {
      if (item.isActivated) {
        return 'smallImg-box-red smallImg-box'
      }
      return 'smallImg-box-white smallImg-box'
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
.slideShow1 {
  width: 1000px;
}

.container {
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.leftButton, .rightButton {
  width: 40px;
  height: 80px;
  border: cadetblue 5px solid;
  text-align: center;
  line-height: 70px;
  margin: 0 10px;
}

.image {
  margin: 0 30px;
  width: 600px;
  height: 350px;
}

.bigImg {
  width: 600px;
  height: 350px;

  img {
    width: 600px;
    height: 350px;
  }
}

.smallImg {
  margin-top: 10px;
  width: 600px;
  height: 70px;

  .smallImg-box {
    display: inline-block;
    width: 100px;
    height: 70px;
  }

  .smallImg-box ~ .smallImg-box {
    margin-left: 10px;
  }

  .smallImg-box-white {
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .smallImg-box-red {
    border: 1px solid rgb(255, 0, 0);
  }

  img {
    width: 100px;
    height: 70px;
  }
}
</style>
