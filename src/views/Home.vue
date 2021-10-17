<template>
  <div class="home">
    <h3>Project Worked!</h3>
    <el-button @click="switchComp('Exercise1')" size="small">El-Switch Exercise</el-button>
    <el-button @click="switchComp('Exercise2')" size="small">For Exercise</el-button>
    <el-button @click="switchComp('Exercise3')" size="small">Debounce</el-button>
    <hr>
    <Exercise1 v-if="showComp==='Exercise1'"></Exercise1>
    <Exercise2 v-if="showComp==='Exercise2'"></Exercise2>
    <Exercise3 v-if="showComp==='Exercise3'"></Exercise3>
  </div>
</template>

<script>
import Exercise1 from '@/views/Exercise1'
import Exercise2 from '@/views/Exercise2'
import Exercise3 from '@/views/Exercise3'

export default {
  name: 'Home',
  components: {
    Exercise1,
    Exercise2,
    Exercise3
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
