import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import BlogArticle from '../pages/BlogArticle.vue';
import Blog from '../pages/Blog.vue';
import Contacts from '../pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    linkActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contacts', name: 'contacts', component: Contacts },
        { path: '/blog', name: 'blog', component: Blog },
        { path: '/blogArticle/:id', name: 'blog-article', component: BlogArticle },
        { path: '/:pathMatch(.*)*', component: NotFoundPage },
    ]
})

export { router };