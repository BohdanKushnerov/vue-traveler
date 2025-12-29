<script setup lang="ts">
//
</script>

<template>
  <main class="flex h-screen">
    <slot></slot>
    <section class="flex-1">
      <img
        class="h-full w-full object-cover"
        src="/src/assets/images/static-map.avif"
        alt="static-map"
      />
    </section>
  </main>
</template>
