/* Variáveis iniciais que setam o posicionamento do urso na tela */
var positionX = 0
var positionY = 492
image = document.getElementById('urso')


/* Função responsável por estruturar as funções do problema */
function computaEvento(image, event) {
      alteraIMGUrso(image)
      alteraEixoX(image, event)
      alteraEixoY(image, event)
}


/* Função responsável por apenas trocar a imagem do urso para dar a impressão de movimento */
function alteraIMGUrso(image) {
      if (image.src.match('urso-1')) image.src = 'images/urso-2.png'
      else if (image.src.match('urso-2')) image.src = 'images/urso-3.png'
      else if (image.src.match('urso-3')) image.src = 'images/urso-1.png'
}


/* Função responsável por alterar a posição no eixo X da imagem */
function alteraEixoX(image, event) {
      if (event.key == 'd' && positionX <= 1444) {    /* if usado para não estourar as bordas da tela */
            positionX = positionX + 5
            image.style.transform = 'scaleX(1)'             /* espelha a imagem para vira-la caso necessário */
      }

      else if (event.key == 'a' && positionX >= -17) {      /* if usado para não estourar as bordas da tela */
            positionX = positionX - 5
            image.style.transform = 'scaleX(-1)'                  /* espelha a imagem para vira-la caso necessário  */
      }
      image.style.left = positionX + 'px'                     /* aplica a mudança no atributo left*/
}


/* Função responsável por alterar a posição no eixo Y da imagem */
function alteraEixoY(image, event) {
      if (event.key == 'w') {
            image.src = 'images/urso-2.png'
            for (let i = 0; i < 10; i++) {
                  setTimeout(function (i) {
                        setTimeout(function (i) {
                              for (let i = 0; i < 5; i++) {
                                    positionY = positionY + 2
                                    image.style.top = positionY + 'px'
                                    console.log('pula')
                              }
                        }, 100)
                        for (let i = 0; i < 5; i++) {
                              positionY = positionY - 2
                              image.style.top = positionY + 'px'
                              console.log('pula')
                        }
                  }, 10)
            }
      }
}

