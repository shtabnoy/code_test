<template>
  <li>
    <div>Index: {{ index.index }}</div>
    <div>Index Code: {{ index.index_code }}</div>
    <div v-if="index.questions && index.questions.length">
      <div>Questions: </div>
      <ul>
        <Question
          v-for="question in index.questions"
          :key="question.id"
          :question="question"
        />
      </ul>
    </div>
    <div v-if="index.subindexes && index.subindexes.length">
      <div>Subindexes: </div>
      <ul>
        <Index
          v-for="(subindex, i) in index.subindexes"
          :key="subindex.index_code + i"
          :index="subindex"
        />
      </ul>
    </div>
  </li>
</template>

<script>
import Question from './Question'

export default {
  name: 'Index',
  props: {
    index: {
      type: Object,
      required: true,
    }
  },
  components: {
    Question,
  },
}
</script>

<style scoped>

</style>
