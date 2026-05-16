<template lang="pug">
article.news-card.nb-card.nb-press.relative.overflow-hidden(:class='cardBgClass', :style='cardStyle')
  //- 配图
  .news-card__img.relative.w-full.overflow-hidden.nb-border-sm.aspect-video.bg-white
    img.w-full.h-full.object-cover(:src='image', :alt='title', loading='lazy')
  //- 日期邮戳 + NEW 贴纸
  .news-card__meta.flex.items-center.gap-3.mt-4.px-5
    span.news-card__stamp.nb-tag.bg-white.font-mono.text-xs ▣ {{ date }}
    span.news-card__new.nb-tag.bg-brand-pink.text-white.font-display.text-xs.rotate-6(v-if='isNew') ★ NEW!
  //- 标题与摘要
  .news-card__body.px-5.pt-3.pb-6
    h3.text-xl.font-black.text-black.mb-2.leading-tight {{ title }}
    p.text-black.text-sm.leading-relaxed.font-medium {{ summary }}
    a.inline-flex.items-center.gap-1.mt-4.font-black.text-black.underline.decoration-3.decoration-black.underline-offset-4(
      href='#'
    ) 查看详情 →
</template>

<script setup lang="ts">
type ThemeColor = 'pink' | 'green' | 'yellow' | 'purple'

const props = withDefaults(
  defineProps<{
    image: string
    date: string
    title: string
    summary: string
    themeColor?: ThemeColor
    tilt?: number
    isNew?: boolean
  }>(),
  {
    themeColor: 'yellow',
    tilt: 0,
    isNew: false,
  }
)

const cardBgClass = computed(() => {
  switch (props.themeColor) {
    case 'pink':
      return 'bg-brand-pinkHot/60'
    case 'green':
      return 'bg-brand-green/60'
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
.news-card
  padding: 1rem
  &:hover
    transform: rotate(0) translate(6px, 6px) !important
</style>
