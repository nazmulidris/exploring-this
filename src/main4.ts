import {bind} from "lodash"

export const name = "maret"
const name2 = "nazmul"

// Fn w/ nested arrow fn.
function foo() {
  console.log(this)         // `this` is undefined.
  const nestedInFoo = () => {
    console.log(this)
  }
  nestedInFoo()             // In nestedInFoo() -> `this` is undefined.
  bind(nestedInFoo, foo)()  // In nestedInFoo() -> `this` is undefined.
}

foo()

// Fn w/ nested arrow fn.
function foo2() {
  console.log(this)         // `this` is "randomstring".
  const nestedInFoo = () => {
    console.log(this)
  }
  nestedInFoo()             // In nestedInFoo() -> `this` is "randomstring".
  bind(nestedInFoo, foo2)() // In nestedInFoo() -> `this` is "randomstring".
}

bind(foo2, "randomstring")()
