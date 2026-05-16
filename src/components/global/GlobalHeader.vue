<template lang="pug">
header.sticky.top-0.z-50.bg-cream.border-b-3.border-black
  .main-container.mx-auto.px-4.py-3.flex.justify-between.items-center.gap-4
    //- 校徽 + 校名
    a.flex.items-center.gap-3.shrink-0(href='/#', @click='emit("scrollToAnchor", $event, "#")')
      .w-11.h-11.nb-border.rounded-md.overflow-hidden.bg-white(
        md='w-12 h-12',
        class='shadow-[4px_4px_0_0_#000]'
      )
        img.w-full.h-full.object-contain.p-1(src='/logo.png', alt='校徽')
      h1.font-display.text-base.font-black.text-black.leading-tight(md='text-xl') 吉吉国兽耳娘小学
    //- PC 导航
    nav.hidden(md='block')
      ul.flex.gap-2
        li(v-for='item in navItems', :key='item.href')
          a.nb-nav-link(:href='item.href', @click='emit("scrollToAnchor", $event, item.href)') {{ item.label }}
    //- 移动端汉堡按钮
    button.nb-border.bg-brand-yellow.w-11.h-11.rounded-md.flex.items-center.justify-center.transition-all.duration-150(
      md='hidden',
      class='shadow-[4px_4px_0_0_#000]',
      :class='isOpen ? "translate-x-1 translate-y-1 shadow-[0_0_0_0_#000]" : ""',
      @click='isOpen = !isOpen',
      aria-label='菜单'
    )
      IconMenu2(v-if='!isOpen', :size='22', :stroke-width='3')
      IconX(v-else, :size='22', :stroke-width='3')
  //- 移动端抽屉
  Transition(name='drawer')
    nav.border-t-3.border-black.bg-cream(md='hidden', v-if='isOpen')
      ul.main-container.mx-auto.px-4.py-4.space-y-2
        li(v-for='item in navItems', :key='item.href')
          a.nb-border-sm.bg-white.rounded-md.px-4.py-3.font-black.text-black.block.transition-all.duration-150(
            class='shadow-[3px_3px_0_0_#000] hover:bg-brand-yellow',
            :href='item.href',
            @click='handleMobileClick($event, item.href)'
          ) {{ item.label }}
</template>

<script setup lang="ts">
import { IconMenu2, IconX } from '@tabler/icons-vue'

const emit = defineEmits<{
  scrollToAnchor: [event: Event, anchor: string]
}>()

const isOpen = ref(false)

const navItems = [
  { label: '首页', href: '#' },
  { label: '学校简介', href: '#about' },
  { label: '新闻公告', href: '#news' },
  { label: '师资力量', href: '#teachers' },
  { label: '家长评价', href: '#reviews' },
  { label: '联系我们', href: '#contact' },
]

const handleMobileClick = (event: Event, anchor: string) => {
  emit('scrollToAnchor', event, anchor)
  isOpen.value = false
}
</script>

<style scoped lang="sass">
.nb-nav-link
  display: inline-block
  padding: 0.4rem 0.8rem
  font-weight: 700
  color: #000
  border-radius: 0.375rem
  border: 2px solid transparent
  transition: all 0.15s ease
  &:hover
    background-color: #FFE066
    border-color: #000
    box-shadow: 3px 3px 0 0 #000
    transform: translate(-2px, -2px)

.drawer-enter-active,
.drawer-leave-active
  transition: all 0.2s ease
  overflow: hidden
  max-height: 500px

.drawer-enter-from,
.drawer-leave-to
  max-height: 0
  opacity: 0
</style>
