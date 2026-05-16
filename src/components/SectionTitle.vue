<template lang="pug">
.section-title.mb-12.flex.items-end.gap-4(:class='{ "is-white": isWhite }')
  h2.section-title__text.font-display.text-4xl.font-black.tracking-tight(
    md:text='5xl',
    :class='isWhite ? "text-white" : "text-black"'
  )
    span.relative.inline-block
      | {{ title }}
      .section-title__underline(:class='isWhite ? "bg-white" : "bg-black"')
  .section-title__deco.text-3xl.leading-none.shrink-0.mb-2(v-if='decoration', :class='decoColorClass') {{ decorationChar }}
</template>

<script setup lang="ts">
type Decoration = 'star' | 'heart' | 'mail' | 'bang' | 'check' | 'sparkle'

const props = defineProps<{
  title: string
  isWhite?: boolean
  decoration?: Decoration
  decoColor?: 'pink' | 'green' | 'yellow' | 'purple'
}>()

const decorationMap: Record<Decoration, string> = {
  star: '★',
  heart: '♥',
  mail: '✉',
  bang: '❗',
  check: '✓',
  sparkle: '✦',
}

const decorationChar = computed(() => (props.decoration ? decorationMap[props.decoration] : ''))

const decoColorClass = computed(() => {
  if (props.isWhite) return 'text-white'
  switch (props.decoColor) {
    case 'pink':
      return 'text-brand-pink'
    case 'green':
      return 'text-brand-green'
    case 'purple':
      return 'text-brand-purple'
    case 'yellow':
      return 'text-brand-yellow'
    default:
      return 'text-black'
  }
})
</script>

<style scoped lang="sass">
.section-title__underline
  position: absolute
  left: 0
  right: 0
  bottom: -4px
  height: 6px
  border-radius: 999px
  transform: skewX(-12deg)

.section-title__deco
  transform: rotate(8deg)
  display: inline-block
</style>
