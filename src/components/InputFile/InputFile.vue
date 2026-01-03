<script setup lang="ts">
import { ref } from 'vue'
import ISvgIcon from '../ISvgIcon/ISvgIcon.vue'

const emit = defineEmits(['uploadFile'])
const errorMessage = ref('')

const handleUploadFile = (event: Event) => {
  const input = event.target as HTMLInputElement | null
  if (!input) return

  const files = input.files
  if (!files || !files.length) return

  const file = files[0]

  if (file) {
    if (file.size > 3 * 1024 * 1024) {
      errorMessage.value = 'Завелкий файл'
      return
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      if (errorMessage.value) {
        errorMessage.value = ''
      }
      emit('uploadFile', fileReader.result)
    }
  }
}
</script>

<template>
  <label
    for="file"
    class="group inline-flex items-center justify-center gap-2 transition-colors duration-300 hover:cursor-pointer hover:text-orange-500"
  >
    <ISvgIcon pathName="icon-attachment" width="18" height="18" />
    <input id="file" type="file" accept="image/*" class="hidden" @change="handleUploadFile" />
    <span
      class="box-decoration-slice text-[12px] leading-[117%] font-normal text-[#2c2c2c] underline decoration-black transition-colors duration-300 group-hover:text-orange-500 group-hover:decoration-orange-500"
      >Натисніть тут, щоб додати фото</span
    >
  </label>
  <div v-if="errorMessage" class="text-[12px] font-normal text-red-500">{{ errorMessage }}</div>
</template>
