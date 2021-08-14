import {State} from "../redux"

test("👍 test_addItem_creates_deepcopy_of_state", () => {
  const stateObject: State = new State("stateObject")
  const anotherStateObject: State = stateObject.addItem(1, "foo")
  const yetAnotherStateObject: State = anotherStateObject.addItem(2, "bar")

  expect(stateObject.todoItems.length).toEqual(0)
  expect(anotherStateObject.todoItems.length).toEqual(1)
  expect(yetAnotherStateObject.todoItems.length).toEqual(2)
})

// This test always fails!
test("💣 test_addItemArrowFnBug_creates_deepcopy_of_state", () => {
  const stateObject: State = new State("stateObject")
  const anotherStateObject: State = stateObject.addItemArrowFnBug(1, "foo")
  const yetAnotherStateObject: State = anotherStateObject.addItemArrowFnBug(2, "bar")

  expect(stateObject.todoItems.length).toEqual(0)
  expect(anotherStateObject.todoItems.length).toEqual(1)
  expect(yetAnotherStateObject.todoItems.length).toEqual(2)
})

test("👍 test_addItem_does_not_modify_self", () => {
  const myState = new State()
  myState.addItem(1, "foo")
  myState.addItem(2, "bar")
  expect(myState.todoItems.length).toEqual(0)
})
