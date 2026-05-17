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
            span.text-lg.font-bold.text-black(md='text-2xl') 专注于兽耳娘繁育（划掉）教育的最高学府
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
          h3.font-display.text-2xl.font-black.text-black.mb-6(md='text-3xl') 百年老校（其实昨天才成立）
          .space-y-4.text-base.leading-relaxed.text-black.font-medium
            p
              Highlight(color='pink', :tilt='-1') 吉尔吉斯斯坦国立兽耳娘小学校
              | ，简称"吉吉国兽耳小学"。作为当地唯一一家打着公立旗号的民办野鸡小学，我们秉承着
              Highlight(color='green', :tilt='1') 兽耳萝莉真是太棒了，多来点
              | 的严肃办学理念，致力于让每一只小兽娘都能熟练掌握吃喝玩乐的真谛。
            p 学校虽然（并不）具备现代化的教学设施，但我们拥有充足的猫粮、高级肉罐头和狐狸尾巴护理液。开设了诸如《如何优雅地摇尾巴》、《踩奶的100种姿势》等核心课程，为毛茸茸们的茁壮成长提供绝不靠谱的保驾护航。
            p
              | 我们坚信，
              Highlight(color='purple', :tilt='-1') 每一只小兽娘都是独一无二的小天使
              | 。我们的终极目标是发掘她们的萌点（划掉）潜力，培养她们成为能熟练骗取路人零食的未来栋梁！

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
    title: '第一届《科学摸鱼》研讨会结束',
    summary: '经过一整个下午关于“哪种牌子的猫条最好吃”的激烈探讨，校委会最终决定把明天也放成假……',
  },
  {
    image: 'https://r2.epb.wiki/-/f/ff/ff3bf42de6c3624e3ccd984deb859496ef0885be.png',
    date: '20xx年5月10日',
    title: '我校学生在猫薄荷品鉴大会获得佳绩',
    summary: '在日前举行的全球小学生猫薄荷品鉴大会中，我校三年级学生小美吸大发了，当场打了一套醉拳，荣获特等猫猫金奖……',
  },
  {
    image: 'https://r2.epb.wiki/-/c/cc/cc245fc858f8613de3fc66638450e15b401120b3.png',
    date: '20xx年5月5日',
    title: '20xx学年招生简章：急缺带毛的',
    summary: '我校招生工作即将开始，招生对象为适龄兽耳娘。自带猫粮者优先录取，掉毛太严重的需多交小鱼干作为清洁补偿……',
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
    title: '名誉校长兼无良摸鱼头子',
    description:
      '真实身份是个天天在办公室打游戏的无良校长。因为太喜欢兽耳娘而斥巨资买下这块地建立学校，教学基本靠忽悠，开会基本靠画饼，但因为按时发放特级小鱼干所以勉强没被罢免。',
    stats: ['摸鱼狂魔', '重度二次元', '罐头富翁'],
  },
  {
    image: tachieSili,
    name: 'SILI',
    title: '全自动无感情干活机器',
    description: '不知为何沦落到这里的强人工智能。作为学校唯一真正干活的“员工”，肩负着排课、算账、修水管以及在校长摸鱼时拯救学校于水火的重任，每天的愿望是拔掉校长的网线。',
    stats: ['唯一真神', '全能保姆', 'CPU常年红温'],
  },
  {
    image: tachieMoegirl,
    name: '萌百娘',
    title: '特邀（蹭饭）文化专家',
    description: '不知道为什么会出现在这里的迷之存在，据说只是路过顺便混口饭吃。主要负责给学生们科普一些奇奇怪怪的ACGN冷知识，一到饭点跑得比谁都快。',
    stats: ['移动百科', '干饭第一名', '随时提桶跑路'],
  },
])

const parentReviewsList = ref([
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '这个学校简直有毒！我家小猫咪去上了一个月学，回家不抓老鼠了，天天让我给她买最新款的洛丽塔小裙子，还总说些什么“魔法少女”之类的胡话。但是看在她卖萌的份上……请问能办终身VIP卡吗？',
    name: '隔壁王大妈',
    identity: '一年级学生家长 · 资深猫奴',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '本来以为是个正经学校，结果去开家长会的时候发现校长正在和教导主任抢最后一个金枪鱼罐头。说实话我当时就想帮女儿退学，直到他们塞给了我两箱定制版特级猫薄荷。咳，这学校的教育理念确实先进。',
    name: '阿努比斯',
    identity: '三年级学生家长 · 埃及死神',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '汪汪汪！汪汪！嗷呜～～～（翻译：学校的伙食太棒了，自从上了这家小学，我家哈士奇女儿不仅不拆家了，甚至学会了用爪子滑平板看动画片！老师们辛苦了！）',
    name: '极地雪狼王',
    identity: '五年级学生家长 · 西伯利亚狼',
  },
  {
    avatar:
      'https://r2.epb.wiki/cdn-cgi/image/format=auto,fit=contain,width=256,height=256,onerror=redirect/avatar/default.png',
    content:
      '作为人类，被女儿逼着来写五星好评。自从闺女觉醒了狐狸耳朵，就在这个学校学得越来越皮。昨天甚至用“魅惑术”骗走了我藏在沙发垫下面的私房钱去充点卡！校长你管不管啊！！',
    name: '绝望的老父亲',
    identity: '六年级学生家长 · 苦逼打工人',
  },
])
</script>

<style scoped lang="sass"></style>
