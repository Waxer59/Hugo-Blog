---
title: 'Your handheld guide to Markdown'
date: 2023-01-26
readTime: '20 minutes to read'
technology: 'markdown'
draft: false
---

Markdown is a markup language used to create documents. It is easy to use, which makes it a very effective tool. When writing in Markdown, your text will be automatically formatted, such as headings, bold or italic text, among others.

It is a very versatile markup language, as it can be used to create a variety of documents, such as PDFs, websites, books, presentations, notes, emails and documentation. One of the great advantages of Markdown is that documents created with this language are easy to read on any system, since no special program is needed to open them *(like word)*, which makes it very useful and powerful.

This makes Markdown an important tool to know and use due to its great versatility. Therefore it is necessary to understand how it works in order to get the most out of it.

## **Let's get started!**

The first thing we need to know to get started is that Markdown uses the **.md** extension to create documents.

Now that we know the basics, we can start explaining how to use it.

### Headers

Markdown uses the operator *( # )* to define a header. But this does not stop here and the concatenacion of this operator allows us to adjust the size of this, there are six types of sizes being the first size *( 1 )* the largest and the sixth *( 6 )* the smallest, commonly we will see these named as ***h< size >*** *( "h" refers to "header" )*. [Link to example](https://www.digitalocean.com/community/markdown?md=%23+I+am+an+h1+header%0A%23%23+I+am+an+h2+header%0A%23%23%23+I+am+an+h3+header%0A%23%23%23%23+I+am+an+h4+header%0A%23%23%23%23%23+I+am+an+h5+header%0A%23%23%23%23%23%23+I+am+an+h6+header)

```markdown
# I am an h1 header
## I am an h2 header
### I am an h3 header
#### I am an h4 header
##### I am an h5 header
###### I am an h6 header
```

## Paragraphs, text decorators and separators

### Paragraphs

In Markdown to write paragraphs we don't have to use any operator, and to separate between paragraphs we only have to leave a blank space between them. [Link to example](https://www.digitalocean.com/community/markdown?md=I+am+a+paragraph%21%0A%0AI+am+another+paragraph%21)

```markdown
I am a paragraph!

I am another paragraph!

```
### Decorators

In Markdown we can ~~strike out~~ using the *( ~ )* operator twice on both sides of the text, italicize our text using the *( * )* operator once on both sides of the text, bold our text using the *( * )* operator twice on both sides of the text and we can even underline our text using the *( _ )* operator twice on both sides of the text. **I show you how in the following example!**. [Link to example](https://www.digitalocean.com/community/markdown?md=%7E%7EI+am+a+strikethrough+text%21%7E%7E%0A%0A*I+am+in+italics*%0A%0A**I+am+bold+text**%0A%0A__I+am+underlined+text__)

```markdown
~~I am a strikethrough text!~~

*I am in italics*

**I am bold text**

__I am underlined text__


```

> It is important to mention that these can be combined, an example of this can be: a text in italic ***bold*** or a text in italic ~~***bold and strikethrough***~~, etc.

### Separators

In Markdown we can separate our text by using horizontal lines in it. There are three different ways to create a horizontal line in our text. **Let's see them!** [Link to example](https://www.digitalocean.com/community/markdown?md=%23+Separate+me%21%21%21%0A%0A***%0A%23+Another+way+to+separate+me%21%0A%0A---%0A%23+Another+way+to+break+me+apart%21%0A%0A___)

```markdown
# Separate me!!!

***
# Another way to separate me!

---
# Another way to break me apart!

___
```

> Any form is valid **use the one you like best!**

## Links and images

In Markdown the assertion of images and links is quite similar so these two are side by side. In the following example I show you how to insert images and links. [Link to example](https://www.digitalocean.com/community/markdown?md=%5BI+am+a+link+to+google%5D%28https%3A%2F%2Fwww.google.es%2F%29%0A%21%5BI+am+an+image+of+a+waterfall%5D%28https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544519954-6aeb4816f0ab%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1974%26q%3D80%29)

```markdown
[I am a link to google](https://www.google.es/)
![I am an image of a waterfall](https://images.unsplash.com/photo-1544519954-6aeb4816f0ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)

```

## Lists

In Markdown there are three types of **ordered**, **unordered** and **task** lists.

### Ordered lists

Unordered lists are defined as follows. [Link to example](https://www.digitalocean.com/community/markdown?md=1.+I+am%0A2.+A%0A3.+List%0A4.+Ordered%0A5.+%3A%29)

```markdown
1. I am
2. A
3. Ordered
4. List
5. :)
```

### Unordered lists

Ordered lists can be defined in two different ways. [Link to example](https://www.digitalocean.com/community/markdown?md=*+I+am%0A*+A%0A*+unordered%0A*+list%0A*+%3A%29)

```markdown
* I am
* A
* unordered
* list
* :)
```
[Link to example](https://www.digitalocean.com/community/markdown?md=-+I+am%0A-+A%0A-+unordered%0A-+list%0A-+%3A%29)

```markdown
- I am
- A
- unordered
- list
- :)
```

> Any form is valid **use the one you like best!**

### Task lists

Task lists are defined as follows. [Link to the example](https://www.digitalocean.com/community/markdown?md=-+%5Bx%5D+Hello%0A-+%5B+%5D+World%0A-+%5B+%5D+Wadev)

```markdown
- [x] Hello
- [ ] World
- [ ] Wadev
```

## Code blocks

Markdown also allows us the assertion of code blocks in our document, highlighting it if we indicate the language, **I show you how!**. [Link to the example](https://www.digitalocean.com/community/markdown?md=%60%60%60+javascript%0Aconsole.log%28%22Hello+world%21%22%29%0A%60%60%60)

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-markdown" data-lang="markdown"><span class="line"><span class="cl">´´´javascript
</span></span><span class="line"><span class="cl">console.log("Hello World!")
</span></span><span class="line"><span class="cl">´´´
</span></span></code></pre></div>

## Tables

The tables are defined as follows. [Link to the example](https://www.digitalocean.com/community/markdown?md=%7C+Column1+++++%7C+Column2+++++%7C%0A%7C-------------%7C-------------%7C%0A%7C+Row1Column1+%7C+Row1Column2+%7C%0A%7C+Row2Column1+%7C+Row2Column2+%7C)

```markdown
| Column1     | Column2     |
|-------------|-------------|
| Row1Column1 | Row1Column2 |
| Row2Column1 | Row2Column2 |
```

> **IMPORTANT**. The lines that make the separation between the of each column and the rows that it is are below this ***( |---------------| )*** this one because 
> otherwise Markdown will not detect that it is a table that you are putting in.

## Quotes

To add quotes to the document we only have to use the operator *( > )* in front of the text we want to quote, let's see an example 
an example. [Link to the example](https://www.digitalocean.com/community/markdown?md=%3E+I+am+a+quote%21%21%21%21)

```markdown
> I am a quote!!!!
```

## Conclusions

In this article we have seen the different operators available in Markdown, a simple and easy-to-use markup language used for writing and formatting text on a variety of platforms.
