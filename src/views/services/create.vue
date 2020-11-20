<template>
  <a
    class="btn btn-secondary"
    style="margin-left: 2rem; margin-top: 2rem"
    href="/"
    >Volver</a
  >
  <div class="container">
    <form
      @submit.prevent="guardar"
      enctype="multipart/form-data"
      class="formulario"
    >
      <div class="div-inicio">
        <h1 style="text-align: center">Añadir servicio</h1>
      </div>
      <br />
      <div class="form-group row">
        <label for="usuario" class="col-lg-4 control-label">Nombre</label>
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="servicio"
            id="servicio"
          />
        </div>
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
  name: "CrearServicio",
  data() {
    return {
      servicio: "",
    };
  },
  methods: {
    guardar() {
      axios
        .post("http://localhost:8000/api/tiposervicio/", {
            nombre: this.servicio,
        },        
        {            
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$router.push("/");
        });
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