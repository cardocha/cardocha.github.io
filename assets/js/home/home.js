$(document).ready(function () {

    var alreadyKnowMe = localStorage.getItem("already-know-me");

    if (alreadyKnowMe !== null && alreadyKnowMe) {
        $(".texto-perfil-topo").show();
        $(".container-texto-perfil").show();
        renderProjects();
    } else {
        setTimeout(function () {
            $(".texto-perfil-topo").transition('fade');
        }, 1000);

        setTimeout(function () {
            $(".container-texto-perfil").transition('pulse', function () {
                setTimeout(function () {
                    renderProjects();
                }, 600)

            })
        }, 2500);
    }

    setTimeout(function () {
        $(".form-paypal").transition('tada');
    }, 5000);


    function renderProjects() {
        $(".menu-rodape").transition('fade in');
        var projetos = [
            {
                id: 1,
                title: "Soundpiot firefox extension",
                url: "https://addons.mozilla.org/pt-BR/firefox/addon/soundpiot/",
                img: "assets/images/soundpiot48.png",
                alone: true

            }
        ];

        localStorage.setItem("already-know-me", "true");
        var projectTemplate =
            "<div class='item item-app' data-id='%(id)i'>\
            <img class='ui tiny image image-app' src='%(img)s'/>\
            </div>";

        var secs = 300;
        projetos.forEach(function (project, index) {
            var projectItem = $(sprintf(projectTemplate, project));
            var thumbTemplate =
                $("<div style='display:none;vertical-align: middle;vertical-align: top; padding-top: 15px;' class='item item-app' data-id='%(id)i'>\
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
            thumbTemplate.transition('slide up');
            secs += 300;
            setTimeout(function () {
                projectItem.transition('browse')
                thumbTemplate.remove();
            }, secs);
        })
    }
});
