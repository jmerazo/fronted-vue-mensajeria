<template>
  <a class="btn btn-secondary" style="margin-left: 2rem; margin-top: 2rem" href="/empresa">Volver</a>
  <div class="container">
    <form
      @submit.prevent="guardar"
      enctype="multipart/form-data"
      class="formulario"
    >
      <div class="div-inicio">
        <h1 style="text-align: center">Crear empresa</h1>
      </div>
      <br />
      <div class="form-group row">
        <label for="nombre" class="col-lg-4 control-label">Nombre</label>
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="empresa.nombre"
            id="nombre"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="razon_social" class="col-lg-4 control-label"
          >Razon Social</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="empresa.razon_social"
            id="razon_social"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="nit" class="col-lg-4 control-label">Nit</label>
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="empresa.nit"
            id="nit"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="direccion_empresa" class="col-lg-4 control-label"
          >Dirección</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="empresa.direccion_empresa"
            id="direccion_empresa"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="ciudad" class="col-lg-4 control-label">Ciudad</label>
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="empresa.ciudad_empresa"
            id="ciudad_empresa"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="departamento" class="col-lg-4 control-label"
          >Departamento</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="empresa.departamento_empresa"
            id="departamento_empresa"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="logo" class="col-lg-4 control-label">Logo</label>
        <div>
          <input
            style="margin-left: 2.5rem"
            class="form-control col-lg-14"
            type="file"
            @change="obtenerImagen"
            id="logo"
          />
        </div>
        <figure>
          <img class="img-1" width="150" height="150" :src="logo" />
        </figure>
      </div>
      <div class="div-final">
        <button type="submit" class="btn btn-secondary booton">Guardar</button>
      </div>
    </form>
  </div>
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
          this.$router.push("/empresa");
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
<style>
@media (min-width: 1000px) {
  .formulario {
    margin: auto;
    width: 450px;
    margin-top: 30px;
    margin-bottom: 50px;
    border-radius: 20px;
    background: #cfcfcf;
    color: black;
  }
}
.container {
  width: 100%;
  padding: 5px;
  border-radius: 20px;
}
label {
  font-size: 20px;
  width: 85%;
  padding: 3.5px;
  margin-left: 2rem;
}
.img-1 {
  margin-left: 10rem;
  background: white;
  margin-top: 0.5rem;
  border: solid #1f4181;
}
.div-inicio {
  background: #777575;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  padding: 5%;
}
.div-final {
  text-align: center;
}
.booton {
  background: #777575;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  width: 40%;
  color: white;
}
</style>