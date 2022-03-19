<template>
  <div class="exercise9">
    <SlideShow :imgUrl="imgUrl"></SlideShow>
  </div>
</template>

<script>
import SlideShow from '@/components/SlideShow'
export default {
  name: 'Exercise9', // 组件名称
  components: { SlideShow },
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
      imgUrl: []
    }
  },
  methods: {
    init () {
      this.imgUrl = [
        {
          id: '01',
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F0F420111017%2F200F4111017-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg'
        },
        {
          id: '02',
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-26bfc580456dde113b9c00a5bbdc5b54_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg'
        },
        {
          id: '03',
          url: 'https://img0.baidu.com/it/u=2070476451,3482180918&fm=253&fmt=auto&app=138&f=JPEG'
        }
      ]
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
.exercise9 {
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
