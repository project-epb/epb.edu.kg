<template lang="pug">
.contact-form.nb-card.bg-white.p-6(md='p-8')
  h3.font-display.text-3xl.font-black.text-black.mb-2 入学申请
  p.text-black.font-medium.text-sm.mb-6.leading-relaxed
    | 请务必不要填写真实信息，否则会被时空管理员小鱼君直接传送到银河马桶。
  form.space-y-5(@submit.prevent='submitForm')
    div
      label.block.text-sm.font-black.text-black.mb-2(for='parentName') 家长姓名 *
      input#parentName.nb-input(
        type='text',
        v-model='formData.parentName',
        required,
        placeholder='请输入您的姓名'
      )
    div
      label.block.text-sm.font-black.text-black.mb-2(for='studentName') 学生姓名 *
      input#studentName.nb-input(
        type='text',
        v-model='formData.studentName',
        required,
        placeholder='请输入孩子的姓名'
      )
    div
      label.block.text-sm.font-black.text-black.mb-2(for='email') 电子邮箱 *
      input#email.nb-input(
        type='email',
        v-model='formData.email',
        required,
        placeholder='地球上的邮箱地址'
      )
    div
      label.block.text-sm.font-black.text-black.mb-2(for='message') 情况说明 *
      textarea#message.nb-input.resize-none(
        v-model='formData.message',
        required,
        rows='4',
        placeholder='例如：孩子是什么种族？孩子的年龄、性别、爱好是什么？孩子有什么特长？'
      )
    button.nb-btn.bg-brand-pink.text-white.w-full.justify-center.text-lg(
      type='submit',
      :disabled='isSubmitting',
      :class='isSubmitting ? "opacity-50 cursor-not-allowed" : ""'
    ) {{ isSubmitting ? '发送中...' : '发送申请 →' }}
</template>

<script setup lang="ts">
const formData = reactive({
  parentName: '',
  studentName: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const prankMessages = [
  '您的消息已成功发送到平行宇宙！由于时空管理员小鱼君正在第37001次跨维度会议中，预计回复时间为3-5个工作世纪。',
  '消息传送失败：狐务器正在进行萌化升级，所有消息将自动转换为"喵~"后发送。',
  '恭喜！您的消息已被超维量子教育学主管SILI接收，但她同时用7种外星语言回复，地球人类语言解析中...',
  '系统检测到您的消息包含过多正常内容，已自动转发至二次元事务处理部门，请等待萌百娘的专业回复。',
  '警告：时空管理员检测到您试图联系一个虚构的学校，消息已被重定向到最近的真实小学。',
]
const submitForm = async () => {
  if (formData.parentName === formData.studentName) {
    alert('家长和学生不能是同一个人！')
    return
  }

  isSubmitting.value = true

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const randomMessage = prankMessages[Math.floor(Math.random() * prankMessages.length)]
  alert(randomMessage)

  formData.parentName = ''
  formData.studentName = ''
  formData.email = ''
  formData.message = ''

  isSubmitting.value = false
}
</script>
