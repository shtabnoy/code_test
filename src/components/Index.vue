<template>
  <li>
    <h3>Index: <span>{{ index.index }}</span></h3>
    <h3>Index Code: <span>{{ index.index_code }}</span></h3>
    <div v-if="index.questions && index.questions.length">
      <h3 @click="toggleQuestions">Questions: <Icon :name="showQuestions ? 'chevron-up' : 'chevron-down'" /></h3>
      <ul v-show="showQuestions">
        <Question
          v-for="question in index.questions"
          :key="question.id"
          :question="question"
        />
      </ul>
    </div>
    <div v-if="index.subindexes && index.subindexes.length">
      <h3 @click="toggleSubindexes">Subindexes: <Icon :name="showSubindexes ? 'chevron-up' : 'chevron-down'" /></h3>
      <ul v-show="showSubindexes">
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
import Icon from './Icon'

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
    Icon,
  },
  data() {
    return {
      showSubindexes: false,
      showQuestions: false,
    }
  },
  methods: {
    toggleQuestions() {
      this.showQuestions = !this.showQuestions;
    },
    toggleSubindexes() {
      this.showSubindexes = !this.showSubindexes;
    }
  }
}
</script>

<style scoped>
  h3 > span {
    font-weight: normal;
  }
</style>
