<template lang="pug">
.text-center.mb-12
  h2.text-3xl.font-bold(:class="{'text-gray-800': !isWhite, 'text-white': isWhite}") {{ title }}
  .w-20.h-1(:class="{'bg-pink-500': !isWhite, 'bg-white': isWhite}").mx-auto.mt-4
</template>

<script setup lang="ts">
defineProps<{
  title: string
  isWhite?: boolean
}>()
</script>
