<template>
  <li>
    <!-- there are a lot of divs here -->
    <p><strong>Id:</strong> {{ question.id }}</p>
    <p><strong>Name:</strong> {{ question.name }}</p>
    <p v-if="question.project_id && question.project_id.length">
      <strong>Project ids:</strong> {{ question.project_id.join(', ') }}
    </p>
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
/*  left over? */
</style>
