---
title: 'Introduccion a Hugo'
date: 2023-01-10
readTime: 'X minutos de lectura'
technology: 'hugo'
draft: true
---

Hugo es un framework multi-proposito de codigo abierto creado en 2015 por Steve Francia usado para generar paginas estaticas, está escrito en go lo que lo hace bastante rapido.

> ¡Este blog esta constrido con Hugo!

## ¿Que es lo que hace Hugo?

Hugo Toma contenido escrito en diversos formatos (como Markdown o HTML) y lo convierte en un sitio web completo. Hugo también proporciona funcionalidades avanzadas como plantillas, control de versiones, y soporte para multilingüe. [Pagina principal de Hugo](https://gohugo.io/)

Todo esto esta bien pero **¡Creemos un mini proyecto!** para ver como usar Hugo.

## Instalación

Para empezar nuestro proyecto debemos tener Hugo instalado en nuestro ordenador, actualmente podemos instalar Hugo en Windows, MacOs, Linux y derivados de BSD. [¿Como installar Hugo?](https://gohugo.io/installation/)

En este tutorial enseñaremos como installar Hugo en windows.

### Primer paso

El primer paso para instalar Hugo en nuestro ordenador será dirigirnos a la [pagina de instalacion de Hugo en windows](https://gohugo.io/installation/windows/)

En ella podremos ver que existen varias formas de instalar Hugo en nuestro ordenador pero en este caso el metodo de instalación elegido es con un [binario pre-construido](https://gohugo.io/installation/windows/#prebuilt-binaries) y haremos click en el enlace de instalacion que nos dirigira a su [repositorio de github](https://github.com/gohugoio/hugo/releases) donde instalaremos la ultima version de Hugo.

En este paso te vas a encontrar un monton de archivos disponibles que hay disponibles para descargar, pero **no te preocupes**, nosotros solo necesitaremos uno que tenga un nombre parecido a **hugo_< vesión >_windows-amd64.zip**, haremos click en este y nuestra descarga comenzará

### Segundo paso

Después de habernos instalado el archivo **.zip** lo extraeremos en nuesto escritorio y esto nos dará una carpeta con **tres** archivos: un ejecutable, un archivo de la licencia y un readme.

Teniendo todo extraido lo que haremos ahora seá copiar esos tres archivos y dirigirnos a nuestro disco local **C:\\** dentro de este crearemos una carpeta llamada **hugo** y dentro de esta crearemos otra carpeta llamada **bin**.

Dentro de la carpeta **bin** pegaremos los tres archivos que copiamos anteriormente y **¡ya estamos listos para el tercer y ultimo paso!**

### Tercer paso

Ya estamos cerca de completar nuestra instalacion lo ultimo que nos queda es añadir Hugo al PATH para que nuestro ordenador sepa que tenemos Hugo instalado.

Pondremos en la barra de busqueda de windows **Editar las variables de entorno del sistema**, haremos click en el boton que pone **Variables de entorno...** y esto nos abrirá otra ventana con todas nuestras variables de entorno.

Aqui tenemos dos tipos de variables: las de usuario y las del sistema, lo que nosotros haremos será seleccionar **Path** dentro de las variables de **USUARIO** y teniendo seleccionado haremos click en editar, y de nuevo esto nos abrira otra ventana.

En esta nueva ventana haremos click en el boton de **Nuevo** y pegaremos la ruta donde se situa nuestro binario instalado, en este caso pegaroemos en nuestra ruta **C:\\hugo\\bin** y finalizaremos todo esto dandole click en **aceptar** en todas las ventanas que se hemos estado abriendo.

Teoricamente todo estaria instalado correctamente pero para asegurarnos que todo esta perfectamente instalado abriremos nuestra terminal y pondremos el siguiente comando.
```powershell
hugo version
```
Esto nos tendria que responder con un mensaje parecido al siguiente.
```powershell
hugo v0.110.0-e32a493b7826d02763c3b79623952e625402b168 windows/amd64 BuildDate=2023-01-17T12:16:09Z VendorInfo=gohugoio
```

Si nuestra terminal nos ha respondido con un mensaje parecido al anterior **felicidades** ya tienes Hugo instalado en tu ordenador y estas listo para continuar con este tutorial.

Pero si tienes algún fallo te recomiendo reiniciar tu ordenador por si no se añadió al PATH Hugo, si el error persiste volver a instalar Hugo y si te sigue sin funcionar puedes ir al [foro de Hugo](https://discourse.gohugo.io/) para comunicarles tu problema y buscar una solución a este.

## ¡Vamos a crear nuestro proyecto!

Teniendo Hugo instalado en nuestro ordenador lo que haremos ahora será abrir nuestra terminal y en ella dirigirnos a nuestro escritorio.

Una vez dentro de nuestro escritorio en la terminal escribiremos en nuestra terminal el siguiente comando.

```powershell
hugo new site < nombre de tu proyecto >
```
En este caso eligiremos el nombre de **intro-a-hugo** para nuestro proyecto.

Esto nos generará un proyecto con varias carpetas y un archivo, **¡Expliquemos que es todo esto!**

* **archetypes**
* **assets**
* **content**
* **data**
* **layouts**
* **public**
* **static**
* **themes**
* **config**