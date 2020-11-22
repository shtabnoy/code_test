<template>
  <div id="app">
    <div>Survey list</div>
    <ul v-if="surveys.length">
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

export default {
  name: 'App',
  data() {
    return {
      surveys: [],
    }
  },
  components: {
    Survey,
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      client.getListSurveys().then((surveys) => {
        console.log(surveys);
        this.surveys = surveys;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
