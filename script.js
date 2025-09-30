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
    
        enunciado: "mas afinal qual vc prefere?",
        alternativas:[
            {
            texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao:"afirmação"
        },
        {
            texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
            afirmacao:"afirmação"
        }
        ]
    },

    {
    
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas:[
            {
            texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            afirmacao:"afirmação"
            },
        {
            texto:"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
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
