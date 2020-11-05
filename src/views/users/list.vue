<template>
  <h1 align="center">Usuarios</h1>
  <a class="btn btn-success" href="/users/create">Agregar</a>
  <a class="btn btn-warning" href="/">Inicio</a>

  <table class="table table-striped" id="table">
    <thead>
      <tr class="bg-dark text-light">
        <td>ID</td>
        <td>Usuario</td>
        <td>Nombre</td>
        <td>Apellidos</td>
        <td>Correo</td>
        <td>Staff</td>
        <td>Activo</td>
        <td>Grupo</td>
        <td>Acción</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td>{{ usuario.id }}</td>
        <td>{{ usuario.username}}</td>
        <td>{{ usuario.first_name }}</td>
        <td>{{ usuario.last_name }}</td>
        <td>{{ usuario.email }}</td>
        <td>{{ usuario.is_staff }}</td>
        <td>{{ usuario.is_active }}</td>
        <td>{{ usuario.groups }}</td>
        <div>
          <a :href="`/usuario/${usuario.id}/update`" class="btn btn-success">
             ✏️
          </a>
          <a
            style="margin-left: 10px"
            href="#"
            class="btn btn-danger"
            @click="eliminar_empresa(usuario.id)"
          >
            🗑️
          </a>
        </div>
      </tr>
    </tbody>
  </table>
  
</template>

<script>
import axios from "axios";

export default {
  name: "Usuarios",
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {
    this.traerUsuarios();    
  },
  methods: {
    traerUsuarios(){
      axios.get("http://localhost:8000/api/usuarios", {
        headers: {
          "Authorization": "JWT " + localStorage.getItem("token")
        },
    })
    .then(response => {
        console.log(response.data);
        this.usuarios = response.data
    })
    /* .catch(err =>{
              this.error = true;
    }); */
    },
    eliminar_usuario(id) {
      axios.delete("http://localhost:8000/api/usuarios" + id, {
        headers: {
          "Authorization": "JWT " + localStorage.getItem("token")
        },
      })
          .then(() => {
            this.traerUsuarios();
          });          
    }
  }
};
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>