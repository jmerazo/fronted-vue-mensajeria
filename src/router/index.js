import { reactive } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import EmpresasList from "@/views/empresas/list.vue";
import EmpresaCrear from "@/views/empresas/create.vue";

const routes = [
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/devoluciones',
    name: 'Devoluciones',
    component: () => import('../views/Devoluciones.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/consulta',
    name: 'Consulta',
    component: () => import('../views/Consulta.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/imagen',
    name: 'Imagen',
    component: () => import('../views/Imagen.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/empresas',
    name: 'Empresas',
    component: EmpresasList,
    meta: {
      auth: true
    }
  },
  {
    path: '/empresas/create',
    name: 'CrearEmpresa',
    component: EmpresaCrear,
    meta: {
      auth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")

  if (to.matched.some(record => record.meta.auth)){
    if(!token){
      next('/Login')
    }
  }
  
  next()
})

export default router
