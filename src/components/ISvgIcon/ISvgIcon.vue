<script setup lang="ts">
defineProps({
  pathName: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 24
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  }
})

const spritePath = '/src/assets/sprite.svg'
</script>

<template>
  <svg
    :width="width || size"
    :height="height || size"
    fill="currentColor"
    stroke="currentColor"
    :class="$attrs.class"
  >
    <use :href="`${spritePath}#${pathName}`" />
  </svg>
</template>