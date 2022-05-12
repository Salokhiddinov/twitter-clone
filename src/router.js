import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        //Home Pages
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomePage, name: 'home'},

        //Not Found Page
        {path: '/:pathMatch(.*)', component: NotFound}
    ]
})

export default router