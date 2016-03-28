function HelloWorld(props) {
  var name = props.name || "World";
  return <div>Hello {name}</div>;
}

ReactDOM.render(<HelloWorld name="Budapest" />, mountNode);
