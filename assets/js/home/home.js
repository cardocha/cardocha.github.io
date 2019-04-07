$(document).ready(function () {

    var projetos = [
        {
            id: 1,
            title: "4x1 Drinking Game",
            url: "https://play.google.com/store/apps/details?id=com.cardocha.quatroporumparabeber",
            img: "assets/images/41.png",
            alone: false
        },
        {
            id: 2,
            title: "Sueca Brasileira Drinking Game",
            url: "https://play.google.com/store/apps/details?id=com.cardocha.suecabrasileira",
            img: "assets/images/sb.png",
            alone: false
        },
        {
            id: 3,
            title: "Vote! Drinking Game",
            url: "https://play.google.com/store/apps/details?id=cardocha.com.vote",
            img: "assets/images/voto.png",
            alone: false
        },
        {
            id: 4,
            title: "Festa Brasileira Drinking Game",
            url: "https://play.google.com/store/apps/details?id=com.cardocha.festabrasileira",
            img: "assets/images/festa_br.png",
            alone: false

        },
        {
            id: 5,
            title: "Soundpiot firefox extension",
            url: "https://addons.mozilla.org/pt-BR/firefox/addon/soundpiot/",
            img: "assets/images/soundpiot48.png",
            alone: true

        },
        {
            id: 6,
            title: "AppBrasileiro API",
            url: "https://appbrasileiro.com.br",
            img: "assets/images/icone_appbr.png",
            alone: true
        }
    ];

    var projectTemplate =
        "<div class='item item-app' data-id='%(id)i'>\
        <img class='ui tiny image image-app' src='%(img)s'/>\
        </div>";

    var secs = 300;
    projetos.forEach(function (project, index) {
        var projectItem = $(sprintf(projectTemplate, project));
        var thumbTemplate =
            $("<div style='vertical-align: middle;vertical-align: top; padding-top: 15px;' class='item item-app' data-id='%(id)i'>\
        <i class='huge inverted outline star icon'></i>\
        </div>");
        projectItem.attr('style', 'display:none');
        projectItem.click(function () {
            var projetoSelecionado = projetos[project.id - 1];
            $(".app-imagem-modal").attr('src', projetoSelecionado.img);
            $(".titulo-app-modal").text(projetoSelecionado.title);
            $(".app-url-modal").attr('href', projetoSelecionado.url)
            $(".titulo-team").text(projetoSelecionado.alone ? "Developer" : "Team")
            if (projetoSelecionado.alone)
                $(".member-rapha").hide();
            else
                $(".member-rapha").show();

            $(".app-detalhe-modal").modal({
                transition: 'fade in'
            })
                .modal('show');
        })
        $(".lista-apps-cardocha").append(projectItem);
        $(".lista-apps-cardocha").append(thumbTemplate);
        secs += 300;
        setTimeout(function () {
            projectItem.transition('browse')
            thumbTemplate.remove();
        }, secs);


    })

});
