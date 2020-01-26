
$(document).ready(function(){
    NS_VOLLEY_POINTS.init();
    NS_VOLLEY_POINTS.events();
});

var NS_VOLLEY_POINTS = {

    data: {
        squadra1: {
            punti:0,
            tempi:0,
            cambi:0
        },
        squadra2: {
            punti:0,
            tempi:0,
            cambi:0
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
        $("#PuntiSquadra1").text(Number($("#PuntiSquadra1").text()) +1)
    },

    aggiungiSquadra2: function(){
        $("#PuntiSquadra2").text(Number($("#PuntiSquadra2").text()) +1)
    }
}