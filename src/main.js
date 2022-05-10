import { createApp } from 'vue'
import App from './App.vue'
import HomePage from '@/pages/HomePage.vue'
import TheHeader from '@/components/layout/TheHeader.vue'

const app = createApp(App)


app.component('HomePage', HomePage)
app.component('TheHeader', TheHeader)
app.mount('#app')
