<template lang="pug">
span.highlight(:class='colorClass', :style='styleObj')
  slot
</template>

<script setup lang="ts">
type HighlightColor = 'pink' | 'green' | 'yellow' | 'purple'

const props = withDefaults(
  defineProps<{
    color?: HighlightColor
    tilt?: number
  }>(),
  {
    color: 'yellow',
    tilt: -1,
  }
)

const colorClass = computed(() => {
  switch (props.color) {
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

const styleObj = computed(() => ({
  transform: `rotate(${props.tilt}deg)`,
}))
</script>

<style scoped lang="sass">
.highlight
  display: inline-block
  padding: 0 6px
  margin: 0 2px
  font-weight: 700
  color: #000
  box-decoration-break: clone
  -webkit-box-decoration-break: clone
</style>
