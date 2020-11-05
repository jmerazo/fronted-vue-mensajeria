<template>
  <div class="container">
  <form @submit.prevent="login" class="formulario">
    <div class="div-inicio">
    <h1>Iniciar Sesión</h1>
    </div>
   <br>
    <div class="form-group row">
      <label class="col-lg-4 control-label" for="email" style="width:76px;">Email</label>
      <div>
      <input class="form-control col-lg-14" type="text" v-model="email" id="email" />
    </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-4 control-label" for="password" style="width:76px;">Contraseña</label>
      <div>
      <input class="form-control col-lg-14" type="password" v-model="password" id="password" />
      </div>
    </div>

    <div style="color: red" v-if="error">
        Credenciales incorrectas
    </div>
     <div class="div-final">
    <button type="submit" class="btn btn-secondary booton">
        Iniciar Sesión
    </button>
     </div>
  </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
      login(){
          this.error = false;
          fetch("http://localhost:8000/api-auth/", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  username: this.email,
                  password: this.password
              })
          }).then(async (response) => {
              if(!response.ok) throw await response.json();

              return response.json();
          })
          .then((data) => {
              localStorage.setItem('token', data.token)
              this.$router.push('/')
          }).catch(err =>{
              this.error = true;
          });
      },
  }
};
</script>
<style>

.div-inicio{
  background:#777575; 
  border-top-left-radius:10px; 
  border-top-right-radius: 10px; 
  color: white;
  padding: 5%;
  text-align: center;
}
.div-final{
  
  text-align: center; 
  
}
 .container{
	width: 100%;
	padding: 5px;
	border-radius: 20px;
}
<<<<<<< HEAD
label{
=======
.button_form{
	border:none;
	width: 60%;
	height: 40px;
	color: white;
>>>>>>> e2b5d00f1aedc055026506231160f754f7d47c0a
	font-size: 20px;
	width: 85%;
	padding: 3.5px;
	margin-left: 2rem;
}
.booton{
  background:#777575; 
  margin-bottom:0.5rem;
   margin-top:0.5rem; 
   cursor: pointer; 
   width:40%;
   color:white;
}
@media(min-width: 800px)
{
.formulario{
	margin:auto;
	width: 400px;
	margin-top: 80px;
	border-radius: 20px;
  background: #CFCFCF;
  color: black;
	
}
}
</style>