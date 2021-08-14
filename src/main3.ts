import {bind} from "lodash"

export const name = "maret"
const name2 = "nazmul"

// Arrow fn w/ nested normal fn.
const foo = () => {
  console.log(this)        // `this` is an Object that contains `name` property, but not `name2`.
  function nestedInFoo() {
    console.log(this)
  }
  nestedInFoo()            // nestedInFoo() -> `this` is undefined.
  bind(nestedInFoo, foo)() // nestedInFoo() -> `this` is foo() arrow fn.
}
foo()

// Arrow fn w/ nested normal fn.
const foo2 = () => {
  console.log(this)        // `this` is an Object that contains `name` property, but not `name2`.
  function nestedInFoo() {
    console.log(this)
  }
  nestedInFoo()            // nestedInFoo() -> `this` is undefined.
  bind(nestedInFoo, foo)() // nestedInFoo() -> `this` is foo() arrow fn.
}
bind(foo2, "randomstring")()