const data = {
  title: 'Actividad 1',
  description: 'Instalar los sistemas operativos Windows y Linux.',
  carousels: {
    win: {
      title: 'Instalación de Windows',
      description: 'Se instalará Windows 10 desde una USB.',
      data: [
        {
          image: 'media/act_1/win1.jpg',
          title: 'Preparar la instalación',
          description: 'Como primer paso, es necesario apagar la computadora, conectar la USB con el sistema operativo y seleccionarla como unidad de arranque.'
        },
        {
          image: 'media/act_1/win2.jpg',
          title: 'Configuración inicial',
          description: 'Una vez que el instalador ha cargado, debemos seleccionar el lenguaje y el formato de hora, fecha y tecado.'
        },
        {
          image: 'media/act_1/win3.jpg',
          title: 'Comienza la instalación',
          description: 'Una vez realizada la configuración anterior, es momento de comenzar la instalación, puslando "Install now".'
        },
        {
          image: 'media/act_1/win4.jpg',
          title: 'Términos y condiciones',
          description: 'Una vez leídos los términos y condiciones, marcar la casilla "I accept..." y pulsar "Next".'
        },
        {
          image: 'media/act_1/win5.jpg',
          title: 'Tipo de instalación',
          description: 'La instalación que se realizará será personalizada, ya que no se quiere reescribir el contenido existente en el disco.'
        },
        {
          image: 'media/act_1/win6.jpg',
          title: 'Crear una partición',
          description: 'Seleccionar el espacio del disco sobre el que se instalará el sistema operativo y dar click a "New" para crear una nueva partición.'
        },
        {
          image: 'media/act_1/win7.jpg',
          title: 'Tamaño de partición',
          description: 'Una vez seleccionado el espacio vacio y el tamaño de la partición, dar click en "Apply", esto creará la nueva partición.'
        },
        {
          image: 'media/act_1/win8.jpg',
          title: 'Instalando',
          description: 'Una vez que se creó la partición y se dio click a "Next" comienza el proceso de instalación. Este proceso puede tardar varios minutos.'
        },
        {
          image: 'media/act_1/win9.jpg',
          title: 'Instalación terminada',
          description: 'Una vez que la instalación terminó, la computadora debe reiniciarse para entrar al sistema operativo'
        },
        {
          image: 'media/act_1/win10.jpg',
          title: 'Reiniciar',
          description: 'Dar click a "Restart now" para reiniciar la computadora.'
        },
        {
          image: 'media/act_1/win11.jpg',
          title: 'Configurando el sistema operativo',
          description: 'Una vez que se inicia la computadora y entra al sistema operativo, se pedirán ciertos datos para la configuración del mismo. Llenar estos datos a conveniencia. Al finalizar esta etapa, la computadora se reiniciará una vez más.'
        },
        {
          image: 'media/act_1/win12.jpg',
          title: 'Terminado',
          description: 'Una vez que la computadora inicia de nuevo, entrará directo al escritorio del usuario que creamos en el paso anterior.'
        }
      ]
    },
    winChar: {
      title: 'Características de Windows',
      data: [
        {
          description: 'Interfaz amigable al usuario.'
        },
        {
          description: 'Gran cantidad de software.'
        },
        {
          description: 'Al tener una base de usuarios grande, es el principal objetivo de los ciber ataques.'
        },
        {
          description: 'Puede ser ejecutado en una gran cantidad de hardware.'
        },
        {
          description: 'Es fácil encontrar soporte y casos similares si se llega a tener un problema.'
        },
        {
          description: 'Poco flexible en su personalización.'
        },
        {
          description: 'Es un sistema operativo robusto, pero también requiere muchos recursos.'
        }
      ]
    },
    linux: {
      title: 'Instalación de Linux',
      description: 'Se instalará TinyCore desde una USB',
      data: [
        {
          image: 'media/act_1/linux1.jpg',
          title: 'Preparar la instalación',
          description: 'El primer paso es hacer una USB booteable con la distribución TinyCore. Después, se conecta la USB a la computadora y se selecciona como unidad de arranque.'
        },
        {
          image: 'media/act_1/linux2.jpg',
          title: 'Escritorios',
          description: 'Seleccionamos el escritorio que sea de nuestra preferencia.'
        },
        {
          image: 'media/act_1/linux3.jpg',
          title: 'Instalación',
          description: 'Una vez dentro del modo "live" de la distribución, ir al icono "tc-install" y dar click.'
        },
        {
          image: 'media/act_1/linux4.jpg',
          title: 'Seleccionar espacio en disco',
          description: 'Seleccionar la unidad sobre la que se instalará el sistema operativo.'
        },
        {
          image: 'media/act_1/linux5.jpg',
          title: 'Formato de disco',
          description: 'Seleccionar el formato para el disco seleccionado.'
        },
        {
          image: 'media/act_1/linux6.jpg',
          title: 'Configuraciones extra',
          description: 'Indicar las configuaciones extra para la instalación. En este caso no se usan.'
        },
        {
          image: 'media/act_1/linux7.jpg',
          title: 'Tipo de instalación',
          description: 'Seleccionar si se quiere solamente interfaz de texto o una GUI.'
        },
        {
          image: 'media/act_1/linux8.jpg',
          title: 'Comenzar instalación',
          description: 'Dar click en "Proceed" para comenzar la instalación.'
        },
        {
          image: 'media/act_1/linux9.jpg',
          title: 'Instalación terminada',
          description: 'Y que la instalación terminó, reiniciar la computadora, el sistema operativo debería de ser cargado.'
        },
        {
          image: 'media/act_1/linux10.jpg',
          title: 'Todo listo',
          description: 'Una vez que se muestra el escritorio, podemos comenzar a usar nuestro sistema operativo.'
        }
      ]
    },
    linuxChar: {
      title: 'Características de Linux',
      data: [
        {
          description: 'Instalación para todos los gustos, desde simple hasta totalmente personalizada.'
        },
        {
          description: 'Hoy en día cuenta con una cantidad de software y alternativas aceptables.'
        },
        {
          description: 'Al ser sus usuarios más cuidadosos, es más difícil contagiarse de virus.'
        },
        {
          description: 'Puede ser ejecutado en una gran cantidad de hardware.'
        },
        {
          description: 'Es fácil encontrar soporte y casos similares si se llega a tener un problema.'
        },
        {
          description: 'Totalmente flexible en su personalización.'
        },
        {
          description: 'Sabores para todas las necesidades, comenzando desde distribuciones de 8mb hasta estaciones de trabajo completas, de 5gb.'
        },
        {
          description: 'Algunos controladores no son desarrollados por empresas, sino por la comunidad.'
        },
        {
          description: 'Al ser una base de código abierto, se puede modificar directamente el sistema operativo.'
        },
        {
          description: 'Ya que su comunidad es muy activa, los bugs encontrados tienen solución rápidamente.'
        }
      ]
    }
  }
};

$(() => load(data));