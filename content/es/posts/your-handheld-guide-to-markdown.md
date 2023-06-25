---
title: 'Tu guía de mano de Markdown'
date: 2023-01-26
technology: 'markdown'
draft: false
---

Markdown es un lenguaje de marcas que se utiliza para crear documentos. Es fácil de usar, lo que lo convierte en una herramienta muy eficaz. Al escribir en Markdown, se le dará formato automáticamente a tu texto, como encabezados, textos en negrita o cursiva, entre otros.

Es un lenguaje de marcas muy versátil, ya que se puede utilizar para crear una variedad de documentos, como PDFs, sitios web, libros, presentaciones, notas, correos electrónicos y documentación. Una de las grandes ventajas de Markdown es que los documentos creados con este lenguaje son fáciles de leer en cualquier sistema, ya que no se necesita un programa especial para abrirlos *(como es word)*, lo que lo hace muy útil y poderoso.

Esto convierte a Markdown en una herramienta importante de conocer y usar dada a su gran versatilidad. Por ello es necesario entender cómo funciona para poder sacar el máximo provecho a esta.

## **¡Vamos a ello!**

Lo primero que tenemos que conocer para empezar es que Markdown usa la extension **.md** para crear documentos.

Ahora que conocemos lo básico, podemos comenzar a explicar cómo utilizarlo.

### Encabezados

Markdown usa el operador *( # )* para definir un encabezado. Pero esto no se queda aquí y es que la concatenación de este operador nos permite ajustar el tamaño de este, existen seis tipos de tamaños siendo el primer tamaño *( 1 )* el mas grande y el sexto *( 6 )* el mas pequeño, comúnmente veremos a estos nombrados como ***h< tamaño >*** *( "h" hace referencia a la palabra inglesa "header" en español "encabezado" )*. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%23+Soy+un+encabezado+h1%0A%23%23+Soy+un+encabezado+h2%0A%23%23%23+Soy+un+encabezado+h3%0A%23%23%23%23+Soy+un+encabezado+h4%0A%23%23%23%23%23+Soy+un+encabezado+h5%0A%23%23%23%23%23%23+Soy+un+encabezado+h6)

```markdown
# Soy un encabezado h1
## Soy un encabezado h2
### Soy un encabezado h3
#### Soy un encabezado h4
##### Soy un encabezado h5
###### Soy un encabezado h6
```

## Párrafos , decoradores de texto y separadores

### Párrafos

En Markdown para escribir párrafos no hay que hacer uso de ningún operador, y para separar entre párrafos
solamente debemos de dejar un espacio en blanco entre estos dos. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=Soy+un+parrafo%21%0A%0ASoy+otro+parrafo%21)

```markdown
Soy un párrafo!

Soy otro párrafo!

```
### Decoradores

En Markdown podemos ~~tachar~~ usando el dos veces el operador *( ~ )* a ambos lados del texto, poner en *cursiva* usando una vez a ambos lados del texto el operador *( * )*, poner en **negrita** nuestro texto usando dos veces el operador *( * )* a ambos lados del texto e incluso podemos subrayar el texto usando dos veces el operador *( _ )* a ambos lados del texto. **¡Te muestro como en el siguiente ejemplo!**. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%7E%7ESoy+un+texto+tachado%21%7E%7E%0A%0A*Estoy+en+cursiva*%0A%0A**Soy+un+texto+en+negrita**%0A%0A__Soy+un+texto+subrayado__)

```markdown
~~Soy un texto tachado!~~

*Estoy en cursiva*

**Soy un texto en negrita**

__Soy un texto subrayado__

```

> Es importante mencionar que estos se pueden combinar, un ejemplo de esto puede ser: un texto en ***negrita en cursiva*** o un texto en ~~***negrita cursiva y tachado***~~, etc.

### Separadores

