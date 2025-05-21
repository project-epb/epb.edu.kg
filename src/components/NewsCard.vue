<template lang="pug">
.bg-white.rounded-lg.shadow-md.overflow-hidden
  img.w-full.h-48.object-cover(:src='image', :alt='title')
  .p-6
    .text-gray-500.text-sm.mb-2 {{ date }}
    h3.text-xl.font-semibold.mb-2 {{ title }}
    p.text-gray-600.mb-4 {{ summary }}
    a.text-pink-500.hover-text-pink-600(href='#') 查看详情
</template>

<script setup lang="ts">
defineProps<{
  image: string
  date: string
  title: string
  summary: string
}>()
</script>
