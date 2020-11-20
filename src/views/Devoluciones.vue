<template>
<font face="Comic Sans MS,Arial,Verdana">
  <section class="main_ingreso">
		<section class="contimage_ingreso">
			<label class="label_devo">Descarga de Devoluciones</label>
			<section class="devol_1">
				<h4 style="text-align:center; margin-top:2rem;">Seleccione el motivo de devolución</h4>
				<form class="devol_desc">
					
          <input name="cbdireccion_E" type="radio" />Dirección Errada-DE
							<br />
							<input name="cbdireccion_I" type="radio" />Dirección Incompleta-DI
							<br />
							<input name="cbdrehusado" type="radio" />Rehusado-RH
							<br />
							<input name="cbdesconocido" type="radio" />Desconocido-DD
							<br />
							<input name="cbtraslado" type="radio" />Traslado-TL
							<br />
							<input name="cbcerrado" type="radio" />Cerrado-CD
							<br />
							<input name="cbtrocado" type="radio" />Trocado-TD
							<br />
							<input name="cbdificil" type="radio" />Dificcil Acesso-DA
							<br />
							<input name="cbotro" type="radio" />Otro
				</form>
			</section>
      <section class="devol_2">
				<form class="formulario-1">
					<div class="form group row">
					<label class="col-lg-4 control-label label_ingre">
					Guía:</label>
					<input  class="form-control col-lg-6 info" type="text" id="" name="" value="" readonly>
					</div>
					<div class="form group row">
					<label class="col-lg-4 control-label label_ingre">
					Nombre:</label>
					<input class="form-control col-lg-6 info" type="text" id="" name="" value="" readonly>
					</div>
					<div class="form group row">
					<label class="col-lg-4 control-label label_ingre">Dirección:</label> 
					<input class="form-control col-lg-6 info" type="text" id="" name="" value="" readonly>
					</div>
					<div class="form group row">
					<label class="col-lg-4 control-label label_ingre">
					Ciudad:</label> 
					<input  class="form-control col-lg-6 info" type="text" id="" name="" value="" readonly><br>
					</div>
					<div class="form group row">
					<label class="col-lg-4 control-label label_ingre">Planilla:</label>
					<input class="form-control col-lg-6 info" type="text" id="" name="" value="" readonly><br><br><br>
					</div>
					<label style="color: white;margin-left: 2rem;">Empresa: Cadena</label> <br>
					<label style="color: white;margin-left: 2rem;"> Cod.Emp : 100250</label>
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
</font>
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
    Cabecera,
    Footer
  }
}
</script>
<style>

.label_ingre{
	color: white;
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
  .main_ingreso{
	
	width: 100%; 
	width: auto;
	
}
.contimage_ingreso{
	float: left;
	width: 80%;	
	margin-right: 3%;
	border-radius: 2px;
	background: white;
	padding-top: 2rem;
	margin-bottom: 4rem;


}
.contimage_ingre{
	float: left;
	width: 100%;	
	height: 500px;
	background: white;
	padding-top: 0rem;
	

}
.devol_1{
	width: 380px;
	height: 450px;
	background: #CFCFCF;
	float: left;
	margin-top: 2rem;
	margin-left: 6rem;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
}
.devol_2{
	width: 300px;
	height: 450px;
	background: #777575; 
	float: left;
	margin-top: 2rem;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
}
.label_devo{
	display: block;
	margin-left: 6rem;
	border-radius: 10px;
	background: #777575;
	width: 30%;
	text-align: center;
	color: white;
	margin-top: 1rem;
}
.aside_ingreso{
	float: left;
	height: 548px;
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
.devol_desc{
	text-align: left;
	margin-left: 3rem;
	margin-top: 2rem;
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
.formulario-1{
	margin-top:2rem;
}
}

</style>