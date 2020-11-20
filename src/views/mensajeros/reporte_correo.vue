<template>
    <section class="main_ingreso_asig">
		<section class="contimage_ingreso_asig">
             <div class="form-group row ">
            <select  class=" col-lg-4 select_mensajero" name="Mensajero">
               
				<option selected value="0"> Selecciona un Mensajero </option>
			</select>
			<input class="col-lg-3  selec_mensajero" type="text" id="" name="cantidad" value="Pendientes: " readonly>
				</div>
                <section>
                <div class="form-group row ">
				<label class="col-lg-3 control-label label_1">Mensajero seleccionado: </label>
                <input  class="form-control col-lg-4 input_1 " type="text" id="" name="" value="" readonly>
			</div>
				</section>
		
        <section class="ingreso_sec_1">
				<form class="form_ingre_1">	
					<label style="color: black;margin-left: 3.5rem;">Digite el Número de Guía</label>
					<input style="border-radius: 10px; border: none;padding: 5px; width: 250px; margin-left: 3rem;" type="text" name="ingre_codigo"><br>
                    <br>
					<div class="form-group row ">
					<label class="col-lg-4 control-label label_ingre" for="guia">Guía:</label>
					<input class="form-control col-lg-6 info"  type="text" id="guia" name="" value="" readonly><br>
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
    components: {
    Cabecera,
    Footer,
  
  }
}
</script>
<style>
.contimage_ingreso_asig{
	float: left;
	width: 80%;	
  margin-right: 1%;
	height: 520px;
	background: white;
	padding-top: 1rem;
	
}
.main_ingreso_asig{
	
	width: 100%; 
	width: auto;
	
}
.label_ingre{
	color: black;
	width: 100px;
	border-radius: 10px; 
	height: 35px;
	margin-top:0%;
}
.label_1{
width: 50px;
margin-left: 5.1rem;
margin-top: 1rem;
}
.input_1{
   border-radius: 10px;
   height: 35px;
   background: white;
    margin-top: 1rem;
    
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

.contimage_ingre{
	float: left;
	width: 100%;	
	height: 500px;
	background: white;
	padding-top: 0rem;
}
.ingreso_sec_1{
	width: 340px;
	height: auto;
	background: #CFCFCF;
	float: left;
	margin-top: 1rem;
	margin-left: 6rem;
	border-radius: 20px;
	margin-bottom: 4rem;
}
.aside_ingreso{
	float: left;
	box-sizing: border-box;
	background: #CFCFCF;
	color: white;
	margin-top: 2rem;
	border-radius:10px;
	text-align: center;
	height: 550px;

}
.button_form{
	width: 90%;
	font-size: 20px;
	padding: 4px 4px;
	border-radius: 10px;	
	cursor: pointer;
	margin-top:1rem;
}
.select_mensajero{
border-radius: 10px; 
background: #C4C4C4;
text-align: center;
width: 350px;
padding: 5px; 
margin-left: 6rem;
}
.selec_mensajero{
    border-radius: 10px;
    border: 1px solid #C4C4C4;
    padding: 3px;
     width: 150px;
     background:white; 
    text-align: center;
    margin-left: 1rem;
}
@media(min-width: 800px)
{
.formulario{
	margin:auto;
	width:200px;
	height: 450px;
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