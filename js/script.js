/*
Autor: Jorge Marcelo
Data de Criação: 28/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Iinicialização das variaveis
Imagem atual do carrossel
Total de Imagens do carrossel
*/
let imagemAtual = 0;
let totalImagens = 5;

/*Selecionando os botões e as imagens pelo DOM*/
const circulosIndicadores = document.querySelectorAll(".contaier-indicadores button");
const imagens = document.querySelectorAll("img");

/*Função de proximo do carrossel*/
function proximo(){

/*Remover a callse active da imagem atual*/    
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");

/*Atualizar a imagem para a proxima*/
imagemAtual = (totalImagens + imagemAtual + 1) % totalImagens;

/*Adiciona a calsse active a imagem que foi adicionada*/
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");

/*Atualiza o indicador de acordo com a imagem correpondente*/ 
indicador (imagemAtual + 1)
}

/*
OBS: ESSA FUNÇÃO É A MESMA QUE A DE CIMA SO 
QUE COM O VALOR NEGATIVO -
*/
function anterior(){
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (totalImagens + imagemAtual - 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
indicador(imagemAtual + 1);
}

/*Função que atualiza o indicador de acordo com a imagem correspondente*/ 
function indicadores(num){

/*Remover a cor de fundo doa indicadores*/
circulosIndicadores.forEach(function(circulo){
circulo.style.backgroundColor = "transparent";
});

/*Define a cor do indicador para o indicador correspondente*/
document.querySelector(".contaier-indicadores button:nth-child(" + num + ")").style.backgroundColor = "blue"
}

/*Função que atualiza o indicador e a imagem com calsse active*/ 
function indicador(index){

/*Remove a classe active de todas imagens*/
imagens.forEach(function(image){
image.classList.remove("active");
})

/*Adiona a classe active a iagem correspondente*/
document.getElementById("img" + index).classList.add("active");

/*Atualiza o indice da imagem atual e os indicadores*/
imagemAtual = index - 1;
indicadores(index);
}

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})
