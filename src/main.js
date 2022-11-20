var positionX = 0
var positionY = 492

function moveUrso(image, event) {
      if (image.src.match('urso-1')) image.src = 'images/urso-2.png'
      else if (image.src.match('urso-2')) image.src = 'images/urso-3.png'
      else if (image.src.match('urso-3')) image.src = 'images/urso-1.png'
      alteraPosicao(image, event)
}


/* MEXER NESSA FUNÇÃO AMANHÃ */
function alteraPosicao(image, event) {
      if (event.key == 'd' && positionX <= 1444) positionX = positionX + 5

      else if (event.key == 'a' && positionX >= -17) positionX = positionX - 5

      else if (event.key == 'w') {
            image.src = 'images/urso-2.png'
            for (let i = 0; i < 10; i++) {
                  setTimeout(function (i) {
                        {
                              setTimeout(function (i) {
                                    for (let i = 0; i < 5; i++) {
                                          positionY = positionY + 2
                                          image.style.top = positionY + 'px'
                                          console.log('pula')
                                    }
                              }, 1000)
                              for (let i = 0; i < 5; i++) {
                                    positionY = positionY - 2
                                    image.style.top = positionY + 'px'
                                    console.log('pula')

                              }

                        }
                  }, 1000)
            }
      }

      image.style.left = positionX + 'px'

}


function mudarUrso(event) {
      image = document.getElementById('urso')
      if (event.key == 'd') {
            image.style.transform = 'scaleX(1)'
            moveUrso(image, event)
      }

      else if (event.key == 'a') {
            image.style.transform = 'scaleX(-1)'
            moveUrso(image, event)
      }

      else if (event.key == 'w') {
            moveUrso(image, event)
      }
      else {
            return
      }
}