En Markdown podemos separar nuestro texto mediante el uso de lineas horizontales en este. Existen tres formas distintas de crear una linea horizontal en nuestro texto. **¡Vamos a verlas!** [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%23+Separame%21%21%0A%0A***%0A%23+Otra+forma+de+separarme%21%0A%0A---%0A%23+Otra+forma+de+separarme%21%0A%0A___)

```markdown
# Separame!!

***
# Otra forma de separarme!

---
# Otra forma de separarme!

___
```

> Cualquier forma es valida **¡usa la que mas te guste!**

## Enlaces e imágenes

En Markdown la aserción de imágenes y de enlaces es bastante similar por ellos estas dos están juntas. En el siguiente ejemplo te muestro como insertar imágenes y enlaces. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%5BSoy+un+enlace+a+google%5D%28https%3A%2F%2Fwww.google.es%2F%29%0A%21%5BSoy+una+imagen+de+una+cascada%5D%28https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544519954-6aeb4816f0ab%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1974%26q%3D80%29)

```markdown
[Soy un enlace a google](https://www.google.es/)
![Soy una imagen de una cascada](https://images.unsplash.com/photo-1544519954-6aeb4816f0ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)

```

## Listas

En Markdown existen tres tipos de listas **ordenadas**, **desordenadas** y de **tareas**.

### Listas ordenadas

Las listas desordenadas se definen de la siguiente forma. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=1.+Soy%0A2.+Una%0A3.+Lista%0A4.+Ordenada%0A5.+%3A%29)

```markdown
1. Soy
2. Una
3. Lista
4. Ordenada
5. :)
```

### Listas desordenadas

Las listas ordenadas se pueden definir de dos formas distintas. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=*+Soy%0A*+Una%0A*+Lista%0A*+Desordenada%0A*+%3A%29)

```markdown
* Soy
* Una
* Lista
* Desordenada
* :)
```
[Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=-+Soy%0A-+Una%0A-+Lista%0A-+Desordenada%0A-+%3A%29)

```markdown
- Soy
- Una
- Lista
- Desordenada
- :)
```

> Cualquier forma es valida **¡usa la que mas te guste!**

### Listas de tareas

Las listas de tareas se definen de la siguiente forma. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=-+%5Bx%5D+Hola%0A-+%5B+%5D+Mundo%0A-+%5B+%5D+Wadev)

```markdown
- [x] Hola
- [ ] Mundo
- [ ] Wadev
```

## Bloques de código

Markdown también nos permite la aserción de bloques de código en nuestro documento, resaltando este si le indicamos el lenguaje, **¡te muestro como!**. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%60%60%60+javascript%0Aconsole.log%28%22Hola+mundo%21%22%29%0A%60%60%60)

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-markdown" data-lang="markdown"><span class="line"><span class="cl">´´´javascript
</span></span><span class="line"><span class="cl">console.log("Hola mundo!")
</span></span><span class="line"><span class="cl">´´´
</span></span></code></pre></div>

## Tablas

Las tablas se definen de la siguiente forma. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%7C+Columna1++++++%7C+Columna2++++++%7C%0A%7C---------------%7C---------------%7C%0A%7C+Fila1Columna1+%7C+Fila1Columna2+%7C%0A%7C+Fila2Columna1+%7C+Fila2Columna2+%7C)

```markdown
| Columna1      | Columna2      |
|---------------|---------------|
| Fila1Columna1 | Fila1Columna2 |
| Fila2Columna1 | Fila2Columna2 |
```

> **IMPORTANTE**. Las lineas que hacen la separación entre el de cada columna y las filas que es están debajo de este ***( |---------------| )*** este por que 
> si no es asi Markdown no detectará que es una tabla lo que estas poniendo.

## Citas

Para agregar citas al documento solo debemos de hacer uso del operador *( > )* delante del texto que queremos citar, veamos 
un ejemplo. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%3E+Soy+una+cita%21%21)

```markdown
> Soy una cita!!
```

## Conclusiones

En este artículo hemos visto los diferentes operadores disponibles en Markdown, un lenguaje de marcas sencillo y fácil de usar que se utiliza para escribir y formatear texto en una variedad de plataformas.
