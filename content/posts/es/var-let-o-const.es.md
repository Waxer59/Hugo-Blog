---
title: 'var let o const'
date: 2023-01-11
readTime: 'X'
technology: 'javascript'
draft: true
---

En JavaScript existen tres formas distintas para declarar una variable: **var**, **let** y **const**. Cada una de estas formas tiene distintas propiedades que nos puede llegar a ser bastante útil en una situación, pero a veces la forma de usarlas puede causar cierta confusión y estar indeciso con cual usar, por eso **!En este artículo aprenderás cuando debes de usar cada una de estas y las diferencias que hay entre ellas!**

## Usando **var** para declarar una variable

En javascript usamos la palabra reservada **var** para declarar una variable que puede ser mutada, esto quiere decir que cuando declaramos una variable con la
palabra reservada **var** podemos cambiar el contenido de esta y como javascript es un lenguaje no tipado podemos poner un valor con un tipo de dato totalmente distinto al anterior sin que nos de un error. [Enlace al ejemplo](https://dinamicjs.netlify.app/dmFyIGZvbyA9ICJIZWxsbyEiDQpmb28gPSA0Mg0KZm9vID0gdHJ1ZQ0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdDQpmb28gPSB7DQogICAgSGVsbG86ICJNb20iDQp9DQoNCmNvbnNvbGUubG9nKGZvbyk7)

```javascript
var foo = 'Hello!';
foo = 42;
foo = true;
foo = ['Hello', 'World'];
foo = {
  Hello: 'Mom'
};
```

Pero esto no se queda aqui, y es que al usar la palabra reservada **var** estamos declarando una variable **global** que tiene un alcanze a todo el documento [enlace al ejemplo](https://dinamicjs.netlify.app/Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgDQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTs=)

```javascript
for (var index = 0; index < 10; index++) {}

console.log(index); // 10
```

> Por situaciones como esta es el motivo por el cual no se recomienda usar **var** y
> usar **const** o **let** en su remplazo, igualmente se dedicara un articulo en el que se hablara mas
> en detalle sobre el **scope** de javascript y por que no es recomendable usar **var** hoy en dia

## Usando **let** para declarar una variable

En javascript usamos la palabra reservada **let** para declarar variables, y su uso es similar al de **var**
ya que estas tambien pueden ser mutadas, pero con la diferencia de que **let** no tiene un alzance en todo el documento y solo se podrá acceder
a esta a **nivel de bloque**.

¿Que quiere decir nivel de bloque? lo que esto nos quiere decir es que esta solo podrá ser accedida dentro del bloque en el que se declaró
y fuera de ese bloque dicha variable no existirá. **!Aclaremos esto con mas ejemplos!**

Aqui tenemos el primer ejemplo anterior con la palabra reservada **var** y que al sustituirla por **let** funcionará exactamente nuestro programa [enlace al ejemplo](https://dinamicjs.netlify.app/bGV0IGZvbyA9ICJIZWxsbyEiDQpmb28gPSA0Mg0KZm9vID0gdHJ1ZQ0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdDQpmb28gPSB7DQogICAgSGVsbG86ICJNb20iDQp9)

```javascript
let foo = 'Hello!';
foo = 42;
foo = true;
foo = ['Hello', 'World'];
foo = {
  Hello: 'Mom'
};
```

¿Funcionara igual con el segundo ejemplo? [enlace al ejemplo](https://dinamicjs.netlify.app/Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgDQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTsgLy8gUmVmZXJlbmNlRXJyb3I6IGluZGV4IGlzIG5vdCBkZWZpbmVk)

```javascript
for (let index = 0; index < 10; index++) {}

console.log(index); // ReferenceError: index is not defined
```

En este caso al usar **let** en lugar de **var** y al estar fuera del bloque no podemos acceder a esta ya que esa variable no existe fuera de dicho bloque.
podriamos añadir una linea a este ejemplo para que se vea mejor [enlace al ejemplo](https://dinamicjs.netlify.app/Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgY29uc29sZS5sb2coaW5kZXgpOyAvLyAwIDEgMiAzIDQgNSA2IDcgOCA5DQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTsgLy8gUmVmZXJlbmNlRXJyb3I6IGluZGV4IGlzIG5vdCBkZWZpbmVk)

```javascript
for (let index = 0; index < 10; index++) {
  console.log(index); // 0 1 2 3 4 5 6 7 8 9
}

console.log(index); // ReferenceError: index is not defined
```

Aqui podemos observar que podemos acceder perfectamente a la variable dentro de nuestro bloque pero fuera de este nos lanza un error indicandonos que la variable que hemos querido llamar no existe. En este caso hemos usado la variable que se pasa como parametro al bucle **for** pero ocurriria exactamente igual con funciones y demás [enlace al ejemplo](https://dinamicjs.netlify.app/ZnVuY3Rpb24gc2FsdXRlKCl7DQogICAgbGV0IGZ1bGxuYW1lID0gIkpob24gRG9lIjsNCiAgICBjb25zb2xlLmxvZyhmdWxsbmFtZSk7DQp9DQoNCmNvbnNvbGUubG9nKGZ1bGxuYW1lKTsgLy8gUmVmZXJlbmNlRXJyb3I6IGZ1bGxuYW1lIGlzIG5vdCBkZWZpbmVk)

```javascript
function salute() {
  let fullname = 'Jhon Doe';
  console.log(fullname);
}

console.log(fullname); // ReferenceError: fullname is not defined
```

## Usando **const** para declarar una variable

En javascript usamos la palabra reservada **const** para declarar una variable que **NO** puede ser mutada a diferencia de las dos anteriores y que por tanto es una **constante**.

Debido a lo descrito anteriormete es porque esto nos dara un error. [enlace al ejemplo](https://dinamicjs.netlify.app/Y29uc3QgZm9vID0gIkhlbGxvISIgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0gNDIgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0gdHJ1ZSAvLyBUeXBlRXJyb3I6IEFzc2lnbm1lbnQgdG8gY29uc3RhbnQgdmFyaWFibGUuDQpmb28gPSBbIkhlbGxvIiwgIldvcmxkIl0gLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0geyANCiAgICBIZWxsbzogIk1vbSIgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KfQ==)

```javascript
const foo = 'Hello!'; // TypeError: Assignment to constant variable.
foo = 42; // TypeError: Assignment to constant variable.
foo = true; // TypeError: Assignment to constant variable.
foo = ['Hello', 'World']; // TypeError: Assignment to constant variable.
foo = {
  Hello: 'Mom' // TypeError: Assignment to constant variable.
};
```

El alcanze de **const** es exactamente el mismo que el de **let**, es por ello que el alcanze de **const** es de bloque y no global a diferencia de **var**. [Enlace al ejemplo](https://dinamicjs.netlify.app/ZnVuY3Rpb24gbmFtZSgpew0KICAgIGNvbnN0IGZ1bGxOYW1lID0gIkpob24gRG9lIjsNCiAgICBjb25zb2xlLmxvZyhmdWxsTmFtZSk7DQp9DQoNCmNvbnNvbGUubG9nKGZ1bGxOYW1lKTsgLy8gUmVmZXJlbmNlRXJyb3I6IGZ1bGxOYW1lIGlzIG5vdCBkZWZpbmVk)

```javascript
function name() {
  const fullName = 'Jhon Doe';
  console.log(fullName);
}

console.log(fullName); // ReferenceError: fullName is not defined
```
