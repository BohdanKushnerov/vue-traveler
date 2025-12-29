<script setup lang="ts">
type ButtonVariant = 'primary' | 'gradient' | 'outlined' | 'default'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
  }>(),
  {
    variant: 'default',
  },
)

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#ffa279] h-14 w-49 p-[14px_40px] rounded-xl',
  gradient:
    'bg-[linear-gradient(91deg,_#ffa279_0%,_#f3743d_100%)] h-14 w-49 p-[14px_40px] rounded-xl',
  outlined:
    'border border-[#ffa279] text-[#ffa279] bg-transparent h-14 w-49 p-[14px_40px] rounded-xl',
  default: '',
}
</script>

<template>
  <button
    v-bind="$attrs"
    class="cursor-pointer"
    :class="[variantClasses[props.variant], $attrs.class]"
  >
    <slot>Button</slot>
  </button>
</template>
