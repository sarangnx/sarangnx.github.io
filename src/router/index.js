import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () =>
            import(/* webpackChunkName: "layout" */ '@/layouts/BaseLayout'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () =>
                    import(/* webpackChunkName: "home" */ '@/views/Home')
            },
            {
                path: '/about',
                name: 'About',
                component: () =>
                    import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
