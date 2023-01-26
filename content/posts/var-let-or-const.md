---
title: 'var, let or const?'
date: 2023-01-19
readTime: '15 minutes to read'
technology: 'javascript'
draft: false
---

In JavaScript there are three different ways to declare a variable: **var**, **let** and **const**. Each of these forms has different characteristics that can be useful, but sometimes the way to use them can cause some confusion and be undecided about which one to use, so **In this article you will learn when to use each one and the differences between them!**.

## Using **var** to declare a variable

In JavaScript we use the reserved word **var** to declare a variable that can be **muted**, this means that the content of this variable can change, and as JavaScript is a non-typed language we can re-declare our variable with a totally different data type without getting an error. [Link to example](https://dinamicjs.netlify.app/dmFyIGZvbyA9ICJIZWxsbyEiDQpmb28gPSA0Mg0KZm9vID0gdHJ1ZQ0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdDQpmb28gPSB7DQogICAgSGVsbG86ICJNb20iDQp9DQoNCmNvbnNvbGUubG9nKGZvbyk7).

```javascript
var foo = 'Hello!';
foo = 42;
foo = true;
foo = ['Hello', 'World'];
foo = {
  Hello: 'Mom'
};
```

But this does not stop here, because when using **var** we are declaring a **global** variable that can be accessed anywhere in our document. [Link to example](https://dinamicjs.netlify.app/Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgDQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTs=).

```javascript
for (var index = 0; index < 10; index++) {}

console.log(index); // 10
```

> For reasons like this it is **not recommended** to use **var** and to use instead **var**.
> **const** or **let**.

## Using **let** to declare a variable

In JavaScript we use the reserved word **let** to declare variables which can be **muted** with a totally different type than the previous one (as with the reserved word **var** ).

But unlike **var**, **let** does not have a scope within the whole document but has a scope at **block level**.

What does **block level** mean? what this means is that it can only be accessed within the block in which it was declared **( { inside the braces is a block } )** and outside that block it will not exist.
and outside that block this variable will not exist. **Let's make this clear with several examples!**

### First example

Here we have the same first example shown with **var** and that by replacing it with **let** our program will continue to work as expected. [Link to example](https://dinamicjs.netlify.app/bGV0IGZvbyA9ICJIZWxsbyEiDQpmb28gPSA0Mg0KZm9vID0gdHJ1ZQ0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdDQpmb28gPSB7DQogICAgSGVsbG86ICJNb20iDQp9).

```javascript
let foo = 'Hello!';
foo = 42;
foo = true;
foo = ['Hello', 'World'];
foo = {
  Hello: 'Mom'
};
```

### Second example

Will it work the same with the second example given with the use of **var**? [Link to example](https://dinamicjs.netlify.app/Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgDQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTsgLy8gUmVmZXJlbmNlRXJyb3I6IGluZGV4IGlzIG5vdCBkZWZpbmVk).

```javascript
for (let index = 0; index < 10; index++) {}

console.log(index); // ReferenceError: index is not defined
```

In this case when using **let** and calling the variable outside the block that was declared we will not be able to access it since this variable does not exist outside this block.
we could add one more line to this example to make it look better [Link to example](https://dinamicjs.netlify.app/Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7DQogICAgY29uc29sZS5sb2coaW5kZXgpOyAvLyAwIDEgMiAzIDQgNSA2IDcgOCA5DQp9DQoNCmNvbnNvbGUubG9nKGluZGV4KTsgLy8gUmVmZXJlbmNlRXJyb3I6IGluZGV4IGlzIG5vdCBkZWZpbmVk)

```javascript
for (let index = 0; index < 10; index++) {
  console.log(index); // 0 1 2 3 4 5 6 7 8 9
}

console.log(index); // ReferenceError: index is not defined
```

Here we can observe that we can access perfectly to the variable inside our block but outside this one it throws us an error indicating us that the variable that we have wanted to call does not exist.

### Third example

So far we have understood that using **let** to declare a variable within a block we can only access it within that block, but what would happen if we declare our variable using **let** that is declared above that block? Would it print its content or would we get an error saying that it has not been found? [Link to example](https://dinamicjs.netlify.app/bGV0IGZ1bGxuYW1lID0gJ0pob24gRG9lJzsNCg0KZnVuY3Rpb24gc2FsdXRlKCkgew0KICBjb25zb2xlLmxvZyhmdWxsbmFtZSk7IC8vIEpob24gRG9lDQp9DQoNCnNhbHV0ZSgpOw==)

```javascript
let fullname = 'Jhon Doe';

function salute() {
  console.log(fullname); // Jhon Doe
}

salute();
```

As we have been able to see the answer would be **YES** it would print the content of this, since being in a higher level than the block where we want to call this has a greater scope and can be accessed by all the blocks that are in a level **inferior** to the declaration of this.

Because when it is being called in a **inferior superior** level than the one where it is declared, it can be accessed by all the blocks that are in a **inferior** level.

## Using **const** to declare a variable

In JavaScript we use the reserved word **const** to declare a variable that can **NOT** be mutated, unlike the previous two and that is why this is a **constant**.

Because of this, when we try to change the value of this one, we will get an error indicating that **NOT** it is possible to change the value to a **constant**. [Link to example](https://dinamicjs.netlify.app/Y29uc3QgZm9vID0gIkhlbGxvISI7DQpmb28gPSA0MjsgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0gdHJ1ZTsgLy8gVHlwZUVycm9yOiBBc3NpZ25tZW50IHRvIGNvbnN0YW50IHZhcmlhYmxlLg0KZm9vID0gWyJIZWxsbyIsICJXb3JsZCJdOyAvLyBUeXBlRXJyb3I6IEFzc2lnbm1lbnQgdG8gY29uc3RhbnQgdmFyaWFibGUuDQpmb28gPSB7IA0KICAgIEhlbGxvOiAiTW9tIiAvLyBUeXBlRXJyb3I6IEFzc2lnbm1lbnQgdG8gY29uc3RhbnQgdmFyaWFibGUuDQp9)

```javascript
const foo = 'Hello!';
foo = 42; // TypeError: Assignment to constant variable.
foo = true; // TypeError: Assignment to constant variable.
foo = ['Hello', 'World']; // TypeError: Assignment to constant variable.
foo = {
  Hello: 'Mom' // TypeError: Assignment to constant variable.
};
```

The scope of **const** is exactly the same as **let**, that is why it will be at **block level** and not at **global level** unlike **var**. [Link to example](https://dinamicjs.netlify.app/Y29uc3QgbXlOdW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdOw0KDQpmb3IgKGNvbnN0IG51bWJlciBvZiBteU51bWJlcnMpIHsNCiAgICBjb25zb2xlLmxvZyhudW1iZXIpOw0KfQ0KDQpjb25zb2xlLmxvZyhudW1iZXIpOyAvLyBSZWZlcmVuY2VFcnJvcjogbnVtYmVyIGlzIG5vdCBkZWZpbmVk)

```javascript
const myNumbers = [1, 2, 3, 4, 5];

for (const number of myNumbers) {
  console.log(number);
}

console.log(number); // ReferenceError: number is not defined
```

## Conclusions

We have seen that using **var** we can declare global variables which can be mutated, then we have seen that the use of **let** to declare a variable can also be mutated as with **var** but the scope of this is at **block level** and finally we have found that declaring a variable with **const** this can not be mutated and the scope of this will be the same as that of the reserved word **let**, ie it will be at **block level**.

To conclude this article we must **remark** that currently the use of **var** is **discouraged** and use instead **let** or **const**, because its use can give problems as those already explained in the article.
