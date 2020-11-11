<template>
  <a
    class="btn btn-secondary"
    style="margin-left: 2rem; margin-top: 2rem"
    href="/"
    >Volver</a
  >
  <div class="container">
    <form
      @submit.prevent="guardar"
      enctype="multipart/form-data"
      class="formulario"
    >
      <div class="div-inicio">
        <h1 style="text-align: center">Seleccione el archivo a subir</h1>
      </div>

      <div>
          <input
            style="margin-left: 2.5rem"
            class="form-control col-lg-10"
            type="file"
            @change="obtenerImagen"
            id="logo"
          />
      </div>

      <br />
      <div class="div-final">
        <button type="submit" class="btn btn-secondary booton">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>