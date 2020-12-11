<template>
    <font face="Comic Sans MS,Arial,Verdana"><section class="main_ingreso">
	<section class="contimage_ingreso">
		<section class="contimage_ingre">
			<section class="conte_ingreso">Historial de Usuarios</section>
			    <section class="conte_consul">	
					<section class="conte_consul2">
						<div class="form group row">
							<label style="margin-left:0rem; width:50%; " class=" control-label  " > Ingrese el número de guía</label>
							<input class="form-control  " style="width:50%; border-radius:10px; height: 40px;" type="text" name="guia">
						</div>
					</section>
					<section class="conte_consul3">
						<form>
							<input name="cbdireccion" type="radio" />Dirección
							<br />
							<input name="cbnombre" type="radio" />Nombre
							<br />
							<input name="cbcodigo" type="radio" />Por Código de Barra
							<br />
							<input name="cbexacto" type="radio" />Exacto
						</form>
					</section>
					<section class="consulta_consul4">
							<input class="btn btn-secondary" type="submit" name="buscar" value="Buscar" >
					</section>

				</section>	
			<section class="conte_ingre_consul2">Resultado de La Busqueda</section>

				<section class="conte_consul_2">	

					<section class="conte_consul_5">
							<form action="" class="form group row" > 	
							<label class="col-lg-3 control-label label_ingre" >Nombres  </label>
								<input class="form-control col-lg-8 info" type="text" id="nombres" name="nombres" value="nombres" v-model="persona.nombres" readonly><br>
							<label class="col-lg-3 control-label label_ingre" >Apellidos</label>
								<input class="form-control col-lg-8 info" type="text" id="apellidos" name="apellidos" value="apellidos" v-model="persona.apellidos" readonly><br>
							<label class="col-lg-3 control-label label_ingre" >Celular </label>
								<input class="form-control col-lg-8 info" type="number" id="celular" name="celular" value="celular" v-model="persona.celular" readonly><br>
								<input  class="btn btn-secondary " style="margin-left:3rem; width:88%;"  type="button" value="Visualizar prueba de entrega" name="btvpe">
							</form>
					</section>
					<section class="conte_consul_6">
						<form action="" class="form group row">
							<label class="col-lg-3 control-label label_ingre">Correo</label>
							<input class="form-control col-lg-8 info" id="correo" name="correo" value="correo" v-model="persona.correo" readonly>
							<label class="col-lg-3 control-label label_ingre">Dirección</label>
							<input class="form-control col-lg-8 info" type="text" id="direccion" name="direccion" value="direccion" v-model="persona.direccion" readonly><br>
							<label class="col-lg-3 control-label label_ingre">Ciudad</label>
							<input class="form-control col-lg-8 info" id="ciudad" name="ciudad" value="ciudad" v-model="persona.ciudad" readonly><br>
							<label class="col-lg-3 control-label label_ingre">Departamento</label>
							<input class="form-control col-lg-8 info" id="departamento" name="departamento" value="departamento" v-model="persona.departamento" readonly><br>							
						</form>
					</section>
				</section>
		</section>
	</section> 
</section></font>
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
</template>
<script>
import axios from "axios";
import Cabecera from '@/components/Cabecera.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'search',
    components: {
    Cabecera,
	Footer,
	data(){
		return {
			persona: [],
		}
	},
	mounted() {

	},
	methods: {
		traerPersona() {
		   axios
        	.get("http://localhost:8000/api/persona/", {
          		params: {
            		search: this.numero,
          		},
          		headers: {
            		Authorization: "JWT " + localStorage.getItem("token"),
          		},
        	})
       		.then((Response) => {
				  console.log(Response.data)
				  this.devolucion = Response.data;
        	});
	  }
	}  
  }
}
</script>
<style>
.label_ingre{
	color: black;
	width: 100px;
	border-radius: 10px; 
	height: 40px;
	margin-top:0%;
}
.info{
border-radius: 10px; 
height: 40px;
background: white;
}
.main_ingreso{
	
	width: 100%; 
	width: auto;
	
}
.contimage_ingreso{
	float: left;
	width: 80%;	
	height: 520px;
	margin-right: 3%;
	background: white;
	padding-top: 1rem;
	
}
.contimage_ingre{
	float: left;
	width: 100%;	
	height: 600px;
	background: white;
	padding-top: 0rem;
	

}
.conte_ingreso{
	float: left;
	width: 35%;	
	height: 35px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background: #777575; 
	color: white;
	text-align: center;
	margin-left: 4rem;

}
.conte_consul{
	float: left;
	width: 930px;	
	height: 150px;
	background: #CFCFCF;
	color: white;
	text-align: left;
	margin-left: 4rem;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	
}
.conte_consul2{
	float: left;
	width: 500px;
	height: 126px;
	background: #CFCFCF;
	margin-top: 0.5rem;
	margin-left: 1rem;
	text-align: left;
	color: black;
}
.conte_consul3{
	float: left;
	width: 200px;
	height: 126px;
	background: #CFCFCF;
	margin-top: 0.5rem;
	margin-left: 5rem;
	color: black;
}
.consulta_consul4{
	float: right;
	width: 100px;
	height: 100px;
	background: #CFCFCF;
	margin-top: 2rem;
	margin-right: 1rem;
}
.conte_ingre_consul2{
	float: left;
	width: 35%;	
	height: 35px;
	margin-top: 0.91rem;
	background: #777575; 
	color: white;
	text-align: center;
	margin-left: 4rem;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;

}
.conte_consul_2{
	
	width: 95%;	
	height: 300px;
	background: #CFCFCF;
	color:black;
	text-align: left;
	margin-left: 4rem;
	
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	margin-top: 14.7rem;
}
.conte_consul_5{
	float: left;
	width: 43%;
	height: 250px;
	background: #CFCFCF;
	color:black;
	border-radius: 20PX;
	margin-right: 5rem;
	margin-top: 2rem;
	margin-left: 2rem;
}


.conte_consul_6{

	float: left;
	width: 43%;
	height: 250px;
	background: #CFCFCF;
	color: #1F4181;
	border-radius: 20PX;
	margin-top: 2rem;

}

.aside_ingreso{
	float: left;
	height: 519px;
	box-sizing: border-box;
	background: #CFCFCF;
	color: white;
	margin-top: 2rem;
	border-radius:10px;
	text-align: center;

}
.button_form{
	width: 90%;
	font-size: 20px;
	padding: 4px 4px;
	border-radius: 10px;	
	cursor: pointer;
	margin-top:1rem;
}
@media(min-width: 800px)
{
.formulario{
	margin:auto;
	width:200px;
	height: 350px;
	margin-top: 3rem;;
	border-radius: 10px;
 background: #CFCFCF;
  color: black;
}
}
</style>