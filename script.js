// =======================
// MODO ESCURO
// =======================
function toggleDark() {
document.body.classList.toggle("dark");
}

// =======================
// FONTE
// =======================
let tamanho = 16;

function aumentarFonte() {
tamanho += 2;
document.body.style.fontSize = tamanho + "px";
}

function diminuirFonte() {
tamanho -= 2;
if (tamanho < 12) tamanho = 12;
document.body.style.fontSize = tamanho + "px";
}

// =======================
// LEITOR DE TEXTO
// =======================
function lerPagina() {
let texto = document.body.innerText;
let fala = new SpeechSynthesisUtterance(texto);
fala.lang = "pt-BR";
speechSynthesis.speak(fala);
}

// =======================
// GALERIA (MODAL)
// =======================
function abrir(img) {
document.getElementById("modal").style.display = "flex";
document.getElementById("imgModal").src = img.src;
}

function fecharModal() {
document.getElementById("modal").style.display = "none";
}

// =======================
// QUIZ (10 PERGUNTAS)
// =======================
const perguntas = [
{
q: "O que é sustentabilidade?",
op: ["Destruir florestas", "Uso consciente dos recursos", "Poluir rios"],
c: 1
},
{
q: "O Agrinho incentiva o quê?",
op: ["Violência", "Educação e meio ambiente", "Desmatamento"],
c: 1
},
{
q: "O agro é importante para o Brasil porque...",
op: ["Produz alimentos", "Apenas exporta", "Não tem importância"],
c: 0
},
{
q: "Qual prática ajuda o meio ambiente?",
op: ["Queimada", "Reflorestamento", "Lixo em rios"],
c: 1
},
{
q: "O que é biodiversidade?",
op: ["Diversidade de vida", "Apenas plantas", "Apenas animais"],
c: 0
},
{
q: "O que o Agrinho promove?",
op: ["Consciência ambiental", "Poluição", "Desmatamento"],
c: 0
},
{
q: "Qual tecnologia ajuda no campo?",
op: ["Drones", "Fumaça", "Fogo"],
c: 0
},
{
q: "Uso da água deve ser...",
op: ["Consciente", "Desperdiçado", "Ignorado"],
c: 0
},
{
q: "O solo deve ser...",
op: ["Protegido", "Queimado", "Abandonado"],
c: 0
},
{
q: "O Agrinho é importante porque...",
op: ["Educa para o futuro", "Não serve para nada", "Só lazer"],
c: 0
}
];

let atual = 0;
let pontos = 0;

function mostrar() {
let p = perguntas[atual];

let html = `<h3>${p.q}</h3>`;

p.op.forEach((o, i) => {
html += `<button onclick="responder(${i})">${o}</button>`;
});

document.getElementById("quizBox").innerHTML = html;
}

function responder(i) {
if (i === perguntas[atual].c) {
pontos++;
}

atual++;

if (atual < perguntas.length) {
mostrar();
} else {
document.getElementById("quizBox").innerHTML =
`<h3>Quiz finalizado!</h3>`;
document.getElementById("resultado").innerHTML =
`Você fez ${pontos} de ${perguntas.length}`;
}
}

function proxima() {
mostrar();
}

// inicia quiz
mostrar();
