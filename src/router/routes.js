
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/coop/HomePage.vue') },
      { path: '/search-for-sale', component: () => import('pages/coop/SearchForSale.vue') },
      { path: '/search-for-lease', component: () => import('pages/coop/SearchForLease.vue') },
      { path: '/search-for-comps', component: () => import('pages/coop/SearchForComps.vue') },
      { path: '/message-board', component: () => import('pages/coop/MessageBoard.vue') },
      { path: '/content-us', component: () => import('pages/coop/ContentUs.vue') },
      { path: '/about-us', component: () => import('pages/coop/AboutUs.vue') },
      { path: '/sign-in', component: () => import('pages/coop/Sign_In.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
