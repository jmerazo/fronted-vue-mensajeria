<template>
  <h1 align="center">Empresas</h1>
  <a href="/empresas/create">Agregar</a>
  <a href="/">Inicio</a>
  <table class="table table-striped" id="table">
    <thead>
      <tr>
        <td>ID</td>
        <td>Nombre</td>
        <td>Razon Social</td>
        <td>Nit</td>
        <td>Dirección</td>
        <td>Ciudad</td>
        <td>Departamento</td>
        <td>Acción</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(empresa, index) in empresas" :key="empresa.id">
        <td>{{ empresa.id }}</td>
        <td>{{ empresa.nombre }}</td>
        <td>{{ empresa.razon_social }}</td>
        <td>{{ empresa.nit }}</td>
        <td>{{ empresa.direccion_empresa }}</td>
        <td>{{ empresa.ciudad_empresa }}</td>
        <td>{{ empresa.departamento_empresa }}</td>
        <div>
          <button class="btn btn-success"><router-link to="/empresas/update"> ✏️ </router-link></button>
          <button class="btn btn-danger" @click="eliminar_empresa(index, item)"> 🗑️ </button>
        </div>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "Empresas",
  data() {
    return {
      empresas: [],
    };
  },
  mounted() {
    axios.get("http://localhost:8000/api/empresa", {
        headers: {
          "Authorization": "JWT " + localStorage.getItem("token")
        },
    })
    .then(response => {
        console.log(response.data);
        this.empresas = response.data
    })
    /* .catch(err =>{
              this.error = true;
    }); */
  },
  methods: {
    eliminar_empresa(index, item) {
      console.log(index);
      console.log(item);
      this.empresas.splice(index, 1);

      let data = new FormData();
      data.append("id", item.id);

      axios
        .delete("http://localhost:8000/api/empresa/", data, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$router.push("/empresas");
        });
    }
  }
};
</script>

<style>

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>