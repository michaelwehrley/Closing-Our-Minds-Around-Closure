# Wrapping Our Minds Around Closure
Intro to Closure via [The Good Parts of Javascript and the Web by Douglas Crockford](https://frontendmasters.com/courses/good-parts-javascript-web/)

* `$ git clone https://github.com/michaelwehrley/Wrapping-Our-Minds-Around-Closure.git`

* Fetch all tags vis `git fetch --all --tags`

* Checkout the tag via `git checkout 1.0.0`

* In your browswer, visit `file:///path-to-this-file/Wrapping-Our-Minds-Around-Closure/index.html`

* You should see an h1 reading "Wrapping Our Minds Around Closure"

* Open the `index.js` to write your functions (via `subl .` etc).  The first function `identity` is defined, but the implemention is not completed yet - that is your first task.

## Our Goal Primary Goal

To write a *higher order function* that has access to the declaration context's scope (i.e., *closure*):

```js
var addf = liftf(add);

addf(3)(4) // 7
```

Resources: 
* [Douglas_Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford)
* Douglas Crockford's website: https://www.crockford.com/alphabet.html
* Kyle Simpson's [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

### Higher Order Functions

*Higher order functions* are functions that _**receive**_ other functions as paramter(s) and _**return**_ other function(s) as result(s).

### Problems

1. `identityf(3) // 3`

2. `add(3, 4) // 7`

3. `sub(3, 4) // -1`

4. `mul(3, 4) // 12`

5. `identityf`
```js
var three = identityf(3)

three() // 3
```
6. `addf`
```js
addf(3)(4) // 7
```

7. `liftf`
```js
var addf = liftf(add);

addf(3)(4) // 7
liftf(mul)(5)(6) // 30 
```
