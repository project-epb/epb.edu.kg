<template lang="pug">
#index-view.min-h-screen.bg-gray-50.flex.flex-col
  //- 导航栏
  GlobalHeader(@scrollToAnchor='scrollToAnchor')

  //- 主页横幅
  section.banner.relative.h-80.overflow-hidden
    img.w-full.h-full.object-cover(src='https://placehold.co/1920x500', alt='学校全景')
    .absolute.inset-0.bg-black.bg-opacity-40.flex.items-center.justify-center
      .text-center.text-white.p-6
        h2.text-4xl.font-bold.mb-4 吉尔吉斯斯坦国立兽耳娘小学
        p.text-xl.mb-2 培养未来的希望，创造美好的明天
        p.text-2.mb-6 注：纯属虚构
        button.bg-pink-500.hover-bg-pink-600.text-white.py-2.px-6.rounded-full.transition-colors 了解更多

  //- 学校简介
  section#about.py-16.bg-white
    .container.mx-auto.px-4
      SectionTitle(title='学校简介')
      .flex.flex-col.md-flex-row.gap-8.items-center
        div(md:w='1/2')
          img.rounded-lg.shadow-lg.w-full(src='/logo.png', alt='校徽')
        div(md:w='1/2')
          h3.text-2xl.font-semibold.mb-4 传承与创新并重
          p.text-gray-600.mb-4 <strong>吉尔吉斯斯坦国立兽耳娘小学校</strong>，简称“吉吉国兽耳娘小学”。创建于2025年，是吉尔吉斯斯坦第一所专注于提供优质兽耳娘的特色小学。我校秉承“兽耳萝莉真是太棒了，多来点”的办学理念，致力于为每一位兽耳娘提供全面发展的机会。
          p.text-gray-600.mb-4 学校（并不）拥有一支高素质的教师队伍和现代化的教学设施，开设了丰富多彩的课程和课外活动，为学生的成长提供了良好的环境。
          p.text-gray-600 我们相信每一位学生都是独特的，都有自己的潜能和才华。我们的目标是发掘她们的潜力，培养她们成为具有全球视野和创新精神的未来领袖。

  //- 新闻公告
  section#news.py-16.bg-gray-50
    .container.mx-auto.px-4
      SectionTitle(title='新闻公告')
      .grid.grid-cols-1.md-grid-cols-2.lg-grid-cols-3.gap-6
        //- 使用组件渲染新闻卡片
        NewsCard(v-for='(news, index) in newsList', :key='index', v-bind='news')

  //- 师资力量
  section#teachers.py-16.bg-white
    .container.mx-auto.px-4
      SectionTitle(title='师资力量')
      .grid.grid-cols-1.md-grid-cols-3.lg-grid-cols-4.gap-6
        //- 使用组件渲染教师卡片
        TeacherCard(v-for='(teacher, index) in teachersList', :key='index', v-bind='teacher')

  //- 校园环境
  section.py-16.bg-gray-50
    .container.mx-auto.px-4
      SectionTitle(title='校园环境')
      .grid.grid-cols-1.md-grid-cols-2.lg-grid-cols-3.gap-4
        ImageCard(v-for='(image, index) in imageList', :key='image.src', :src='image.src', :alt='image.alt')

  //- 联系我们
  section#contact.py-16.bg-pink-600.text-white
    .container.mx-auto.px-4
      SectionTitle(title='联系我们', isWhite)
      .grid.grid-cols-1.md-grid-cols-2.gap-8
        .bg-white.text-gray-800.p-8.rounded-lg.shadow-lg
          h3.text-2xl.font-semibold.mb-6 联系方式
          //- 使用组件渲染联系方式
          ContactItem(icon='📍', title='地址', content='二次元街道123号，并非吉尔吉斯斯坦')
          ContactItem(icon='📞', title='电话', content='+1 234 567 890')
          ContactItem(icon='✉️', title='邮箱', content='admin@epb.edu.kg')
          ContactItem(icon='🕒', title='办公时间', content='星期八，全天开放')
        .rounded-lg.overflow-hidden.shadow-lg
          img.w-full.h-full.object-cover(src='https://placehold.co/600x400', alt='学校地图')

  //- 页脚
  GlobalFooter(@scrollToAnchor='scrollToAnchor')
</template>

<script setup lang="ts">
// 平滑滚动到锚点
const scrollToAnchor = (event: Event, anchor: string) => {
  event.preventDefault()
  const element = document.querySelector(anchor)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const newsList = ref([
  {
    image: 'https://placehold.co/400x300',
    date: '2025年5月15日',
    title: '校园文化节圆满结束',
    summary: '本届校园文化节以"传统与创新"为主题，展示了学生们丰富多彩的才艺和创意...',
  },
  {
    image: 'https://placehold.co/400x300',
    date: '2025年5月10日',
    title: '我校学生在全国数学竞赛中获得佳绩',
    summary: '在日前举行的全国小学生数学竞赛中，我校三年级学生李明获得了金奖...',
  },
  {
    image: 'https://placehold.co/400x300',
    date: '2025年5月5日',
    title: '2025学年招生简章发布',
    summary: '我校2025学年招生工作即将开始，招生对象为年满6周岁的适龄儿童...',
  },
])

const teachersList = ref<
  {
    image: string
    name: string
    title: string
    description: string
  }[]
>([
  {
    image: 'http://github.com/dragon-fish.png',
    name: '小鱼君',
    title: '校长',
    description: '教育学博士，从事教育工作2000年，致力于教育创新与改革。',
  },
])
const imageList = ref([
  {
    src: 'https://placehold.co/600x400',
    alt: '校园环境1',
  },
  {
    src: 'https://placehold.co/600x400',
    alt: '校园环境2',
  },
  {
    src: 'https://placehold.co/600x400',
    alt: '校园环境3',
  },
  {
    src: 'https://placehold.co/600x400',
    alt: '校园环境4',
  },
  {
    src: 'https://placehold.co/600x400',
    alt: '校园环境5',
  },
  {
    src: 'https://placehold.co/600x400',
    alt: '校园环境6',
  },
])
</script>

<style scoped lang="sass">
.banner
  background-position: center
  background-size: cover

// 响应式调整
@media (max-width: 768px)
  .banner
    height: 60vh
</style>
