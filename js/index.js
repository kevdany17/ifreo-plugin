var app = new Vue({
    el: "#app",
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
});