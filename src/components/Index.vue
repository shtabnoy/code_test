<template>
  <li>
    <!-- there are a lot of divs here -->
    <p><strong>Index: </strong>{{ index.index }}</p>
    <p><strong>Index Code: </strong>{{ index.index_code }}</p>
    <!-- if you have combined validations it is a good practice to create a computed property or data (in this case) -->
    <div v-if="hasQuestions">
      <!-- 
        1- this could have been a details element implemented in a external component,  for example:  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
        2- if you have combined validations it is a good practice to create a computed property or data
      -->
      <div role="button" :aria-expanded="ariaExpandedQuestions" @click="toggleQuestions">
        <strong>Questions:</strong>
        <Icon :name="showQuestions ? 'chevron-up' : 'chevron-down'" />
      </div>
      <ul v-show="showQuestions">
        <!-- why the Question component exist? the index component would be able to do the job -->
        <Question
          v-for="question in index.questions"
          :key="question.id"
          :question="question"
        />
      </ul>
    </div>
    <!-- if you have combined validations it is a good practice to create a computed property or data (in this case) -->
    <div v-if="hasSubIndex"> 
      <!-- 
        1- this could have been a details element implemented in a external component,  for example:  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
        2- if you have combined validations it is a good practice to create a computed property or data
      -->
      <div role="button" :aria-expanded="ariaExpandedSubIndexes" @click="toggleSubindexes">
        <strong>Subindexes:</strong>
        <Icon :name="showSubindexes ? 'chevron-up' : 'chevron-down'" />
      </div>
      <ul v-show="showSubindexes">
      <!-- prefer to use the array index, so you do not have to care about repeated data 
      PS: I am personally not a big fan of recursive component because it can be difficult to implement tests, such as snapshots
      -->
        <Index
          v-for="(subindex, i) in index.subindexes"
          :key="i" 
          :index="subindex"
        />
      </ul>
    </div>
  </li>
</template>

<script>
//alias can be used instead of relative path
import Question from '@/components/Question'
import Icon from '@/components/Icon'

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
      // as you cannot use computed for props, you can define the value in data, if you need reactiviness here, you can use computed based on the data change instead
      hasQuestions: this.index.questions && this.index.questions.length,
      hasSubIndex: this.index.subindexes && this.index.subindexes.length
    }
  },

  computed: {
    ariaExpandedQuestions () {
      return this.showQuestions ? 'true' : 'false'
    },
    ariaExpandedSubIndexes () {
      return this.showSubindexes ? 'true' : 'false'
    },
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
/* try to always use class */

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
