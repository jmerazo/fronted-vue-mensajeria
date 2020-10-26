<template>
  <h1>Crear empresa</h1>
  <a href="/empresas">Volver</a>

  <form @submit.prevent="guardar">
    <div>
      <label for="nombre">Nombre</label>
      <input type="text" v-model="nombre" id="nombre"/><br>

      <label for="razon_social">Razon Social</label>
      <input type="text" v-model="razon_social" id="razon_social"/><br>

      <label for="nit">Nit</label>
      <input type="text" v-model="nit" id="nit"/><br>

      <label for="direccion_empresa">Dirección</label>
      <input type="text" v-model="direccion_empresa" id="direccion_empresa"/><br>

      <label for="ciudad">Ciudad</label>
      <input type="text" v-model="ciudad" id="ciudad" /><br>

      <label for="departamento">Departamento</label>
      <input type="text" v-model="departamento" id="departamento" /><br>

      <label for="logo">Logo</label>
      <button type="submit">Seleccionar archivo</button>
    </div>

    <button type="submit">Guardar</button>
  </form>
</template>

<script>
export default {
  name: "CrearEmpresa",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    guardar() {},
  },
};
</script>