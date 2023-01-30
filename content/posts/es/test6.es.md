---
title: 'test6'
date: 2023-01-19
readTime: '15 minutos de lectura'
technology: 'javascript'
draft: false
---

En JavaScript existen tres formas distintas para declarar una variable: **var**, **let** y **const**. Cada una de estas formas tiene distintas caracteristicas que nos puede llegar a ser de utilidad, pero a veces la forma de usarlas puede causar cierta confusión y estar indeciso por cual usar, por eso **¡En este artículo aprenderás cuando debes de usar cada uno y las diferencias que hay entre ellos!**

## Usando **var** para declarar una variable

En JavaScript usamos la palabra reservada **var** para declarar una variable que puede ser **mutada**, esto quiere decir que el contenido de dicha variable puede cambiar, y al ser JavaScript un lenguaje no tipado podemos redeclarar nuestra variable con un tipo de dato totalmente distinto al anterior sin que nos de un error. [Enlace al ejemplo](https://dinamicjs.netlify.app/dmFyIGZvbyA9ICJIZWxsbyEiDQpmb28gPSA0Mg0KZm9vID0gdHJ1ZQ0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdDQpmb28gPSB7DQogICAgSGVsbG86ICJNb20iDQp9DQoNCmNvbnNvbGUubG9nKGZvbyk7).

```javascript
var foo = 'Hello!';
foo = 42;
foo = true;
foo = ['Hello', 'World'];
foo = {
  Hello: 'Mom'
};
```

Pero esto no queda aqui, y es que al estar usando **var** estamos declarando una variable **global** que puede ser accedida en cualquier lugar de nuestro documento [enlace al ejemplo](https://dinamicjs.netlify.app/Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgDQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTs=).

```javascript
for (var index = 0; index < 10; index++) {}

console.log(index); // 10
```

> Por motivos como este es por el cual se **desaconseja** el uso de **var** y usar en lugar de este
> **const** o **let**.

## Usando **let** para declarar una variable

En JavaScript usamos la palabra reservada **let** para declarar variables las cuales pueden ser **mutadas** con un tipo totalmente distinto al anterior ( al igual que con la palabra reservada **var** ).

Pero a diferencia de **var**, **let** no tiene un alzance dentro de todo el documento sino que este tiene un alcanze a **nivel de bloque**.

¿Que quiere decir **nivel de bloque**? lo que esto nos quiere decir es que esta solo podrá ser accedida dentro del bloque en el que se declaró **( { dentro de las llaves es un bloque } )**
y fuera de ese bloque dicha variable no existirá. **¡Aclaremos esto con varios ejemplos!**

### Primer ejemplo

Aqui tenemos el mismo primer ejemplo mostrado con **var** y que al sustituirla por **let** nuestro programa seguira funcionando igual a lo esperado [enlace al ejemplo](https://dinamicjs.netlify.app/bGV0IGZvbyA9ICJIZWxsbyEiDQpmb28gPSA0Mg0KZm9vID0gdHJ1ZQ0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdDQpmb28gPSB7DQogICAgSGVsbG86ICJNb20iDQp9).

```javascript
let foo = 'Hello!';
foo = 42;
foo = true;
foo = ['Hello', 'World'];
foo = {
  Hello: 'Mom'
};
```

### Segundo ejemplo

¿Funcionara igual con el segundo ejemplo que se dió con el uso de **var**? [enlace al ejemplo](https://dinamicjs.netlify.app/Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgDQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTsgLy8gUmVmZXJlbmNlRXJyb3I6IGluZGV4IGlzIG5vdCBkZWZpbmVk).

```javascript
for (let index = 0; index < 10; index++) {}

console.log(index); // ReferenceError: index is not defined
```

En este caso al usar **let** y estar llamando a la variable fuera del bloque que se declaró no podremos acceder a esta ya que dicha variable no existe fuera de este.
podriamos añadir una linea más a este ejemplo para que se vea mejor [enlace al ejemplo](https://dinamicjs.netlify.app/Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgY29uc29sZS5sb2coaW5kZXgpOyAvLyAwIDEgMiAzIDQgNSA2IDcgOCA5DQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTsgLy8gUmVmZXJlbmNlRXJyb3I6IGluZGV4IGlzIG5vdCBkZWZpbmVk)

```javascript
for (let index = 0; index < 10; index++) {
  console.log(index); // 0 1 2 3 4 5 6 7 8 9
}

console.log(index); // ReferenceError: index is not defined
```

Aqui podemos observar que podemos acceder perfectamente a la variable dentro de nuestro bloque pero fuera de este nos lanza un error indicandonos que la variable que hemos querido llamar no existe.

### Tercer ejemplo

Hasta aqui hemos entendido que usando **let** para declarar una variable dentro de un bloque solo podremos acceder a esta dentro de dicho bloque, pero ¿Que pasaria si declaramos nuestra variable usando **let** que está declarada por encima de ese bloque? ¿Imprimiria el contenido de esta o nos saltaria un error diciendo que no se ha encontrado? [enlace al ejemplo](https://dinamicjs.netlify.app/bGV0IGZ1bGxuYW1lID0gJ0pob24gRG9lJzsNCg0KZnVuY3Rpb24gc2FsdXRlKCkgew0KICBjb25zb2xlLmxvZyhmdWxsbmFtZSk7IC8vIEpob24gRG9lDQp9DQoNCnNhbHV0ZSgpOw==)

```javascript
let fullname = 'Jhon Doe';

function salute() {
  console.log(fullname); // Jhon Doe
}

salute();
```

Pues como hemos podido ver la respuesta seria **SI** imprimiria el contenido de esta, ya que al estar en un nivel superior que el bloque donde la queremos llamar esta tiene un mayor alcanze y puede ser accedida por todos los bloques que esten en un nivel **inferior** a la declaracion de esta.

Por que al estar siendo llamanda en un **inferior superior** que en la que esta declarada si se podrá acceder a esta.

## Usando **const** para declarar una variable

En JavaScript usamos la palabra reservada **const** para declarar una variable que **NO** puede ser mutada, a diferencia de las dos anteriores y es por ello que esta es una **constante**.

Debido a esto al intentar cambiar el valor de esta nos saltará un error indicandonos que **NO** se puede cambiar el valor a una **constante**. [enlace al ejemplo](https://dinamicjs.netlify.app/Y29uc3QgZm9vID0gIkhlbGxvISI7DQpmb28gPSA0MjsgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0gdHJ1ZTsgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdOyAvLyBUeXBlRXJyb3I6IEFzc2lnbm1lbnQgdG8gY29uc3RhbnQgdmFyaWFibGUuDQpmb28gPSB7IA0KICAgIEhlbGxvOiAiTW9tIiAvLyBUeXBlRXJyb3I6IEFzc2lnbm1lbnQgdG8gY29uc3RhbnQgdmFyaWFibGUuDQp9)

```javascript
const foo = 'Hello!';
foo = 42; // TypeError: Assignment to constant variable.
foo = true; // TypeError: Assignment to constant variable.
foo = ['Hello', 'World']; // TypeError: Assignment to constant variable.
foo = {
  Hello: 'Mom' // TypeError: Assignment to constant variable.
};
```

El alcanze de **const** es exactamente el mismo que el de **let**, es por ello que este estará a **nivel de bloque** y no a **nivel global** a diferencia de **var**. [Enlace al ejemplo](https://dinamicjs.netlify.app/Y29uc3QgbXlOdW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdOw0KDQpmb3IgKGNvbnN0IG51bWJlciBvZiBteU51bWJlcnMpIHsNCiAgICBjb25zb2xlLmxvZyhudW1iZXIpOw0KfQ0KDQpjb25zb2xlLmxvZyhudW1iZXIpOyAvLyBSZWZlcmVuY2VFcnJvcjogbnVtYmVyIGlzIG5vdCBkZWZpbmVk)

```javascript
const myNumbers = [1, 2, 3, 4, 5];

for (const number of myNumbers) {
  console.log(number);
}

console.log(number); // ReferenceError: number is not defined
```

## Conclusiones

Hemos visto que usando **var** podemos declarar variables globales las cuales pueden ser mutadas, posteriormente hemos visto que el uso de **let** para declarar una variable esta tambien puede ser mutada al igual que con **var** pero el alcanze de esta es a **nivel de bloque** y finalmente hemos comprobado que declarando una variable con **const** esta no podrá ser mutada y el alcanze de esta será el mismo que el de la palabra reservada **let**, es decir que será a **nivel de bloque**.

Para concluir este articulo hay que **remarcar** que actualmente el uso de **var** está **desaconsejado** y usar en su lugar **let** o **const**, debido a que su uso puede dar problemas como los ya explicados en el articulo.
