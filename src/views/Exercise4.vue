<template>
  <div class="exercise4">
    <div>
      <span>省: </span>
      <el-select v-model="selectedProvince" placeholder="请选择" size="mini" @change="test(3)">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div>
      <span>市: </span>
      <el-select v-model="selectedCity" placeholder="请选择" size="mini" @change="test(2)">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div>
      <span>县: </span>
      <el-select v-model="selectedCounty" placeholder="请选择" size="mini" @change="test(1)">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div>
      <span>镇: </span>
      <el-select v-model="selectedZhen" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Exercise4', // 组件名称
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
      options1: [
        {
          value: '选项1',
          label: '黑龙江'
        }, {
          value: '选项2',
          label: '吉林'
        }, {
          value: '选项3',
          label: '辽宁'
        }],
      options2: [
        {
          value: '选项1',
          label: '长春市'
        }, {
          value: '选项2',
          label: '铁岭市'
        }, {
          value: '选项3',
          label: '哈尔滨市'
        }
      ],
      options3: [
        {
          value: '选项1',
          label: 'A县'
        }, {
          value: '选项2',
          label: 'B县'
        }, {
          value: '选项3',
          label: 'C县'
        }],
      options4: [
        {
          value: '选项1',
          label: 'A镇'
        }, {
          value: '选项2',
          label: 'B镇'
        }, {
          value: '选项3',
          label: 'C镇'
        }],
      /*
      * 页面数据
      * */
      selectedProvince: '',
      selectedCity: '',
      selectedCounty: '',
      selectedZhen: ''
    }
  },
  methods: {
    test (type) {
      // if (type === 1) {
      //   this.selectedZhen = ''
      // }
      // if (type === 2) {
      //   this.selectedCounty = ''
      //   this.selectedZhen = ''
      // }
      // if (type === 3) {
      //   this.selectedCity = ''
      //   this.selectedCounty = ''
      //   this.selectedZhen = ''
      // }

      this.selectedZhen = ''
      if (type > 1) {
        this.selectedCounty = ''
      }
      if (type > 2) {
        this.selectedCity = ''
      }
    }
  },
  beforeCreate () { // 播放加载动画
  },
  created () { // 结束加载动画, 发起异步请求
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
