---
title: 'Introduccion a Hugo'
date: 2023-01-10
readTime: 'X minutos de lectura'
technology: 'hugo'
draft: true
---

Hugo es un framework multi-proposito de codigo abierto creado en 2015 por Steve Francia usado para generar paginas estaticas, está escrito en go lo que lo hace bastante rapido. Algo muy util de Hugo es la posibilidad que nos ofrece de crear paginas mediante el lenguaje de marcado **markdown**

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

* **archetypes** : En esta carpeta almacenaremos los archivos de plantilla predeterminados para diferentes tipos de contenido. Esto puede ser algo costoso de entender, **¡Pongamos un ejemplo de esto!**
  
Imagina que queremos para nuestra seccion **blog** una plantilla para cada articulo nuevo que creemos, algo que podriamos poner dentro de nuesta plantilla podria ser los meta-datos para no tener que estar escribiendo siempre los mismos metadatos que usaremos en nuestro articulo. 

*¿Que son los metadatos?* los meta-datos es toda la informacion adicional que tiene nuestro articulo, dentro de estos está por ejemplo: el titulo, la fecha en la que se creó el articulo, si nuestra nueva pagina es un borrador entre otros.

Entonces como hemos mencionado antes creariamos un arquetipo con el nombre de **blog.md** y dentro de este introduciriamos el siguiente contenido.


```markdown
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---
```

> Todo el contenido que esta dentro de **- - -** forma
> parte de los metadatos de nuestro articulo

Ya tenemos nuestro arquetipo listo, ahora cuando querramos crear un nuevo articulo del blog usando este arquetipo usariamos el siguiente commando.

```powershell
hugo new blog/mi-nuevo-post.md -- archetype=blog
```

Este nos generaria un archivo dentro de la carpeta **blog** llamado **mi-nuevo-post.md** tal que así.

```markdown
---
title: "Mi Nuevo Post"
date: 2023-01-22T13:58:08+01:00
draft: true
---
```

* **assets** : En esta carpeta almacenaremos todo el contenido estatico de nuestro sitio web, hasta aqui su uso es bastante similar al de la carpeta **static**, la diferencia que hay entre estas dos carpetas es la siguiente.

Cuando tu introduces archivos dentro de la carpeta **static** Hugo los copia y los coloca dentro de la carpeta **public** tal y como son, pero los archivos introducidos en la carpeta **assets** son procesados por Hugo antes de ser servidos a diferencia de lo que ocurria dentro de la carpeta **static**, esto puede ser de gran utilidad para optimizar nuestros archivos introducidos a dicha carpeta.

* **content** : En esta carpeta almacenaremos todo el contenido de nuestra web, es importante saber que cada carpeta que este en el nivel superior **Hugo** la considerara una sección de contenido. Por ejemplo si tenemos una web en la que queremos tres secciones principales **blog**, **articulos** y **tutoriales**, tendremos tres directorios en: **content/blog**, **content/articulos** y **content/tutoriales**

* **data** : Esta carpeta es usada para almacenar todos los archivos de configuración que pueden ser usados por Hugo.

* **layouts** : En esta carpeta almacenaremos toda la estructura y diseño de nuestro sitio web, dentro de esta carpeta tenemos subcarpetas que las explicaremos más adelante.

* **public** : En esta carpeta Hugo almacenara todos los archivos generados que representan el sitio web final, esta carpeta es la que se usara para nuestro sitio cuando lo despleguemos.

* **static** : En esta carpeta almacenaremos todo el contenido estatico de nuestra web que será servido directamente al navegador del y usario, estos son servidos tal y como son, es por ello estos no son procesados por Hugo.

* **themes** : En esta carpeta almacenaremos nuestros temas o diseños que utilizaremos para hacer nuestra web, estos pueden ser encontrados en la pagina de [temas de Hugo](https://themes.gohugo.io/)

* **config** : Este es el archivo de configuracion de **Hugo**, la extension de este puede ser: **yaml**, **toml** y **json**, aqui almacenaremos todas las configuraciones necesarias para nuestra web.

### Creemos nuestra primera pagina