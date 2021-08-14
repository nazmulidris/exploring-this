import {bind} from "lodash"

class Class1 {
  constructor(readonly name = "default") {
  }
  
  foo() {
    console.log(this)              // `this` is object of Class1 (obj1).
    function nestedInFoo() {
      console.log(this)
    }
    
    nestedInFoo()                  // In nestedInFoo() -> `this` is undefined.
    bind(nestedInFoo, this.foo)()  // In nestedInFoo() -> `this` is foo() method.
  }
}

const obj1 = new Class1("maret")
// obj1.foo()

class Class2 {
  constructor(readonly name = "default") {
  }
  
  foo = () => {
    console.log(this)              // `this` is object of Class1 (obj2).
    const nestedInFoo = () => {
      console.log(this)
    }
    nestedInFoo()                  // In nestedInFoo() -> `this` is same as above.
    bind(nestedInFoo, this.foo)()  // In nestedInFoo() -> `this` is same as above.
  }
}

const obj2 = new Class2("nazmul")
obj2.foo()
