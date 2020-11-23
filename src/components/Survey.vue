<template>
  <li>
    <h2>{{ survey.survey_type }}</h2>
    <ul v-if="indexes.length">
      <Index
        v-for="index in indexes"
        :key="index.index_code"
        :index="index"
      />
    </ul>
  </li>
</template>

<script>
import Index from './Index'

export default {
  name: 'Survey',
  props: {
    survey: {
      type: Object,
      required: true,
    }
  },
  components: {
    Index,
  },
  computed: {
    indexes() {
      return this.survey.indexes ? Object.values(this.survey.indexes) : []
    }
  },
}
</script>

<style scoped>
  h2 {
    text-decoration: underline;
  }
  li {
    list-style: none;
  }
</style>
