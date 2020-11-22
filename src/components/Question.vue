<template>
  <li>
    <div>
      {{ question.name }}
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
