<template>
  <li>
    <div><strong>Id:</strong> {{ question.id }}</div>
    <div><strong>Name:</strong> {{ question.name }}</div>
    <div v-if="question.project_id && question.project_id.length">
      <strong>Project ids:</strong> {{ question.project_id.join(', ') }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>
