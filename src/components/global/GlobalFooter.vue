<template lang="pug">
footer.bg-gray-800.text-white.py-8
  .container.mx-auto.px-4
    .flex.flex-col.md-flex-row.justify-between.gap8
      div
        .flex.items-center.gap-3.mb-4
          img.w-20.h-20.rounded-full(src='/logo.png', alt='校徽')
          .flex-1
            span.text-2xl.font-bold 吉尔吉斯斯坦国立兽耳娘小学
            p.text-gray-400 Национальная начальная школа девочек-кэмономими Кыргызстана
        p 免责声明：本网站所有内容均为虚构，仅用于小说世界观设定。任何与现实中存在的学校、组织或个人的相似之处纯属巧合。
        p
          | 本网站属于 <a href="https://www.epb.wiki" class="text-gray-400 hover-text-white transition-colors decoration-underline" target="_blank">Project EPB</a> 的子项目。在
          |
          a.text-gray-400.hover-text-white.transition-colors.decoration-underline(
            href='https://github.com/project-epb/epb.edu.kg',
            target='_blank'
          ) GitHub
          |
          | 上查看源代码。
      aside.grid.grid-cols-2.gap-8
        div
          h4.text-lg.font-semibold.mb-4 快速导航
          ul.space-y-2
            li(v-for='link in quickNavLinks')
              a.text-gray-400.hover-text-white.transition-colors(:href='link.href', @click='link.click') {{ link.name }}
        div
          h4.text-lg.font-semibold.mb-4 友情链接
          ul.space-y-2
            li
              a.text-gray-400.hover-text-white.transition-colors(href='https://www.epb.wiki', target='_blank') Project EPB
    .border-t.border-gray-700.mt-8.pt-8.text-center.text-gray-400
      p Copyright &copy; {{ displayYear }} 吉尔吉斯斯坦国立兽耳娘小学 (epb.edu.kg)，保留所有权利。
      p
        a.text-gray-400.hover-text-white.transition-colors.decoration-underline(
          href='https://github.com/dragon-fish',
          target='_blank'
        ) Dragon Fish
        |
        | 用 💖 设计、开发与维护
</template>

<script setup lang="ts">
const emit = defineEmits<{
  scrollToAnchor: [event: Event, anchor: string]
}>()

// 动态获取当前年份
const startYear = 2025
const currentYear = new Date().getFullYear()
const displayYear = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear

const quickNavLinks = ref<
  {
    name: string
    href: string
    click: (event: Event) => void
  }[]
>([
  {
    name: '首页',
    href: '#',
    click: (event: Event) => emit('scrollToAnchor', event, '#'),
  },
  {
    name: '学校简介',
    href: '#about',
    click: (event: Event) => emit('scrollToAnchor', event, '#about'),
  },
  {
    name: '新闻公告',
    href: '#news',
    click: (event: Event) => emit('scrollToAnchor', event, '#news'),
  },
  {
    name: '师资力量',
    href: '#teachers',
    click: (event: Event) => emit('scrollToAnchor', event, '#teachers'),
  },
])
</script>

<style scoped lang="sass">
.hover-text-white:hover
  color: white
</style>
