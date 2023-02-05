---
title: '¿Que es docker?'
date: 2023-02-05
readTime: '20 minutos de lectura'
technology: 'docker'
draft: true
---

Docker es una herramienta de codigo abierto creada en 2013 por **Solomon Hykes**, que nos permite empaquetar y deplegar aplicaciones de manera segura y eficiente. Con Docker, podemos garantizar que nuestras aplicaciones funcionarán de manera consistente en cualquier entorno. 

Docker es una tecnología que está ganando cada vez más terreno en la industria tecnológica. Con su capacidad de crear y gestionar contenedores de aplicaciones, esta herramienta ofrece una solución eficiente y flexible para desplegar y ejecutar aplicaciones. Debido a su creciente importancia, es fundamental tener al menos un conocimiento básico de los conceptos clave de Docker. 

Es por ello esencial tener una comprensión básica de los siguientes conceptos de Docker:

* **[Contenedores](#qué-es-un-contenedor)**

* **Imagenes**

* **Volumenes**

* **Dockerizar aplicaciones**

* **Redes de Docker**

* **Dockerfile**

* **Docker Compose**

* **Docker Hub**

En este articulo explicaremos cada uno de estos conceptos, además de como docker logra ser tan eficiente y seguro a la hora de ejecutar nuestras aplicaciones.

Pero antes de ello hagamos una pequeña introduccion acerca de como podemos usar Docker en nuestra maquina.

## **¿Como usar Docker?**

Para poder usar Docker debemos de instalar en nuestro sistema la herramienta **Docker Dessktop**, esta podemos encontrarla dentro de la [pagina oficial de Docker](https://www.docker.com/)

> Es importante saber que para poder hacer uso de Docker en Windows deberemos de instalar el WSL 2 ( Windows Subsystem for Linux ), por lo que tendremos que dirigirnos a la [guia oficial de instalación de WSL](https://learn.microsoft.com/en-us/windows/wsl/install) e instalarlo.

### **¿Qué es Docker Desktop?**

Docker Desktop es una plataforma la cual posee las herramientas necesarias para ejecutar nuestros contenedores.

Dentro de esas herramientas tenemos:

* **Docker Engine**: es el motor de Docker que permite ejecutar contenedores y proporciona una interfaz de línea de comandos para interactuar con él.
* **Docker CLI**: es una interfaz de line de comandos de Docker para interactuar con el Docker Engine y realizar tareas como ejecutar contenedores, crear imágenes, administrar redes, etc
* **Docker Compose**: es una herramienta que nos permite definir y ejecutar aplicaciones compuestas de múltiples contenedores.
* **Docker Machine**: es una herramienta que permite crear y administrar máquinas virtuales que ejecutan Docker Engine.

## **¿Como Docker logra ser tan eficiente?**

Docker usa un sistema de contenedores para ejecutar nuestras aplicaciones de manera eficiente y segura, lo que permite una mayor portabilidad y eficiencia en el desarrollo y la gestión de aplicaciones.

Dicha portabilidad nos asegura que nuestra aplicación funcionará dentro de cualquier maquina y nos soluciona posibles futuros problemas al llevar nuestra aplicación de una maquina a otra.

Además, al hacer uso de contenedores en lugar de máquinas virtuales completas mejora bastante el rendimiento de este y hace que sea mas ligero que una máquina virtual.

## **¿Qué es un contenedor?**

Los contenedores son entornos aislados los cuales poseen todas las configuraciones y dependencias necesartias paara ejecutar nuestras imagenes de manera eficiente.

Podrias pensar que estos son maquinas virtuales ya que funcionan de forma similar a estas, por eso es importante saber que estos **NO** son maquinas virtuales y conocer el motivo por el cual los contenedores y las maquinas virtuales tienen conceptos similares pero no son lo mismo.

### ¿Por qué los contenedores no son maquinas virtuales?

Veamos una imagen para explicar mejor como funciona una maquina virtual y un contenedor dentro de nuestro sistema.

[![Diagrama del funcionamiento de una maquina virtual frente al de un contenedor](/images/postsImages/dockerDiagram.png)](/images/postsImages/dockerDiagram.png)

> **Este diagrama ha sido obtenido de la pagina  [infoworld.com](https://www.infoworld.com/article/3204171/what-is-docker-the-spark-for-the-container-revolution.html) y la autoria de este le pertenece a dicha pagina.**

A la izquierda se encuentra como funciona una maquina virtual y la derecha tenemos el funcionamiento de un contenedor.

Dentro de este diagrama se pueden observar diferencias entre la maquina virtual y el contenedor, una de ellas es que todos los contenedores se ejecutan dentro del **Docker Engine** en lugar de tener instalado un sistema operativo completo para cada sistema como tenemos con las maquinas virtuales, esto ayuda bastante a mejorar el rendimiento de nuestras aplicaciones dentro de Docker y de optimizar el espacio en disco que estas ocupan.

Esto nos ofrece mayor portabilidad, un tiempo de inicio más rápido y un uso más eficiente de los recursos, lo que es fundamental para el despliegue y optimización de nuestra aplicación, y también ayuda a reducir los costos asociados con los servidores.

## **¿Qué es una imagen?**

Una imagen de Docker es un archivo que contiene todos los elementos necesarios para ejecutar una aplicación en un contenedor, incluyendo el codigo fuente, archivos de configuración, bibliotecas y recursos necesarios.

Una vez creada nuestra imagen podemos usar esta dentro de uno o varios contenedores ejecutandose a partir de esta.

## **¿Qué es un volumen?**

Un volumen de Docker es una forma de persistir datos generados por un contenedorr, que a diferencia de los datos almacenados dentro del contenedor que serán eliminados una vez el contenedor se elimine o se detenga, estos persisten aun cuando el contenedor sea eliminado.

Estos se pueden compartir y reutilizar entre diferentes contenedores y permiten mantener la separación de los datos de la configuración de la aplicación. Esto permite una mayor flexibilidad y facilidad de gestión de los datos en entornos de Docker.

Por ejemplo, imagina que tenemos una base de datos de pruebas dentro de un contenedor de Docker y al eliminar o reiniciar nuestro contenedor perdemos todos los datos y tenemos que volver a insertarlos, esto nos haria perder mucho el tiempo insertando de nuevo los datos ¿cierto?, pues esto se solucionaria usando un volumen, ya que este nos guardaria toda nuestra base de datos y al levantar de nuevo el contenedor, todos los datos estarian disponibles de nuevo.

## **¿Qué es dockerizar una aplicación?**

Dockerizar una aplicación consiste en empaquetarla en un contenedor de Docker para facilitar su distribución y ejecución en cualquier entorno. Esto permite tener una mayor portabilidad, flexibilidad y aislamiento de la aplicación de su entorno de ejecución.

## **¿Que son las redes de Docker?**

Las redes de Docker son una forma de permitir la comunicación entre contenedores y permitir el acceso a internet. Las redes de Docker pueden ser administradas por Docker Engine y pueden ser configuradas para ser privadas o públicas, permitiendo el acceso solo a los contenedores específicos o a todos los contenedores en un host. 

Además, las redes de Docker pueden ser configuradas para utilizar diferentes tipos de conexiones, como Bridge, Host, None, y Overlay. Estos diferentes tipos de conexiones permiten elegir la forma en que los contenedores se comunican y se conectan a la red.

## **¿Que es el Docker Hub?**

Docker Hub es un servicio en la nube que almacena imágenes de contenedores y permite compartirlas con la comunidad. Es un repositorio centralizado donde los usuarios pueden publicar, descargar y compartir imágenes.

## **¿Que es Docker Compose?**

Docker Compose es una herramienta de orquestación de contenedores en Docker que permite definir y ejecutar aplicaciones compuestas por múltiples contenedores. 

Con Docker Compose, puedes describir todos los servicios, volúmenes y redes que necesita tu aplicación en un solo archivo y, luego, crear y iniciar todos los servicios de una sola vez, en un solo comando. 

Esto simplifica el proceso de configuración y aprovisionamiento de aplicaciones, lo que es especialmente útil en entornos de desarrollo y producción.

Veamos como se veria un archivo **docker-compose.yml**, en este estamos creando una base de datos de **Postgres**:

```docker
version: '3'

services:
  db:
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    ports:
      - '5432:5432'
    volumes: 
      - db:/var/lib/postgresql/data
```

## **¿Que es el Dockerfile?**

El Dockerfile es un archivo de texto plano que contiene todas las instrucciones necesarias para construir una imagen de Docker. 

Estas instrucciones incluyen qué sistema operativo utilizar, qué paquetes o aplicaciones instalar, qué scripts ejecutar, entre otros. La imagen resultante puede ser utilizada para crear y ejecutar contenedores en cualquier entorno compatible con Docker. 

El Dockerfile es una parte clave del proceso de dockerización de una aplicación y se puede compartir y reutilizar para simplificar la implementación de aplicaciones en diferentes entornos.

Veamos como se veria un archivo **Dockerfile** en el que dockerizamos un backend hecho en **Nestjs**:

```docker
FROM node:18-alpine3.15

RUN mkdir -p /var/www/backend
WORKDIR /var/www/backend

COPY . ./var/www/backend

COPY package.json tsconfig.json tsconfig.build.json /var/www/backend/
RUN yarn install --prod
RUN yarn build


RUN adduser --disabled-password adminUser
RUN chown -R adminUser:adminUser /var/www/backend
USER adminUser

RUN yarn cache clean --force

EXPOSE 3000

CMD [ "yarn","start" ]
```

## **Casos de uso de Docker**

Docker tiene varios casos de uso, vamos a destacar algunos de ellos:

* **Desarrollo y pruebas**

* **Distrubución de aplicaciones**

* **Automatización de infraestructura**

* **Integracion continua y entrega continua (CI/CD)**

* **Entornos de producción**

## **Conclusiones**

En conclusión, Docker es una herramienta poderosa y versátil que permite empaquetar y desplegar aplicaciones en un entorno aislado y portable, garantizando que funcionen de manera consistente en cualquier entorno.

Además, Docker Hub nos permite compartir y descargar imágenes de forma sencilla. En definitiva, Docker nos ofrece una forma flexible y eficiente de desarrollar, distribuir y ejecutar aplicaciones en cualquier entorno, lo que lo convierte en una herramienta esencial para cualquier desarrollador o administrador de sistemas.
