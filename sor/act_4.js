const data = {
  title: 'Actividad 4',
  description: 'Punto de venta.',
  carousels: {
    linux: {
      title: 'Java en Linux',
      description: 'Instalación de Java en Linux.',
      data: [
        {
          image: 'media/act_4/linux1.png',
          title: 'Entrar a la página de Java',
          link: 'http://www.oracle.com/technetwork/java/javase/downloads/index.html',
          linkText: 'Ir al sitio de descarga',
        },
        {
          image: 'media/act_4/linux1.png',
          title: 'Entrar a la página de Java',
          description: 'Una vez en el sitio, dar click a "Download" debajo de "JDK".',
        },
        {
          image: 'media/act_4/linux2.png',
          title: 'Descarjar JDK',
          description: 'Aceptar los términos y condiciones y descargar el archivo con terminación ".tar.gz". Esperar a que se complete la descarga.'
        },
        {
          image: 'media/act_4/linux3.png',
          title: 'Directorio de instalación',
          description: 'Crear un directorio donde se instalará el JDK.'
        },
        {
          image: 'media/act_4/linux4.png',
          title: 'Directorio de instalación',
          description: 'Moverse al directorio creado.'
        },
        {
          image: 'media/act_4/linux5.png',
          title: 'Archivo descargado',
          description: 'Mover el archivo descargado al directorio de instalación.'
        },
        {
          image: 'media/act_4/linux6.png',
          title: 'Instalar',
          description: 'Ejecutar el comando "tar zxvf {archivo}".'
        },
        {
          image: 'media/act_4/linux7.png',
          title: 'Instalación completada',
          description: 'Esperar a que se descomprima el archivo y la instalación estará completada.'
        },
        {
          image: 'media/act_4/linux8.png',
          title: 'Programa .jar',
          description: 'Moverse al directorio que contiene el programa PV.jar y ejecutarlo haciendo uso del ejecutable "/bin/java" en el directorio que instalamos el JDK.'
        },
        {
          image: 'media/act_4/pv1.png',
          title: 'Ejecución en Linux',
          description: 'Una vez que ejecutamos el .jar, el programa deberá abrirse.'
        },
      ]
    },
    win: {
      title: 'Java en Windows',
      description: 'Instalación de Java en Windows',
      data: [
        {
          image: 'media/act_4/win1.png',
          title: 'Entrar a la página de Java',
          link: 'http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html',
          linkText: 'Ir al sitio de descarga',
        },
        {
          image: 'media/act_4/win2.png',
          title: 'Descarjar JDK',
          description: 'Aceptar los términos y condiciones y descargar el archivo con terminación ".exe". Click en "Save" cuando se pregunta la acción a tomar.'
        },
        {
          image: 'media/act_4/win3.png',
          title: 'Descargando',
          description: 'Esperar a que se complete la descarga.'
        },
        {
          image: 'media/act_4/win4.png',
          title: 'Ejecutar instalador',
          description: 'Una vez descargado, ejecutar el instalador y permitir que haga cambios en el equipo.'
        },
        {
          image: 'media/act_4/win5.png',
          title: 'Instalar',
          description: 'Seguir el proceso de instalación.'
        },
        {
          image: 'media/act_4/win6.png',
          title: 'Next',
          description: 'Click en "Next".'
        },
        {
          image: 'media/act_4/win7.png',
          title: 'Esperar',
          description: 'Esperar a que se termine la instalación.'
        },
        {
          image: 'media/act_4/win8.png',
          title: 'Next',
          description: 'Click en "Next".'
        },
        {
          image: 'media/act_4/win9.png',
          title: 'Instalación terminada',
          description: 'Una vez terminada la instalación, click en "Close".'
        },
        {
          image: 'media/act_4/win10.png',
          title: 'Ejecución en Windows',
          description: 'Ir al directorio que contiene nuestro programa .jar y ejecutarlo, el programa deberá abrirse.'
        },
      ]
    },
    pv: {
      title: 'Punto de Venta',
      description: 'Funcionalidades del Punto de Venta con persistenca en archivos.',
      data: [
        {
          image: 'media/act_4/pv1.png',
          title: 'Inventario',
          description: 'En esta pestaña se puede ver el inventario, donde cada fila es un producto con nombre y precio. Los controles de abajo nos permiten cambiar la cantidad de productos que se van a vender, realizar la venta, añadir y eliminar productos. Además, nos muestra el total de la venta que estamos a punto de realizar.'
        },
        {
          image: 'media/act_4/pv2.png',
          title: 'Añadir producto',
          description: 'Para añadir un producto se da click en el botón "Add", lo cual añade una fila a la tabla del inventario. Este será un nuevo registro de producto.'
        },
        {
          image: 'media/act_4/pv3.png',
          title: 'Eliminar producto',
          description: 'Para eliminar un producto, seleccionamos la fila que contiene el producto a eliminar y damos click en "Delete".'
        },
        {
          image: 'media/act_4/pv4.png',
          title: 'Modificar producto',
          description: 'Para modificar un producto, basta con dar doble click sobre su nombre o precio, de esta forma podemos editar el campo.'
        },
        {
          image: 'media/act_4/pv3.png',
          title: 'Vender producto',
          description: 'Para vender un producto, seleccionamos la fila del producto, indicamos la cantidad que será vendida, y damos click en "Sell".'
        },
        {
          image: 'media/act_4/pv5.png',
          title: 'Productos vendidos',
          description: 'La pestaña "Sold" nos muestra un historial de todas las ventas, indicando el total de ventas en la parte inferior.'
        },
        {
          icon: 'media/download.png',
          link: 'media/act_4/code.zip',
          linkText: 'Descargar código y ejecutable',
        },
      ]
    },
  }
};

$(() => load(data));