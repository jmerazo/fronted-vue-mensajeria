<template>
  <div>
    <h1>Bienvenido</h1>
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
  },
  methods: {
    salir() {
      localStorage.removeItem("token")
      this.$router.push('/login')
    }
  }
};
</script>