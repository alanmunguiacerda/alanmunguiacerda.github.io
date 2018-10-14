const data = {
  title: 'Actividad 8',
  description: 'Windows Server',
  carousels: {
    win: {
      title: 'Instalación de Windows Server',
      description: 'Se instalará Windows Server 2016.',
      data: [
        {
          image: 'media/act_8/iso1.png',
          title: 'Descargar Windows Server',
          link: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2016',
          linkText: 'Descargar Windows Server',
        },
        {
          image: 'media/act_8/iso2.png',
          title: 'Crear una USB booteable con el ISO.'
        },
        {
          image: 'media/act_8/win1.jpg',
          title: 'Insertar USB y arrancar desde ahí',
          description: 'Arrancar la computadora desde la USB, para comenzar el proceso de instalación de Windows Server.'
        },
        {
          image: 'media/act_8/win2.jpg',
          title: 'Seguir las instrucciones',
          description: 'Seguir las instrucciones que se van dando en el instalador.'
        },
        {
          image: 'media/act_8/win3.jpg',
          title: 'Tipo de instalación',
          description: 'Seleccionar el tipo de instalación que se realizará. En este caso se seleccionó una insatalación con GUI.'
        },
        {
          image: 'media/act_8/win4.jpg',
          title: 'Términos y condiciones',
          description: 'Aceptar los términos y condiciones.'
        },
        {
          image: 'media/act_8/win5.jpg',
          title: 'Instalación custom',
          description: 'Seleccionar instalación Custom, ya que se instalará por primera vez.'
        },
        {
          image: 'media/act_8/win6.jpg',
          title: 'Partición',
          description: 'Seleccionar la partición en la que se instalará el sistema operativo.'
        },
        {
          image: 'media/act_8/win7.jpg',
          title: 'Instalando',
          description: 'Esperar a que la instalación sea completada.'
        },
        {
          image: 'media/act_8/win8.jpg',
          title: 'Reiniciar',
          description: 'Una vez que se completa la instalación, la computadora se reiniciará y entrará a Windows Server.'
        },
        {
          image: 'media/act_8/win9.jpg',
          title: 'Administrador',
          description: 'Se pedirá una contraseña de administrador, proveer una y continuar.'
        },
        {
          image: 'media/act_8/win10.jpg',
          title: 'Pantalla de inicio',
          description: 'Dar click ctrl+alt+delete para desbloquear la pantalla.'
        },
        {
          image: 'media/act_8/win11.jpg',
          title: 'Contraseña',
          description: 'Ingresar la contraseña de administrador'
        },
        {
          image: 'media/act_8/win12.jpg',
          title: 'Esperar',
          description: 'Esperar a que cargue el escritorio.'
        },
        {
          image: 'media/act_8/win13.png',
          title: 'Server Manager',
          description: 'Automáticamente se abrira el Server Manager, desde donde se puede monitorear y configurar el servidor.'
        },
      ]
    },
    activeDirectory: {
      title: 'Active Directory',
      data: [
        {
          title: '¿Qué es?',
          description: 'Active Directory (AD) o Directorio Activo son los términos que utiliza Microsoft para referirse a su implementación de servicio de directorio en una red distribuida de computadores. Utiliza distintos protocolos, principalmente LDAP, DNS, DHCP y Kerberos.',
        },
        {
          title: '¿Para qué sirve?',
          description: 'Active Directory permite a los administradores establecer políticas a nivel de empresa, desplegar programas en muchos ordenadores y aplicar actualizaciones críticas a una organización entera. Un Active Directory almacena información de una organización en una base de datos central, organizada y accesible. Pueden encontrarse desde directorios con cientos de objetos para una red pequeña hasta directorios con millones de objetos.',
        },
        {
          title: '¿Cómo funciona?',
          description: 'Su funcionamiento es similar a otras estructuras de LDAP (Lightweight Directory Access Protocol), ya que este protocolo viene implementado de forma similar a una base de datos, la cual almacena en forma centralizada toda la información relativa a un dominio de autenticación. Una de sus ventajas es la sincronización presente entre los distintos servidores de autenticación de todo el dominio.',
        },
        {
          title: 'Características',
          description: '- Intercambio entre dominios: confianzas transitivas, confianza de acceso directo, confianza entre bosques.<br><br>- Permite manejar todos los elementos de la red.<br><br> - Está compuesto por DNS, LDAP.<br><br>- Maneja una jerarquía de recursos, servicios y usuarios.',
        },
      ],
    },
  }
};

$(() => load(data));