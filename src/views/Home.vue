<template>
  <div class="home">
    <h3>Project Worked!</h3>
    <el-button @click="switchComp('Exercise1')" size="small">Exercise1</el-button>
    <hr>
    <Exercise1 v-if="showComp==='Exercise1'"></Exercise1>
  </div>
</template>

<script>
import Exercise1 from '@/views/Exercise1'
export default {
  name: 'Home',
  components: {
    Exercise1
  },
  data () {
    return {
      showComp: ''
    }
  },
  methods: {
    switchComp (compName) {
      this.showComp = compName
    }
  }
}
</script>
