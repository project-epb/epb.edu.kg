<template lang="pug">
header.bg-pink-600.text-white.shadow-md
  .container.mx-auto.px-4.py-3.flex.justify-between.items-center
    .flex.items-center.gap-3
      img.w-12.h-12.rounded-full(src='/logo.png', alt='校徽')
      h1.text-xl.font-bold 吉尔吉斯斯坦国立兽耳娘小学
    nav
      ul.flex.gap-6
        li
          a.hover-underline(href='/#', @click='emit("scrollToAnchor", $event, "#")') 首页
        li
          a.hover-underline(href='/#about', @click='emit("scrollToAnchor", $event, "#about")') 学校简介
        li
          a.hover-underline(href='/#news', @click='emit("scrollToAnchor", $event, "#news")') 新闻公告
        li
          a.hover-underline(href='/#teachers', @click='emit("scrollToAnchor", $event, "#teachers")') 师资力量
        li
          a.hover-underline(href='/#contact', @click='emit("scrollToAnchor", $event, "#contact")') 联系我们
</template>

<script setup lang="ts">
const emit = defineEmits<{
  scrollToAnchor: (event: Event, anchor: string) => void
}>()
</script>

<style scoped lang="sass">
.hover-underline
  position: relative

  &::after
    content: ''
    position: absolute
    width: 0
    height: 2px
    bottom: -4px
    left: 0
    background-color: white
    transition: width 0.3s ease

  &:hover::after
    width: 100%

a:hover
  text-decoration: none

// 响应式调整
@media (max-width: 768px)
  nav
    display: none
</style>
