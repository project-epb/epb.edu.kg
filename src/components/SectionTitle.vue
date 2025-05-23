<template lang="pug">
.text-center.mb-12
  h2.text-3xl.font-bold(:class='{ "text-gray-800": !isWhite, "text-white": isWhite }') {{ title }}
  .w-20.h-1.mx-auto.mt-4(:class='{ "bg-rose-400": !isWhite, "bg-white": isWhite }')
</template>

<script setup lang="ts">
defineProps<{
  title: string
  isWhite?: boolean
}>()
</script>
