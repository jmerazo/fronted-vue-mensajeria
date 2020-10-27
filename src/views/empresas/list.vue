<template>
  <h1>Listado de empresas</h1>
  <a href="/empresas/create">Crear</a>
  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>Nombre</td>
        <td>Razon Social</td>
        <td>Nit</td>
        <td>Dirección</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="empresa in empresas" :key="empresa.id">
        <td>{{ empresa.id }}</td>
        <td>{{ empresa.nombre }}</td>
        <td>{{ empresa.razon_social }}</td>
        <td>{{ empresa.nit }}</td>
        <td>{{ empresa.direccion_empresa }}</td>
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
};
</script>