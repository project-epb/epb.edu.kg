import App from './App.vue'
import { router } from './router'

// import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/index.sass'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
