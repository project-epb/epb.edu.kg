<template lang="pug">
.bg-white.text-gray-800.p-8.rounded-lg.shadow-lg
  h3.text-2xl.font-semibold.mb-6 入学申请
  p.text-gray-500.text-3.mb-6 请务必不要填写真实信息，否则会被时空管理员小鱼君直接传送到银河马桶。
  form(@submit.prevent='submitForm')
    .mb-4
      label.block.text-sm.font-medium.text-gray-700.mb-2(for='name') 家长姓名 *
      input#name.w-full.px-3.py-2.border.border-gray-300.rounded-md.focus-outline-none.focus-ring-2.focus-ring-pink-500.focus-border-transparent(
        type='text',
        v-model='formData.parentName',
        required,
        placeholder='请输入您的姓名'
      )
    .mb-4
      label.block.text-sm.font-medium.text-gray-700.mb-2(for='name') 学生姓名 *
      input#name.w-full.px-3.py-2.border.border-gray-300.rounded-md.focus-outline-none.focus-ring-2.focus-ring-pink-500.focus-border-transparent(
        type='text',
        v-model='formData.studentName',
        required,
        placeholder='请输入孩子的姓名'
      )
    .mb-4
      label.block.text-sm.font-medium.text-gray-700.mb-2(for='email') 电子邮箱 *
      input#email.w-full.px-3.py-2.border.border-gray-300.rounded-md.focus-outline-none.focus-ring-2.focus-ring-pink-500.focus-border-transparent(
        type='email',
        v-model='formData.email',
        required,
        placeholder='地球上的邮箱地址'
      )
    .mb-6
      label.block.text-sm.font-medium.text-gray-700.mb-2(for='message') 情况说明 *
      textarea#message.w-full.px-3.py-2.border.border-gray-300.rounded-md.focus-outline-none.focus-ring-2.focus-ring-pink-500.focus-border-transparent.resize-none(
        v-model='formData.message',
        required,
        rows='4',
        placeholder='例如：孩子是什么种族？孩子的年龄、性别、爱好是什么？孩子有什么特长？'
      )
    button.w-full.bg-pink-500.hover-bg-pink-600.text-white.font-medium.py-2.px-4.rounded-md.transition-colors.duration-200(
      type='submit',
      :disabled='isSubmitting',
      :style='isSubmitting ? { opacity: 0.5, cursor: "not-allowed" } : {}'
    ) {{ isSubmitting ? '发送中...' : '发送申请' }}
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

// 恶搞提示
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

  // 模拟提交延迟
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const randomMessage = prankMessages[Math.floor(Math.random() * prankMessages.length)]
  alert(randomMessage)

  // 重置表单
  formData.parentName = ''
  formData.studentName = ''
  formData.email = ''
  formData.message = ''

  isSubmitting.value = false
}
</script>
