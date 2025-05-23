<template lang="pug">
#index-view.min-h-screen.bg-gray-50.flex.flex-col
  //- 导航栏
  GlobalHeader(@scrollToAnchor='scrollToAnchor')

  //- 主页横幅
  section.banner.relative.h-80.overflow-hidden
    img.w-full.h-full.object-cover(
      src='https://r2.epb.wiki/-/d/dc/dc96da4eba15edfc3526a2797e606b3c9a1f1a92.jpeg',
      alt='学校全景'
    )
    .absolute.inset-0.bg-black.bg-opacity-40.flex.items-center.justify-center
      .text-center.text-white.p-6
        h2.text-4xl.font-bold.mb-4 吉尔吉斯斯坦国立兽耳娘小学
        p.text-xl.my-2 培养未来的希望，创造美好的明天
        a.inline-block.bg-pink-500.hover-bg-pink-600.text-white.py-2.px-6.rounded-full.transition-colors.mt-4(
          href='#about',
          @click='scrollToAnchor($event, "#about")'
        ) 了解更多

  //- 学校简介
  section#about.py-16.bg-white
    .main-container.mx-auto.px-4
      SectionTitle(title='学校简介')
      .flex.flex-col.md-flex-row.gap-8.items-center(v-scroll-in='{ delay: 200 }')
        div(md:w='1/2')
          img.rounded-lg.shadow-lg.w-full(src='/logo.png', alt='校徽')
        div(md:w='1/2')
          h3.text-2xl.font-semibold.mb-4 传承与创新并重
          p.text-gray-600.mb-4 <strong>吉尔吉斯斯坦国立兽耳娘小学校</strong>，简称"吉吉国兽耳娘小学"。创建于2025年，是吉尔吉斯斯坦第一所专注于提供优质兽耳娘的特色小学。我校秉承"兽耳萝莉真是太棒了，多来点"的办学理念，致力于为每一位兽耳娘提供全面发展的机会。
          p.text-gray-600.mb-4 学校（并不）拥有一支高素质的教师队伍和现代化的教学设施，开设了丰富多彩的课程和课外活动，为学生的成长提供了良好的环境。
          p.text-gray-600 我们相信每一位学生都是独特的，都有自己的潜能和才华。我们的目标是发掘她们的潜力，培养她们成为具有全球视野和创新精神的未来领袖。

  //- 新闻公告
  section#news.py-16.bg-gray-50
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='新闻公告')
      .grid.grid-cols-1.md-grid-cols-2.lg-grid-cols-3.gap-6
        //- 使用组件渲染新闻卡片
        NewsCard(
          v-for='(news, index) in newsList',
          :key='index',
          v-bind='news',
          v-scroll-in='{ delay: 300, stagger: 150 }'
        )

  //- 师资力量
  section#teachers.py-16.bg-white
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='师资力量')
      .grid.grid-cols-1.md-grid-cols-2.lg-grid-cols-3.gap-6
        //- 使用组件渲染教师卡片
        TeacherCard(
          v-for='(teacher, index) in teachersList',
          :key='index',
          v-bind='teacher',
          v-scroll-in='{ delay: 300, stagger: 200 }'
        )

  //- 家长评价
  section#reviews.py-16.bg-gray-50
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='家长评价')
      .grid.grid-cols-1.md-grid-cols-2.gap-8
        //- 使用组件渲染家长评价卡片
        ParentReview(
          v-for='(review, index) in parentReviewsList',
          :key='index',
          v-bind='review',
          v-scroll-in='{ delay: 300, stagger: 200 }'
        )

  //- 校园环境
  section.py-16.bg-gray-50.main-container
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='校园环境')
      .grid.grid-cols-1.md-grid-cols-2.lg-grid-cols-3.gap-4
        ImageCard(
          v-for='(image, index) in imageList',
          :key='image.src',
          :src='image.src',
          :alt='image.alt',
          v-scroll-in='{ delay: 300, stagger: 120 }'
        )

  //- 联系我们
  section#contact.py-16.text-white(bg-linear-175, from-pink-400, to-rose-500)
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='联系我们', isWhite)
      .grid.grid-cols-1.md-grid-cols-2.gap-8(v-scroll-in='{ delay: 300 }')
        .bg-white.text-gray-800.p-8.rounded-lg.shadow-lg
          h3.text-2xl.font-semibold.mb-6 联系方式
          //- 使用组件渲染联系方式
          ContactItem(icon='📍', title='地址', content='二次元街道123号，并非吉尔吉斯斯坦')
          ContactItem(icon='📞', title='电话', content='+0 123 456 789')
          ContactItem(icon='✉️', title='邮箱', content='admin@epb.edu.kg')
          ContactItem(icon='🕒', title='办公时间', content='星期八，全天开放')
        ContactForm

  //- 页脚
  GlobalFooter(@scrollToAnchor='scrollToAnchor')
