---
title: '¿Que es docker?'
date: 2023-01-12
readTime: 'X minutos de lectura'
technology: 'docker'
draft: true
---

Docker es una herramienta de codigo abierto creada en 2013 por **Solomon Hykes**, que nos permite empaquetar y deplegar aplicaciones de manera segura y eficiente. Con Docker, podemos garantizar que nuestras aplicaciones funcionarán de manera consistente en cualquier entorno. 

Docker posee varios conceptos como:
* Contenedores
* Imagenes
* Volumenes
* Dockerizar aplicaciones
* Redes de Docker

entre otros, es por ello que te vamos a explicar cada concepto además de como docker logra ser tan eficiente y seguro a la hora de ejecutar nuestras aplicaciones, pero antes hagamos una pequeña introduccion sobre como podemos usar Docker.

## **¿Como usar Docker?**

Para poder usar Docker debemos de instalar en nuestro sistema la herramienta **Docker Dessktop**, esta podemos encontrarla dentro de la [pagina oficial de Docker](https://www.docker.com/)

### ¿Qué es Docker Desktop?

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

Esto nos permite mayor portabilidad, velocidad de inicio y un uso más optimo de los recursos, esto es bastante importante para el rendimiento que tendrá nuestra aplicación para cuando este desplegada y optimizar también en los gastos que tendremos con nuestros servidores.
