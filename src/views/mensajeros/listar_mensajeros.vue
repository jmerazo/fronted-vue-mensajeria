<template>
<section class="main_ingreso1">
<section class="contimage_ingreso1">
  <h1 align="center">Mensajeros Putumayo</h1>
  <br>

  <table class="table table-striped" id="table">
    <thead class="thead-dark">
      <tr class="table-dark " style="color:black;">
        <td>ID</td>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Dirección</td>
        <td>Ciudad</td>
        <td>Celular</td>
      </tr>
    </thead>
   <!-- <tbody>
      <tr v-for="mensajero in mensajeros" :key="mensajero.id">
        <td>{{ mensajero.id }}</td>
        <td>{{ mensajero.nombre }}</td>
        <td>{{ mensajero.apellido }}</td>
        <td>{{ mensajero.direccion_mensajero }}</td>
        <td>{{ mensajero.ciudad_mensajero }}</td>
        <td>{{ mensajero.celular_mensajero }}</td>
      </tr>
    </tbody>-->
  </table>
</section>
<section class="aside_ingreso">
			<h1 style="color:#4A4A4A;">Mensajero</h1>
			<div>
      <input
        onclick="location.href='/registrarmensajeros'"
        type="submit"
        value="Registrar"
        class="btn btn-secondary button_form"
      />
    </div>
    <div>
      <input
        onclick="location.href='/asignar'"
        type="submit"
        value="Asignar Correo"
        class="btn btn-secondary button_form"
      />
    </div>
    <div>
      <input
        onclick="location.href='/reporte'"
        type="submit"
        value="Reporte Correo"
        class="btn btn-secondary button_form"
      />
    </div>
    <div>
      <input
        onclick="location.href='/planillas'"
        type="submit"
        value="Planillas"
        class="btn btn-secondary button_form"
      />
    </div>
    <div>
      <input
        onclick="location.href='/listar'"
        type="submit"
        value="Listar Mensajeros"
        class="btn btn-secondary button_form"
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
.button_form{
	width: 82%;
	font-size: 20px;
	padding: 4px 4px;
	border-radius: 10px;	
	cursor: pointer;
	margin-top:1rem;
  margin-left: 1rem;

}
.aside_ingreso{
	float: right;
	height: 519px;
  width: 15%;
  margin-right: 1%;
	box-sizing: border-box;
	background: #CFCFCF;
	color: white;
	margin-top: 2rem;
	border-radius:10px;
	text-align: center;
  margin-bottom: 4rem;

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