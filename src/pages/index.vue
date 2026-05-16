<template lang="pug">
#index-view.min-h-screen.bg-cream.flex.flex-col.font-sans
  //- 导航栏
  GlobalHeader(@scrollToAnchor='scrollToAnchor')

  //- Hero
  section.hero.relative.overflow-hidden
    //- 散落装饰层
    .absolute.inset-0.pointer-events-none.select-none
      span.absolute.top-10.left-6.text-5xl.text-brand-pink.font-black.rotate-12 ★
      span.absolute.top-24.right-12.text-4xl.text-brand-purple.font-black ❗
      span.absolute.bottom-40.left-12.text-4xl.text-brand-green.font-black.-rotate-12 ♥
      span.absolute.top-40.text-3xl.text-brand-yellow(class='left-1/3') ✦
      span.absolute.bottom-24.text-4xl.text-black.rotate-6(class='right-1/4') ✓
      span.absolute.right-8.text-3xl.text-brand-pinkHot(class='top-1/2 rotate-[-12deg]') ☆

    .relative.main-container.mx-auto.px-4.pt-10.pb-16(md='pt-16 pb-20')
      .flex.flex-col.gap-10.items-start(lg='flex-row gap-16 items-center')
        //- 左侧：校名 + 副标题 + CTA
        .flex.flex-col.gap-8.flex-1.min-w-0
          //- 校名贴纸
          .self-start.max-w-3xl.nb-card.nb-shadow-lg.bg-brand-pinkHot.px-5.py-4(md='px-8 py-6', class='rotate-[-2deg]')
            h1.font-display.text-3xl.font-black.text-white.leading-tight.tracking-tight(md='text-5xl', lg='text-6xl')
              | 吉尔吉斯斯坦
              br
              | 国立兽耳娘小学
          //- 副标题
          .flex.items-center.gap-3(md='ml-6')
            span.text-lg.font-bold.text-black(md='text-2xl') 培养未来的希望，创造美好的明天
            span.text-3xl.text-brand-purple.rotate-12 ✦
          //- CTA + EST 印章
          .flex.flex-wrap.items-center.gap-6(md='ml-6')
            a.nb-btn.bg-brand-yellow.text-black.text-lg(
              md='text-xl',
              href='#about',
              @click='scrollToAnchor($event, "#about")'
            ) 了解更多 →
            .nb-border-sm.bg-white.px-4.py-2.font-display.font-black.text-xs.tracking-widest.text-black(
              class='shadow-[3px_3px_0_0_#000] rotate-[-6deg]'
            ) ◢ EST. 20XX

        //- 右侧：兽 / 耳 / 娘 三字色块拼贴（百分比定位，整体随 wrapper 响应式缩放）
        .hero-emblem.relative.shrink-0.self-center.w-44.h-44(md='w-56 h-56', lg='w-60 h-60')
          .absolute.nb-card.bg-brand-pinkHot.aspect-square.flex.items-center.justify-center.font-display.font-black.text-white.text-2xl(
            md='text-4xl',
            lg='text-4xl',
            style='width: 38%; top: 0%; left: 0%',
            class='rotate-[-8deg]'
          ) 兽
          .absolute.nb-card.bg-brand-yellow.aspect-square.flex.items-center.justify-center.font-display.font-black.text-black.text-2xl(
            md='text-4xl',
            lg='text-4xl',
            style='width: 38%; top: 15%; left: 32%',
            class='rotate-[6deg]'
          ) 耳
          .absolute.nb-card.bg-brand-green.aspect-square.flex.items-center.justify-center.font-display.font-black.text-black.text-2xl(
            md='text-4xl',
            lg='text-4xl',
            style='width: 38%; top: 42%; left: 10%',
            class='rotate-[-4deg]'
          ) 娘
          //- 招生中! 角标
          .absolute.nb-border.bg-brand-purple.text-white.font-display.font-black.px-3.py-1.text-xs.tracking-widest.-bottom-2.-right-2(
            class='shadow-[3px_3px_0_0_#000] rotate-[12deg]'
          ) ◢ 招生中!

  //- 学校简介
  section#about.py-16.pt-4.relative(md='py-20')
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='学校简介', decoration='sparkle', decoColor='purple')
      .grid.grid-cols-1.gap-10.items-start(md='grid-cols-2 gap-14', v-scroll-in='{ delay: 200 }')
        //- 校徽贴纸
        .relative.justify-self-center.w-full.max-w-sm
          .nb-card.nb-shadow-lg.bg-white.p-6(class='rotate-[-2deg]')
            img.w-full.aspect-square.object-contain(src='/logo.png', alt='校徽')
          .absolute.nb-border-sm.bg-brand-yellow.px-3.py-1.font-display.font-black.text-xs.tracking-widest.rotate-12.-bottom-4.-right-4(
            class='shadow-[3px_3px_0_0_#000]'
          ) ◢ EST. 20XX
        //- 文字
        div
          h3.font-display.text-2xl.font-black.text-black.mb-6(md='text-3xl') 传承与创新并重
          .space-y-4.text-base.leading-relaxed.text-black.font-medium
            p
              Highlight(color='pink', :tilt='-1') 吉尔吉斯斯坦国立兽耳娘小学校
              | ，简称"吉吉国兽耳娘小学"。创建于2025年，是吉尔吉斯斯坦第一所专注于提供优质兽耳娘的特色小学。我校秉承
              Highlight(color='green', :tilt='1') 兽耳萝莉真是太棒了，多来点
              | 的办学理念，致力于为每一位兽耳娘提供全面发展的机会。
            p 学校（并不）拥有一支高素质的教师队伍和现代化的教学设施，开设了丰富多彩的课程和课外活动，为学生的成长提供了良好的环境。
            p
              | 我们相信
              Highlight(color='purple', :tilt='-1') 每一位学生都是独特的
              | ，都有自己的潜能和才华。我们的目标是发掘她们的潜力，培养她们成为具有全球视野和创新精神的未来领袖。

  //- 新闻公告
  section#news.py-16.relative(md='py-20')
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='新闻公告', decoration='bang', decoColor='pink')
      .grid.grid-cols-1.gap-8(md='grid-cols-2', lg='grid-cols-3')
        NewsCard(
          v-for='(news, index) in newsList',
          :key='news.title',
          v-bind='news',
          :theme-color='newsColors[index % newsColors.length]',
          :tilt='newsTilts[index % newsTilts.length]',
          :is-new='index === 0',
          v-scroll-in='{ delay: 300, stagger: 150 }'
        )

  //- 师资力量
  section#teachers.py-16.relative(md='py-20')
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='师资力量', decoration='star', decoColor='pink')
      .grid.grid-cols-1.gap-8(md='grid-cols-2', lg='grid-cols-3')
        TeacherCard(
          v-for='(teacher, index) in teachersList',
          :key='teacher.name',
          v-bind='teacher',
          :theme-color='teacherColors[index]',
          :tilt='teacherTilts[index]',
          v-scroll-in='{ delay: 300, stagger: 200 }'
        )

  //- 家长评价
  section#reviews.py-16.relative(md='py-20')
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='家长评价', decoration='heart', decoColor='pink')
      .max-w-4xl.mx-auto.space-y-12
        ParentReview(
          v-for='(review, index) in parentReviewsList',
          :key='review.name',
          v-bind='review',
          :direction='index % 2 === 0 ? "left" : "right"',
          :bubble-color='reviewColors[index % reviewColors.length]',
          :tilt='reviewTilts[index % reviewTilts.length]',
          v-scroll-in='{ delay: 300, stagger: 200 }'
        )

  //- 联系我们
  section#contact.py-16.relative(md='py-20')
    .main-container.mx-auto.px-4
      div(v-scroll-in='{ delay: 100 }')
        SectionTitle(title='联系我们', decoration='mail', decoColor='green')
      .grid.grid-cols-1.gap-10.items-start(lg='grid-cols-2', v-scroll-in='{ delay: 300 }')
        .space-y-5
          ContactItem(:icon='IconMapPin', title='地址', content='二次元街道123号，并非吉尔吉斯斯坦', themeColor='pink', :tilt='-1')
          ContactItem(:icon='IconPhone', title='电话', content='+0 123 456 789', themeColor='yellow', :tilt='1')
          ContactItem(:icon='IconMail', title='邮箱', content='admin@epb.edu.kg', themeColor='green', :tilt='0')
          ContactItem(:icon='IconClock', title='办公时间', content='星期八，全天开放', themeColor='purple', :tilt='-1')
        ContactForm

  //- 页脚
  GlobalFooter(@scrollToAnchor='scrollToAnchor')
