const data = {
  title: 'Actividad 7',
  description: 'Videojuego',
  carousels: {
    game: {
      title: 'Juego en HTML + Javascript',
      description: 'Haremos un pequeño jego tipo "Snake" en HTML + Javascript',
      data: [
        {
          image: 'media/act_7/linux1.png',
          title: 'HTML y Javascript',
          description: 'Al usar HTML y Javascript, podemos hacer juegos para cualquier navegador que pueda ejecutarlos, sin importar el sistema operativo.'
        },
        {
          image: 'media/act_7/linux1.png',
          title: 'Snake',
          description: 'El juego permite pausar y reanudar (tecla P), reiniciar (tecla R) y el movimiento se realiza con las teclas de dirección.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_7/code.zip',
          linkText: 'Descargar código',
        }
      ]
    },
    linux: {
      title: 'Snake en Linux',
      description: 'Ejecutaremos el juego en Linux.',
      data: [
        {
          image: 'media/act_7/linux1.png',
          title: 'Abrir el juego',
          description: 'Dirigirse a la carpeta del código y abrir con el navegador el archivo index.html'
        }
      ]
    },
    win: {
      title: 'Snake en Windows',
      description: 'Ejecutaremos el juego en Windows.',
      data: [
        {
          image: 'media/act_7/win1.png',
          title: 'Abrir el juego',
          description: 'Dirigirse a la carpeta del código y abrir con el navegador el archivo index.html'
        }
      ]
    }
  }
};

$(() => load(data));