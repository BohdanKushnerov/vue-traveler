<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
</script>

<template>
  <div class="mb-10 flex justify-between gap-11">
    <IButton
      class="h-min w-min p-0 text-center text-base font-bold whitespace-nowrap text-[rgba(44,44,44,0.2)] outline-none hover:text-[#f3743d]"
    >
      Створити аккаунт
    </IButton>
    <IButton
      class="h-min w-min p-0 text-center text-base font-bold text-[rgba(44,44,44,0.2)] outline-none hover:text-[#f3743d]"
    >
      Увійти
    </IButton>
  </div>
</template>
