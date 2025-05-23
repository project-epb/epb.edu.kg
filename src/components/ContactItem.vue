<template lang="pug">
.flex.items-start.mb-4
  .text-rose-500.mr-3
    .icon(:aria-hidden='true') {{ icon }}
  div
    p.font-medium {{ title }}
    p.text-gray-600 {{ content }}
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  content: string
}>()
</script>
