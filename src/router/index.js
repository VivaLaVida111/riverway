import {createRouter,createWebHistory} from 'vue-router'

import Layoutvue from'@/views/MainLayout.vue'

const routes = [
    {path:'/',component:Layoutvue}
]


//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes:routes
})
//导出路由
export default router