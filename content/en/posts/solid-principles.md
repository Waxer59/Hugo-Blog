---
title: 'SOLID principles'
date: 2023-03-04
technology: 'offtopic'
draft: false
---

You've probably heard of SOLID if you've been in software development these past few years. SOLID is an acronym
that represents a set of fundamental object-oriented software design principles.

To know the origin of these we must go back to the title "Design Principles and Design Patterns" published in 2000 by the writer Robert C. Martin. 
2000 by the writer Robert C. Martin, also known as "Uncle Bob". These principles have had such an impact on the software development
development industry that they have become a great reference for the creation of high quality software.

## **What does SOLID mean?**

When we use the word SOLID, we are making use of an acronym since it is formed by the **five** fundamental principles of object-oriented software design.
object-oriented software design, and these are:

<!-- no toc -->
* [**S**: Principle of single responsibility](#srp)
* [**O**: Open-closed principle](#ocp)
* [**L**: Liskov substitution principle](#lsp)
* [**I**: Interface segregation principle](#isp)
* [**D**: Dependency Inversion Principle](#dip)

### **S**: Principle of single responsibility ( SRP ) {#srp}

> "A class must do one thing and, therefore, must have only one reason to change."

Single Responsibility Principle or by its acronym **SRP**, this principle states that a class or module must have a single responsibility, i.e. that the class or method only performs a specific function.
a single responsibility, that is to say that this class or method only performs a specific function.

#### ✅ Following the SRP

In the following example we have a class called **UserManager** whose function is the management of users in the database, having as follows
methods such as **registerUser()**, **getUserById()** and **updateUserById()**.

In this example we would be following this principle since our single class is only in charge of managing the users in the database.

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

#### ❌ Violating the SRP

In this example we have changed the **updateUserById()** method to the **sendEmail()** method, by adding this method we would be violating this principle since the mail management logic should be separated from the user management logic.

Since sending mails and managing users do not have a direct relationship or a common goal, they can be considered to violate the SRP principle.

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

To fix such a class and follow the single responsibility principle we should extract the **sendEmail()** method and put it into a class called
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

### **O**: Open-closed principle ( OCP ) {#ocp}

> "Classes should be open to extension and closed to modification."

The open-closed principle, or **OCP**, states that a class should be able to extend its behavior without being modified, in other words, our classes should be **open** for expansion and **closed** for modification.

#### ✅ Following the OCP

Let's suppose a **Figure** class that has a method to calculate the area of such a figure.

```typescript
class Figure {
  calculateArea() {
    // ..
  }
}
```

Now we want to add a new geometric shape, a triangle but following this principle, so what we have to do is to create a new class called **Triangle** that extends the **Figure** class so that it overwrites the **calculateArea()** method.
a new class called **Triangle** that extends the **Figure** class so that it overwrites the **calculateArea()** method to calculate its area.
calculates its area.

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

#### ❌ Violating the OCP

Now suppose we want to add a method that draws such a figure and we implement it as follows:

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

Adding the **draw()** method in the **Triangle** class would violate this principle because we would be implementing a new functionality inside our **Triangle** class that is not specific to that class, and therefore this new functionality could not be generalized to other geometric figures.

To fix this we should move the **draw()** method from the **Triangle** class to the **Figure** class.

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

### **L**: Liskov substitution principle( LSP ) {#lsp}

> "Derived classes must be substitutable for their base classes."

Liskov's substitution principle, or by its acronym **LSP**, states that any **child** class of another class must be able to be used as if it were the **parent** class without this substitution negatively altering the operation of the system.
that this substitution negatively alters the operation of the system, that is to say that this **child** class must be able to be used as its **parent** class without this substitution negatively affecting the behavior of the program and therefore that this child class does not alter the operation of the parent.

#### ✅ Following the LSP

Suppose an abstract class **Animal** with a **sound()** method and that this method returns the sound that animal makes.

```typescript
abstract class Animal {
  sound() {
    return "Make a sound";
  }
}

class Dog extends Animal {
  sound() {
    return "Woof woof";
  }
}

class Cat extends Animal {
  sound() {
    return "Miau miau";
  }
}

```

Doing so would follow that principle since it is guaranteed that any instance of **Dog** or **Cat** can be used interchangeably with an instance of **Animal** without affecting the expected behavior of the program.
of **Animal**, without affecting the expected behavior of the program.

#### ❌ Violating the LSP

Now suppose we implement a class called **SilentAnimal** that does not emit any sound.
we would not be able to interchange the class of **SilentAnimal** with the instance of **Animal**.

```typescript
abstract class Animal {
  sound() {
    return "Make a sound";
  }
}

class SilentAnimal extends Animal {
  // The 'sound()' method is not implemented.
}
```

To fix this new class we could simply implement the **sound()** method inside the **SilentAnimal** class and have it return an empty string. 
empty string.

```typescript
abstract class Animal {
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

### **I**: Interface segregation principle ( ISP ) {#isp}

> "Make fine grained interfaces that are client specific."

The principle of interface segregation, or ISP, states that there should be no methods in a class that are not used by it, that is why it is necessary to make sure that all classes that implement such interfaces must use and be able to customize all the functions that such interface offers. 
Therefore, it must be ensured that all the classes that implement such interfaces must use and be able to customize all the functions that such interface offers.

#### ✅ Following the ISP

Let's assume two interfaces, one called **IBasicPrinter** that has the **printDocument()** method and a second called **IPrinterMultifunctional** that has the **printDocument()**, **scanDocument()** and **sendFax()** method.

Thanks to these two interfaces we are applying the principle of **interface segregation (ISP)**, since we are splitting a possible larger interface, such as **Printer**, into two smaller and more specific interfaces, such as **IBasicPrinter** and **IPrinterMultifunctional**.

In this way, each class will only have to implement the methods that are relevant to its functionality and will not have to implement methods that it does not need, which reduces the complexity of the code and makes it easier to maintain and extend in the future.

> For example, if we had a **BasicPrinter** class that is only responsible for printing, we would be correctly applying the principle of interface segregation, since we only need the **IBasicPrinter** interface to implement the methods that this class needs and not be implementing methods of an interface that it does not need, which in turn reduces complexity and coupling in the code.

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

#### ❌ Violating the ISP

Now let's suppose an interface called **IStorage** that implements the methods **read()**, **write()**, **remove()** and **move()**, the problem with this interface comes when we want to add to our code a class called **Reader** that can only read files and cannot write, move and delete them.
comes when we want to add to our code a class called **Reader** that can only read files and cannot write, move and delete.

By implementing the **IStorage** interface to the **Reader** class we would be forcing our class to implement methods that it is not going to use, this would violate the ISP.

```typescript
interface IStorage {
  read(): void;
  write(): void;
  remove(): void;
  move(): void;
}
```

To fix our interface we could simply **segregate** it into two smaller and more specific ones like: **IReadableStorage** and **IWritableStorage**, by doing this we could implement the **IReadableStorage** interface to our **Reader** class and we would be Following the ISP as well as reducing the complexity of our code and the coupling of it.

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

### **D**: Dependency Inversion Principle ( DIP ) {#dip}

> "Depend on abstractions, not on concretions."

The Dependency Inversion Principle, or DIP, states that software modules should be designed in such a way as to reduce the direct dependency between them in order to minimize the coupling between modules. 

This means that high-level modules should depend on common abstractions or interfaces, instead of depending directly on low-level modules, which reduces the coupling between them. Similarly, the common abstractions or interfaces should not depend on the specific implementation details of the low-level modules, but rather the implementation details should depend on the common abstractions or interfaces, which also reduces coupling.

#### ✅ Following the DIP

Let's suppose two classes: one called **Database** that implements the **IDatabase** interface, and a second one called **UserService** that has the **createUser()** method.

By implementing the **IDatabase** interface in the class where we will perform all the database operations, we are decoupling the database logic from the UserService class. This means that if the database is changed in the future, the rest of the system will be unaffected by this change."

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

#### ❌ Violating the DIP

One way to violate this principle Following the previous example would be to remove the **IDatabase** interface and make the **UserService** class depend directly on the Database class instead of depending on an abstraction.

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

## Cohesion and coupling

Two fundamental concepts when we are designing and developing software are **cohesion** and **coupling**, since they are closely related to the quality and sustainability of the code. A good design should seek to maximize cohesion and minimize coupling to achieve a robust, scalable and sustainable software system in the long term.

### Cohesion

Cohesion refers to the extent to which the elements of a software module or component are related to each other and work together to fulfill a common purpose. That is, cohesion measures the strength of the internal relationship between the elements of a module and how they contribute to the functionality of the module. A high level of cohesion implies that the elements are highly related and work together effectively, while low cohesion can lead to fragmented code that is difficult to maintain.

### Coupling

Coupling refers to the extent to which different software modules or components depend on each other. A high level of coupling means that modules are highly interconnected and any change in one module can have a significant impact on other modules that use it. Therefore, a low level of coupling is desirable, as it allows modules to be more independent and easier to maintain and modify.

## Conclusions

In conclusion, SOLID principles are a set of software design principles that help us build scalable, sustainable and high quality software systems. Among these principles, cohesion and coupling are fundamental to achieve good code quality.
