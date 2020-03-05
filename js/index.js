
$(document).ready(function(){
    NS_VOLLEY_POINTS.init();
    NS_VOLLEY_POINTS.events();
});

var NS_VOLLEY_POINTS = {

    data: {
        squadra1: {
            punti:0,
            tempi:0,
            cambi:0,
            set:0
        },
        squadra2: {
            punti:0,
            tempi:0,
            cambi:0,
            set:0
        }
    },
    
    init: function(){

    },

    events: function() {
       $("#togliSquadra1").on("click", NS_VOLLEY_POINTS.togliSquadra1); 
       $("#togliSquadra2").on("click", NS_VOLLEY_POINTS.togliSquadra2); 
       $("#aggiungiSquadra1").on("click", NS_VOLLEY_POINTS.aggiungiSquadra1); 
       $("#aggiungiSquadra2").on("click", NS_VOLLEY_POINTS.aggiungiSquadra2); 
    },

    togliSquadra1: function(){
        $("#PuntiSquadra1").text(Number($("#PuntiSquadra1").text()) -1);
    },

    togliSquadra2: function(){
        $("#PuntiSquadra2").text(Number($("#PuntiSquadra2").text()) -1)
    },

    aggiungiSquadra1: function(){
        let numberToSet = Number($("#PuntiSquadra1").text()) +1;
        let puntiAvversari = Number($("#PuntiSquadra2").text());
        if(numberToSet > 24 && numberToSet > puntiAvversari && numberToSet- puntiAvversari > 1){
            // console.log("finito set")
        }
        $("#PuntiSquadra1").text(numberToSet)
    },

    aggiungiSquadra2: function(){
        let numberToSet = Number($("#PuntiSquadra2").text()) +1;
        let puntiAvversari = Number($("#PuntiSquadra1").text());

        if(numberToSet > 24 && numberToSet > puntiAvversari && numberToSet- puntiAvversari > 1){
            // console.log("finito set")
        }
        $("#PuntiSquadra2").text(numberToSet)
    },

    setSquadre: function () {

        $("#squadraCasaH1").text($("#squadraCasa").val().toUpperCase());
        $("#squadraOspiteH1").text(($("#squadraOspite").val().toUpperCase()));

    },
    avviaPartita: function(){

        $("#divSetupPartita").addClass("d-none");
        $("#divPartita").removeClass("d-none");

        NS_VOLLEY_POINTS.setSquadre();
    }
}