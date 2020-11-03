const buttonBeginner = document.querySelector(".btn-beginner");
const buttonMedian = document.querySelector(".btn-median");
const buttonProfessional = document.querySelector(".btn-professional");
const contadorDeBalao = document.querySelector('.contador')



const iniciante = buttonBeginner.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  beginner();
});

const mediano = buttonMedian.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  median();
});

const profissional = buttonProfessional.addEventListener("click", function () {
  buttonMedian.remove();
  buttonBeginner.remove();
  buttonProfessional.remove()
  professional();
});

function beginner() {
  setInterval(createBalloon, 1000);
}

function median() {
  setInterval(createBalloon, 500);
}

function professional() {
  setInterval(createBalloon, 200);
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
  if (balaoNaTela.innerHTML >= 10) {
    return document.querySelector('.perdeu').style.display = 'block'
  }
}
    function voltar() {
      document.querySelector('.btn-voltar').style.display = 'block'
      function bntVoltar(this.){
        location.reload(true);
      }
    }

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
  ++contadorDeBalao.innerHTML
    --balaoNaTela.innerHTML
  if (contadorDeBalao.innerHTML >= 5) {
    return document.querySelector('.ganhou').style.display = 'block' && voltar()
  }
}
