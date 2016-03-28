const Link = (props) =>
  <a onClick={() => pushState(props.to)}>
    {props.children}
  </a>;


ReactDOM.render(<Link to="/home">Home</Link>, mountNode);
