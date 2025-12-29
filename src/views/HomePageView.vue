<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import ISvgIcon from '@/components/ISvgIcon/ISvgIcon.vue'
import AuthContainer from '@/components/Auth/AuthContainer/AuthContainer.vue'
</script>

<template>
  <AuthContainer>
    <section class="flex flex-1 flex-col items-center justify-center bg-primary p-16">
      <ISvgIcon
        pathName="icon-map-pin"
        width="81"
        height="100"
        class="mb-6 fill-white stroke-white"
      />
      <h1
        class="mb-7 text-center text-[38px] leading-[1.05] font-bold tracking-[-0.01em] text-white"
      >
        IT traveler
      </h1>
      <p
        class="mb-11 max-w-127 text-center text-[18px] leading-[1.33] tracking-[-0.02em] text-white"
      >
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton class="mb-auto text-white">Почати роботу</IButton>
      <p class="text-white">У вас ще немає аккаунту? Зареєструватися або увійти</p>
    </section>
  </AuthContainer>
</template>
