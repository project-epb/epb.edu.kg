<template lang="pug">
.overflow-hidden.rounded-lg.shadow-md
  img.w-full.h-64.object-cover.hover-transform.hover-scale-105.transition-transform.duration-300(
    :src='src',
    :alt='alt || ""'
  )
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>
