<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])

interface UserData {
  name: string
  email: string
  password: string
}

const userData = reactive<UserData>({
  name: '',
  email: '',
  password: '',
})

const onSubmit = () => emit('submit', toRaw(userData))
</script>

<template>
  <form
    class="flex flex-1 flex-col items-center justify-center"
    @submit.prevent="onSubmit"
  >
      <IInput
        id="name"
        v-model="userData.name"
        label="Повне ім’я"
        class="mb-4.5"
        placeholder="Ратушняк Ілона"
      />
      <IInput
        id="email"
        v-model="userData.email"
        label="Електронна пошта"
        class="mb-4.5"
        placeholder="email@gmail.com"
      />
      <IInput
        id="password"
        v-model="userData.password"
        label="Пароль"
        class="mb-10"
        placeholder="*************"
      />

      <IButton
        class="w-full text-center text-base font-bold text-white"
        variant="gradient"
        type="submit"
        >Створити аккаунт</IButton
      >
  </form>
</template>
