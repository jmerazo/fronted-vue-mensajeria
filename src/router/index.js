import { reactive } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import EmpresasList from "@/views/empresas/list.vue";
import EmpresaActualizar from "@/views/empresas/update.vue";
import UserList from "@/views/users/list.vue";
import UserCreate from "@/views/users/create.vue";
import UserUpdate from "@/views/users/update.vue";
import UploadBD from "@/views/bd/upload.vue";
import TypeService from "@/views/services/create.vue";
import State from "@/views/state/create.vue";

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
    path: '/empresa',
    name: 'Empresas',
    component: EmpresasList,
    meta: {
      auth: true
    }
  },
  {
    path: '/create',
    name: 'CrearEmpresa',
    component: () => import('../views/empresas/create.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/empresa/:id/update',
    name: 'ActualizarEmpresa',
    component: EmpresaActualizar,
    meta: {
      auth: true
    }
  },
  {
    path: '/usuario',
    name: 'ListarUsuario',
    component: UserList,
    meta: {
      auth: true
    }
  },
  {
    path: '/usuario/create',
    name: 'CrearUsuario',
    component: UserCreate,
    meta: {
      auth: true
    }
  },
  {
    path: '/usuario/:id/update',
    name: 'ActualizarUsuario',
    component: UserUpdate,
    meta: {
      auth: true
    }
  },
  {
    path: '/uploadbd',
    name: 'SubirBasedeDatos',
    component: UploadBD,
    meta: {
      auth: true
    }
  },
  {
    path: '/servicio',
    name: 'CrearServicio',
    component: TypeService,
  },
  {
    path: '/asignar',
    name: 'AsignarCorreo',
    component: () => import('../views/mensajeros/asignar_correo.vue'),   
     meta: {
      auth: true
    }
  },
  {
    path: '/listar',
    name: 'Listar',
    component: () => import('../views/mensajeros/listar_mensajeros.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/planillas',
    name: 'Planillas',
    component: () => import('../views/mensajeros/planillas.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/registrarmensajeros',
    name: 'RegistrarMensajeros',
    component: () => import('@/views/mensajeros/registrar_mensajeros.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/estado',
    name: 'CrearEstado',
    component: State,
  },
  {path: '/reporte',
    name: 'Reporte',
    component: () => import('../views/mensajeros/reporte_correo.vue'),
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
