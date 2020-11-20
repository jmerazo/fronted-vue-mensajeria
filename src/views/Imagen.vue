<template>
  <section class="main_ingreso">
    <section class="contimage_ingreso">
      <section class="contimage_ingre">
        <font face="Comic Sans MS,Arial,Verdana">
          <section class="conte_ingreso">
            Digitalizar Pruebas de Entrega
          </section>
          <section class="conte_ingreso2">
            <section class="conte_ingreso3">
              <font size="6" face="Comic Sans MS,Arial,Verdana">
                <h1>
                  Seleccione los archivos
                  <hr />
                  <input
                    class="button_imag"
                    type="submit"
                    name="Abrir Archivo"
                    value="Abrir Archivo"
                  /><br /><br /><img
                    src="@/assets/imagenes/tif.png"
                    width="200"
                    height="150"
                  />
                </h1>
              </font>
            </section>
            <section class="conte_ingreso4">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4" v-for="imagen in imagenes">
                  <div class="card">
                    <img :src="imagen.url" class="card-img-top" alt="" />
                    <div class="card-body">
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </font>
      </section>
    </section>
  </section>
  	<section class="aside_ingreso">
			<h1 style="color:#4A4A4A;">Mensajero</h1>
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
import Footer from "@/components/Footer.vue";
export default {
  name: "digitalizar-imagen",
  data() {
    return {
      imagenes: [],
    };
  },
  mounted() {
    console.log("Realizar peticion");
    fetch("https://api.jeisontech.dev/api/images/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.imagenes = data;
        console.log(data);
      });
  },

  components: {
    Footer,
  },
};
</script>
<style>
.main_ingreso {
  padding-top: 0rem;
  width: 100%;
  width: auto;
}
.contimage_ingreso {
  float: left;
  width: 82%;
  height: 520px;
  margin-right: 3%;
  border-radius: 2px;
  background: white;
  padding-top: 2rem;
}
.contimage_ingre {
  float: left;
  width: 90%;
  height: 500px;
  background: white;
  padding-top: 0rem;
}
.conte_ingreso {
  float: left;
  width: 35%;
  height: 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #909cb4;
  color: white;
  text-align: center;
  margin-left: 4rem;
}
.conte_ingreso2 {
  float: left;
  width: 950px;
  height: 400px;
  background: #dce4f3;
  color: white;
  text-align: left;
  margin-left: 4rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.conte_ingreso3 {
  float: left;
  width: 300px;
  height: 100%;
  background: #dce4f3;
  color: #1f4181;
  text-align: center;
  margin-left: 2rem;
}
.conte_ingreso4 {
  float: right;
  width: 500px;
  height: 340px;
  background: #909cb4;
  color: #1f4181;
  text-align: center;
  border-radius: 20px;
  margin-top: 2rem;
  margin-right: 2rem;
}
.aside_ingreso{
	float: left;
	height: 519px;
	box-sizing: border-box;
	background: #CFCFCF;
	color: white;
	margin-top: 2rem;
	border-radius:10px;
	text-align: center;

}
.button_form{
	width: 90%;
	font-size: 20px;
	padding: 4px 4px;
	border-radius: 10px;	
	cursor: pointer;
	margin-top:1rem;
}
.button_imag {
  border: none;
  width: 80%;
  color: white;
  font-size: 20px;
  background: #909cb4;
  padding: 3px 3px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  margin-top: 0rem;
}
.imge {
  padding-left: 10rem;
  padding-top: 5rem;
}
</style>