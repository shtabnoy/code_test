<template>
  <div id="app">
    <h1>Survey List</h1>
    <div v-if="loading">
      <Icon name="spinner" />
    </div>
    <ul v-else-if="surveys.length">
      <Survey
        v-for="survey in surveys"
        :key="survey.survey_type_id"
        :survey="survey"
      />
    </ul>
  </div>
</template>

<script>
import client from 'api-client';
import Survey from './components/Survey.vue'
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  data() {
    return {
      surveys: [],
      loading: false,
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
      this.loading = true

      try {
        const surveys = await client.getListSurveys();
        this.surveys = surveys;
        console.log(surveys);
      } catch (error) {
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
}
</style>
