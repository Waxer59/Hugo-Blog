---
title: 'What is Go?'
date: 2023-02-13
readTime: '5 minutes to read'
technology: 'go'
draft: false
---

**Go** or **Golang** is an open source programming language developed by Google. It was released in 2009 and has since gained popularity thanks to its unique features, such as its simple syntax, its ability to create efficient programs, and its focus on simplicity and clarity. 

**Go** is widely used in the creation of servers. This makes its community active and since **Go** is backed by **Google**, this means that we have a wealth of resources available to learn and develop our projects. [Go official website](https://go.dev/)

## **Hello world in Go**

To create our hello world the first thing we must do is to create our file with the extension **.go**, to then
insert inside this the following code:

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello World from Go!!")
}
```

To run this code we must have Go installed in our machine and execute the following command:

```powershell
go run <path-to-your-file>
```

### **Let's analyze the code a bit!**

* ***1º***: We indicate that this program is executable and not a package used by other programs with line 1 in "**package main**".
* ***2º***: We import the library "**fmt**" in line 3 in "**import "fmt "**" to be able to use the print function in console.
* ***3º***: We declare the function "**main()**" in line 4 in "**func main(){}**" so that it is executed at the start of our program.
* ***4º***: We print our *"Hello World from Go!!!"* in line 5 in "**fmt.Println("Hello World from Go!!!")**".

## **Go use cases**

Go, being a multipurpose language, has a variety of use cases in which it excels. Here are some of the most common uses of Go:

* **Cloud and network services**
* **CLI (Command Line Interface)**
* **Web development**
* **DevOps and SRE**

## **Go has a pet!**

As you can see in the title, the **Go** programming language has a mascot called **Gopher**, which you will find in many places representing **Go**.

[![gopher](/icons/gopher.png)](/icons/gopher.png)

## **Conclusion**

In conclusion Go is an excellent server-side programming language, it offers a perfect combination of simplicity, convenience and efficiency. Besides having a great and growing relevance in the world of *backend* programming, having a great community and being backed by a great company like **Google**.

That is why if you are considering using Go for your server-side projects, I highly recommend you to give it a try.
