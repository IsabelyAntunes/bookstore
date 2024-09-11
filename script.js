/* Interação no botão "Avalie nossa loja". Abre uma caixa no centro da tela. */
const rate = document.querySelector(".rate")
const avaliar = document.querySelector(".avaliar")
const botao = document.querySelector(".botao")
botao.addEventListener("click", login)

function login(){
	rate.style.display = "inherit"
	avaliar.style.display = "inherit"
}
rate.addEventListener("click", sair)
function sair(){
	rate.style.display = "none"
	avaliar.style.display = "none"
}
