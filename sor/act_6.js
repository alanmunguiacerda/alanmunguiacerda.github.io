const data = {
  title: 'Actividad 6',
  description: 'Aplicación en Ruby on Rails.',
  carousels: {
    linux: {
      title: 'RoR en Linux',
      description: 'Crearemos una aplicación básica en RoR desde Linux.',
      data: [
        {
          image: 'media/act_6/linux1.png',
          title: 'Instalar RoR',
          description: 'Haciendo uso de gem, instalar RoR'
        },
        {
          image: 'media/act_6/linux2.png',
          title: 'Versión de Rails',
          description: 'Estamos trabajando con la versión 5.2.1 de RoR.'
        },
        {
          image: 'media/act_6/linux3.png',
          title: 'Iniciar proyecto',
          description: 'Iniciar un proyecto de RoR ejecutando "rails new $nombreProyecto". Donde $nombreProyecto es el nombre de tu proyecto.'
        },
        {
          image: 'media/act_6/linux4.png',
          title: 'Crear un controlador',
          description: 'RoR es manejado por "controladores" donde cada controlador, normalmente, representa un recurso de nuestro sistema. Iniciamos una nueva controlador ejecutando "bin/rails generate controller $nombreCtrl index". Donde $nombreCtrl es el nombre del controlador, en este caso es "Welcome"'
        },
        {
          image: 'media/act_6/linux5.png',
          title: 'Rutas de aplicación',
          description: 'Las rutas existentes en nuestra aplicación están definidas en el archivo "/config/routes.rb". Cada entrada es una ruta, en este caso sólo necesitamos configurar el "root" de la página.'
        },
        {
          image: 'media/act_6/linux6.png',
          title: 'Controlador de landing',
          description: 'El archivo "/app/controllers/welcome_controller.rb" es el controlador que acabamos de crear, ya viene definida una función "index".'
        },
        {
          image: 'media/act_6/linux7.png',
          title: 'Vista de landing',
          description: 'En el archivo "/app/views/welcome/index.html.erb" está definida la vista de nuestro controlador, ligada a la función index. Simplemente hacemos un "Hola Mundo".'
        },
        {
          image: 'media/act_6/linux8.png',
          title: 'Iniciar servidor',
          description: 'Una vez que guardamos todos los archivos modificados, ejecutamos el servidor.'
        },
        {
          image: 'media/act_6/linux9.png',
          title: 'Entrar al sitio',
          description: 'Entramos a "127.0.0.1:3000" como lo indica la terminal. En esta ruta no podremos el landing de nuestra aplicación.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_6/code.zip',
          linkText: 'Descargar código',
        },
      ]
    },
    win: {
      title: 'RoR en Windows',
      description: 'Descargar instalador de RoR + Ruby en windows',
      data: [
        {
          image: 'media/act_6/win1.png',
          title: 'Instalar RoR',
          description: 'Desde railsinstaller.org, descargar el instalador.'
        },
        {
          image: 'media/act_6/win2.png',
          title: 'Ejecutar instalador',
          description: 'Ejecutar el instalador y seguir los pasos y defaults.'
        },
        {
          image: 'media/act_6/win3.png',
          title: 'Terminar instalación',
          description: 'Una vez terminada la instalación, dar click en "Finish".'
        },
        {
          image: 'media/act_6/win4.png',
          title: 'Versión de Rails',
          description: 'Verificar la versión de Rails.'
        },
        {
          image: 'media/act_6/win5.png',
          title: 'Iniciar aplicación',
          description: 'Crear una aplicación de Rails.'
        },
        {
          image: 'media/act_6/win6.png',
          title: 'Generar un controlador',
          description: 'Generar un controlador.'
        },
        {
          image: 'media/act_6/win7.png',
          title: 'Actualizar landing',
          description: 'Actualizar landing para que contenga un mensaje.'
        },
        {
          image: 'media/act_6/win8.png',
          title: 'Actualizar rutas'
        },
        {
          image: 'media/act_6/win9.png',
          title: 'Ejecutar servidor y dar permisos',
          description: 'Ejecutar el servidor y dar permisos cuando se pidan.'
        },
        {
          image: 'media/act_6/win10.png',
          title: 'Entrar al sitio',
          description: 'Entrar a la dirección que aparece en consola.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_6/code_win.zip',
          linkText: 'Descargar código',
        },
      ]
    }
  }
};

$(() => load(data));