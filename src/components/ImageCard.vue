<template lang="pug">
.overflow-hidden.rounded-lg.shadow-md
  img.w-full.h-64.object-cover.hover-transform.hover-scale-105.transition-transform.duration-300(:src="image" :alt="alt || '校园环境'")
</template>

<script setup lang="ts">
defineProps<{
  image: string
  alt?: string
}>()
</script>
