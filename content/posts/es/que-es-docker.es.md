---
title: '¿Que es docker?'
date: 2023-01-12
readTime: 'X minutos de lectura'
technology: 'docker'
draft: true
---

Docker es una herramienta de codigo abierto creada en 2013 por **Solomon Hykes**, que nos permite empaquetar y deplegar aplicaciones de manera segura y eficiente. Con Docker, podemos garantizar que nuestras aplicaciones funcionarán de manera consistente en cualquier entorno. 

Docker es una tecnología que está ganando cada vez más terreno en la industria tecnológica. Con su capacidad de crear y gestionar contenedores de aplicaciones, Docker ofrece una solución eficiente y flexible para desplegar y ejecutar aplicaciones. Debido a su creciente importancia, es fundamental tener al menos un conocimiento básico de los conceptos clave de Docker. 

Es esencial tener una comprensión básica de los siguientes conceptos en relación a Docker:
* **Contenedores**
* **Imagenes**
* **Volumenes**
* **Dockerizar aplicaciones**
* **Redes de Docker**
* **DockerFile**
* **Docker Compose**
* **Docker Hub**

Es por ello que en este articulo explicaremos cada uno de estos conceptos, además de como docker logra ser tan eficiente y seguro a la hora de ejecutar nuestras aplicaciones.

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

## **¿Como Docker logra esto?**

Docker usa un sistema de contenedores para ejecutar nuestras aplicaciones de manera eficiente y segura, lo que permite una mayor portabilidad y eficiencia en el desarrollo y la gestión de aplicaciones.

Dicha portabilidad nos asegura que nuestra aplicación funcionará dentro de cualquier maquina y nos soluciona posibles futuros problemas al llevar nuestra aplicación de una maquina a otra.

Además, al hacer uso de contenedores en lugar de máquinas virtuales completas mejora bastante el rendimiento de este y hace que sea mas ligero que una máquina virtual.

## **¿Qué es un contenedor?**

Los contenedores son entornos aislados los cuales poseen todas las configuraciones y dependencias necesartias paara ejecutar nuestras imagenes de manera eficiente.

Podrias pensar que estos son maquinas virtuales ya que funcionan de forma similar a estas, por eso es importante saber que estos **NO** son maquinas virtuales y conocer el motivo por el cual los contenedores y las maquinas virtuales tienen conceptos similares pero no son lo mismo.

### ¿Por qué los contenedores no son maquinas virtuales?

Veamos una imagen para explicar mejor como funciona una maquina virtual y un contenedor dentro de nuestro sistema. **Este diagrama ha sido obtenido de la pagina  [infoworld.com](https://www.infoworld.com/article/3204171/what-is-docker-the-spark-for-the-container-revolution.html) y la autoria de este le pertenece a dicha pagina.**

[![Diagrama del funcionamiento de una maquina virtual frente al de un contenedor](/images/postsImages/dockerDiagram.png)](/images/postsImages/dockerDiagram.png)

Como podemos observar a la izquierda se encuentra como funciona una maquina virtual y la derecha tenemos el funcionamiento de un contenedor.

Tambien dentro de este diagrama se pueden observar diferencias, una de ellas es que todos los contenedores se ejecutan dentro del **Docker Engine** en lugar de tener instalado un sistema operativo completo para cada sistema como tenemos con las maquinas virtuales, esto ayuda bastante a mejorar el rendimiento de nuestras aplicaciones dentro de Docker y de optimizar el espacio en disco que estas ocupan.

Esto nos ofrece mayor portabilidad, un tiempo de inicio más rápido y un uso más eficiente de los recursos, lo que es fundamental para el despliegue y optimización de nuestra aplicación, y también ayuda a reducir los costos asociados con los servidores.

## **¿Qué es una imagen?**
## **¿Qué es un volumen?**
## **¿Qué es dockerizar una aplicación?**
## **¿Que son las redes de Docker?**
## **¿Que es el Docker Hub?**
## **¿Que es Docker Compose?**
## **¿Que es el DockerFile?**
## **Casos de uso de Docker**

## **Conclusiones**

En conclusión, Docker es una herramienta poderosa y versátil que permite empaquetar y desplegar aplicaciones en un entorno aislado y portable, garantizando que funcionen de manera consistente en cualquier entorno. Además, Docker Hub nos permite compartir y descargar imágenes de forma sencilla. En definitiva, Docker nos ofrece una forma flexible y eficiente de desarrollar, distribuir y ejecutar aplicaciones en cualquier entorno, lo que lo convierte en una herramienta esencial para cualquier desarrollador o administrador de sistemas.
