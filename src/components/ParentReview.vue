<template lang="pug">
.bg-gradient-to-br.from-pink-50.to-purple-50.rounded-xl.shadow-lg.p-6.border.border-pink-100.relative.overflow-hidden
  //- 背景装饰
  .absolute.top-0.right-0.w-20.h-20.bg-gradient-to-br.from-pink-200.to-purple-200.rounded-full.opacity-20.transform.translate-x-6.-translate-y-6
  .absolute.bottom-0.left-0.w-16.h-16.bg-gradient-to-br.from-purple-200.to-pink-200.rounded-full.opacity-15.transform.-translate-x-4.translate-y-4

  //- 引用图标
  .absolute.top-4.left-4.text-20.text-pink-300.opacity-50.leading-20 “

  //- 评价内容
  .relative.z-10
    .text-gray-700.text-base.leading-relaxed.mb-6.pl-8 {{ content }}

    //- 家长信息
    .flex.items-center.gap-4
      .w-12.h-12.rounded-full.overflow-hidden.border-2.border-pink-300.shadow-md
        img.w-full.h-full.object-cover(:src='avatar', :alt='`${name}头像`')
      div
        .font-semibold.text-gray-800.text-lg {{ name }}
        .text-pink-600.text-sm.font-medium {{ identity }}
</template>

<script setup lang="ts">
defineProps<{
  avatar: string
  content: string
  name: string
  identity: string
}>()
</script>
