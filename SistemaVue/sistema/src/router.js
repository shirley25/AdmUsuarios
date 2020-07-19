import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rol from './components/Rol.vue'
import Usuario from './components/Usuario.vue'
import Informacion from './components/Informacion.vue'
import Soporte from './components/Soporte.vue'
import Login from './components/Login.vue'
import store from './store'

Vue.use(Router)
var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta :{
        administrador: true,
        almacenero: true,
        vendedor: true
      }
    },
    {
      path: '/roles',
      name: 'roles',
      component: Rol,
      meta :{
        administrador: true
      }
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuario,
      meta :{
        administrador: true
      }
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: Informacion,
      meta :{
        administrador: true,
        almacenero: true,
        vendedor: true
      }
    } ,
    {
      path: '/soporte',
      name: 'soporte',
      component: Soporte,
      meta :{
        administrador: true,
        almacenero: true,
        vendedor: true
      }
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta :{
        libre: true
      }
    }
  ]
})

router.beforeEach((to, from, next)=> {
  if (to.matched.some(record => record.meta.libre)){
    next()
  } else if (store.state.usuario && store.state.usuario.rol== 'Administrador'){
    if (to.matched.some(record => record.meta.administrador)){
      next()
    }
  }else if (store.state.usuario && store.state.usuario.rol== 'Almacenero'){
    if (to.matched.some(record => record.meta.almacenero)){
      next()
    }
  }else if (store.state.usuario && store.state.usuario.rol== 'Vendedor'){
    if (to.matched.some(record => record.meta.vendedor)){
      next()
    }
  } else{
    next({
      name: 'login'
    })
  }
})

export default router