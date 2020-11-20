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
            ref="file"
            type="file"
            id="file"
            v-on:change="handleFileUpload()" 
            accept=".XLSX, .CSV"
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
export default {
    data(){
        return {
            file: ''
        }
    },
    methods: {
        EventSubir(){
            let formData = new FormData();
            formData.append('file', this.file);
            axios
                .post('/import-excel-personas',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }
    }
};
</script>