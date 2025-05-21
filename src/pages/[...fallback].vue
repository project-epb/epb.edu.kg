<template lang="pug">
#404-view.min-h-screen.bg-gray-50.flex.flex-col
  //- 导航栏
  GlobalHeader

  main.flex-1.relative
    .absolute(left='50%', top='50%', translate='-50% -50%')
      .text-center
        h1.text-4xl.font-bold.mb-4 404
        p.text-xl.mb-2 页面未找到
        p.text-2.mb-6 请检查您输入的链接是否正确
        RouterLink.bg-pink-500.text-white.py-2.px-6.rounded-full.transition-colors(to='/', class='hover:bg-pink-600') 返回首页

  //- 页脚
  GlobalFooter
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>
