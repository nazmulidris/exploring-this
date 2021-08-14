import _ = require("lodash")

export class State {
  constructor(readonly name: string = "default", readonly todoItems: Array<Todo> = []) {}
  
  toString() {
    return JSON.stringify(this.todoItems, null, 2)
  }
  
  /**
   * Note that changing this to an arrow function breaks it! By making `this`, point to the wrong
   * object!
   *
   * @param id
   * @param text
   */
  addItem(id: number, text: string): State {
    const copyOfState: State = _.cloneDeep<State>(this)
    const newTodoItem: Todo = {
      id,
      text,
      done: false,
    }
    copyOfState.todoItems.push(newTodoItem)
    return copyOfState
  }
  
  /**
   * Note that changing this to an arrow function breaks it! By making `this`, point to the wrong
   * object!
   *
   * @param id
   * @param text
   */
  addItemArrowFnBug = (id: number, text: string): State => {
    const copyOfState: State = _.cloneDeep<State>(this)
    const newTodoItem: Todo = {
      id,
      text,
      done: false,
    }
    copyOfState.todoItems.push(newTodoItem)
    return copyOfState
  }
}

export interface Todo {
  readonly id: number
  readonly text: string
  readonly done: boolean
}
