<template>
  <h1>Crear empresa</h1>
  <a href="/empresas">Volver</a>

  <form @submit.prevent="guardar" enctype="multipart/form-data">
    <div>
      <label for="nombre">Nombre</label>
      <input type="text" v-model="empresa.nombre" id="nombre" /><br />
      <label for="razon_social">Razon Social</label>
      <input type="text" v-model="empresa.razon_social" id="razon_social" /><br />
      <label for="nit">Nit</label>
      <input type="text" v-model="empresa.nit" id="nit" /><br />
      <label for="direccion_empresa">Dirección</label>
      <input
        type="text"
        v-model="empresa.direccion_empresa"
        id="direccion_empresa"
      /><br />
      <label for="ciudad">Ciudad</label>
      <input type="text" v-model="empresa.ciudad_empresa" id="ciudad_empresa" /><br />
      <label for="departamento">Departamento</label>
      <input
        type="text"
        v-model="empresa.departamento_empresa"
        id="departamento_empresa"
      /><br />
      <label for="logo">Logo</label>
      <!-- <input type="text" v-model="logo" id="logo" /><br /> -->
      <!-- <input type="file" accept="image/*" @change="uploadImage($event)" id="logo"/> -->
      <input type="file" @change="obtenerImagen" id="logo" />
      <!-- <button type="submit">Seleccionar archivo</button> -->
      <figure>
        <img width="150" height="150" :src="logo" />
      </figure>
    </div>

    <button type="submit">Guardar</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "CrearEmpresa",
  data() {
    return {
      logoMiniatura: "",
      empresa: {
        nombre: "",
        razon_social: "",
        nit: "",
        direccion_empresa: "",
        ciudad_empresa: "",
        departamento_empresa: "",
        logo: "",
      },
    };
  },
  methods: {
    obtenerImagen(e) {
      let file = e.target.files[0];
      this.empresa.logo = file;
      this.cargarImagen(file);
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.logoMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    guardar() {
      let data = new FormData();
      data.append("nombre", this.empresa.nombre);
      data.append("razon_social", this.empresa.razon_social);
      data.append("nit", this.empresa.nit);
      data.append("direccion_empresa", this.empresa.direccion_empresa);
      data.append("ciudad_empresa", this.empresa.ciudad_empresa);
      data.append("departamento_empresa", this.empresa.departamento_empresa);
      data.append("logo", this.empresa.logo);

      axios
        .post("http://localhost:8000/api/empresa/", data, {
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$router.push("/empresas");
        });
    },
  },
  computed: {
    logo() {
      return this.logoMiniatura;
    },
  },
};
</script>