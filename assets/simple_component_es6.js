const HelloWorld = (props = {name: "World"}) =>
  <div>Hello {props.name}</div>;

ReactDOM.render(<HelloWorld name="Budapest" />, mountNode);
