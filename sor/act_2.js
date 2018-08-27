const data = {
  title: 'Actividad 2',
  description: 'Servicios en ejecución.',
  carousels: {
    linux: {
      title: 'Servicios ejecutándose en Linux',
      description: '',
      data: [
        {
          image: 'media/act_2/linux1.png',
          title: 'Instalar PSUTIL',
          description: 'Como primer paso, es necesario instalar la librería "psutil".'
        },
        {
          image: 'media/act_2/linux2.png',
          title: 'Crear un nuevo archivo "main.py"',
          description: 'Aquí escribiremos el código para leer los procesos activos.'
        },
        {
          image: 'media/act_2/linux3.png',
          title: 'Código',
          description: 'El código es bastante simple, importamos la librería, leemos los "pids" de los procesos e imprimimos el nombre de cada uno.'
        },
        {
          image: 'media/act_2/linux4.png',
          title: 'Ejecución',
          description: 'Cerramos el archivo y lo ejecutamos. Los nombres de los procesos deberían de aparecer.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_2/main.py',
          linkText: 'Ver código',
        },
      ]
    },
    win: {
      title: 'Servicios ejecutándose en Windows',
      description: '',
      data: [
        {
          image: 'media/act_2/win1.png',
          title: '',
          description: ''
        },
        {
          icon: 'media/download.png',
          link: 'media/act_2/main.py',
          linkText: 'Ver código',
        },
      ]
    }
  }
};

$(() => load(data));