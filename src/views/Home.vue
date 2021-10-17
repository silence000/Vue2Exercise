<template>
  <div class="home">
    <h3>Project Worked!</h3>
    <el-button @click="switchComp('Exercise1')" size="small">El-Switch Exercise</el-button>
    <el-button @click="switchComp('Exercise2')" size="small">For Exercise</el-button>
    <hr>
    <Exercise1 v-if="showComp==='Exercise1'"></Exercise1>
    <Exercise2 v-if="showComp==='Exercise2'"></Exercise2>
  </div>
</template>

<script>
import Exercise1 from '@/views/Exercise1'
import Exercise2 from '@/views/Exercise2'
export default {
  name: 'Home',
  components: {
    Exercise1,
    Exercise2
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
