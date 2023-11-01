import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostCreatView from '@/views/posts/PostCreatView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedOneView from '@/views/nested/NestedOneView.vue'
import NestedTwoView from '@/views/nested/NestedTwoView.vue'
import NestedHomeView from '@/views/nested/NestedHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'PostList',
      component: PostListView
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts/create',
      name: 'PostCreate',
      component: PostCreatView
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts/:id', //동적 라우팅
      name: 'PostDetail',
      component: PostDetailView,
      // props: true,
      // props를 객체형식으로 넘기기
      props: (route) => {
        return {
          id: parseInt(route.params.id)
        }
      }
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts/:id/edit',
      name: 'PostEdit',
      component: PostEditView
      // component: () => import('../views/AboutView.vue')
    },//404 Not Found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/nested', //중첩된 라우트 사용
      name: 'Nested',
      component: NestedView,
      children: [
        {
          path: '',
          name: 'NestedHome',
          component: NestedHomeView
        },
        {
          path: 'one',
          name: 'NestedOne',
          component: NestedOneView
        },
        {
          path: 'two',
          name: 'NestedTwo',
          component: NestedTwoView
        },
      ]
      // component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
