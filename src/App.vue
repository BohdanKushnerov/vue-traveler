<script setup lang="ts">
import HomePageView from '@/views/HomePageView.vue'
import RegistrationPageView from '@/views/RegistrationPageView.vue'
import LoginPageView from '@/views/LoginPageView.vue'
import FavoritePlaces from '@/components/FavoritePlaces/FavoritePlaces.vue'
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IModal from '@/components/IModal/IModal.vue'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { ref } from 'vue'
import InputFile from './components/InputFile/InputFile.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const isOpen = ref(true)
const imageBase64Url = ref('')

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <HomePageView />
  <!-- <RegistrationPageView /> -->
  <!-- <LoginPageView /> -->
  <!-- <IModal v-if="isOpen" @close="closeModal"
    ><LoginForm @submit="console.log" />

    <img v-if="imageBase64Url" :src="imageBase64Url" alt="" height="100" width="100" />

    <InputFile @upload-file="(base64) => (imageBase64Url = base64)" />
  </IModal> -->

  <CreateNewPlaceModal :isOpen="isOpen" @close="closeModal" @submit="console.log"/>

  <!-- <FavoritePlaces>
    <template #label
      ><p class="text-sm leading-[143%] font-normal tracking-[-0.03em] text-gray">
        Додані маркери
      </p></template
    >
    <template #list>
      <FavoritePlace v-for="value in 4" :key="value" />
    </template>
  </FavoritePlaces>  -->
</template>
