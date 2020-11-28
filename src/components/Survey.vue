<template>
  <li>
    <h2>{{ survey.survey_type }}</h2>
    <ul v-if="indexes.length">
      <!-- prefer to use the array index, so you do not have to care about repeated data -->
      <Index
        v-for="(index, i) in indexes"
        :key="i"
        :index="index"
      />
    </ul>
  </li>
</template>

<script>
//alias can be used instead of relative path
import Index from '@/components/Index'

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
/* try to always use class */
  h2 {
    text-decoration: underline;
  }
  li {
    list-style: none;
  }
</style>
