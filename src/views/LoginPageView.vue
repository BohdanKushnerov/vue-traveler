<script setup lang="ts">
import AuthContainer from '@/components/Auth/AuthContainer/AuthContainer.vue'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import RegisterLoginButtons from '@/components/Auth/RegisterLoginButtons/RegisterLoginButtons.vue'
</script>

<template>
  <AuthContainer>
    <section class="flex flex-1 items-center justify-center bg-primary">
      <div
        class="flex h-123.25 w-124.75 flex-col items-center justify-center rounded-[17px] bg-white p-10"
      >
        <RegisterLoginButtons />
        <LoginForm @submit="console.log" />
      </div>
    </section>
  </AuthContainer>
</template>
