---
title: 'Tu guia de mano de markdown'
date: 2023-01-19
readTime: 'X minutos de lectura'
technology: 'markdown'
draft: true
---

Markdown es un lenguaje de marcado para crear documentos, su uso es bastante sencillo lo que lo convierte en una herramienta muy eficaz en la creacion de estos ya que al estar escribiendo en markdown este le dara a tu texto un formato como encabezados, textos en negrita o en cursiva entre otros.

Su uso es bastante variado ya que se puede usar para la creacion de pdf's, sitios web, libros, presentaciones, notas, correos y documentos tecnicos. Estos documentos se pueden leer en cualquier sistema sin necesidad de un programa especial para leerlos *( como es word )*, esto hace que markdown sea fantastico y superpoderoso.

Es por ello que es importante conocer como funciona markdown para poder explotar todas las posibilidades que nos ofrece al maximo.

## **¡Vamos a ello!**

Lo primero que temenos que conocer para empezar con markdown es la extension de este para crear nuestros fantasticos documentos. La extension que usa markdown es **.md**

Conociendo ya lo basico podemos comenzar a explicar como usarlo.

### Encabezados

Markdown usa el caracter **#** para definir un encabezado. Pero esto no se queda aqui y es que la concatenacion de este caracter nos permite ajustar el tamaño de este, existen seis tipos de tamaños siendo el primer tamaño *( 1 )* el mas grande y el sexto *( 6 )* el mas pequeño, comúnmente veremos a estos nombrados como **h< tamaño >** *( "h" hace referencia a la palabra inglesa "header" en español "encabezado" )*. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%23+Soy+un+encabezado+h1%0A%23%23+Soy+un+encabezado+h2%0A%23%23%23+Soy+un+encabezado+h3%0A%23%23%23%23+Soy+un+encabezado+h4%0A%23%23%23%23%23+Soy+un+encabezado+h5%0A%23%23%23%23%23%23+Soy+un+encabezado+h6)

```markdown
# Soy un encabezado h1
## Soy un encabezado h2
### Soy un encabezado h3
#### Soy un encabezado h4
##### Soy un encabezado h5
###### Soy un encabezado h6
```

## Parrafos , decoradores y sepadarodes

### Parafos

En markdown para escribir parrafos no hay que usar ningun caracter especial simplemente escribimos en nuestro documento y para separar un parrafo de otro
solamente debemos de dejar un intro entre estos dos, como el siguiente ejemplo. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=Soy+un+parrafo%21%0A%0ASoy+otro+parrafo%21)

```markdown

Soy un parrafo!

Soy otro parrafo!

```
### Decoradores

Pero esto no se queda aqui y es que podemos ~~tachar~~ usando el dos veces el caracter *( ~ )* a los dos lados del texto, poner en *cursiva* usando una vez a cada lado el caracter *( * )*, poner en **negrita** nuestro texto usando dos veces el caracter *( * )* a ambos lados del texto e incluso podemos subrayar el texto usando dos veces el caracter *( _ )* a ambos lados del texto. ¡Te muestro como en el siguiente ejemplo!. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%7E%7ESoy+un+texto+tachado%21%7E%7E%0A%0A*Estoy+en+cursiva*%0A%0A**Soy+un+texto+en+negrita**%0A%0A__Soy+un+texto+subrayado__)

```markdown

~~Soy un texto tachado!~~

*Estoy en cursiva*

**Soy un texto en negrita**

__Soy un texto subrayado__

```

> Es importante decir que estos se pueden combinar para mostrar por ejemplo un texto en ***negrita en cursiva***, un texto en ~~***negrita cursiva y tachado***~~, etc.

### Separadores

<!-- TODO -->

## Enlaces e imagenes

En markdown la aserción de imagenes y de enlaces en nuestro documento es bastante similar. En el siguiente ejemplo te muestro como insertar cada uno en el siguiente ejemplo. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%5BSoy+un+enlace+a+google%5D%28https%3A%2F%2Fwww.google.es%2F%29%0A%21%5BSoy+una+imagen+de+una+cascada%5D%28https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544519954-6aeb4816f0ab%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1974%26q%3D80%29)

```markdown

[Soy un enlace a google](https://www.google.es/)
![Soy una imagen de una cascada](https://images.unsplash.com/photo-1544519954-6aeb4816f0ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)

```

## Listas

En markdown tenemos disponibles dos tipos de listas las ordenadas y desordenadas.

### Listas ordenadas

Estas se definen de la siguiente forma. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=1.+Soy%0A2.+Una%0A3.+Lista%0A4.+Ordenada%0A5.+%3A%29)

```markdown
1. Soy
2. Una
3. Lista
4. Ordenada
5. :)
```

### Listas desordenadas

Estas se definen de la siguiente forma. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=*+Soy%0A*+Una%0A*+Lista%0A*+Desordenada%0A*+%3A%29)

```markdown
* Soy
* Una
* Lista
* Desordenada
* :)
```

## Bloques de codigo

Markdown tambien nos permite la aserción de bloques de codigo en nuestro documento, resaltando este si le indicamos el lenguaje, ¡te muestro como!. [Enlace al ejemplo](https://www.digitalocean.com/community/markdown?md=%60%60%60+javascript%0Aconsole.log%28%22Hola+mundo%21%22%29%0A%60%60%60)

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-markdown" data-lang="markdown"><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">``` javascript
</span></span><span class="line"><span class="cl">console.log("Hola mundo!")
</span></span><span class="line"><span class="cl">```
</span></span></code></pre></div>

## Tablas

<!-- TODO -->

## Agregar citas al documento

<!-- TODO -->

<!-- TODO: REVISAR ARTICULO Y VER SI HAY MAS FUNCIONALIDADES DE MARKDOWN -->