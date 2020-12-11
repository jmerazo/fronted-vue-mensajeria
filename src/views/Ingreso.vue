<template>
  <button
    type="button"
    class="btn btn-secondary"
    style="margin-left: 2rem; margin-top: 2rem"
    @click="traerPersona">
    Search
  </button>

  <section class="main_ingreso">
    <section class="contimage_ingreso">
      <label class="label_devo">Ingreso Centro de Operaciones</label>
      <section class="ingreso_sec_1">
        <form class="form_ingre_1">

          <label style="color: black; margin-left: 2rem">Empresa: Cadena</label><br/>
          <label style="color: black; margin-left: 2rem">Cod.Emp : 100250</label><br /><br />
          <label style="color: black; margin-left: 3.5rem">Digite el Número de Guía</label>

          <input
            style="
              border-radius: 10px;
              border: none;
              padding: 5px;
              width: 250px;
              margin-left: 3rem;"
            v-model="numero"
            type="text"
            id="numero"
            name="ingre_codigo"><br/>

          <label style="color: black; margin-left: 4rem">Información de Guía</label><br/><br/>

          <div class="form-group row">
            <label class="col-lg-4 control-label label_ingre" for="guia">Guía:</label>
            <input
              class="form-control col-lg-6 info"
              type="text"
              id="guia"><br/>
          </div>

          <div class="form-group row">
            <label class="col-lg-4 control-label label_ingre">Nombre:</label>
            <input
              class="form-control col-lg-6 info"
              type="text"
              name=""
              value=""
            /><br />
          </div>

          <div class="form-group row">
            <label class="col-lg-4 control-label label_ingre" for="direccion">Dirección:</label>
            <input
              class="form-control col-lg-6 info"
              type="text"
              id="direccion"
              name=""
              value=""
            /><br />
          </div>

          <div class="form-group row">
            <label class="col-lg-4 control-label label_ingre" for="ciudad">Ciudad:</label>
            <input
              class="form-control col-lg-6 info"
              type="text"
              id="ciudad"
              name=""
              value=""
            /><br />
          </div>

          <div class="form-group row">
            <label class="col-lg-4 control-label label_ingre" for="planilla">Planilla:</label>
            <input
              class="form-control col-lg-6 info"
              type="text"
              id="planilla"
              name=""
              value=""
            /><br />
          </div>

          <div class="form-group">
            <input
              style="margin-left: 3rem; border-radius: 10px"
              placeholder="Cantidad: "
              class="form-control col-lg-8"
              type="text"
              name=""
              value=""
            /><br />
          </div>

        </form>
      </section>
    </section>    
  </section>
</template>

<script>
import axios from "axios";
import Cabecera from "@/components/Cabecera.vue";
import Footer from "@/components/Footer.vue";
import MenuDerecho from "@/components/MenuDerecho.vue";

export default {
  name: "IngresoCO",
  components: {
    Cabecera,
    Footer,
    MenuDerecho,
  },
  data() {
    return {
      datos: [],
      guia: {
        id: "",
        numero: "",
        persona_g: "",
      },
      /* id: null,
      persona: {
        id: "",
        nombres: "",
        apellidos: "",
        celular: "",
        whatsapp: "",
        correo: "",
        direccion: "",
        ciudad: "",
        departamento: "",
      },*/
    }; 
  },
  mounted() {
    this.traerPersona();
    /* this.traerConsulta(); */
  },
  methods: {
    traerPersona() {
      axios
        .get("http://localhost:8000/api/guia/", {
          params: {
            search: this.numero,
          },
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        })
        .then((Response) => {
          console.log(Response.data)
          /* this.guia = response.data; */
          /* console.log(Response.data[0].nombre_tercero); */
          console.log(Response.data);
        });
    },
    /* traerConsulta() {
      this.id = this.guia.persona_g;
      axios
        .get("http://localhost:8000/api/persona/", {
          params: {
            search: this.id,
          },
          headers: {
            Authorization: "JWT " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          (this.persona.nombres = response.data.nombres),
            (this.persona.apellidos = response.data.apellidos),
            (this.persona.celular = response.data.celular),
            (this.persona.whatsapp = response.data.whatsapp),
            (this.persona.correo = response.data.correo),
            (this.persona.direccion = response.data.direccion),
            (this.persona.ciudad = response.data.ciudad),
            (this.persona.departamento = response.data.departamento);
        });
    }, */
  },
};
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