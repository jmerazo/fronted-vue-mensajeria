<template>
  <a
    class="btn btn-secondary"
    style="margin-left: 2rem; margin-top: 2rem"
    href="/usuario"
    >Volver</a
  >
  <div class="container">
    <form
      @submit.prevent="guardar"
      enctype="multipart/form-data"
      class="formulario"
    >
      <div class="div-inicio">
        <h1 style="text-align: center">Añadir Usuario</h1>
      </div>
      <br />
      <div class="form-group row">
        <label for="usuario" class="col-lg-4 control-label">Usuario</label>
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="usuario"
            id="usuario"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="contrasena" class="col-lg-4 control-label"
          >Contraseña</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            id="contrasena"/>
        </div>
      </div>

      <div class="form-group row">
        <label for="contrasena" class="col-lg-4 control-label"
          >Contraseña (Confirmación)</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="contrasena"
            id="contrasena"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="nombres" class="col-lg-4 control-label"
          >Nombres</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="nombres"
            id="direccion_empresa"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="apellidos" class="col-lg-4 control-label"
          >Apellidos</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="apellidos"
            id="apellidos"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="correo" class="col-lg-4 control-label"
          >Correo electrónico</label
        >
        <div>
          <input
            class="form-control col-lg-14"
            type="text"
            v-model="correo"
            id="correo"
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
  name: "CrearUsuario",
  data() {
    return {
      usuario: "",
      contrasena: "",
      nombres: "",
      apellidos: "",
      correo: "",
    };
  },
  methods: {
    guardar() {
      axios
        .post("http://localhost:8000/api/usuarios", {
            username: this.usuario,
            password: this.contrasena,
            first_name: this.nombres,
            last_name: this.apellidos,
            email: this.correo,
            is_staff: false,
            is_active: true,
            groups: [],
            user_permissions: [],

          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$router.push("/usuario");
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