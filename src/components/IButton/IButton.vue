<script setup lang="ts">
type ButtonVariant = 'primary' | 'gradient' | 'outlined'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
  }>(),
  {
    variant: 'primary',
  },
)

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#ffa279]',
  gradient: 'bg-[linear-gradient(91deg,_#ffa279_0%,_#f3743d_100%)]',
  outlined: 'border border-[#ffa279] text-[#ffa279] bg-transparent',
}
</script>

<template>
  <button v-bind="$attrs" class="h-14 w-49 rounded-xl p-[14px_40px]" :class="variantClasses[props.variant]">
    <slot>Button</slot>
  </button>
</template>
