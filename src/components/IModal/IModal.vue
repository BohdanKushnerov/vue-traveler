<script setup lang="ts">
import { onMounted, onUnmounted, Teleport } from 'vue'
import ISvgIcon from '../ISvgIcon/ISvgIcon.vue'

const emit = defineEmits(['close'])

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'initial'
})
</script>

<template>
  <component :is="Teleport" to="body">
    <div
      class="fixed inset-0 flex h-full w-full items-center justify-center bg-[rgba(30,30,30,0.5)]"
      @click.self="emit('close')"
    >
      <div class="relative rounded-[17px] bg-white px-10 py-8.75">
        <button class="absolute top-6 right-6" @click="emit('close')">
          <ISvgIcon pathName="icon-x" width="28" height="28" />
        </button>
        <slot></slot>
      </div>
    </div>
  </component>
</template>
