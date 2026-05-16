<template lang="pug">
.parent-review.flex.gap-4.items-start(:class='directionClass')
  //- 头像
  .parent-review__avatar.shrink-0.w-16.h-16.nb-border.nb-shadow-sm.rounded-lg.overflow-hidden.bg-white(
    :class='avatarTiltClass'
  )
    img.w-full.h-full.object-cover(:src='avatar', :alt='`${name} 头像`', loading='lazy')
  //- 气泡 + 署名
  .parent-review__main.flex-1.min-w-0
    .parent-review__bubble.relative.nb-card.p-5.font-medium.text-black.leading-relaxed(
      :class='bubbleColorClass',
      :style='bubbleStyle'
    )
      p.text-base {{ content }}
      //- 气泡尾巴
      .parent-review__tail(:class='tailClass')
    //- 署名
    .parent-review__sig.mt-3.font-bold.text-sm.text-black.flex.flex-wrap.gap-x-2.gap-y-1(
      :class='direction === "right" ? "justify-end text-right" : ""'
    )
      span.font-black {{ name }}
      span.opacity-60 ·
      span {{ identity }}
</template>

<script setup lang="ts">
type Direction = 'left' | 'right'
type BubbleColor = 'pink' | 'yellow' | 'green' | 'purple'

const props = withDefaults(
  defineProps<{
    avatar: string
    content: string
    name: string
    identity: string
    direction?: Direction
    bubbleColor?: BubbleColor
    tilt?: number
  }>(),
  {
    direction: 'left',
    bubbleColor: 'yellow',
    tilt: 0,
  }
)

const directionClass = computed(() => (props.direction === 'right' ? 'flex-row-reverse' : ''))

const bubbleColorClass = computed(() => {
  switch (props.bubbleColor) {
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

const bubbleStyle = computed(() => ({
  transform: `rotate(${props.tilt}deg)`,
}))

const avatarTiltClass = computed(() => (props.tilt > 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'))

const tailClass = computed(() => (props.direction === 'right' ? 'parent-review__tail--right' : 'parent-review__tail--left'))
</script>

<style scoped lang="sass">
.parent-review__bubble
  // 让气泡顶部圆角更大模拟对话框
  border-top-left-radius: 4px

.parent-review__tail
  position: absolute
  top: 18px
  width: 0
  height: 0

  // 左侧（气泡尾巴向左指）
  &--left
    left: -18px
    border-top: 12px solid transparent
    border-bottom: 12px solid transparent
    border-right: 18px solid #000
    &::after
      content: ''
      position: absolute
      top: -8px
      left: 4px
      border-top: 8px solid transparent
      border-bottom: 8px solid transparent
      border-right: 14px solid var(--tail-color, #FFE066)

  &--right
    right: -18px
    border-top: 12px solid transparent
    border-bottom: 12px solid transparent
    border-left: 18px solid #000
    &::after
      content: ''
      position: absolute
      top: -8px
      right: 4px
      border-top: 8px solid transparent
      border-bottom: 8px solid transparent
      border-left: 14px solid var(--tail-color, #FFE066)

.parent-review__bubble
  &.bg-brand-yellow .parent-review__tail
    --tail-color: #FFE066
  &.bg-brand-pinkHot\/70 .parent-review__tail
    --tail-color: #FFB6C8
  &.bg-brand-green\/70 .parent-review__tail
    --tail-color: #B5E89E
  &.bg-brand-purple\/60 .parent-review__tail
    --tail-color: #C9B8FA
</style>
