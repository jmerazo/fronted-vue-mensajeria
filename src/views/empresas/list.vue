<template>
<section class="main_ingreso1">
<section class="contimage_ingreso1">
  <h1 align="center">Empresas</h1>
  <a class="btn btn-success" href="/create">Agregar</a>
   
  <a style="margin-left:0.5rem;" class="btn btn-warning" href="/">Inicio</a>
  <table class="table table-striped" id="table">
    <thead>
      <tr class="bg-dark text-light">
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
      <tr v-for="empresa in empresas" :key="empresa.id">
        <td>{{ empresa.id }}</td>
        <td>{{ empresa.nombre }}</td>
        <td>{{ empresa.razon_social }}</td>
        <td>{{ empresa.nit }}</td>
        <td>{{ empresa.direccion }}</td>
        <td>{{ empresa.ciudad}}</td>
        <td>{{ empresa.departamento }}</td>
        <div>
          <a :href="`/empresa/${empresa.id}/update`" class="btn btn-success">
             ✏️
          </a>
          <a
            style="margin-left: 10px"
            href="#"
            class="btn btn-danger"
            @click="eliminar_empresa(empresa.id)"
          >
            🗑️
          </a>
        </div>
      </tr>
    </tbody>
  </table>
</section>
<section class="aside_ingreso1">
			<h1 style="color:#4A4A4A;">Mensajero</h1>
			<div>
      <input
        onclick="location.href='/registrarmensajeros'"
        type="submit"
        value="Registrar"
        class="btn btn-secondary button_form1"
      />
    </div>
    <div>
      <input
        onclick="location.href='/asignar'"
        type="submit"
        value="Asignar Correo"
        class="btn btn-secondary button_form1"
      />
    </div>
    <div>
      <input
        onclick="location.href='/reporte'"
        type="submit"
        value="Reporte Correo"
        class="btn btn-secondary button_form1"
      />
    </div>
    <div>
      <input
        onclick="location.href='/planillas'"
        type="submit"
        value="Planillas"
        class="btn btn-secondary button_form1"
      />
    </div>
    <div>
      <input
        onclick="location.href='/listar'"
        type="submit"
        value="Listar Mensajeros"
        class="btn btn-secondary button_form1"
      />
    </div>
		</section>
</section>
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
    this.traerEmpresas();    
  },
  methods: {
    traerEmpresas(){
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
    eliminar_empresa(id) {
      axios.delete("http://localhost:8000/api/empresa/" + id, {
        headers: {
          "Authorization": "JWT " + localStorage.getItem("token")
        },
      })
          .then(() => {
            this.traerEmpresas();
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
.contimage_ingreso1{
	float: left;
	width: 80%;	
  margin-right: 1%;
	height: 520px;
	background: white;
	padding-top: 1rem;
	
}
.button_form1{
	width: 90%;
	font-size: 20px;
	padding: 4px 4px;
	border-radius: 10px;	
	cursor: pointer;
	margin-top:1rem;
}
.aside_ingreso1{
	float: left;
	height: 519px;
	box-sizing: border-box;
	background: #CFCFCF;
	color: white;
	margin-top: 2rem;
	border-radius:10px;
	text-align: center;

}
.main_ingreso1{
	
	width: 100%; 
	width: auto;
	
}

@media(min-width: 800px)
{
.formulario1{
  width: 200px;
	height: 350px;
	margin-top: 3rem;;
	border-radius: 10px;
 background: #CFCFCF;
  color: black;
}
}

</style>