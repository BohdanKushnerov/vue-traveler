<script setup lang="ts">

  import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
</script>

<template>
  <main class="flex h-screen">
    <RegistrationForm @submit="console.log"/>
    <section class="flex-1">
      <img
        class="h-full w-full object-cover"
        src="/src/assets/images/static-map.avif"
        alt="static-map"
      />
    </section>
  </main>
</template>
