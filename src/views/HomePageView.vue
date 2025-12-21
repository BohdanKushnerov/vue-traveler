<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import ISvgIcon from '@/components/ISvgIcon/ISvgIcon.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex flex-1 flex-col items-center justify-center bg-primary p-16">
      <ISvgIcon pathName="icon-map-pin" width="81" height="100" class="mb-6 fill-white" />
      <h1 class="mb-7 text-center text-[38px] leading-[1.05] font-bold tracking-[-0.01em]">
        IT traveler
      </h1>
      <p class="mb-11 max-w-127 text-center text-[18px] leading-[1.33] tracking-[-0.02em]">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton class="mb-auto">Почати роботу</IButton>
      <p>У вас ще немає аккаунту? Зареєструватися або увійти</p>
    </section>
    <section class="flex-1">
      <img
        class="h-full w-full object-cover"
        src="/src/assets/images/static-map.avif"
        alt="static-map"
      />
    </section>
  </main>
</template>
