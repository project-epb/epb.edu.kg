<template lang="pug">
footer.bg-gray-800.text-white.py-8
  .container.mx-auto.px-4
    .flex.flex-col.md-flex-row.justify-between
      .mb-6.md-mb-0
        .flex.items-center.gap-3.mb-4
          img.w-10.h-10.rounded-full(src="https://placehold.co/100x100" alt="校徽")
          span.text-lg.font-bold 吉尔吉斯斯坦国立兽耳娘小学
        p.text-gray-400 Национальная начальная школа девочек-кэмономими Кыргызстана
      .grid.grid-cols-2.gap-8
        div
          h4.text-lg.font-semibold.mb-4 快速链接
          ul.space-y-2
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#" @click="scrollToAnchor($event, '#')") 首页
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#about" @click="scrollToAnchor($event, '#about')") 学校简介
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#news" @click="scrollToAnchor($event, '#news')") 新闻公告
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#teachers" @click="scrollToAnchor($event, '#teachers')") 师资力量
        div
          h4.text-lg.font-semibold.mb-4 其他信息
          ul.space-y-2
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#") 招生信息
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#") 校历
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#") 就业指导
            li
              a.text-gray-400.hover-text-white.transition-colors(href="#") 隐私政策
    .border-t.border-gray-700.mt-8.pt-8.text-center.text-gray-400
      p {{ displayYear }} &copy; 吉尔吉斯斯坦国立兽耳娘小学 (epb.edu.kg)，保留所有权利
      p 免责声明：本网站所有内容均为虚构，仅供学习和娱乐使用。任何与现实中存在的学校、组织或个人的相似之处纯属巧合。
      p
        a.text-gray-400.hover-text-white.transition-colors.decoration-underline(href="https://github.com/dragon-fish" target="_blank") Dragon Fish
        |
        | 用 💖 设计、开发与维护
</template>

<script setup lang="ts">
const props = defineProps<{
  scrollToAnchor: (event: Event, anchor: string) => void
}>()

// 动态获取当前年份
const startYear = 2025
const currentYear = new Date().getFullYear()
const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear
</script>

<style scoped lang="sass">
.hover-text-white:hover
  color: white
</style>
