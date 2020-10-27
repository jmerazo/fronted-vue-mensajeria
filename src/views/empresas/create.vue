<template>
  <h1>Crear empresa</h1>
  <a href="/empresas">Volver</a>

  <form @submit.prevent="guardar">
    <div>
      <label for="nombre">Nombre</label>
      <input type="text" v-model="nombre" id="nombre" /><br />
      <label for="razon_social">Razon Social</label>
      <input type="text" v-model="razon_social" id="razon_social" /><br />
      <label for="nit">Nit</label>
      <input type="text" v-model="nit" id="nit" /><br />
      <label for="direccion_empresa">Dirección</label>
      <input type="text" v-model="direccion_empresa" id="direccion_empresa" /><br/>
      <label for="ciudad">Ciudad</label>
      <input type="text" v-model="ciudad_empresa" id="ciudad_empresa" /><br />
      <label for="departamento">Departamento</label>
      <input type="text" v-model="departamento_empresa" id="departamento_empresa" /><br />
      <label for="logo">Logo</label>
      <!-- <input type="text" v-model="logo" id="logo" /><br /> -->
      <!-- <input type="file" accept="image/*" @change="uploadImage($event)" id="logo"/> -->
      <input type="file" v-on:change="logo" accept="image/*" id="logo"/>
      <!-- <button type="submit">Seleccionar archivo</button> -->
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
      nombre: "",
      razon_social: "",
      nit: "",
      direccion_empresa: "",
      ciudad_empresa: "",
      departamento_empresa: "",
      logo: "",
    };
  },
  methods: {
    guardar() {

      let logo = new FormData();
      logo.append("name", "my-picture");
      logo.append("file", event.target.files);

      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios.post("http://localhost:8000/api/empresa/", {
            nombre: this.nombre,
            razon_social: this.razon_social,
            nit: this.nit,
            direccion_empresa: this.direccion_empresa,
            ciudad_empresa: this.ciudad,
            departamento_empresa: this.departamento, 
            logo: this.logo,           
          },
          {
            headers: {
              Authorization: "JWT " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.$router.push("/empresas");
        });
    },
    /* uploadImage(event) {
      //const URL = "http://foobar.com/upload";

      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", event.target.files[0]);

      let config = {
        header: {
          "Content-Type": "image/png",
        },
      };

      axios.post("http://localhost:8000/api/empresa/", data, config, {
          logo: this.logo,
      }).then((response) => {
        console.log("Imagen cargada")
      });
    }, */
  },
};
</script>