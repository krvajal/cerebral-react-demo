//An action is just a function.
// What makes an action different from a normal function though
// is that it receives only one argument, created by Cerebral.
// It is called the context.
// Actions are “low level” and imperative.
// There is no declarative code without some imperative code behind it.

//  example function getting the state
export function getUser({ state }) {}
export function setUser({}) {}

// props
// When a signal is executed a payload can be passed into it,
// called props. That means every action in the defined signal has access to these props.
// the props are common to all signals
export function updateFoo({ state, props }) {
  state.set("foo", props.foo);
}

// current demo code

export function setName({ state, props }) {
  state.set("name", props.name);
  state.set("hasName", true);
}
