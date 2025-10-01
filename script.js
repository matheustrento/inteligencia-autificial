const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "para voce nas suas horas vagas prefere ",
    alternativas:[
        {
        texto:"praticar esportes",
        afirmacao:"afirmação"
        },
        {
       texto:"jogar jogos online",
       afirmacao:"afirmação"
        }

    ]
},

{
    
        enunciado: "esportes x jogos ",
        alternativas:[{
            texto:"a pratica de esportes pode ser benefica a saude.",
            afirmacao:"afirmação"
        },
        {        
           texto:"jogos onlines podem nao ser muito bons a saude e a sosializacao.",
           afirmacao:"afirmação"
        }        
        ]
    },
    

    {
    
        enunciado: "mas nen todos os esportes podem ser sempre beneficos, como tambem nem todos os jogos podem ser maleficos?",
        alternativas:[
            {
            texto:"pois a pratica pode melhorar o desempenho, mas tem o risco de lesoes.",
            afirmacao:"afirmação"
            },
            {
            texto:"existem diversos maleficios, mas posuem jogos que ajudam a melhorar o raciocinio.",
            afirmacao:"afirmação"
            }
        ]
    },
    
    {
    
        enunciado: "tambem voce prefere em questao a esses temas ?",
        alternativas:[
            {
            texto:"praticar com os com os amigos.",
            afirmacao:"afirmação"
        },
        {
            texto:"jogar com os amigos.",
            afirmacao:"afirmação"
        }
        ]
    },

    {
    
        enunciado: "mas qual deses temas mais reunen os amigos?",
        alternativas:[
            {
            texto:"os esportes praticados com mais pessoas ou um grupo pode ser muito bom,alem da troca e esperiencias.",
            afirmacao:"afirmação"
            },
        {
            texto:"jogar com os amigos tambem e uma pratica de lazer, ainda se for um jogo de raciocinio logico.",
            afirmacao:"afirmação"
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    }
    
    function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada. afirmacoes;
        historiaFinal+= afirmacoes+" ";
        atual++;
        mostraPergunta();
     }


     function mostraResultado(){
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado. textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();
