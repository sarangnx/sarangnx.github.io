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
                    import(/* webpackChunkName: "about" */ '@/views/About')
            },
            {
                path: '/skills',
                name: 'Skills',
                component: () =>
                    import(/* webpackChunkName: "skills" */ '@/views/Skills')
            },
            {
                path: '/works',
                name: 'Works',
                component: () =>
                    import(/* webpackChunkName: "works" */ '@/views/Works')
            },
            {
                path: '/contact',
                name: 'Contact',
                component: () =>
                    import(/* webpackChunkName: "contact" */ '@/views/Contact')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
