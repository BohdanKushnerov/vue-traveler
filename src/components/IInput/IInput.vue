<script setup lang="ts">
interface Props {
  id: string
  label?: string
}

defineOptions({
  inheritAttrs: false
})

defineProps<Props>()

const modelValue = defineModel<string | number>()
</script>

<template>
  <label :for="id" class="flex w-full flex-col text-[#2C2C2C]">
    <span
      v-if="label"
      class="mb-2 ml-4.5 text-[12px] leading-[150%] font-normal"
    >
      {{ label }}
    </span>

    <input
      :id="id"
      v-model="modelValue"
      v-bind="$attrs"
      class="h-12 w-104.75 rounded-sm border border-gray px-4.5 py-3.5 text-[14px] leading-[1.43] font-normal tracking-[0.02em] text-[#2C2C2C] outline-none focus:border-primary"
    />
  </label>
</template>
