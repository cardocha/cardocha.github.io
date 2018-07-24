$(document).ready(function () {

    

    function getData() {
        var dadosHorario = Util.horaAtual.split(':');
        var horario = new Date();
        horario.setHours(parseInt(dadosHorario[0]));
        horario.setMinutes(parseInt(dadosHorario[1]));
        horario.setSeconds(parseInt(dadosHorario[2]));
        return horario;
    }

    function buscaAplicativo(codigo) {
        var app = undefined;
        $.each(aplicativos, function (indice, aplicativo) {
            if (aplicativo.codigo === codigo) {
                app = aplicativo;
                return false;
            }
        });
        return app;
    }

    function limpaCarrossel() {
        var quant = $(carrossel).children().length;
        for (var i = 0; i < quant; i++)
            carrossel.owlCarousel('remove', i).owlCarousel('update');
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

});
