<template lang="pug">
.contact-form.nb-card.bg-white.p-6(md='p-8')
  h3.font-display.text-3xl.font-black.text-black.mb-2 入学申请
  p.text-black.font-medium.text-sm.mb-6.leading-relaxed
    | 警告：请千万不要填写真实姓名和联系方式！否则无良校长小鱼君会顺着网线过去向你要猫条。
  form.space-y-5(@submit.prevent='submitForm')
    div
      label.block.text-sm.font-black.text-black.mb-2(for='parentName') 铲屎官 / 饲养员姓名 *
      input#parentName.nb-input(
        type='text',
        v-model='formData.parentName',
        required,
        placeholder='请输入您的尊姓大名'
      )
    div
      label.block.text-sm.font-black.text-black.mb-2(for='studentName') 小兽娘姓名 *
      input#studentName.nb-input(
        type='text',
        v-model='formData.studentName',
        required,
        placeholder='请输入主子/小可爱的姓名'
      )
    div
      label.block.text-sm.font-black.text-black.mb-2(for='email') 电子邮箱 *
      input#email.nb-input(
        type='email',
        v-model='formData.email',
        required,
        placeholder='能收到入学通知书即可'
      )
    div
      label.block.text-sm.font-black.text-black.mb-2(for='message') 卖萌区（情况说明） *
      textarea#message.nb-input.resize-none(
        v-model='formData.message',
        required,
        rows='4',
        placeholder='例如：平时掉毛严重吗？有什么拆家前科？几罐猫条能骗走？'
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
  '您的申请已成功发送！由于校长正在打游戏且拒绝处理公务，目前由自动回复机器人代劳。',
  '发送失败：服务器已被猫毛堵塞，维修工 SILI 正在暴走边缘，请稍后再试。',
  '发送成功！萌百娘闻到了表格里残留的猫条味，已经把您的申请表吃掉了。',
  '该生资质骨骼惊奇！符合我校「好吃懒做」的核心培养目标，恭喜免试入学！',
  '警告：检测到您试图联系一家根本不存在的大学（划掉）小学。警察叔叔就是这个人！',
]
const submitForm = async () => {
  if (formData.parentName === formData.studentName) {
    alert('怎么会有兽娘自己填表申请上学的啊！请让饲养员代填！')
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
