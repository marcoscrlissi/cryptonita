// Letras que o programa aceita, na ordem do alfabeto.
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
// Busca os elementos da página pelo identificador (id).
const campo = document.getElementById("palavra");
const resultado = document.getElementById("palavra-criptografada");
const lista = document.getElementById("lista-transformacoes");
const mensagem = document.getElementById("mensagem");
function criptografar() {
  // Remove espaços nas pontas e transforma maiúsculas em minúsculas.
  const palavra = campo.value.trim().toLowerCase();
  let novaPalavra = "";
  mensagem.textContent = "";
  lista.replaceChildren();
  if (palavra === "" || !/^[a-z]+$/.test(palavra)) {
    mensagem.textContent = "Digite apenas letras de a a z, sem acentos ou espaços.";
    resultado.textContent = "Aguardando uma palavra...";
    return; // Encerra a função quando a entrada não é válida.
  }
  // Percorre uma letra por vez.
  for (const letra of palavra) {
    const posicao = alfabeto.indexOf(letra);
    const proxima = alfabeto[(posicao + 1) % alfabeto.length]; // z volta para a.
    novaPalavra += proxima;
    // Mostra ao aluno como cada letra foi transformada.
    const item = document.createElement("li");
    item.textContent = `${letra} → ${proxima}`;
    lista.appendChild(item);
  }
  resultado.textContent = novaPalavra;
}
function limpar() {
  campo.value = "";
  mensagem.textContent = "";
  resultado.textContent = "Aguardando uma palavra...";
  lista.replaceChildren();
  const item = document.createElement("li");
  item.textContent = "As transformações aparecerão aqui.";
  lista.appendChild(item);
  campo.focus();
}
// Executa as funções quando os botões são clicados.
document.getElementById("botao-criptografar").addEventListener("click", criptografar);
document.getElementById("botao-limpar").addEventListener("click", limpar);
