import {bind} from "lodash"

export const name = "maret"
const name2 = "nazmul"

// Arrow fn w/ another nested arrow fn.
const foo = () => {
  console.log(this)        // `this` is an Object that contains `name` property, but not `name2`.
  const nestedInFoo = () => {
    console.log(this)
  }
  nestedInFoo()            // nestedInFoo() -> `this` is same as above.
  bind(nestedInFoo, foo)() // nestedInFoo() -> `this` is same as above.
}
foo()

// Arrow fn w/ another nested arrow fn.
const foo2 = () => {
  console.log(this)         // `this` is an Object that contains `name` property, but not `name2`.
  const nestedInFoo = () => {
    console.log(this)
  }
  nestedInFoo()             // nestedInFoo() -> `this` is same as above.
  bind(nestedInFoo, foo2)() // nestedInFoo() -> `this` is same as above.
}
bind(foo2, "randomstring")()

