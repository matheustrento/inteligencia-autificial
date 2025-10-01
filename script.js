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
        afirmacao:"parabens pelo visto voce gosta de se movimentar "
        },
        {
       texto:"jogar jogos online",
       afirmacao:"bom voce nao gosta muito de se movimentar mais pode estar aprendendo algo com jogos"
        }

    ]
},

{
    
        enunciado: "mas quais as consequencias de cada um ? ",
        alternativas:[{
            texto:"a pratica de esportes pode ser benefica a saude.",
            afirmacao:"a pratica de esportes pode ser benefica a saude, e ate mesmo a saude mental"
        },
        {        
           texto:"Jogar jogos onlines com frequencia podem nao ser muito bom a saude.",
           afirmacao:"Jogar jogos onlines com frequencia podem nao ser muito bom a saude, principalmente pela sosializacao"
        }        
        ]
    },
    

    {
    
        enunciado: "mas nem todos os esportes podem ser sempre beneficos, como tambem nem todos os jogos podem ser maleficos?",
        alternativas:[
            {
            texto:"pois a pratica pode melhorar o desempenho, mas tem o risco de lesoes.",
            afirmacao:"pois a pratica pode melhorar o desempenho, mas tem o risco de lesoes, mas por isso devem ser praticados com cuidado"
            },
            {
            texto:"existem diversos maleficios, mas posuem jogos que ajudam a melhorar o raciocinio.",
            afirmacao:" mas posuem jogos que ajudam a melhorar o raciocinio, por isso devemos ecolher bem os jogos "
            }
        ]
    },
    
    {
    
        enunciado: "quanto aos temas voce prefere?",
        alternativas:[
            {
            texto:"os realizar sozinhos.",
            afirmacao:"os realizar sozinhos, bom talvez isso o acabe prejudicando no futuro"
        },
        {
            texto:"os realizar sosializando ou realizando com mais pessoas.",
            afirmacao:"aos realizar com mais pessoas, podem aver ate mesmo uma troca de expriencias"
        }
        ]
    },

    {
    
        enunciado: "mas qual voce tem mais acesso?",
        alternativas:[
            {
            texto:" esportes.",
            afirmacao:"que bom, pois o assesso a esportes acaba se tornando mais dificil"
            },
        {
            texto:"jogos.",
            afirmacao:"hoje a maioria tem mais acesso aos jogos, por isso se puder pensar bem nas ecolhas ajudara voce mesmo"
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
        caixaPerguntas.textContent = "Em 2025...";
        textoResultado. textContent = historiaFinal;
        caixaAlternativas.textContent = "A principal diferença é que esporte é uma atividade física institucionalizada com regras rígidas, enquanto jogo é uma atividade recreativa cujas regras podem ser adaptadas pelos próprios participantes. Os "jogos online", no contexto de competições profissionais e estruturadas, são conhecidos como eSports (ou esportes eletrônicos), onde jogadores com treinamento e apoio profissional competem em um nível competitivo semelhante ao dos esportes tradicionais, mas através de plataformas digitais. ";
     }
    
     mostraPergunta();
