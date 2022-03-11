<template>
  <div class="home">
    <h3>Project Worked!</h3>
    <el-button @click="switchComp('Exercise1')" size="small">El-Switch Exercise</el-button>
    <el-button @click="switchComp('Exercise2')" size="small">For Exercise</el-button>
    <el-button @click="switchComp('Exercise3')" size="small">Debounce</el-button>
    <el-button @click="switchComp('Exercise4')" size="small">Exercise4</el-button>
    <el-button @click="switchComp('Exercise5')" size="small">Photos</el-button>
    <el-button @click="switchComp('Exercise6')" size="small">Exercise6</el-button>
    <el-button @click="switchComp('Exercise7')" size="small">Exercise7</el-button>
    <el-button @click="switchComp('Exercise8')" size="small">Exercise8</el-button>
    <el-button @click="switchComp('Exercise9')" size="small">Exercise9</el-button>
    <hr>
    <Exercise1 v-if="showComp==='Exercise1'"></Exercise1>
    <Exercise2 v-if="showComp==='Exercise2'"></Exercise2>
    <Exercise3 v-if="showComp==='Exercise3'"></Exercise3>
    <Exercise4 v-if="showComp==='Exercise4'"></Exercise4>
    <Exercise5 v-if="showComp==='Exercise5'"></Exercise5>
    <Exercise6 v-if="showComp==='Exercise6'"></Exercise6>
    <Exercise7 v-if="showComp==='Exercise7'"></Exercise7>
    <Exercise8 v-if="showComp==='Exercise8'"></Exercise8>
    <Exercise9 v-if="showComp==='Exercise9'"></Exercise9>
  </div>
</template>

<script>
import Exercise1 from '@/views/Exercise1'
import Exercise2 from '@/views/Exercise2'
import Exercise3 from '@/views/Exercise3'
import Exercise4 from '@/views/Exercise4'
import Exercise5 from '@/views/Exercise5'
import Exercise6 from '@/views/Exercise6'
import Exercise7 from '@/views/Exercise7'
import Exercise8 from '@/views/Exercise8'
import Exercise9 from '@/views/Exercise9'

export default {
  name: 'Home',
  components: {
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6,
    Exercise7,
    Exercise8,
    Exercise9
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