</template>

<script setup lang="ts">
import { IconMapPin, IconPhone, IconMail, IconClock } from '@tabler/icons-vue'
import tachieOmain from '@/assets/images/tachie-omain.png'
import tachieSili from '@/assets/images/tachie-sili.png'
import tachieMoegirl from '@/assets/images/tachie-moegirl.png'

onMounted(async () => {
  await nextTick()
  if (window.location.hash) {
    scrollToAnchor(new CustomEvent('scrollToAnchor', { detail: window.location.hash }), window.location.hash)
    window.history.replaceState({}, '', window.location.pathname)
  }
})

const scrollToAnchor = (event: Event, anchor: string) => {
  if (!anchor) return
  if (anchor === '#') {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.pushState({}, '', window.location.pathname)
  } else {
    const element = document.querySelector(anchor)
    if (element) {
      event.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
      history.pushState({}, '', anchor)
    } else {
      console.warn(`无法找到锚点元素: ${anchor}`)
      // 让浏览器默认跳转（可能是外部链接或页面内不存在的锚点）
    }
  }
}

// 新闻卡片底色与歪斜轮换
const newsColors = ['pink', 'yellow', 'green', 'purple'] as const
const newsTilts = [-1, 0, 1] as const

// 教师卡片底色（绑定到人，不轮换）
const teacherColors = ['pink', 'purple', 'green'] as const
const teacherTilts = [-2, 2, -1] as const

