<template>
  <div>
    <h1>Bienvenido</h1>
    <a href="/empresas">Empresas</a>
    {{ token }}

    <button type="button" @click="salir">Salir</button>
  </div>
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
        "Authorization": localStorage.getItem("token")
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