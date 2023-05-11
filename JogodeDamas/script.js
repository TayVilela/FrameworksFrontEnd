$(document).ready(function() {
    const tabuleiro = $("#tabuleiro");
  
    // Criar as casas do tabuleiro
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const casa = $("<div>").addClass("casa");
        if ((i + j) % 2 === 0) {
          casa.addClass("preta");
        }
        tabuleiro.append(casa);
      }
    }

        $(document).ready(function(){
          $("#botao1").click(function(){
            $(".peca").remove();
          });
        });
 
  
    // Adicionar peças iniciais
    const pecasBrancas = $(".casa:nth-child(even):nth-last-child(-n+8)");
    const pecasBrancas2 = $(".casa:nth-child(-2n+8):nth-last-child(-n18)");
    const pecasVermelhas = $(".casa:nth-child(even):nth-child(-n8)");
    const pecasVermelhas2 = $(".casa:nth-child(2n+9):nth-child(-n16)");

    pecasBrancas.append($("<div>").addClass("peca branca"));
    pecasBrancas2.append($("<div>").addClass("peca branca"));
    pecasVermelhas.append($("<div>").addClass("peca vermelha"));
    pecasVermelhas2.append($("<div>").addClass("peca vermelha"));
  
  });
  