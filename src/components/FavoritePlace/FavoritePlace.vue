<script setup lang="ts">
import ISvgIcon from '@/components/ISvgIcon/ISvgIcon.vue'
</script>

<template>
  <section
    class="grid h-[95px] w-[331px] grid-cols-[90px_200px_1fr] grid-rows-[28px_1fr] border border-transparent border-b-[rgba(44,44,44,0.1)]"
  >
    <img
      src="../../assets/images/punct.avif"
      alt="Fav place"
      class="col-span-1 row-span-2 h-19 w-19"
    />
    <h2
      class="col-span-1 row-span-1 text-[14px] leading-[143%] font-medium tracking-[-0.03em] text-[#2c2c2c]"
    >
      Пункт незламності
    </h2>
    <div class="col-span-1 row-span-1">
      <button class="">
        <ISvgIcon pathName="icon-pencil" width="16" height="16" class="stroke-primary" />
      </button>
      <button class="">
        <ISvgIcon
          pathName="icon-trash"
          width="16"
          height="16"
          class="fill-none stroke-[rgba(44,44,44,0.4)]"
        />
      </button>
    </div>
    <p
      class="col-span-2 row-span-1 line-clamp-3 max-h-12 text-[12px] leading-[133%] font-normal tracking-[-0.03em] text-[rgba(44,44,44,0.5)]"
    >
      Проєкт української влади, який ініціювали у листопаді 2022 року на фоні масованих обстрілів
      критичної інфраструктури з боку Росії під час російсько-української війни.
    </p>
  </section>
</template>
