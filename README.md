

The project is forked from https://github.com/asadsahi/AspNetCoreSpa. Wich basically is Asp.Net Core & Angular SPA Fullstack application.
While there is great job done with providing all the technical gluing and configuration the original project is mostly mainstream one. It won't provide you any systematic advantages in development efficience (read project price) over other projects having the same technology stack. General information of how to set up the project and of original features may be found in the README_old.md

Withing this fork I am going to demonstrate advanced and more efficient methods of developing B2B SPAs. First two features below are kind of the advantages. Recent 6 years I have spent making B2B projects. Below are the things which I demonstrate here.

## Features
1. Generation of Typescript from C# DTOs (data transfer object) definitions. Transpiling of simple calculations also gets done. DTOs with controller methods usually comprises most of clien/server API definition. In B2B projects the client/server communication is very reach. That is why such generation and authomatic maintenance is very beneficial.

2. Feature oriented folders structure (FOS) (and the business project in general). The transition to the perfect FOS structure is half done. This can be considered as omission or as intention. The problem is that the structure is one most fluid aspects of a project. The hierarchy of folders is not some theoretical conspect or something built in stone. While my the main concern is to make the semantic of the structure as close to the semantic of customer requirements there are other concerns. Example of such concerns: 
	+ Technical aspects like logging, general error handling, auditing
	+ Initial state of structure and price to transform it. Often projects are handled over from other developer and it may have very inefficient structure. I have seen projects with up to 20 VS projects and hence 20 root folders...
	+ Various build dependencies can lead to physically unavoidable fragmentation of the solution onto more projects. While it is unavoidable I advocate for trying to have as less roots of the folders as possible. For example in some projects I have used shared visual studio projects for this.
I consider transition of structure of the solution to FOS is about 75% done. Percent designate the amount of gains current structure does provide comparing to the original structure (traditional). Finishing this is in my TODO list.

3. ...


Both these features are nothing but mere manifistation of core software developments principle - Readability. Wich in turn leads to such thing like:
- KISS - keep it simple, stupid
- DRY - don't repeat yourself
...

## Vocabulary

+ Business project. For our purpose it closely maps to the Visual Studio solution
+ VS Project - Visual Studio project.
+ Clien/server API definition - clien/server contract. As I recollect contract stuff is well described in "Code Complete" book.
...

## Topics in detail

[C# to Typescript tool](README_Cs2Ts.md)

[Domain Driven Solution Structure (FOS is synonym)] (https://alehro.github.io/docs/FeatureOrientedStructureOfSolution.html)

## Literature

- "Algorythms to live by", Brian Christian, Tom Griffiths. This book is to think about search/sort operations our brain does while working on code.
- "Your brain at work", David Rock. This is about our brain. Provides some understanding of the price of the search/sort.
- "Data Structures and Algorithms". Aho Hopcroft, Ullman. This is to remind about trees (apply to folders in our case), computation complexity etc. Good old classics.
- Here should be something about code readability and simplicity. Can't recollect for now. May be even something of Donald Knuth or Leslie Lamport.


