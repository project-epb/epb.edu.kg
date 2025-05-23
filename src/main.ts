import App from './App.vue'
import { router } from './router'
import { vScrollIn } from './directives/scrollIn'

// import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/index.sass'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 注册自定义指令
app.directive('scroll-in', vScrollIn)

app.mount('#app')
