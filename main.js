$(document).ready(function() {
    // primeira forma de adicionar um evento a um elemento
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
    // segunda forma de adicionar um evento a um elemento
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver a imagem em tamanho real" target="_blank">
                    Ver a imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); // $(novoConteudo).appendTo(seletorElementoDOM)
        $(novoItem).fadeIn(1000); // funcao usada para animar o efeito de desvanecimento do elemento
        $('#endereco-imagem-nova').val('');
    })
})
