---
title: '¿Que es Go?'
date: 2023-02-13
readTime: '5 minutos de lectura'
technology: 'go'
draft: false
---

**Go** o **Golang** es un lenguaje de programación de código abierto desarrollado por Google. Fue lanzado en 2009 y desde entonces ha ganado popularidad gracias a sus características únicas, como su sintaxis sencilla, su capacidad para crear programas eficientes y su enfoque en la simplicidad y la claridad. 

**Go** se utiliza ampliamente en la creación de servidores. Esto hace que su comunidad sea activa y además de que **Go** está respaldado por **Google**, esto significa que tenemos una gran cantidad de recursos disponibles para aprender y desarrollar nuestros proyectos. [Página oficial de Go](https://go.dev/)

## **Hola mundo en Go**

Para crear nuestro hola mundo lo primero que deberemos de hacer es crear nuestro fichero con la extension **.go**, para seguidamente
insertar dentro de este el siguiente código: 

```go
package main

import "fmt"

func main() {
  fmt.Println("¡¡Hola Mundo desde Go!!")
}
```

Para probar este código deberemos de tener instalado Go en nuestra maquina y ejecutar el siguiente comando: 

```bash
go run <ruta-a-tu-fichero>
```

### **¡Analicemos un poco el código!**

* ***1º***: Indicamos que este programa es ejecutable y no un paquete utilizado por otros programas con la linea 1 en "**package main**".
* ***2º***: Importamos la biblioteca "**fmt**" en la linea 3 en " **import "fmt"**" para poder usar la función de imprimir en consola.
* ***3º***: Declaramos la función "**main()**" en la linea 4 en "**func main(){}**" para que esta se ejecute al iniciar nuestro programa.
* ***4º***: ¡Imprimimos nuestro *"¡¡Hola Mundo desde Go!!"* en la linea 5 en "**fmt.Println("¡¡Hola Mundo desde Go!!")**" 

## **Casos de uso de Go**

Go al ser un lenguaje multipropósito, tiene una variedad de casos de uso en los que se destaca. Aquí hay algunos de los usos más comunes de Go:

* **Servicios en nube y red**
* **CLIs (Interfaz de Linea de Comandos)**
* **Desarrollo Web**
* **DevOps y SRE**

## **¡Go tiene una mascota!**

Como puedes ver en el título, el lenguaje de programación **Go** tiene una mascota llamada **Gopher**, esta la encontraras en bastantes lugares representando a  **Go**.

[![gopher](/icons/gopher.png)](/icons/gopher.png)

## **Conclusión**

En conclusión Go es un excelente lenguaje de programación de lado del servidor, este nos ofrece una combinación perfecta como: sencillez, comodidad y eficacia. Además de poseer una gran y creciente relevancia en el mundo de la programación *backend*, teniendo este una gran comunidad y estando respaldado por una gran compañía como es **Google**.

Es por ello que si estás considerando utilizar Go para tus proyectos en el servidor, te recomiendo altamente darle una oportunidad y probarlo.