// 家长评价气泡底色与歪斜
const reviewColors = ['pink', 'yellow', 'green', 'purple'] as const
const reviewTilts = [-1, 1, -1, 1] as const

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
    stats: string[]
  }[]
>([
  {
    image: tachieOmain,
    name: '小鱼君',
    title: '校长兼时空管理员',
    description:
      '宇宙最高学府毕业，拥有跨维度教育学博士，已存活37000年，曾在平行宇宙创办268所学校。能够用思维直接向学生传输知识，教学满意度达到127%。',
    stats: ['37000+岁', '跨维度博士', '创办 268 校'],
  },
  {
    image: tachieSili,
    name: 'SILI',
    title: '超维量子教育学主管',
    description: '来自万界规划局的超级学霸，拥有12个博士学位和3个未被发现的基本粒子命名权，她能用7种外星语言同时授课。',
    stats: ['博士 ×12', '外星语 ×7', '量子粒子 ×3'],
  },
  {
    image: tachieMoegirl,
    name: '萌百娘',
    title: '特邀文化专家',
    description: '全球最强二次元文化专家，我们也不知道她为什么出现在这里。',
    stats: ['文化 MAX', '萌系浓度 99%', '神秘出现'],
  },
])

const parentReviewsList = ref([
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '作为来自异次元的贵族，我对教育质量要求极高。这所学校超越了我在77个平行宇宙中见过的所有教育机构！我的小公主在这里不仅学会了12种古老的魔法语言，还掌握了时空折叠的基础理论。校长的教学理念简直是跨维度的天才之作！',
    name: '艾莉西亚·冯·星辰',
    identity: '三年级学生家长 · 异次元皇室',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '身为时空管理局高级探员，我穿越了无数时间线寻找最优秀的教育资源。这所学校的教育水平已经达到了第九维度文明的标准！我的女儿现在能用意念解开高等数学题，还学会了与量子猫娘对话。真是不可思议的成就！',
    name: '铃木雷电',
    identity: '四年级学生家长 · 时空管理局探员',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '作为失落的亚特兰蒂斯末代女王，我见证过古代文明的辉煌与衰落。但这所学校的教育理念让我看到了希望！我的小海妖在这里不仅保持了天生的水系能力，还学会了控制潮汐和与深海巨兽沟通。这里的老师都是真正的教育贤者！',
    name: '波塞冬娜·深海',
    identity: '五年级学生家长 · 亚特兰蒂斯皇室',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '我是来自银河系第七星区的机械族长老，经过我的量子计算和87436次概率分析，这所学校的教育效果超越了我们种族千年来的教育成果！我的小机娘不仅学会了有机生命的情感表达，还掌握了生物与机械完美融合的技术。感谢校长大人的跨种族教育智慧！',
    name: '赛博·格伦达尔',
    identity: '六年级学生家长 · 银河机械族长老',
  },
])
</script>

<style scoped lang="sass"></style>
