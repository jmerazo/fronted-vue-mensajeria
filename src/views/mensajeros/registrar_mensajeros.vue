<template>
<section class="main_ingreso1">
<section class="contimage_ingreso1">
    <div class="container">
    <form action="php/registro_usuario.php" method="POST" class="formulario2">
	<div class="div-inicio">
		<h1>Registrar Nuevo Mensajero</h1>
	</div>
		<br>
		<div class="form-group row">
			<i class="fas fa-user icon"></i>
			<div>
			<input class="form-control col-lg-14" type="text" placeholder="Nombres" name="nombre_regis">
			</div>		
		</div>
		<div class="form-group row">
			<i class="fas fa-key icon"></i>
			<div>
			<input class="form-control col-lg-14" type="text" placeholder="Apellidos" name="apellido_regis">
			</div>
		</div>
		<div class="form-group row">
			<i class="fas fa-envelope icon"></i>
			<div>
			<input class="form-control col-lg-14" type="text" placeholder="Dirección" name="direccion_regis">
			</div>
		</div>
		<div class="form-group row">
			<i class="fas fa-envelope icon"></i>
			<div>
			<input class="form-control col-lg-14" type="email" placeholder="Correo" name="correo_regis">
			</div>
		</div>
		<div class="form-group row">
			<i class="fas fa-mobile-alt icon"></i>
			<div>
			<input class="form-control col-lg-14" type="number" placeholder="Celular" name="cel_regis">
			</div>
		</div>
		<div class="form-group row">
			<select  style="width: 55%; margin-left:5.2rem;" class="form-control col-lg-14" name="Ciudad">
			<option selected value="0"> Selecciona un Departamento </option>
						    
			</select>
		</div>
		<div>
			<select  style="width: 60%; margin-left:4.2rem;" class="form-control col-lg-14" name="Ciudad">
			<option selected value="0"> Selecciona una ciudad </option>
						 
			</select>
		</div>
		<div class="div-final">
			<input type="submit" value="Registrar" class="btn btn-secondary button_form">

		</div>
    </form>
</div>
</section>
<section class="aside_ingreso">
			<h1 style="color:#4A4A4A;">Mensajero</h1>
			<div>
      <input
        onclick="location.href='/registrarmensajeros'"
        type="submit"
        value="Registrar"
        class="btn btn-secondary button_form2"
      />
    </div>
    <div>
      <input
        onclick="location.href='/asignar'"
        type="submit"
        value="Asignar Correo"
        class="btn btn-secondary button_form2"
      />
    </div>
    <div>
      <input
        onclick="location.href='/reporte'"
        type="submit"
        value="Reporte Correo"
        class="btn btn-secondary button_form2"
      />
    </div>
    <div>
      <input
        onclick="location.href='/planillas'"
        type="submit"
        value="Planillas"
        class="btn btn-secondary button_form2"
      />
    </div>
    <div>
      <input
        onclick="location.href='/listar'"
        type="submit"
        value="Listar Mensajeros"
        class="btn btn-secondary button_form2"
      />
    </div>
		</section>
</section>
</template>
<style>
.contimage_ingreso1{
	float: left;
	width: 80%;	
  margin-right: 1%;
	height: 520px;
	background: white;
	padding-top: 1rem;
	
}
.main_ingreso1{
	
	width: 100%; 
	width: auto;
	
}
.aside_ingreso{
	float: right;
	height: 500px;
	box-sizing: border-box;
	background: #CFCFCF;
	color: white;
	margin-top: 2rem;
	border-radius:10px;
	text-align: center;
	margin-right: 1rem;

}
 .container{
	width: 100%;
	padding: 5px;
	border-radius: 20px;
}
input{
	
	margin-left: 1rem;
}

.button_form2{
	width: 90%;
	font-size: 20px;
	padding: 4px 4px;
	border-radius: 10px;	
	cursor: pointer;
	margin-top:1rem;
	margin-right: 3rem;
}
.button_form{
	 background:#777575; 
  margin-bottom:1rem;
   cursor: pointer; 
   width:40%;
   color:white;
}
.icon{
	margin-left: 3rem;
	font-size: 20px;
	width: 5%;
	padding: 3.5px;
}
.div-final{
  
  text-align: center; 
  margin-top: 1rem;

  
}
.div-inicio{
  background:#777575; 
  border-top-left-radius:10px; 
  border-top-right-radius: 10px; 
  color: white;
  padding: 5%;
  text-align: center;
}
@media(min-width: 800px)
{
.formulario3{
	margin:auto;
	width:200px;
	height: 550px;
	margin-top: 3rem;;
	border-radius: 10px;
 background: #CFCFCF;
  color: black;
}
.formulario2{
	margin:auto;
	width:360px;
	margin-top: 30px;
  margin-bottom: 50px;
	border-radius: 10px;
  background: #CFCFCF;
  color: black;
}

}
</style>