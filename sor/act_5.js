const data = {
  title: 'Actividad 5',
  description: 'Aplicación en Django.',
  carousels: {
    linux: {
      title: 'Django en Linux',
      description: 'Crearemos una aplicación básica en Django desde Linux.',
      data: [
        {
          image: 'media/act_5/linux1.png',
          title: 'Instalar Django',
          description: 'Haciendo uso de pip, instalar Django'
        },
        {
          image: 'media/act_5/linux2.png',
          title: 'Directorio de trabajo',
          description: 'Moverse a un directorio sobre el cual se trabajará.'
        },
        {
          image: 'media/act_5/linux3.png',
          title: 'Iniciar proyecto',
          description: 'Iniciar un proyecto de django ejecutando "python django-admin startproject $nombreProyecto". Donde $nombreProyecto es el nombre de tu proyecto.'
        },
        {
          image: 'media/act_5/linux4.png',
          title: 'Crear una aplicación',
          description: 'Django es manejado por "aplicaciones" donde cada aplicación, normalmente, representa un recurso de nuestro sistema. Iniciamos una nueva aplicación ejecutando "python manage.py startapp $nombreApp". Donde $nombreApp es el nombre de la aplicación, en este caso es "example"'
        },
        {
          image: 'media/act_5/linux5.png',
          title: 'Rutas de aplicación',
          description: 'Las rutas existentes en nuestra aplicación están definidas en el archivo "/$nombreApp/urls.py". Cada entrada de urlpatterns es una ruta, en este caso sólo necesitamos el index. Se tiene que configurar de esta forma para que en esa ruta, nos muestre lo que hayamos definido en "views.index"'
        },
        {
          image: 'media/act_5/linux6.png',
          title: 'Vista index',
          description: 'En el archivo "/$nombreApp/views.py" se definen las rutas, simplemente definimos una función "index" que recibe como parámetro un "request". Queremos que esta ruta regrese el texto "Hello world".'
        },
        {
          image: 'media/act_5/linux7.png',
          title: 'Rutas de proyecto',
          description: 'En el archivo "/$nombreProyecto/urls.py" están definidas las rutas del proyecto. Aquí queremos agregar la ruta raíz de las rutas de nuestra aplicación. La añadimos de esta forma.'
        },
        {
          image: 'media/act_5/linux8.png',
          title: 'Iniciar servidor',
          description: 'Una vez que guardamos todos los archivos modificados, ejecutamos el servidor.'
        },
        {
          image: 'media/act_5/linux9.png',
          title: 'Entrar al sitio',
          description: 'Entramos a "127.0.0.1:8000" como lo indica la terminal. En esta ruta no podremos ver nada, ya que no configuramos vista para esta ruta, tenemos que ir a "127.0.0.1:8000/example" para poder ver la vista de nuestra aplicación.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_5/code.zip',
          linkText: 'Descargar código',
        },
      ]
    },
    win: {
      title: 'Django en Windows',
      description: 'Ejecutaremos la aplicación creada en Linux desde Windows',
      data: [
        {
          image: 'media/act_5/win1.png',
          title: 'Instalar Django',
          description: 'Haciendo uso de pip, instalar Django'
        },
        {
          image: 'media/act_5/win2.png',
          title: 'Iniciar servidor',
          description: 'Una vez que copiamos todos los archivos del proyecto que teníamos en Linux, ejecutamos el servidor.'
        },
        {
          image: 'media/act_5/win3.png',
          title: 'Entrar al sitio',
          description: 'Entramos a "127.0.0.1:8000" como lo indica la terminal. En esta ruta no podremos ver nada, ya que no configuramos vista para esta ruta, tenemos que ir a "127.0.0.1:8000/example" para poder ver la vista de nuestra aplicación.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_5/code.zip',
          linkText: 'Descargar código',
        },
      ]
    }
  }
};

$(() => load(data));