import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Auth from '../components/Auth.vue'
import { supabase } from '../lib/supabase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
      children: [
        {
          path: '',
          name: 'metadataList',
          component: () => import('../components/MetadataList.vue'),
        },
        {
          path: '/new',
          name: 'newMetadata',
          component: () => import('../components/NewMetadata.vue'),
        },
        {
          path: '/:id',
          name: 'metadataDetail',
          component: () => import('../components/MetadataDetail.vue'),
        },
      ],
    },
    {
      path: '/studio',
      name: 'studio',
      component: () => import('../views/StudioView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
  ],
})

router.beforeEach(async (to, from) => {
  const { data } = await supabase.auth.getSession()

  if (data.session && to.name === 'auth') {
    return { name: 'home' }
  } else if (to.name === undefined) {
    return { name: 'home' }
  }
})

export default router
