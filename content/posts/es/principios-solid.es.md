---
title: 'Principios SOLID'
date: 2023-02-14
readTime: '15 minutos de lectura'
technology: 'offtopic'
draft: true
---

Seguramente habrás escuchado hablar de SOLID si has estado en el desarrollo de software estos últimos años. SOLID es un acrónimo
que representa un conjunto de principios fundamentales de diseño de software orientado a objetos.

Para conocer el origen de estos debemos situarnos en el titulo "Principios de diseño y patrones de diseño" publicado en el año 
2000 por el escritor Robert C. Martin, también conocido como "Uncle Bob". Estos principios han tenido tal impacto en la industria
del desarrollo de software que se han convertido en una gran referencia para la creación de software de alta calidad.

## **¿Que significa SOLID?**

Cuando usamos la palabra SOLID, estamos haciendo uso de un acrónimo ya que esta es formada por los **cinco** principios fundamentales de diseño de software
orientado a objetos, y estos son:

<!-- no toc -->
* [**S**: Principio de responsabilidad única](#srp)
* [**O**: Principio de abierto-cerrado](#ocp)
* [**L**: Principio de sustitución de Liskov](#lsp)
* [**I**: Principio de segregación de la interfaz](#isp)
* [**D**: Principio de inversión de dependencia](#dip)

### **S**: Principio de responsabilidad única ( SRP ) {#srp}

> "Una clase debe hacer una cosa y, por lo tanto, debe tener una sola razón para cambiar."

Principio de responsabilidad única o por sus siglas **SRP**, este principio enuncia que una clase o módulo debe de tener
una única responsabilidad, es decir que dicha clase o método solo realice una función en especifico.

#### ✅ Siguiendo el SRP

Dentro del siguiente ejemplo tenemos una clase llamada **UserManager** cuya función es la gestión de usuarios en la base de datos, teniendo así
métodos como **registerUser()**, **getUserById()** y **updateUserById()**.

En este ejemplo estaríamos siguiendo dicho principio ya que nuestra clase única y solamente se encarga de la gestión de los usuarios en la base de datos.

```typescript
class UserManager {
  constructor() {
    // ...
  }

  registerUser(name: string, email: string, password: string) {
    // ...
  }

  getUserById(id: string) {
    // ...
  }

  updateUserById(id: string, name: string, email: string, password: string){
    // ...
  }
}
```

#### ❌ Violando el SRP

En este ejemplo tenemos hemos cambiado el método **updateUserById()** por el método **sendEmail()**, agregando este método estaríamos violando dicho principio ya que la lógica de la gestión de los correos debería estar separada de la lógica de la gestión de usuarios.

Debido a que el envío de correos y la gestión de los usuarios no tienen una relación directa o un objetivo común, se puede considerar que violan el principio SRP.

```typescript
class UserManager {
  constructor() {
    // ...
  }

  registerUser(name: string, email: string, password: string) {
    // ...
  }

  getUserById(id: string) {
    // ...
  }

  sendEmail(name: string, email: string){
    // ...
  }
}
```

Para arreglar dicha clase y seguir el principio de responsabilidad única deberíamos de extraer el método **sendEmail()** y llevarlo dentro de una clase llamada
**MailManager**

```typescript
class UserManager {
  constructor() {
    // ...
  }

  registerUser(name: string, email: string, password: string) {
    // ...
  }

  getUserById(id: string) {
    // ...
  }
}

class MailManager {
  constructor() {
    // ...
  }

  sendEmail(name: string, email: string){
    // ...
  }
}
```

### **O**: Principio de abierto-cerrado ( OCP ) {#ocp}

> "Las clases deban estar abiertas a la extensión y cerradas a la modificación."

El principio de abierto-cerrado o por sus siglas **OCP**, enuncia que una clase debería de ser capaz de extender su comportamiento pero sin ser esta modificada, en otras palabras, nuestras clases deben de estar **abiertas** para su expansión y **cerradas** para su modificación.

#### ✅ Siguiendo el OCP

Supongamos una clase **Figure** que tiene un método para calcular el area de dicha figura.

```typescript
class Figure {
  calculateArea() {
    // ..
  }
}
```

Ahora queremos agregar una nueva forma geométrica, un triangulo pero siguiendo dicho principio, por tanto lo que deberemos de hacer es crear
una nueva clase llamada **Triangle** que extienda a la clase **Figure** para que esta sobrescriba el método **calculateArea()** para que este
calcule su area.

```typescript
class Figure {
  calculateArea() {
    // ...
  }
}

class Triangle extends Figure {
  calculateArea() {
    // ...
  }
}
```

#### ❌ Violando el OCP

Ahora supongamos que queremos agregar un método que dibuje dicha figura y lo implementamos de la siguiente forma:

```typescript
class Figure {
  calculateArea() {
    // ...
  }
}

class Triangle extends Figure {
  calculateArea() {
    // ...
  }

  draw() {
    // ...
  }
}
```

Agregando el método **draw()** en la clase **Triangle** estaríamos violando dicho principio debido a que estaríamos implementado una nueva funcionalidad dentro de nuestra clase **Triangle** que no es específica de dicha clase, y por tanto esta nueva funcionalidad no podría generalizarse a otras figuras geométricas.

Para arreglar esto deberíamos desplazar el método **draw()** de la clase **Triangle** hacia la clase **Figure**.

```typescript
class Figure {
  calculateArea() {
    // ...
  }

  draw() {
    // ...
  }
}

class Triangle extends Figure {
  calculateArea() {
    // ...
  }
}
```

### **L**: Principio de sustitución de Liskov ( LSP ) {#lsp}

> "Las clases derivadas deben ser sustituibles por sus clases base."

El principio de sustitución de Liskov o por sus siglas **LSP**, enuncia que toda clase **hija** de otra clase debe poder utilizarse como si fuese la clase **padre** sin
que esta sustitución altere negativamente el funcionamiento del sistema, es decir que dicha clase **hija** debe de poder ser usada como su clase **padre** sin que esta sustitución afecte negativamente al comportamiento del programa y que por tanto que esa clase hija no altere al funcionamiento del padre.

#### ✅ Siguiendo el LSP

Supongamos una clase **Animal** con un método **sound()** y que dicho método retorne el sonido que hace dicho animal.

```typescript
class Animal {
  sound() {
    return "Make a sound";
  }
}

class Dog extends Animal {
  sound() {
    return "Guau guau";
  }
}

class Cat extends Animal {
  sound() {
    return "Miau miau";
  }
}

```

Haciendo esto seguiríamos dicho principio ya que se garantiza que cualquier instancia de **Dog** o **Cat** se puede usar de manera intercambiable con una instancia
de **Animal**, sin afectar el comportamiento esperado del programa

#### ❌ Violando el LSP

Ahora supongamos que implementamos una clase llamada **SilentAnimal** que no emite ningún sonido, haciendo esto estaríamos violando dicho principio ya que ahora
no podríamos intercambiar la clase de **SilentAnimal** con la instancia de **Animal**

```typescript
class Animal {
  sound() {
    return "Make a sound";
  }
}

class SilentAnimal extends Animal {
  // No se implementa el método 'sound()'
}
```

Para arreglar esta nueva clase simplemente podríamos implementar el método **sound()** dentro de la clase **SilentAnimal** y que este devuelva una 
cadena vacía.

```typescript
class Animal {
  sound() {
    return "Make a sound";
  }
}

class SilentAnimal extends Animal {
  sound(){
    return "";
  }
}
```

### **I**: Principio de segregación de la interfaz ( ISP ) {#isp}

> "Haz interfaces específicas para cada cliente."

El principio de segregación de la interfaz o por sus siglas ISP, enuncia que no debería haber métodos en una clase que no sean utilizados por la misma, es por ello 
que hay que asegurarse que todas las clases que implementen dichas interfaces deban utilizar y poder personalizar todas las funciones que dicha interfaz ofrezca.

#### ✅ Siguiendo el ISP

Supongamos dos interfaces, una llamada **IBasicPrinter** que posea el método **printDocument()** y una segunda llamada **IPrinterMultifunctional** que posee el método **printDocument()**, **scanDocument()** y **sendFax()**.

Gracias a estas dos interfaces estamos aplicando el principio de **segregación de interfaces (ISP)**, ya que estamos dividiendo una posible interfaz más grande, como podría ser **Printer**, en dos interfaces más pequeñas y específicas, como son **IBasicPrinter** e **IPrinterMultifunctional**.

De esta manera, cada clase solo tendrá que implementar los métodos que sean relevantes para su funcionalidad y no tendrá que implementar métodos que no necesite, lo que reduce la complejidad del código y lo hace más fácil de mantener y extender en el futuro.

> Por ejemplo Si tuviéramos una clase **BasicPrinter** que solo se encarga de imprimir, estaríamos aplicando correctamente el principio de segregación de interfaces, ya que solo necesitamos la interfaz **IBasicPrinter** para implementar los métodos que necesite esta clase y no estar implementando métodos de una interfaz que no necesita, lo que a su vez reduce la complejidad y el acoplamiento en el código.

```typescript
interface IBasicPrinter {
  printDocument(): void;
}

interface IPrinterMultifunctional {
  printDocument(): void;
  scanDocument(): void;
  sendFax(): void;
}
```

#### ❌ Violando el ISP

Ahora supongamos una interfaz llamada **IStorage** que implemente los métodos **read()**, **write()**, **remove()** y **move()**, el problema con esta interfaz
viene cuando nosotros queramos añadir a nuestro código una clase llamada **Reader** que solamente pueda leer los archivos y no pueda escribir, mover y borrar.

Implementado la interfaz **IStorage** a la clase **Reader** estaríamos obligando a nuestra clase implementar métodos que esta no va a usar, esto violaría el ISP.

```typescript
interface IStorage {
  read(): void;
  write(): void;
  remove(): void;
  move(): void;
}
```

Para arreglar nuestra interfaz simplemente podríamos **segregarla** en dos más pequeñas y especificas como: **IReadableStorage** y **IWritableStorage**, haciendo esto podríamos implementar la interfaz **IReadableStorage** a nuestra clase **Reader** y estaríamos siguiendo el ISP además de reducir la complejidad de nuestro código y el acoplamiento de este.

```typescript
interface IReadableStorage {
  read(): void;
}

interface IWritableStorage {
  write(): void;
  remove(): void;
  move(): void;
}
```

### **D**: Principio de inversión de dependencias ( DIP ) {#dip}

> "Depende de abstracciones, no de concreciones".

El principio de inversión de dependencias o por sus siglas DIP, enuncia  que los módulos de software deben estar diseñados de tal manera que se reduzca la dependencia directa entre ellos para minimizar el acoplamiento entre los módulos. 

Esto significa que los módulos de alto nivel deben depender de abstracciones o interfaces comunes, en lugar de depender directamente de los módulos de bajo nivel, lo que reduce el acoplamiento entre ellos. De igual manera, las abstracciones o interfaces comunes no deben depender de los detalles específicos de implementación de los módulos de bajo nivel, sino que los detalles de implementación deben depender de las abstracciones o interfaces comunes, lo que también reduce el acoplamiento.

#### ✅ Siguiendo el DIP

Supongamos dos clases: una llamada **Database** que implemente la interfaz **IDatabase**, y una segunda llamada **UserService** que posea el método **createUser()**

Al implementar la interfaz **IDatabase** en la clase donde realizaremos todas las operaciones de la base de datos, estamos desacoplando la lógica de la base de datos de la clase UserService. Esto significa que si en el futuro se cambia la base de datos, el resto del sistema no se verá afectado por este cambio."

```typescript
interface IDatabase {
  connect(): void;
  query(): void;
}

class Database implements IDatabase {
  connect() { 
    // ...
  }

  query() { 
    // ...
  }
}

class UserService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  createUser(name: string, email: string, password: string) {
    this.db.connect();
    this.db.query(/* ... */);
  }
}
```

#### ❌ Violando el DIP

Una forma de violar este principio siguiendo el ejemplo anterior sería eliminando la interfaz **IDatabase** y haciendo que la clase **UserService** dependa directamente de la clase Database en lugar de depender de una abstracción.

```typescript
class Database {
  connect() { 
    // ...
  }

  query() { 
    // ...
  }
}

class UserService {
  private db: Database;

  constructor(db: IDatabase) {
    this.db = db;
  }

  createUser(name: string, email: string, password: string) {
    this.db.connect();
    this.db.query(/* ... */);
  }
}
```

## Cohesión y acoplamiento

Dos conceptos fundamentales cuando estamos diseñando y desarrollando software son la **cohesión** y el **acoplamiento**, ya que están estrechamente relacionados con la calidad y sostenibilidad del código. Un buen diseño debe buscar maximizar la cohesión y minimizar el acoplamiento para lograr un sistema de software robusto, escalable y sostenible a largo plazo.

### Cohesión

La cohesión se refiere a la medida en que los elementos de un módulo o componente de software están relacionados entre sí y trabajan juntos para cumplir un propósito común. Es decir, la cohesión mide la fuerza de la relación interna entre los elementos de un módulo y cómo contribuyen a la funcionalidad del mismo. Un alto nivel de cohesión implica que los elementos están altamente relacionados y trabajan juntos de manera efectiva, mientras que una baja cohesión puede llevar a un código fragmentado y difícil de mantener

### Acoplamiento

El acoplamiento se refiere a la medida en que los diferentes módulos o componentes de software dependen entre sí. Un alto nivel de acoplamiento significa que los módulos están altamente interconectados y cualquier cambio en un módulo puede tener un impacto significativo en otros módulos que lo utilizan. Por lo tanto, un bajo nivel de acoplamiento es deseable, ya que permite que los módulos sean más independientes y fáciles de mantener y modificar.

## Conclusiones

En conclusión, los principios SOLID son un conjunto de principios de diseño de software que nos ayudan a construir sistemas de software escalables, sostenibles y de alta calidad. Entre estos principios, la cohesión y el acoplamiento son fundamentales para lograr una buena calidad de código.