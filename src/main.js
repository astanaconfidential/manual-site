import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'

// 🔥 тема теперь отсюда
import Lara from '@primevue/themes/lara'

import TabMenu from 'primevue/tabmenu'
import PanelMenu from 'primevue/panelmenu'

import Galleria from 'primevue/galleria'






const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
})

app.mount('#app')
app.component('Galleria', Galleria)