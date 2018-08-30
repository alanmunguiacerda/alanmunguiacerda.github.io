const data = {
  title: 'Actividad 3',
  description: 'Instalación de Libre Office.',
  carousels: {
    linux: {
      title: 'Instalación en Linux',
      description: '',
      data: [
        {
          image: 'media/act_3/linux1.png',
          title: 'Ir al sitio oficial de Libre Office',
          link: 'https://openoffice.com',
          linkText: 'https://es.libreoffice.org/',
        },
        {
          image: 'media/act_3/linux2.png',
          title: 'Sección de descargas',
          description: 'Ir a la sección de descargas.'
        },
        {
          image: 'media/act_3/linux3.png',
          title: 'Descargando',
          description: 'Esperar a que termine la descarga.'
        },
        {
          image: 'media/act_3/linux4.png',
          title: 'Abrir el comprimido',
          description: 'Una vez que la descarga haya sido completada, abrir el comprimido.'
        },
        {
          image: 'media/act_3/linux5.png',
          title: 'Descomprimir',
          description: 'Extraer los archivos comprimidos a un directorio de fácil acceso.'
        },
        {
          image: 'media/act_3/linux6.png',
          title: 'Ir al directorio',
          description: 'Desde una terminal, moverse al directorio donde están los archivos. Una vez ahí, entrar a la carpeta "DEBS"'
        },
        {
          image: 'media/act_3/linux7.png',
          title: 'Instalar',
          description: 'Ejecutar el comando mostrado para iniciar la instalación.'
        },
        {
          image: 'media/act_3/linux8.png',
          title: 'Esperar',
          description: 'Esperar a que la instalación termine.'
        },
        {
          image: 'media/act_3/linux9.png',
          title: 'Abrir Libre Office',
          description: 'Una vez haya terminado la instalación, Libre Office debería estar disponible como un programa.'
        },
      ]
    },
    win: {
      title: 'Instalar en Windows',
      description: '',
      data: [
        {
          image: 'media/act_3/win1.png',
          title: '',
          description: ''
        },
        {
          icon: 'media/download.png',
          link: 'media/act_3/main.py',
          linkText: 'Ver código',
        },
      ]
    }
  }
};

$(() => load(data));