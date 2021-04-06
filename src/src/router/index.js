import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import EditProduct from '@/components/EditProduct'
import Product from '@/components/Product'

Vue.use(VueRouter)

// 2. Define some routes
const routes = [
  {
    path: '/',
    name: 'iMain',
    component: Main,
    props: true
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    props: true
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true,
    // Navigation guards
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
