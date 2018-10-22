const data = {
  title: 'Actividad 10',
  description: 'Crearemos dos aplicaciones similares en Django y RoR, haciendo uso de bases de datos.',
  carousels: {
    ror: {
      title: 'Aplicación en RoR',
      description: 'Se creará una aplicación que use una base de datos (SQLite) en RoR.',
      data: [
        {
          image: 'media/act_10/ror1.png',
          title: 'Descargar Ruby',
          description: 'Descargar el instalador de Ruby (https://rubyinstaller.org/downloads) y ejecutarlo.'
        },
        {
          image: 'media/act_10/ror2.png',
          title: 'Instalación',
          description: 'Aceptar licencia y click en "Next".'
        },
        {
          image: 'media/act_10/ror3.png',
          title: 'Instalación',
          description: 'Marcar las casillas de la forma que se indica y click en "Next".'
        },
        {
          image: 'media/act_10/ror4.png',
          title: 'Instalación',
          description: 'Marcar las casillas de la forma que se indica y click en "Next".'
        },
        {
          image: 'media/act_10/ror5.png',
          title: 'Instalación completada',
          description: 'Una vez que se complete la instalación, dar click en "Finish".'
        },
        {
          image: 'media/act_10/ror6.png',
          title: 'Instalación de MSYS2',
          description: 'Se abrirá una terminal con un pequeño menú, indicar que se quieren instalar todos los componentes. Esperar a que la instalación sea completada. La terminal se cerrará al completar la instalación.'
        },
        {
          image: 'media/act_10/ror9.png',
          title: 'Verificar instalación',
          description: 'Abrir una terminal y ejecutar "gem", deberá aparecer algo como esto.'
        },
        {
          image: 'media/act_10/ror14.png',
          title: 'Instalar SQLite',
          description: 'Descargar sqlite-dll-win64-x64 y sqlite-tools-win32-x86 de https://sqlite.org/download. Extraer el contenido de ambos comprimidos a un directorio, en este caso es C:/SQLite3.'
        },
        {
          image: 'media/act_10/ror15.png',
          title: 'Agregar SQLite al path del sistema',
          description: 'Ejecutar "setx /m path "%path%;C:\\SQLite3". Cerrar la terminal y abrir una nueva para que los cambios a PATH hagan efecto.'
        },
        {
          image: 'media/act_10/ror17.png',
          title: 'Verificar SQLite3',
          description: 'Ejecutar "sqlite3" en la terminal, deberíamos de entrar a la aplicación de SQLite.'
        },
        {
          image: 'media/act_10/ror18.png',
          title: 'Instalar Rails',
          description: 'Una vez que tenemos todos los requisitos para instalar RoR, podemos comenzar la instalación. Ejecutar "gem install rails".'
        },
        {
          image: 'media/act_10/ror21.png',
          title: 'Iniciar aplicación de RoR',
          description: 'Ejecutar "rails new example" para crear una aplicación de Ruby on Rails.'
        },
        {
          image: 'media/act_10/ror27.png',
          title: 'Iniciar servidor',
          description: 'Ejecutar "ruby bin/rails server" para ejecutar el servidor.'
        },
        {
          image: 'media/act_10/ror28.png',
          title: 'Vista principal',
          description: 'Entrar a la dirección que se indica, en este caso es 127.0.0.1:3000. Una pantalla como esta debería aparecer.'
        },
        {
          image: 'media/act_10/ror29.png',
          title: 'Añadir un recurso',
          description: 'Rails nos da la función "resources", que nos permite añadir las rutas CRUD para un recurso. En este caso, el recurso se llama "todos", que representarán una lista de "pendientes".'
        },
        {
          image: 'media/act_10/ror30.png',
          title: 'Crear controlador',
          description: 'En rails se trabaja sobre controladores. Para crear uno nuevo, ejecutar "ruby bin/rails generate controller Todos". Esto nos creará varios archivos, de los cuales utilizaremos el archivo "app/controllers/todos_controller.rb" y el directorio "app/views/todos".'
        },
        {
          image: 'media/act_10/ror31.png',
          title: 'Definir rutas',
          description: 'Dentro de "todos_controller.rb" definiremos las funciones que se mapearán a las rutas que nos generó la función "resources". Para comenzar definiremos la ruta "new" y la ruta "create". La primera mostrará el formulario para crear un "todo" y la segunda es donde la petición de creación será recibida.'
        },
        {
          image: 'media/act_10/ror32.png',
          title: 'Crear formulario',
          description: 'Añadir un archivo "app/views/todos/new.html.erb" y agregar los campos del formulario, como se muestra arriba..'
        },
        {
          image: 'media/act_10/ror33.png',
          title: 'Crear modelo',
          description: 'Para que nuestro modelo exista en la base de datos, ejecutar "ruby bin/rails generate model Todo title:string description:text". Esto generará un archivo de migración.'
        },
        {
          image: 'media/act_10/ror35.png',
          title: 'Aplicar migración',
          description: 'Ejecutar la migración con "ruby bin/rails db:migrate". Esto creará la tabla de Todos en nuestra base de datos.'
        },
        {
          image: 'media/act_10/ror36.png',
          title: 'Actualizar controlador',
          description: 'Actualizar controlador para añadir la función "show" y realizar la creación y persistencia de los "Todos" en la función "create".'
        },
        {
          image: 'media/act_10/ror37.png',
          title: 'Crear vista "Show"',
          description: 'La vista "Show" muestra el detalle de uno de nuestros Todos. Crear el archivo "app/views/todos/show.html.erb" y agregar los campos como se muestra arriba.'
        },
        {
          image: 'media/act_10/ror38.png',
          title: 'Crear un Todo',
          description: 'Ir a la ruta "/todos/new", donde se mostrará el formulario que definimos para esta ruta. Llenar los campos y dar click en "Save Todo".'
        },
        {
          image: 'media/act_10/ror39.png',
          title: 'Todo Creado',
          description: 'Seremos redirigidos a un par de rutas. La primera, que sucede discretamente es "POST /todos", que es nuestra función "create" en el controlador. Esa ruta al crear el Todo nos redirige a la vista "show" del Todo creado (GET /todos/{id}) que nos muestra los datos de nuestro Todo.'
        },
        {
          image: 'media/act_10/ror39.png',
          title: 'Información de queries',
          description: 'Cada una de las queries que se envíen a la base de datos queda logeada en la consola, ahí podemos comprobar que la conexión con la base de datos sea correcta.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_10/code.zip',
          linkText: 'Descargar código',
        }
      ]
    },
    django: {
      title: 'Aplicación en Django',
      description: 'Se creará una aplicación que use una base de datos (SQLite) en Django.',
      data: [
        {
          image: 'media/act_10/django1.png',
          title: 'Instalar python',
          description: 'Descargar el instalador de python (https://python.org/downloads/releases) y ejecutarlo.'
        },
        {
          image: 'media/act_10/django2.png',
          title: 'Instalación completada',
          description: 'Una vez instalado python, deberíamos de tener acceso a "pip" desde la terminal.'
        },
        {
          image: 'media/act_10/django3.png',
          title: 'Instalar Django',
          description: 'En una terminal, ejecutar "pip install django" para instalar Django.'
        },
        {
          image: 'media/act_10/django4.png',
          title: 'Iniciar aplicación en Django',
          description: 'Ejecutar "python -m django startproject example" para crear un proyecto llamado "example"'
        },
        {
          image: 'media/act_10/django5.1.png',
          title: 'Ejecutar servidor',
          description: 'Para asegurarnos que la creación del proyecto haya sido exitosa, ejecutar el servidor con "python ./manage.py runserver"'
        },
        {
          image: 'media/act_10/django5.5.png',
          title: 'Página principal',
          description: 'Entrar a la dirección que aparece en consola "127.0.0.1:8000", debe aparecer una pantalla como esta.'
        },
        {
          image: 'media/act_10/django6.png',
          title: 'Base de datos',
          description: 'Dentro de la carpeta "example" podemos encontrar un archivo llamado db.sqlite3, que es donde se guardarán los datos de nuestra aplicación.'
        },
        {
          image: 'media/act_10/django7.png',
          title: 'Crear aplicación "Todo"',
          description: 'En Django cada aplicación es un contenedor de elementos relacionados. En nuestro caso, la aplicación contendrá un modelo base para una lista de "cosas por hacer". Ejecutar "python manage.py startapp todo" para crear la aplicación.'
        },
        {
          image: 'media/act_10/django8.png',
          title: 'Inicializar base de datos',
          description: 'En este punto, nuestra base de datos está vacía, para crear los modelos básicos de Django (usuarios y grupos), ejecutar "python manage.py migrate". Este comando se encargará de crear la primer migración en nuestra base de datos, para así crear los modelos mencionados.'
        },
        {
          image: 'media/act_10/django9.png',
          title: 'Modelo "Todo"',
          description: 'Crearemos el modelo de nuestra aplicación de esta manera (todo/models.py). Cuenta únicamente con dos campos: un título y una descripción. Estos datos representaran un registro de nuestra lista de pendientes.'
        },
        {
          image: 'media/act_10/django10.png',
          title: 'Configurar aplicaciones',
          description: 'Django funciona en base a aplicaciones, de esta forma se puede modularizar un proyecto fácilmente. Añadiremos nuestra aplicación "Todo" a la lista de aplicaciónes (example/settings.py).'
        },
        {
          image: 'media/act_10/django11.png',
          title: 'Crear migraciones',
          description: 'Ya tenemos nuestro modelo creado, pero eso no significa que ya exista en la base de datos. Para lograr esto, ejecutar "python manage.py makemigrations todo". De esta forma creamos una migración para nuestro modelo "Todo".'
        },
        {
          image: 'media/act_10/django12.png',
          title: 'Aplicar migración',
          description: 'Ahora que hemos creado las migraciones correspondientes, podemos aplicar la migración a nuestra base de datos. Ejecutar "python manage.py migrate". Esto creará la tabla de "Todos" en nuestra base de datos.'
        },
        {
          image: 'media/act_10/django13.png',
          title: 'Crear super usuario',
          description: 'Para poder administrar nuestra base de datos, podemos crear un super usuario. Ejecutar "python manage.py createsuperuser". Llenar el formulario que nos aparece.'
        },
        {
          image: 'media/act_10/django14.png',
          title: 'Vista de Administrador',
          description: 'Una vez que tenemos nuestro super usuario, ejecutar el servidor "python manage.py runserver" y entrar a "127.0.0.1:8000/admin". Llenar el login con los datos de nuestro super usuario y dar click a "Log in".'
        },
        {
          image: 'media/act_10/django15.png',
          title: 'Panel de administración',
          description: 'En esta vista podemos acceder a toda nuestra base de datos. Como podemos ver, tenemos dos tablas "Users" y "Groups". Pero nuestra tabla de "Todos" no está por ningún lado.'
        },
        {
          image: 'media/act_10/django16.png',
          title: 'Agregar "Todo" a Panel de Administración',
          description: 'Cada modelo dentro de nuestras aplicaciones puede o no estar expuesto al panel de administración. Para exponer nuestro modelo, tenemos que añadirlo en (todo/admin.py). Añadir la configuración para que quede como aquí se indica.'
        },
        {
          image: 'media/act_10/django17.png',
          title: 'Actualizar página',
          description: 'Una vez que guardemos los cambios y actualicemos el navegador, tendremos una nueva tabla a la vista, que es la de nuestro modelo.'
        },
        {
          image: 'media/act_10/django18.png',
          title: 'Crear instancia',
          description: 'Dando click a "Add +" podemos crear un nuevo modelo, llenamos el formulario y damos click a "Save".'
        },
        {
          image: 'media/act_10/django19.png',
          title: 'Lista de instancias',
          description: 'Al guardar seremos redirigidos a una lista con todas las instancias de nuestro modelo, incluída la que acabamos de crear.'
        },
        {
          image: 'media/act_10/django20.png',
          title: 'Editar instancia',
          description: 'Podemos editar nuestra instancia dando click sobre ella y modificando el formulario que nos aparecerá.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_10/code.zip',
          linkText: 'Descargar código',
        }
      ]
    },
    permissions: {
      title: 'Permisos de acceso',
      description: 'Se asignarán permisos de acceso para grupos a las aplicaciones de RoR y Django.',
      data: [
        {
          image: 'media/act_10/perms1.png',
          title: 'Usuarios y Grupos de Usuarios',
          description: 'Agregar 4 usuarios y 4 grupos de usuarios.'
        },
        {
          image: 'media/act_10/perms2.png',
          title: 'Usuarios y Grupos de Usuarios',
          description: 'Agregar un usuario a cada uno de los grupos.'
        },
        {
          image: 'media/act_10/perms3.png',
          title: 'Permisos del proyecto en Django',
          description: 'En la carpeta del proyecto en Django, click secundario -> Properties -> Security. Click a editar permisos y añadir dos de los grupos de usuarios.'
        },
        {
          image: 'media/act_10/perms4.png',
          title: 'Permisos del proyecto en Django',
          description: 'A uno de los grupos añadido, dar permisos de modificación.'
        },
        {
          image: 'media/act_10/perms5.png',
          title: 'Permisos del proyecto en Django',
          description: 'Al otro grupo añadido, dar sólo permisos de lectura.'
        },
        {
          image: 'media/act_10/perms6.png',
          title: 'Permisos del proyecto en RoR',
          description: 'Repetir los pasos para los dos grupos restantes, pero esta vez sobre la carpeta con el proyecto en RoR.'
        },
        {
          image: 'media/act_10/perms9.png',
          title: 'Cerrar sesión',
          description: 'Cerrar la sesión del administrador.'
        },
        {
          image: 'media/act_10/perms10.png',
          title: 'Usuario 1',
          description: 'Hacer login con el usuario que tiene permiso de lectura y escritura a Django. Como se puede observar, no podemos acceder a la carpeta del proyecto en RoR, ya que no pertenecemos a ningún grupo con permisos en esa carpeta.'
        },
        {
          image: 'media/act_10/perms11.png',
          title: 'Usuario 1',
          description: 'Pero sí podemos acceder a la carpeta de Django, ya que sí pertenecemos a un grupo con permisos en esa carpeta.'
        },
        {
          image: 'media/act_10/perms12.png',
          title: 'Usuario 1',
          description: 'Podemos crear nuevas carpetas y archivos.'
        },
        {
          image: 'media/act_10/perms13.png',
          title: 'Usuario 1',
          description: 'También podemos leer y modificar los archivos ya existentes.'
        },
        {
          image: 'media/act_10/perms14.png',
          title: 'Usuario 2',
          description: 'Hacer log in como el segundo usuario. De la misma forma que el primero, no podemos acceder a la carpeta del proyecto en RoR.'
        },
        {
          image: 'media/act_10/perms15.png',
          title: 'Usuario 2',
          description: 'A diferencia del primer usuario, con este no podemos realizar modificaciones al proyecto en Django, sólo leer los archivos que contiene.'
        },
        {
          image: 'media/act_10/perms16.png',
          title: 'Usuario 3',
          description: 'El tercer usuario es análogo al primero, pero con acceso de lectura/escritura al proyecto de RoR, en lugar del de Django.'
        },
        {
          image: 'media/act_10/perms17.png',
          title: 'Usuario 3',
          description: 'A pesar de que tenemos acceso de lectura y escritura, no podemos dar permisos de acceso a la carpeta, ni tampoco revocarlos.'
        },
      ]
    },
  }
};

$(() => load(data));