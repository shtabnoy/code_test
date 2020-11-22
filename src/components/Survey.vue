<template>
  <li>
    <div>{{ survey.survey_type }}</div>
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

</style>