</template>

<script setup lang="ts">
onMounted(async () => {
  await nextTick()
  if (window.location.hash) {
    scrollToAnchor(new CustomEvent('scrollToAnchor', { detail: window.location.hash }), window.location.hash)
    window.history.replaceState({}, '', window.location.pathname)
  }
})

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
    image: 'https://r2.epb.wiki/-/7/7b/7b83ffaf022dd3472dce24184e539050750356ed.png',
    date: '20xx年5月20日',
    title: '校园文化节圆满结束',
    summary: '本届校园文化节以"传统与创新"为主题，展示了学生们丰富多彩的才艺和创意……',
  },
  {
    image: 'https://r2.epb.wiki/-/f/ff/ff3bf42de6c3624e3ccd984deb859496ef0885be.png',
    date: '20xx年5月10日',
    title: '我校学生在全国数学竞赛中获得佳绩',
    summary: '在日前举行的全国小学生数学竞赛中，我校三年级学生小美获得了金奖……',
  },
  {
    image: 'https://r2.epb.wiki/-/c/cc/cc245fc858f8613de3fc66638450e15b401120b3.png',
    date: '20xx年5月5日',
    title: '20xx学年招生简章发布',
    summary: '我校20xx学年招生工作即将开始，招生对象为年满6周岁的适龄兽耳娘……',
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
    image: 'https://r2.epb.wiki/avatar.jpg',
    name: '小鱼君',
    title: '校长兼时空管理员',
    description:
      '宇宙最高学府毕业，拥有跨维度教育学博士，已存活37000年，曾在平行宇宙创办268所学校。能够用思维直接向学生传输知识，教学满意度达到127%。',
  },
  {
    image: 'https://r2.epb.wiki/avatar/SILI.jpeg',
    name: 'SILI',
    title: '超维量子教育学主管',
    description: '来自万界规划局的超级学霸，拥有12个博士学位和3个未被发现的基本粒子命名权，她能用7种外星语言同时授课。',
  },
  {
    image:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=400,height=400,onerror=redirect/avatar/%E8%90%8C%E7%99%BE%E5%A8%98-%E7%BE%A4%E9%9D%92-%E5%BD%A9%E8%89%B2.jpeg',
    name: '萌百娘',
    title: '特邀文化专家',
    description: '全球最强二次元文化专家，我们也不知道她为什么出现在这里。',
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

const parentReviewsList = ref([
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '作为来自异次元的贵族，我对教育质量要求极高。这所学校超越了我在77个平行宇宙中见过的所有教育机构！我的小公主在这里不仅学会了12种古老的魔法语言，还掌握了时空折叠的基础理论。校长的教学理念简直是跨维度的天才之作！',
    name: '艾莉西亚·冯·星辰',
    identity: '三年级学生家长·异次元皇室',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '身为时空管理局高级探员，我穿越了无数时间线寻找最优秀的教育资源。这所学校的教育水平已经达到了第九维度文明的标准！我的女儿现在能用意念解开高等数学题，还学会了与量子猫娘对话。真是不可思议的成就！',
    name: '铃木雷电',
    identity: '四年级学生家长·时空管理局探员',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '作为失落的亚特兰蒂斯末代女王，我见证过古代文明的辉煌与衰落。但这所学校的教育理念让我看到了希望！我的小海妖在这里不仅保持了天生的水系能力，还学会了控制潮汐和与深海巨兽沟通。这里的老师都是真正的教育贤者！',
    name: '波塞冬娜·深海',
    identity: '五年级学生家长·亚特兰蒂斯皇室',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '我是来自银河系第七星区的机械族长老，经过我的量子计算和87436次概率分析，这所学校的教育效果超越了我们种族千年来的教育成果！我的小机娘不仅学会了有机生命的情感表达，还掌握了生物与机械完美融合的技术。感谢校长大人的跨种族教育智慧！',
    name: '赛博·格伦达尔',
    identity: '六年级学生家长·银河机械族长老',
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
