// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactLogo: require("../assets/react-logo.png"),

  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme();


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          {/* What is ReactJS? */}
          <Slide bgColor="primary">
            <Heading fit caps>What is ReactJS</Heading>
            <Heading lineHeight={2} fit>and why there’s such a buzz around it</Heading>
          </Slide>

          <Slide>
            <Image src={images.reactLogo.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Heading size={2}>A javascript library for building user interfaces</Heading>
          </Slide>

          <Slide notes="Website, Mobile App">
            <Heading>User interfaces</Heading>
          </Slide>

          <Slide>
            <Heading>View in MVC</Heading>
            <Heading size={2}>Presentation logic</Heading>
          </Slide>

          <Slide notes="Compared to Django, it's a templating engine.">
            <Heading>Templating engine</Heading>
          </Slide>

          <Slide notes="This is not HTML.">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide notes="Render data and handle events (event handlers are binded to DOM elements)">
            <BlockQuote>
              <Quote>Do one think a do it well</Quote>
              <Cite>Unix philosophy</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading>Server-side rendering</Heading>
          </Slide>

          <Slide>
            <Heading>Client-side rendering</Heading>
          </Slide>

          <Slide notes="On every change, rerender all data">
            <Heading>Render state (not changes)</Heading>
          </Slide>

          <Slide>
            <Heading>Virtual DOM</Heading>
          </Slide>

          <Slide>
            <Heading>What the JSX?</Heading>
          </Slide>

          <Slide>
            <Heading>Django vs. React</Heading>
          </Slide>

          <Slide>
            <Heading>Django Templates</Heading>
          </Slide>

          <Slide>
            <Heading>React Components</Heading>
          </Slide>

          <Slide>
            <Heading>Summary</Heading>
            <List>
              <Appear><ListItem>View</ListItem></Appear>
              <Appear><ListItem>Declarative</ListItem></Appear>
              <Appear><ListItem>Components</ListItem></Appear>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
