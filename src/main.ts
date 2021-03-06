import {bind} from "lodash"

export const name = "maret"
const name2 = "nazmul"

// Fn w/ another nested fn.
function foo() {
  console.log(this)         // `this` is undefined.
  function nestedInFoo() {
    console.log(this)
  }
  nestedInFoo()             // In nestedInFoo() -> `this` is undefined.
  bind(nestedInFoo, foo)()  // In nestedInFoo() -> `this` is foo().
}
foo()

// Fn w/ another nested fn.
function foo2() {
  console.log(this)         // `this` is "randomstring".
  function nestedInFoo() {
    console.log(this)
  }
  nestedInFoo()             // In nestedInFoo() -> `this` is undefined.
  bind(nestedInFoo, foo2)() // In nestedInFoo() -> `this` is foo2().
}
bind(foo2, "randomstring")()
