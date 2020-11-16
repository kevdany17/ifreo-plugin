<template>
  <div>
    <label class="col-12" for="tramite">
            Trámite a Realizar:
        </label>
        <input type="text" id="tramite" class="col-12 form-control" v-model="tramite">
        <div v-if="showTramite" class="alert alert-danger col-12" role="alert">
           Trámite es requerido.
        </div>
        <label class="col-12" for="area">
            &Aacute;rea:  
        </label>
        <input type="text" id="area" class="col-12 form-control" v-model="area">
        <div v-if="showArea" class="alert alert-danger col-12" role="alert">
            &Aacute;rea es requerido.
        </div>
        <label class="col-12" for="nombre">
            Nombre del Solicitante:
        </label>
        <input type="text" id="nombre" class="col-12 form-control" v-model="nombre">
        <div v-if="showNombre" class="alert alert-danger col-12" role="alert">
            Nombre es requerido
        </div>
        <button @click="send()" class="btn btn-primary" style="margin-top: 15px; margin-bottom:20px;">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
            Generar Correo
        </button>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            tramite:"",
            area:"",
            nombre:"",
            showTramite:false,
            showArea:false,
            showNombre:false
        };
    },
    mounted: function(){

    },
    methods:{
        send:function(){
            this.validator();
            if( this.tramite!="" &&  this.area!=""  && this.nombre!="" )
                window.open(`mailto:ifreo.oax.gob@gmail.com?subject=Agendar%20Cita&body=Trámite a Realizar:%20${this.tramite}
                            %0AArea:%20${this.area}
                            %0ANombre:%20${this.nombre}`);
        },
        validator:function(){
            this.showTramite = this.tramite == ""?true:false;
            this.showArea = this.area == ""?true:false;
            this.showNombre = this.nombre == ""?true:false;
        }
    }
}
</script>
