<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="14px"
    style=""
    viewBox="0 0 407.437 407.437"
    :style="styleObject"
  >
    <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  computed: {
    styleObject() {
      return {
        transform: this.name === 'chevron-up' ? 'rotate(180deg)' : 'rotate(0deg)',
      }
    }
  }
}
</script>

<style scoped>

</style>
