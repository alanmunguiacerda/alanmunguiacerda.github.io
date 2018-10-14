const data = {
  title: 'Actividad 9',
  description: 'Usuarios y Grupos',
  carousels: {
    win: {
      title: 'Usuarios y Grupos en Windows Server',
      description: 'Se añadirán Usuarios y Grupos en Windows Server.',
      data: [
        {
          image: 'media/act_9/win1.png',
          title: 'Control Panel',
          description: 'Abrir el Panel de Control y buscar "Administrative Tools".'
        },
        {
          image: 'media/act_9/win2.png',
          title: 'Administrative Tools',
          description: 'Abrir Administrative Tools y buscar "Computer Management".'
        },
        {
          image: 'media/act_9/win3.png',
          title: 'Crear un Grupo.',
          description: 'Ir a "Local Users and Groups" y dar click derecho sobre "Groups", seguido de "New Group". Ingresar un nombre para el nuevo grupo y guardar.'
        },
        {
          image: 'media/act_9/win4.png',
          title: 'Grupos',
          description: 'Repetir el paso anterior para cada grupo que se desee tener. Dar doble click a "Groups", ahí se mostrarán los grupos que fueron creados, además de los ya existentes.'
        },
        {
          image: 'media/act_9/win5.png',
          title: 'Crear un Usuario.',
          description: 'Volver a "Local Users and Groups" y dar click derecho sobre "Users", seguido de "New User".'
        },
        {
          image: 'media/act_9/win6.png',
          title: 'Crear un usuario.',
          description: 'Llenar el formulario que se muestra y guardar el usuario.'
        },
        {
          image: 'media/act_9/win7.png',
          title: 'Usuarios',
          description: 'Repetir el paso anterior para cada usuario que se desee tener. Dar doble click a "Users", ahí se mostrarán los usuarios que fueron creados, además de los ya existentes.'
        },
        {
          image: 'media/act_9/win8.png',
          title: 'Añadir un Usuario a un Grupo',
          description: 'Volver a la carpeta "Groups" y dar doble click al grupo donde se quieren agregar usuarios. Se abrirá un menú y dar click a "Add"'
        },
        {
          image: 'media/act_9/win9.png',
          title: 'Añadir un Usuario a un Grupo',
          description: 'Agregar los nombres de los usuarios que se quieren agregar al grupo uno por uno, y dando click a "Check Name" cada que se agrega uno nuevo.'
        },
        {
          image: 'media/act_9/win10.png',
          title: 'Guardar',
          description: 'Ya que se agregaron los usuarios deseados, guardar todo.'
        },
      ]
    },
  }
};

$(() => load(data));