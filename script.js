let pontos = 0;

const textoPontuacao = document.querySelector("#pontuacao");

function adicionarPonto() {
    pontos = pontos + 1;
    textoPontuacao.textContent = "Pontos: " + pontos;
}

const perguntas = [
    {
        texto: "Qual desses é o Charmander?",
        imagens: [
            "./imagens-pokemon/magmar.webp",
            "./imagens-pokemon/arcanine.webp",
            "./imagens-pokemon/charmander.webp",
            "./imagens-pokemon/flareon.webp"
        ],
        correta: 2
    },

    {
        texto: "Qual desses é o Arcanine?",
        imagens: [
            "./imagens-pokemon/ninetales.webp",
            "./imagens-pokemon/arcanine.webp",
            "./imagens-pokemon/rapidash.webp",
            "./imagens-pokemon/flareon.webp"
        ],
        correta: 1
    },

    {
        texto: "Qual desses é a Clefairy?",
        imagens: [
            "./imagens-pokemon/chansey.webp",
            "./imagens-pokemon/lickitung.webp",
            "./imagens-pokemon/jigglypuff.webp",
            "./imagens-pokemon/clefairy.webp"
        ],
        correta: 3
    },

    {
        texto: "Qual desses é o Oddish?",
        imagens: [
            "./imagens-pokemon/bulbasaur.webp",
            "./imagens-pokemon/bellsprout.webp",
            "./imagens-pokemon/oddish.webp",
            "./imagens-pokemon/gloom.webp"
        ],
        correta: 2
    },

    {
        texto: "Qual desses é o Vaporeon?",
        imagens: [
            "./imagens-pokemon/vaporeon.webp",
            "./imagens-pokemon/articuno.webp",
            "./imagens-pokemon/lapras.webp",
            "./imagens-pokemon/omanyte.webp"
        ],
        correta: 0
    },

    {
        texto: "Qual desses é o Hitmonchan?",
        imagens: [
            "./imagens-pokemon/machoke.webp",
            "./imagens-pokemon/hitmonlee.webp",
            "./imagens-pokemon/mr-mime.webp",
            "./imagens-pokemon/hitmonchan.webp"
        ],
        correta: 3
    },

    {
        texto: "Qual desses é o Hitmonlee?",
        imagens: [
            "./imagens-pokemon/machoke.webp",
            "./imagens-pokemon/hitmonlee.webp",
            "./imagens-pokemon/mr-mime.webp",
            "./imagens-pokemon/hitmonchan.webp"
        ],
        correta: 1
    },

    {
        texto: "Qual desses é o Dugtrio?",
        imagens: [
            "./imagens-pokemon/dodrio.webp",
            "./imagens-pokemon/magneton.webp",
            "./imagens-pokemon/exeggutor.webp",
            "./imagens-pokemon/dugtrio.webp"
        ],
        correta: 3
    },

    {
        texto: "Qual desses é o Nidoking?",
        imagens: [
            "./imagens-pokemon/machoke.webp",
            "./imagens-pokemon/nidoking.webp",
            "./imagens-pokemon/seaking.webp",
            "./imagens-pokemon/kingler.webp"
        ],
        correta: 1
    },

    {
        texto: "Qual desses é o Raichu?",
        imagens: [
            "./imagens-pokemon/jolteon.webp",
            "./imagens-pokemon/zapdos.webp",
            "./imagens-pokemon/pikachu.webp",
            "./imagens-pokemon/raichu.webp"
        ],
        correta: 3
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
const mensagemFinal = document.querySelector("#mensagem-final");


let perguntaAtual = 0; // registra qual pergunta está sendo exibida. Começa na posição 0, que é a primeira pergunta do array

// const é usado para referências que não vamos substituir e let é para uma variável que vamos alterar o valor dela ao longo do tempo. Por exemplo, perguntaAtual vai mudar conforme o usuário avança pelas perguntas.


function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual]; // acessa a pergunta correspondente à posição atual do array

    tituloPergunta.textContent = pergunta.texto; // textContent altera o texto do título na página para a pergunta atual

    imagens.forEach(function(imagem, indice) {
    imagem.src = pergunta.imagens[indice]; // altera a imagem para a correspondente à pergunta atual
    });

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

            pontuacaoFinal.textContent = "Sua pontuação final: " + pontos + "/10"; // exibe a pontuação final
            exibirMensagemFinal(); // exibe a mensagem final com base na pontuação

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

    function exibirMensagemFinal() {
    if (pontos >= 10) {
            mensagemFinal.textContent = "Você é um Mestre Pokémon!";
    } else if (pontos == 9 || pontos == 8) {
        mensagemFinal.textContent = "Você é um membro da Elite dos 4!";
    } else if (pontos == 7 || pontos == 6) {
        mensagemFinal.textContent = "Você é um líder de ginásio!";
    } else {
        mensagemFinal.textContent = "Você é um treinador iniciante!";
    }
    
}
    

