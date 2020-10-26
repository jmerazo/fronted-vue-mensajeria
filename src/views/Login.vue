<template>
  
  <form @submit.prevent="login" class="formulario">
    <h1>Iniciar Sesión</h1>
    <div class="contenedor"></div>
    <div>
      <label for="email" style="width:76px;">Email</label>
      <input class="input-contenedor"  type="text" v-model="email" id="email" />
    </div>
    <div>
      <label for="password" style="width:76px;">Contraseña</label>
      <input class="input-contenedor" type="password" v-model="password" id="password" />
    </div>

    <div style="color: red" v-if="error">
        Credenciales incorrectas
    </div>

    <button type="submit" class="button_form">
        Iniciar Sesión
    </button>
  </form>
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
h1{
	text-align: center;
	color: #1a2537;
	font-size: 40px;
}
 .contenedor{
	width: 100%;
	padding: 10px;
	border-radius: 20px;

}
input[type="text"],
input[type="password"]
{
	font-size: 10px;
	width: 65%;
	padding: 3px;
	border: none;
  margin-right: 0.5rem;
}
.button_form{
	border:none;
	width: 60%;
	height: 40px;
	color: white;
	font-size: 20px;
	background:#1F4181;
	padding: 3px 3px;
	border-radius: 20px;	
	cursor: pointer;
	text-align: center;
	margin-top: 0rem;
	margin-left: 4.5rem;
}
.input-contenedor{
	margin-bottom: 20px;
	border:none;
	border-radius: 20px;
	height: 35px;
	margin-right: 0rem;
  margin-left: 2rem;

}
.formulario{
	background: #E3E5EA;
	padding: 12px;
	border-radius: 20px;
  

}
@media(min-width: 800px)
{
.formulario{
	margin:auto;
	width: 400px;
	margin-top: 80px;
	border-radius: 20px;
	
}
}
</style>
