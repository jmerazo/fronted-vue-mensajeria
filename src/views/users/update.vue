<template>
<a  class="btn btn-secondary" style="margin-left:2rem; margin-top:2rem;" href="/usuario">Volver</a>

  <form @submit.prevent="guardar" enctype="multipart/form-data" class="formulario">
<div class="div-inicio">
   <h1 style="text-align: center;">Actualizar Usuario</h1>
</div>
<br>
    <div class="form-group row">
      <label for="usuario" class="col-lg-4 control-label">Usuario</label>
      <div>
      <input class="form-control col-lg-14" type="text" v-model="username" id="usuario" />
      </div>
    </div>
    <div class="form-group row">
      <label for="nombres" class="col-lg-4 control-label">Nombres</label>
      <div>
      <input class="form-control col-lg-14" type="text" v-model="nombres" id="nombres" />
      </div>
    </div>
    <div class="form-group row">
      <label for="apellidos" class="col-lg-4 control-label">Apellidos</label>
    <div>
      <input class="form-control col-lg-14" type="text" v-model="apellidos" id="apellidos" />
    </div>
    </div>
    <div class="form-group row">
      <label for="password" class="col-lg-4 control-label">Contraseña</label>
    <div>
      <input class="form-control col-lg-14" type="text" v-model="cpassword" id="password" />
    </div>
    </div>
    <div class="form-group row">
      <label for="cpassword" class="col-lg-4 control-label">Confirmar Contraseña</label>
    <div>
      <input class="form-control col-lg-14" type="text" v-model="password" id="apellidos" />
    </div>
    </div>
    <div class="form-group row">
      <label for="correo" class="col-lg-4 control-label">Correo</label>
      <div>
      <input class="form-control col-lg-14" type="text" v-model="correo" id="correo" />
      </div>
    </div>

     <div class="div-final">
    <button  type="submit" class="btn btn-secondary booton" >Actualizar</button>
     </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "ActualizarUsuario",
  data() {
    return {
        id: null,
        username: "",
        nombres: "",
        apellidos: "",
        correo: "",
        password: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id
    axios.get("http://localhost:8000/api/usuarios/" + this.id, 
    {
      headers: {
        Authorization: "JWT " + localStorage.getItem("token"),
      },
    }).then((response) =>{
        console.log(response)
        this.nombres = response.data.first_name,
        this.apellidos = response.data.last_name,
        this.correo = response.data.email,
        this.username = response.data.username
    });
  },
  methods: {
    guardar() {
      axios
        .put("http://localhost:8000/api/usuarios/" + this.id, {
            first_name: this.nombres,
            last_name: this.apellidos,
            email: this.correo,
            username: this.username,
            password: this.password
          },
          {
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
@media(min-width: 1000px)
{
.formulario{
	margin:auto;
	width:450px;

  margin-bottom: 50px;
	border-radius: 20px;
  background: #CFCFCF;
  color: black;

}
}
 .container{
	width: 100%;
	padding: 5px;
	border-radius: 20px;
}
label{
	font-size: 20px;
	width: 85%;
	padding: 3.5px;
	margin-left: 2rem;
}
.img-1{
  margin-left:10rem;
  background: white;
  margin-top:0.5rem;
  border:solid #1F4181;
}
.div-inicio{
  background:#777575; 
  border-top-left-radius:10px; 
  border-top-right-radius: 10px; 
  color: white;
  padding: 5%;
}
.div-final{
  
  text-align: center; 
  
}
.booton{
  background:#777575; 
  margin-bottom:0.5rem;
   margin-top:0.5rem; 
   cursor: pointer; 
   width:40%;
   color:white;
}
</style>