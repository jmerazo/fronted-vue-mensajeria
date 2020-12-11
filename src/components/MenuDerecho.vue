<template>
    <section class="aside_ingreso">
      <h1 style="color: #4a4a4a">Mensajero</h1>
      <div>
        <input
          onclick="location.href='/registrarmensajeros'"
          type="submit"
          value="Registrar"
          class="btn btn-secondary button_form"
        />
      </div>
      <div>
        <input
          onclick="location.href='/asignar'"
          type="submit"
          value="Asignar Correo"
          class="btn btn-secondary button_form"
        />
      </div>
      <div>
        <input
          onclick="location.href='/reporte'"
          type="submit"
          value="Reporte Correo"
          class="btn btn-secondary button_form"
        />
      </div>
      <div>
        <input
          onclick="location.href='/planillas'"
          type="submit"
          value="Planillas"
          class="btn btn-secondary button_form"
        />
      </div>
      <div>
        <input
          onclick="location.href='/listar'"
          type="submit"
          value="Listar Mensajeros"
          class="btn btn-secondary button_form"
        />
      </div>
    </section>
</template>

<script>
export default {
  name: "MenuDerecho",
}
</script>

<style >
.label_ingre {
  color: black;
  width: 100px;
  border-radius: 10px;
  height: 35px;
  margin-top: 0%;
}
.info {
  border-radius: 10px;
  height: 35px;
  background: white;
}

.label_devo {
  display: block;
  margin-left: 7rem;
  border-radius: 10px;
  background: #777575;
  width: 30%;
  text-align: center;
  color: white;
  margin-top: 1rem;
}
.main_ingreso {
  width: 100%;
  width: auto;
}
.contimage_ingreso {
  float: left;
  width: 80%;
  height: 520px;
  margin-right: 3%;
  border-radius: 20px;
  background: white;
  padding-top: 1rem;
}
.contimage_ingre {
  float: left;
  width: 100%;
  height: 500px;
  background: white;
  padding-top: 0rem;
}
.ingreso_sec_1 {
  width: 340px;
  height: 600px;
  background: #cfcfcf;
  float: left;
  margin-top: 1rem;
  margin-left: 6rem;
  border-radius: 20px;
  margin-bottom: 4rem;
}
.aside_ingreso {
  float: left;
  height: 680px;
  box-sizing: border-box;
  background: #cfcfcf;
  color: white;
  margin-top: 2rem;
  border-radius: 10px;
  text-align: center;
}
.button_form {
  width: 90%;
  font-size: 20px;
  padding: 4px 4px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
}
@media (min-width: 800px) {
  .formulario {
    margin: auto;
    width: 200px;
    height: 350px;
    margin-top: 3rem;
    border-radius: 10px;
    background: #cfcfcf;
    color: black;
  }
  .form_ingre_1 {
    background: #cfcfcf;
    border-radius: 20px;
    color: black;
  }
}
</style>