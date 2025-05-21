<template lang="pug">
.bg-white.rounded-lg.shadow-md.overflow-hidden.border.border-gray-200
  .p-4.text-center
    .w-24.h-24.rounded-full.mx-auto.mb-4.overflow-hidden
      img.w-full.h-full.object-cover(:src="image" :alt="`${name}照片`")
    h3.text-xl.font-semibold.mb-1 {{ name }}
    p.text-gray-500.mb-2 {{ title }}
    p.text-gray-600.text-sm {{ description }}
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
  title: string
  description: string
}>()
</script>
