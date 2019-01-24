# The new Immutability 

* Sean
* @swyx

## Why?

* Thread safety 
* But Javascript is single threaded!

* Mean Time Between Failures
  * Standard HDD 500k
  * SDD Higher mean time
* Fewer moving parts 
  * Less breakable 
  * More debuggable 
* Other options include code review, static typing, etc. 

## Make Software Explainable 

* also affects performance 
* full O(n^3)
* React O(n)
* React + Immutable O(log(n))

## Immutabile.js

* Reduces mental overhead
* getters, setters, has(finders)
* a ton of apis, possibly overkill
* persistent immutable data structures 
* structural sharing 

## Issues 

* interoperability 
* learning curve 

## Immer.js 

* Is js Proxy an interface builder? 
Reflect / Proxy 
* Immer leverages Reflect / Proxy ? 
* How is this different from the reactive objects in Vuex?
* Immutability != Persistent Immutable Data Structures
* use existing Objects and Arrays 
* enables immutability leveraging ES6 structures 


