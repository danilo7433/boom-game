const buttonBeginner = document.querySelector(".btn-beginner");
const buttonMedian = document.querySelector(".btn-median");
const buttonProfessional = document.querySelector(".btn-professional");
const contadorDeBalao = document.querySelector('.contador')
const buttonVoltar = document.querySelector('.btn-voltar');
const fraseVocePerdeu = document.querySelector('.perdeu');
const fraseVoceGanhou = document.querySelector('.ganhou');
const regrasDoJogo = document.querySelector('.container-regras')

const iniciante = buttonBeginner.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  regrasDoJogo.remove();
  beginner();
});

const mediano = buttonMedian.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  regrasDoJogo.remove();

  median();
});

const profissional = buttonProfessional.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  regrasDoJogo.remove();

  professional();
});
const btnVoltar = buttonVoltar.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  voltar();
});

function beginner() {
  setInterval(createBalloon, 1000);
}

function median() {
  setInterval(createBalloon, 500);
}

function professional() {
  setInterval(createBalloon, 300);
}

function voltar() {
  location.reload(true);
}

const balloonsContainer = document.querySelector(".container-balloons");
const balaoNaTela = document.querySelector('.balaoTela');

function createBalloon() {
  const elementImg = document.createElement("img");
  

  elementImg.setAttribute("src", "./assets/baloon.png");
  elementImg.setAttribute("class", "balloon");
 

  const positionLeft = Math.round(Math.random() * 90);
  const positionTop = Math.round(Math.random() * 90);

  elementImg.style.left = positionLeft + "vw";
  elementImg.style.top = positionTop + "vh";

  elementImg.addEventListener("click", function () {
    removeBalloon(this);

  });
  balloonsContainer.appendChild(elementImg);
  ++balaoNaTela.innerHTML
  if (balaoNaTela.innerHTML == 10) {
    return (fraseVocePerdeu.style.display='block') && (buttonVoltar.style.display ='block')
  }
}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
  ++contadorDeBalao.innerHTML
    --balaoNaTela.innerHTML

    if(contadorDeBalao.innerHTML == 20){
      return (fraseVoceGanhou.style.display='block') && (buttonVoltar.style.display ='block')
    }
}