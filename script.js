const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
alternativas:[
"Isso é assustador!",
"Alternativa 2",
]
},

{
enunciado: "pergunta 2",
alternativas:[
"Alternativa 1",
"Alternativa 2",
]
},

{
enunciado: "pergunta 3",
alternativas:[
"Alternativa 1",
"Alternativa 2",
]
},


{
enunciado: "pergunta 4",
alternativas:[
"Alternativa 1",
"Alternativa 2",
]
},

{
enunciado: "pergunta 5",
alternativas:[
"Alternativa 1",
"Alternativa 2",
]
},
]

let atual =0;
let perguntaAtual;

function mostraPergunta(){
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
}