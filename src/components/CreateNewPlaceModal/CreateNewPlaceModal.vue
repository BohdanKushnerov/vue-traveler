<script setup lang="ts">
import { computed, reactive } from 'vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputFile from '../InputFile/InputFile.vue'
import ISvgIcon from '../ISvgIcon/ISvgIcon.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})

const emits = defineEmits(['close', 'submit'])

const formData = reactive({
  location: '',
  description: '',
  image: '',
})

const uploadText = computed(() => {
  return formData.image ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})

const handleUploadImage = (url: string) => {
  formData.image = url
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emits('close')">
    <form class="p-10 pt-8.75" @submit.prevent="emits('submit', { ...formData })">
      <h2 class="mb-10 flex justify-center gap-2 text-[16px] font-bold text-[#2c2c2c]">
        <ISvgIcon
          pathName="icon-map-pin-gradient"
          width="24"
          height="24"
          class="stroke-transparent"
        />
        <span>Додати маркер</span>
      </h2>
      <IInput
        id="text"
        v-model="formData.location"
        type="input"
        label="Локація"
        placeholder="Опис"
        labelClass="mb-4.5"
      />
      <IInput
        id="textarea"
        v-model="formData.description"
        type="textarea"
        label="Опис"
        placeholder="Введіть текст"
        labelClass="mb-3.5"
      />
      <div class="mb-10.5 flex items-center gap-2">
        <img
          v-if="formData.image"
          :src="formData.image"
          class="h-8 w-8 object-cover"
          alt="avatar"
        />
        <InputFile class="" @uploadFile="handleUploadImage">{{ uploadText }}</InputFile>
      </div>
      <IButton
        variant="gradient"
        class="block w-full text-center text-[16px] leading-[138%] font-bold tracking-[-0.03em] text-[#f8f6f6]"
        >Додати</IButton
      >
    </form>
  </IModal>
</template>
