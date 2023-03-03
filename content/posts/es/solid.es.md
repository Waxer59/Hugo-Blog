---
title: 'SOLID'
date: 2023-02-14
readTime: 'X minutos de lectura'
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
* [**I**: Principio de segregación de interfaz](#isp)
* [**D**: Principio de inversión de dependencia](#dip)

### **S**: Principio de responsabilidad única ( SRP ) {#srp}

> "Una clase debe hacer una cosa y, por lo tanto, debe tener una sola razón para cambiar."

Principio de responsabilidad única o por sus siglas **SRP**, este principio enuncia que una clase o módulo debe de tener
una única responsabilidad, es decir que dicha clase o método solo realice una función en especifico.

#### ✅ Siguiendo el SRP

Dentro del siguiente ejemplo tenemos una clase llamada **UserManager** cuya función es la gestión de usuarios en la base de datos, teniendo así
métodos como **registerUser**, **getUserById** y **updateUserById**.

En este ejemplo estaríamos siguiendo dicho principio ya que nuestra clase única y solamente se encarga de la gestión de los usuarios en la base de datos.

```js
class UserManager {
  constructor() {
    // ..
  }

  registerUser(name, email, password) {
    // ..
  }

  getUserById(id) {
    // ..
  }

  updateUserById(id, name, email, password){
    // ..
  }
}
```

#### ❌ Violando el SRP

En este ejemplo tenemos hemos cambiado el método **updateUserById** por el método **sendEmail**, agregando este método estaríamos violando dicho principio ya que la lógica de la gestión de los correos debería estar separada de la lógica de la gestión de usuarios.

Debido a que el envío de correos y la gestión de los usuarios no tienen una relación directa o un objetivo común, se puede considerar que violan el principio SRP.

```js
class UserManager {
  constructor() {
    // ..
  }

  registerUser(name, email, password) {
    // ..
  }

  getUserById(id) {
    // ..
  }

  sendEmail(name, email){
    // ..
  }
}
```

Para arreglar dicha clase y seguir el principio de responsabilidad única deberíamos de extraer el método **sendEmail** y llevarlo dentro de una clase llamada
**MailManager**

```js
class UserManager {
  constructor() {
    // ..
  }

  registerUser(name, email, password) {
    // ..
  }

  getUserById(id) {
    // ..
  }
}

class MailManager {
  constructor() {
    // ..
  }

  sendEmail(name, email){
    // ..
  }
}
```

### **O**: Principio de abierto-cerrado ( OCP ) {#ocp}

> "Las clases deban estar abiertas a la extensión y cerradas a la modificación."

El principio de abierto-cerrado o por sus siglas **OCP**, enuncia que una clase debería de ser capaz de extender su comportamiento pero sin ser esta modificada, en otras palabras, nuestras clases deben de estar **abiertas** para su expansión y **cerradas** para su modificación.

#### Veamos un ejemplo

Supongamos una clase **Figure** que tiene un método para calcular el area de dicha figura.

```js
class Figure {
  calculateArea() {
    // ..
  }
}
```

Ahora queremos agregar una nueva forma geométrica, un triangulo pero siguiendo dicho principio, por tanto lo que deberemos de hacer es crear
una nueva clase llamada **Triangle** que extienda a la clase **Figure** para que esta sobrescriba el método **calculateArea** para que este
calcule su area.

```js
class Figure {
  calculateArea() {
    // ..
  }
}

class Triangle extends Figure {
  calculateArea() {
    // ..
  }
}
```

### **L**: Principio de sustitución de Liskov ( LSP ) {#lsp}

> "Las clases derivadas deben ser sustituibles por sus clases base."

El principio de sustitución de Liskov o por sus siglas **LSP**, enuncia que los objetos deben de poder ser remplazados por las instancias de sus subtipos sin
que esta sustitución altere el funcionamiento del sistema, es decir que una clase **padre** debe poder ser sustituida por sus clases **hijas** sin que esta sustitución 
afecte negativamente al comportamiento del programa.

#### Veamos un ejemplo

### **I**: Principio de segregación de interfaz ( ISP ) {#isp}

> "Crea interfaces altamente especializadas y cohesivas que satisfagan las necesidades específicas de cada cliente."

### **D**: Principio de inversión de dependencia ( DIP ) {#dip}

> "Depende de las interfaces abstractas, no de las implementaciones concretas."
