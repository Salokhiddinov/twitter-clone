import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue'
import SignUpPage from "@/pages/SignUpPage.vue";
import NotFound from '@/pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        //Home Pages
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomePage, name: 'home'},
        {path: '/sign-up', component: SignUpPage, name: 'signup'},

        //Not Found Page
        {path: '/:pathMatch(.*)', component: NotFound}
    ]
})

export default router