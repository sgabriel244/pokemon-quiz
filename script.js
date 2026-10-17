let pontos = 0;

const textoPontuacao = document.querySelector("#pontuacao");


function adicionarPonto() {
    pontos = pontos + 1;
    textoPontuacao.textContent = "Pontos: " + pontos;
}


const perguntas = [
    {
        texto: "Qual desses é o Charmander?",
        correta: 2
    },

    {
        texto: "Qual desses é o Arcanine?",
        correta: 1
    }
];


const tituloPergunta = document.querySelector(".pergunta"); // encontra um elemento HTML usando um seletor CSS
const imagens = document.querySelectorAll(".alternativa"); // encontra todos os elementos que correspondem ao seletor. Nesse caso, as quatro imagens
const alternativas = document.querySelector(".alternativas");
const resultado = document.querySelector("#resultado");
const botaoProximo = document.querySelector("#proxima-pergunta");
const fimDeJogo = document.querySelector("#fim-de-jogo");
const pontuacaoFinal = document.querySelector("#pontuacao-final");
const botaoReiniciar = document.querySelector("#reiniciar-jogo");


let perguntaAtual = 0; // registra qual pergunta está sendo exibida. Começa na posição 0, que é a primeira pergunta do array

// const é usado para referências que não vamos substituir e let é para uma variável que vamos alterar o valor dela ao longo do tempo. Por exemplo, perguntaAtual vai mudar conforme o usuário avança pelas perguntas.


function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual]; // acessa a pergunta correspondente à posição atual do array

    tituloPergunta.textContent = pergunta.texto; // textContent altera o texto do título na página para a pergunta atual

    resultado.textContent = ""; // limpa o resultado da pergunta anterior

    botaoProximo.hidden = true; // esconde o botão de próxima pergunta até que o usuário selecione uma resposta

    imagens.forEach(function(imagem) {
        imagem.style.pointerEvents = "auto"; // permite que o usuário clique nas imagens
    });
}

    imagens.forEach(function(imagem, indice) {
        imagem.addEventListener("click", function() {
            const pergunta = perguntas[perguntaAtual]; // acessa a pergunta atual

            if (indice === pergunta.correta) { // compara o índice da imagem clicada com a posição da resposta correta
                resultado.textContent = "Resposta correta!";
                adicionarPonto();
            } else {
                resultado.textContent = "Resposta errada!";
            }

            imagens.forEach(function(imagem) {
                imagem.style.pointerEvents = "none"; // desativa os cliques nas imagens após o usuário selecionar uma resposta
            });

            botaoProximo.hidden = false; // exibe o botão de próxima pergunta
        });
    });


    botaoProximo.addEventListener("click", function() {
        perguntaAtual++; // avança para a próxima pergunta

        if (perguntaAtual >= perguntas.length) {// verifica se todas as perguntas foram respondidas
            tituloPergunta.hidden = true; // esconde a pergunta
            alternativas.hidden = true;
            textoPontuacao.hidden = true;
            resultado.hidden = true;
            botaoProximo.hidden = true;

            pontuacaoFinal.textContent = "Pontos: " + pontos; // exibe a pontuação final
            fimDeJogo.hidden = false; // exibe a tela de fim de jogo

            return; 
        }

        mostrarPergunta(); // exibe a próxima pergunta
    });

    mostrarPergunta();

    botaoReiniciar.addEventListener("click", function() {
        pontos = 0; // reseta a pontuação
        perguntaAtual = 0; // reseta a pergunta atual

        textoPontuacao.textContent = "Pontos: " + pontos; // atualiza a pontuação na tela

        fimDeJogo.hidden = true; 
        tituloPergunta.hidden = false;
        alternativas.hidden = false;
        textoPontuacao.hidden = false;
        resultado.hidden = false;

        mostrarPergunta();
    });

