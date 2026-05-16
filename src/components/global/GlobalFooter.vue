<template lang="pug">
footer.bg-cream.border-t-3.border-black.pt-12.pb-8.relative.overflow-hidden
  //- 角落装饰
  span.absolute.top-6.right-10.text-3xl.text-brand-pink.rotate-12 ★
  span.absolute.bottom-12.left-6.text-2xl.text-brand-green(class='-rotate-12') ✦

  .main-container.mx-auto.px-4.relative
    .grid.grid-cols-1.gap-10(lg='grid-cols-3 gap-12')
      //- 品牌 + 免责声明
      div
        .flex.items-center.gap-4.mb-5
          .w-16.h-16.nb-border-sm.rounded-md.overflow-hidden.bg-white.shrink-0(
            class='shadow-[3px_3px_0_0_#000] rotate-[-4deg]'
          )
            img.w-full.h-full.object-cover(src='/logo.png', alt='校徽')
          div
            p.font-display.text-xl.font-black.text-black.leading-tight 吉尔吉斯斯坦
              br
              | 国立兽耳娘小学
            p.font-mono.text-xs.font-light.mt-1(class='text-black/60') Национальная начальная школа девочек-кэмономими Кыргызстана
        //- 免责声明印章
        .nb-border-sm.bg-white.p-4.rounded-md.relative(class='shadow-[3px_3px_0_0_#000]')
          .absolute.nb-border-sm.bg-brand-pink.text-white.font-display.font-black.text-xs.tracking-widest.px-3.py-1(
            class='-top-3 -right-3 rotate-[8deg]'
          ) ◢ DISCLAIMER
          p.text-black.font-medium.text-sm.leading-relaxed 本网站所有内容均为虚构，仅用于小说世界观设定。任何与现实中存在的学校、组织或个人的相似之处纯属巧合。
        p.mt-4.text-sm.text-black.font-medium
          | 本网站属于
          |
          a.footer-link(href='https://www.epb.wiki', target='_blank', rel='noopener') Project EPB
          |
          | 的子项目。在
          |
          a.footer-link(href='https://github.com/project-epb/epb.edu.kg', target='_blank', rel='noopener') GitHub
          |
          | 上查看源代码。

      //- 快速导航
      div
        h4.font-display.text-xl.font-black.text-black.mb-4.relative.inline-block
          | 快速导航
          .absolute.left-0.right-0.bg-brand-yellow.rounded-full(class='h-1.5 bottom-[-4px] -skew-x-12')
        ul.space-y-2
          li(v-for='link in quickNavLinks', :key='link.href')
            a.footer-link.inline-flex.items-center.gap-1(:href='link.href', @click='link.click') → {{ link.name }}

      //- 友情链接
      div
        h4.font-display.text-xl.font-black.text-black.mb-4.relative.inline-block
          | 友情链接
          .absolute.left-0.right-0.bg-brand-green.rounded-full(class='h-1.5 bottom-[-4px] -skew-x-12')
        ul.space-y-2
          li
            a.footer-link.inline-flex.items-center.gap-1(href='https://www.epb.wiki', target='_blank', rel='noopener') → Project EPB

    //- 版权
    .border-t-3.border-black.mt-10.pt-6.text-center.text-black.font-medium.text-sm.space-y-1
      p Copyright &copy; {{ displayYear }} 吉尔吉斯斯坦国立兽耳娘小学 (epb.edu.kg)，保留所有权利。
      p
        a.footer-link(href='https://github.com/dragon-fish', target='_blank', rel='noopener') Dragon Fish
        |
        | 用 💖 设计、开发与维护
</template>

<script setup lang="ts">
const emit = defineEmits<{
  scrollToAnchor: [event: Event, anchor: string]
}>()

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
  { name: '首页', href: '#', click: (event: Event) => emit('scrollToAnchor', event, '#') },
  { name: '学校简介', href: '#about', click: (event: Event) => emit('scrollToAnchor', event, '#about') },
  { name: '新闻公告', href: '#news', click: (event: Event) => emit('scrollToAnchor', event, '#news') },
  { name: '师资力量', href: '#teachers', click: (event: Event) => emit('scrollToAnchor', event, '#teachers') },
  { name: '家长评价', href: '#reviews', click: (event: Event) => emit('scrollToAnchor', event, '#reviews') },
  { name: '联系我们', href: '#contact', click: (event: Event) => emit('scrollToAnchor', event, '#contact') },
])
</script>

<style scoped lang="sass">
.footer-link
  font-weight: 700
  color: #000
  text-decoration: underline
  text-decoration-thickness: 2px
  text-underline-offset: 3px
  transition: all 0.15s ease
  &:hover
    background-color: #FFE066
    box-shadow: 0 0 0 2px #FFE066
</style>
