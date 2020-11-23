<template>
  <li>
    <div><strong>Index: </strong>{{ index.index }}</div>
    <div><strong>Index Code: </strong>{{ index.index_code }}</div>
    <div v-if="index.questions && index.questions.length">
      <div role="button" :aria-expanded="showQuestions ? 'true' : 'false'" @click="toggleQuestions">
        <strong>Questions:</strong>
        <Icon :name="showQuestions ? 'chevron-up' : 'chevron-down'" />
      </div>
      <ul v-show="showQuestions">
        <Question
          v-for="question in index.questions"
          :key="question.id"
          :question="question"
        />
      </ul>
    </div>
    <div v-if="index.subindexes && index.subindexes.length">
      <div role="button" :aria-expanded="showSubindexes ? 'true' : 'false'" @click="toggleSubindexes">
        <strong>Subindexes:</strong>
        <Icon :name="showSubindexes ? 'chevron-up' : 'chevron-down'" />
      </div>
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
  li {
    margin: 12px 0;
    list-style: none;
  }
  [role="button"] {
    cursor: pointer;
    text-decoration: underline;
  }
  [role="button"] > span {
    margin-left: 6px;
  }
</style>
