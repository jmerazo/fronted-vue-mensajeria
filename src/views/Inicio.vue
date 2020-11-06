<template>
<section style="margin-top:2rem; margin-right:2rem;">
    <section class="contimage">
        <h1 class="display-1" style="text-align:center; ">!Bienvenido!</h1>
        <div style="text-align:center;">
        <a class="btn btn-primary"  href="/empresa">Empresas</a>
         <a style="margin-left:10px" class="btn btn-primary"  href="/usuario">Usuarios</a>
        <button style="margin-left:0.5rem;" class="btn btn-secondary" type="button" @click="salir">Salir</button>
      </div>
    </section>
</section> 
</template>
<script>
import Cabecera from "@/components/Cabecera.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Cabecera,
    Footer,
  },
  name: "Inicio",
  data() {
    return {
      token: "",
    };
  },
  mounted() {
    this.token = localStorage.getItem("token");

    fetch("http://localhost:8000/api/empresa", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "JWT " + localStorage.getItem("token")
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })

  },
  methods: {
    salir() {
      localStorage.removeItem("token")
      this.$router.push('/login')
    }
  }
};
</script>
<style>
.contimage{
  width:100%; 
  margin-left:1rem;
  margin-right:2rem;
  height: 400px;
  background-image:url('../assets/imagenes/transporte.png'); 
}
</style>