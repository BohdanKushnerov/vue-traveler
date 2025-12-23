<script setup lang="ts">
interface Props {
  id: string
  label?: string
}

defineProps<Props>()

const modelValue = defineModel<string | number>()
</script>

<template>
  <label :for="id" class="flex w-full flex-col text-[#2C2C2C]">
    <span class="mb-2 text-[12px] leading-[150%] font-normal text-[#2C2C2C]">
      {{ label }}
    </span>
    <input
      v-bind="{ ...$props, ...$attrs }"
      :id="id"
      v-model="modelValue"
      class="h-12 w-104.75 rounded-sm border border-gray text-[14px] leading-[1.43] font-normal tracking-[0.02em] text-[#2C2C2C] outline-none focus:border-primary"
    />
  </label>
</template>
