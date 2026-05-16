<template lang="pug">
article.teacher-card.nb-card.nb-press.relative(:class='cardBgClass', :style='cardStyle')
  //- 立绘 / 头像区（透明 PNG 立绘用 contain 完整展示）
  .teacher-card__portrait.relative.w-full.aspect-square.overflow-hidden.nb-border-sm.bg-cream
    img.w-full.h-full.object-contain(:src='image', :alt='`${name} 立绘`', loading='lazy')
  //- 信息区
  .teacher-card__body.px-5.pt-5.pb-6
    h3.font-display.text-3xl.font-black.text-black.leading-none.mb-1 {{ name }}
    .w-12.bg-black.rounded-full.mb-3(class='h-1.5')
    .teacher-card__title.inline-block.font-bold.text-sm.text-black.mb-4
      | 【{{ title }}】
    //- Stats 贴纸
    .teacher-card__stats.flex.flex-wrap.gap-2.mb-4(v-if='stats && stats.length')
      span.nb-tag.bg-white.text-xs(v-for='stat in stats', :key='stat') {{ stat }}
    //- 简介
    p.text-black.text-sm.leading-relaxed.font-medium {{ description }}
  //- 角落 FACULTY 印章
  .teacher-card__seal.absolute.bottom-3.right-3.font-display.text-xs.font-black.tracking-widest.nb-border-sm.rounded-full.px-3.py-1.bg-white(
    class='rotate-[-8deg]'
  ) ◢ FACULTY
</template>

<script setup lang="ts">
type ThemeColor = 'pink' | 'purple' | 'green'

const props = withDefaults(
  defineProps<{
    image: string
    name: string
    title: string
    description: string
    themeColor?: ThemeColor
    tilt?: number
    stats?: string[]
  }>(),
  {
    themeColor: 'pink',
    tilt: 0,
    stats: () => [],
  }
)

const cardBgClass = computed(() => {
  switch (props.themeColor) {
    case 'purple':
      return 'bg-brand-purple'
    case 'green':
      return 'bg-brand-green'
    case 'pink':
    default:
      return 'bg-brand-pinkHot'
  }
})

const cardStyle = computed(() => ({
  transform: `rotate(${props.tilt}deg)`,
}))
</script>

<style scoped lang="sass">
.teacher-card
  padding: 1rem
  &:hover
    transform: rotate(0) translate(6px, 6px) !important
</style>
