<template lang="pug">
.contact-item.nb-card.nb-press.flex.items-center.gap-4.p-4(:class='cardBgClass', :style='cardStyle')
  //- 图标方块
  .contact-item__icon.shrink-0.w-14.h-14.nb-border-sm.rounded-md.bg-white.flex.items-center.justify-center
    component.text-black(:is='icon', :size='28', :stroke-width='2.5')
  //- 文本
  .min-w-0.flex-1
    p.font-black.text-black.text-lg.leading-tight {{ title }}
    p.text-black.font-medium.text-sm.mt-1 {{ content }}
</template>

<script setup lang="ts">
import type { Component } from 'vue'

type ThemeColor = 'pink' | 'yellow' | 'green' | 'purple'

const props = withDefaults(
  defineProps<{
    icon: Component
    title: string
    content: string
    themeColor?: ThemeColor
    tilt?: number
  }>(),
  {
    themeColor: 'yellow',
    tilt: 0,
  }
)

const cardBgClass = computed(() => {
  switch (props.themeColor) {
    case 'pink':
      return 'bg-brand-pinkHot/70'
    case 'green':
      return 'bg-brand-green/70'
    case 'purple':
      return 'bg-brand-purple/60'
    case 'yellow':
    default:
      return 'bg-brand-yellow'
  }
})

const cardStyle = computed(() => ({
  transform: `rotate(${props.tilt}deg)`,
}))
</script>

<style scoped lang="sass">
.contact-item
  &:hover
    transform: rotate(0) translate(6px, 6px) !important
</style>
