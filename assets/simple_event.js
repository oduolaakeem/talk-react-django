function Link(props) {
  return (
    <a onClick={() => pushState(props.to)}>
      {props.children}
    </a>
  );
}

ReactDOM.render(<HelloWorld name="Budapest" />, el);
