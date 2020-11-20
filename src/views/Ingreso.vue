<template>
    	<section class="main_ingreso">
		<section class="contimage_ingreso">
			<label class="label_devo">Ingreso Centro de Operaciones</label>
			<section class="ingreso_sec_1">
				<form class="form_ingre_1">	
				<label style="color: black;margin-left: 2rem;">Empresa: Cadena</label> <br>
					<label style="color: black;margin-left: 2rem;"> Cod.Emp : 100250</label><br><br>
					<label style="color: black;margin-left: 3.5rem;">Digite el Número de Guía</label>
					<input style="border-radius: 10px; border: none;padding: 5px; width: 250px; margin-left: 3rem;" v-model="num_guia" type="text" id="num_guia" name="ingre_codigo"><br>
				
					<label style="color: black;margin-left: 4rem;">Información de Guía</label><br><br>
					<div class="form-group row ">
					<label class="col-lg-4 control-label label_ingre" for="guia">Guía:</label>
					<input class="form-control col-lg-6 info" type="text" id="guia" readonly><br>
					</div>
					<div class="form-group row ">
					<label class="col-lg-4 control-label label_ingre" for="nombre">Nombre:</label>
					<input class="form-control col-lg-6 info"  type="text" id="nombre" name="" value="" readonly><br>
					</div>
					<div class="form-group row ">
					<label class="col-lg-4 control-label label_ingre" for="direccion">Dirección:</label> 
					<input class="form-control col-lg-6 info"  type="text" id="direccion" name="" value="" readonly><br>
					</div>
					<div class="form-group row ">
					<label class="col-lg-4 control-label label_ingre" for="ciudad">Ciudad:</label> 
					<input class="form-control col-lg-6 info"  type="text" id="ciudad" name="" value="" readonly><br>
					</div>
					<div class="form-group row ">
					<label class="col-lg-4 control-label label_ingre" for="planilla">Planilla:</label>
					<input class="form-control col-lg-6 info"  type="text" id="planilla" name="" value="" readonly><br>	
					</div>
					<div class="form-group " >
					<input style="margin-left:3rem; border-radius:10px;" placeholder="Cantidad: " class="form-control col-lg-8"  type="text" name="" value="" readonly><br>	
					</div>			
				</form>
			</section>
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
import Cabecera from '@/components/Cabecera.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: "IngresoCO",
    components: {
    Cabecera,
	Footer,
	data() {
		return{
			num_guia: "",
		};
	},
  }
}
</script>
<style >
.label_ingre{
	color: black;
	width: 100px;
	border-radius: 10px; 
	height: 35px;
	margin-top:0%;
}
.info{
border-radius: 10px; 
height: 35px;
background: white;
}

.label_devo{
	display: block;
	margin-left: 7rem;
	border-radius: 10px;
	background: #777575; 
	width: 30%;
	text-align: center;
	color: white;
	margin-top: 1rem;
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
	border-radius: 20px;
	background: white;
	padding-top: 1rem;
	
}
.contimage_ingre{
	float: left;
	width: 100%;	
	height: 500px;
	background: white;
	padding-top: 0rem;
}
.ingreso_sec_1{
	width: 340px;
	height: 600px;
	background: #CFCFCF;
	float: left;
	margin-top: 1rem;
	margin-left: 6rem;
	border-radius: 20px;
	margin-bottom: 4rem;
}
.aside_ingreso{
	float: left;
	height: 680px;
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
.form_ingre_1{
 background: #CFCFCF;
 border-radius: 20px;
  color: black;
}
}
</style>