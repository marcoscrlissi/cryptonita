// Alfabeto base para deslocamento (+3)
const alfabetoMinusculo = "abcdefghijklmnopqrstuvwxyz";
const alfabetoMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Busca os elementos da página pelo ID
const campo = document.getElementById("palavra");
const resultado = document.getElementById("palavra-criptografada");
const lista = document.getElementById("lista-transformacoes");
const mensagem = document.getElementById("mensagem");

function criptografar() {
  const textoOriginal = campo.value.trim();
  mensagem.textContent = "";
  lista.replaceChildren();

  if (textoOriginal === "") {
    mensagem.textContent = "Digite um texto para criptografar.";
    resultado.textContent = "Aguardando um texto...";
    return;
  }

  // ETAPA 1: Avanço de 3 posições no alfabeto
  let textoEtapa1 = "";
  for (const char of textoOriginal) {
    if (alfabetoMinusculo.includes(char)) {
      const idx = alfabetoMinusculo.indexOf(char);
      textoEtapa1 += alfabetoMinusculo[(idx + 3) % 26];
    } else if (alfabetoMaiusculo.includes(char)) {
      const idx = alfabetoMaiusculo.indexOf(char);
      textoEtapa1 += alfabetoMaiusculo[(idx + 3) % 26];
    } else {
      // Mantém acentos, números e espaços
      textoEtapa1 += char;
    }
  }

  // ETAPA 2: Inversão de cada palavra
  const palavras = textoEtapa1.split(" ");
  const palavrasInvertidas = palavras.map(palavra => palavra.split("").reverse().join(""));
  const resultadoFinal = palavrasInvertidas.join(" ");

  // Exibe o passo a passo na tela
  const item1 = document.createElement("li");
  item1.innerHTML = `<strong>Passo 1 (Avanço +3):</strong> ${textoEtapa1}`;
  lista.appendChild(item1);

  const item2 = document.createElement("li");
  item2.innerHTML = `<strong>Passo 2 (Inversão B-ROZA):</strong> ${resultadoFinal}`;
  lista.appendChild(item2);

  // Exibe o resultado final
  resultado.textContent = resultadoFinal;
}

function limpar() {
  campo.value = "";
  mensagem.textContent = "";
  resultado.textContent = "Aguardando um texto...";
  lista.replaceChildren();
  
  const item = document.createElement("li");
  item.textContent = "As etapas do processo aparecerão aqui.";
  lista.appendChild(item);
  campo.focus();
}

// Eventos de clique nos botões
document.getElementById("botao-criptografar").addEventListener("click", criptografar);
document.getElementById("botao-limpar").addEventListener("click", limpar);