const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "o assunto de hoje e sobre o uso de agrotoxicos na lavoura",
    alternativas:[
        {
        texto:"isso é assustador",
        afirmacao:"afirmação"
        },
        {
       texto:"isso é maravilhoso",
       afirmacao:"afirmação"
        }

    ]
},

{
    
        enunciado: "Com a descoberta desta tecnologia, aumentou a produtiviade no campo",
        alternativas:[{
            texto:"Utiliza quimicos que podem ser prejudiciais a saude.",
            afirmacao:"afirmação"
        },
        {        
           texto:"mas acaba facilitando o trabalho no campo.",
           afirmacao:"afirmação"
        }        
        ]
    },
    

    {
    
        enunciado: "Após a elaboração do trabalho, em maquinas e a autonomacao no campo mudou varias coisas?",
        alternativas:[
            {
            texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            afirmacao:"afirmação"
            },
            {
            texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
            afirmacao:"afirmação"
            }
        ]
    },
    
    {
    
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
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
