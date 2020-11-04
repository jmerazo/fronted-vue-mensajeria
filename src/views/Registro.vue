<template>
<div class="container">
    <form action="php/registro_usuario.php" method="POST" class="formulario">
	<div class="div-inicio">
		<h1>Registrar Usuario</h1>
	</div>
		<br>
		<div class="form-group row">
			<i class="fas fa-user icon"></i>
			<div>
			<input class="form-control col-lg-14" type="text" placeholder="Usuario" name="usuario_regis">
			</div>		
		</div>
		<div class="form-group row">
			<i class="fas fa-key icon"></i>
			<div>
			<input class="form-control col-lg-14" type="password" placeholder="Contraseña" name="contra_regis">
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
		<div class="div-final">
			<input type="submit" value="Registrar" class="btn btn-secondary button_form">

		</div>
    </form>
</div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {

    components: {
    Footer,
  
  }
}
</script>
<style>


 .container{
	width: 100%;
	padding: 5px;
	border-radius: 20px;
}
input{
	
	margin-left: 1rem;
}

.button_form{
	 background:#777575; 
  margin-bottom:0.5rem;
   margin-top:0.5rem; 
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
.formulario{
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