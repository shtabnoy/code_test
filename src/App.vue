<template>
  <div id="app">
    <h1>Survey List</h1>
    <!-- no need for the div, add a class to your element and position it as you want -->
    <Icon name="spinner" v-if="loading" />
    <!-- no need to double check, trust the states -->
    <ul v-else>
      <!-- prefer to use the array index, so you do not have to care about repeated data -->
      <Survey
        v-for="(survey, index) in surveys"
        :key="index"
        :survey="survey"
      />
    </ul>
  </div>
</template>

<script>
import client from 'api-client';
//alias can be used instead of relative path
import Survey from '@/components/Survey.vue'
import Icon from '@/components/Icon.vue'

export default {
  name: 'App',
  data() {
    return {
      surveys: [],
      loading: true,
    }
  },
  components: {
    Survey,
    Icon,
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      // this.loading = true -> initial data is always set inside data, and then modified

      try {
        const surveys = await client.getListSurveys();
        this.surveys = surveys;
        console.log(surveys); // left over?
      } catch (error) {
         // where does the use see this? an error component can be handy
        console.error('Oops... Error happended: ' + error);
      }
      
      this.loading = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}
</style>
