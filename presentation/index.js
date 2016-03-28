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
//import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css/normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactLogo: require("../assets/react-logo.png"),
  insertList: require("../assets/insert_list.png"),
  vdom: require("../assets/vdom.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#fff000",
  secondary: "black",
  tertiary: "black",
  quartenary: "black"
}, {
  primary: "Helvetica Neue",
  secondary: "Helvetica Neue",
  tertiary: "Helvetica Neue",
}
);


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={200}>
          {/* What is ReactJS? */}
          <Slide notes="Introduction and thank you">
            <Heading fit caps>What is ReactJS</Heading>
            <Heading lineHeight={2} fit>and why there’s such a buzz around it</Heading>
          </Slide>

          <Slide notes="full-stack developer, Brno, PyCon CZ organizer">
            <Heading size={1}>Tomáš Ehrlich</Heading>
            <Heading size={2}>@tomas_ehrlich</Heading>
          </Slide>

          <Slide notes="Summary in one nickname">
            <Heading>Tricoder</Heading>
            <Appear><Text>Triathlon + Programming</Text></Appear>
            <Appear><Text textSize="0.8em">... and hidden reference to Star Trek.</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Triathlon</Heading>
            <Appear><Text>Swim. Bike. Run.</Text></Appear>
            <Appear><Text>Eat. Sleep.</Text></Appear>
          </Slide>

          <Slide>
            <Heading fit>Web development</Heading>
            <Appear><Text>Backend. Frontend.</Text></Appear>
            <Appear><Text>UX. Design. DevOps.</Text></Appear>
          </Slide>

          <Slide notes="What triathlon and web development have in common">
            <Heading>Diversity</Heading>
          </Slide>

          <Slide>
            <Heading>Shared knowledge</Heading>
          </Slide>

          <Slide>
            <Heading>Outline</Heading>
            <Appear><Text>Brief intro to ReactJS</Text></Appear>
            <Appear><Text>React in Django</Text></Appear>
            <Appear><Text>Django in React</Text></Appear>
          </Slide>

          <Slide bgColor="white" notes="ReactJS motto, like Django is framework for perfectionists with deadlines">
            <Image src={images.reactLogo.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Heading size={2}>Javascript library</Heading>
            <Heading size={2} fit>for building user interfaces</Heading>
          </Slide>

          <Slide notes="Websites, Mobile Apps">
            <Heading>User interfaces</Heading>
          </Slide>

          <Slide>
            <Heading>View in MVC</Heading>
            <Appear>
              <Heading size={2}>Presentation logic</Heading>
            </Appear>
          </Slide>

          <Slide notes="Compared to Django, it's a template engine.">
            <Heading>Template engine</Heading>
            <Appear>
              <Text>Transform data into UI</Text>
            </Appear>
          </Slide>

          <Slide notes="Example: This is not HTML.">
            <Heading>Component</Heading>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/simple_component.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide notes="Events">
            <Heading>Events</Heading>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/simple_event.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading>That's all!</Heading>
            <Heading size={2}>Thank you</Heading>
          </Slide>

          <Slide>
            <Heading>ReactJS</Heading>
            <Heading size={3} fit>Renders data, handles events</Heading>
          </Slide>

          <Slide bgColor="white" notes="Render data and handle events (event handlers are attached to DOM elements)">
            <BlockQuote>
              <Quote textColor="black">Do one thing<br /> and do it well</Quote>
              <Cite>Unix philosophy</Cite>
            </BlockQuote>
          </Slide>

          <Slide notes="Speed of templates is rarely a bottleneck">
            <Heading margin="40px auto" fit>Server-side rendering</Heading>
            <Appear><Text>Take data, render HTML</Text></Appear>
            <Appear><Text>Single render, without event handlers</Text></Appear>
          </Slide>

          <Slide notes="Speed matters">
            <Heading margin="40px auto" fit>Client-side rendering</Heading>
            <Appear><Text>Take data, render DOM</Text></Appear>
            <Appear><Text fit>Re-render on change, attach/detach event handlers</Text></Appear>
          </Slide>

          {/* Bookmark */}

          <Slide notes="Reasoning about changes">
            <Heading>Handling data change is hard</Heading>
          </Slide>

          <Slide notes="On every change, re-render all data">
            <Heading fit>Re-render all data</Heading>
            <Appear><Text>... but that's so slow!</Text></Appear>
          </Slide>

          <Slide>
            <Heading fit>DOM operations are expensive</Heading>
          </Slide>

          <Slide notes="Pagination in Articles list">
            <Heading>Virtual DOM</Heading>
            <Image src={images.vdom} margin="0px auto 40px" height="400px"/>
          </Slide>

          <Slide>
            <Heading>Diff is fast</Heading>
            <Heading size={2} fit>DOM speed is always a bottleneck</Heading>
          </Slide>

          <Slide>
            <Heading>What the JSX?</Heading>
          </Slide>

          <Slide>
            <Heading>JSX</Heading>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/simple_component_es6.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading>Compiled JSX</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/simple_component_es6.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide notes="Not revolution, but evolution">
            <Heading>JSX is evolution</Heading>
            <Heading>not revolution</Heading>
          </Slide>

          <Slide>
            <Heading>Django Templates</Heading>
            <Heading size={2} fit>Inheritance and custom tags</Heading>
          </Slide>

          <Slide>
            <Heading>React Components</Heading>
            <Heading size={2}>Separation of concerns</Heading>
          </Slide>

          <Slide>
            <Heading>Bootstrap in HTML</Heading>
            <CodePane
              lang="html"
              source={require("!!raw!../assets/bootstrap_component.html")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading>Bootstrap in JSX</Heading>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/bootstrap_component.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading>Advantages</Heading>
            <Appear><Text>Composable</Text></Appear>
            <Appear><Text>Testable</Text></Appear>
          </Slide>


          <Slide>
            <Heading>Summary</Heading>
            <Appear><Text>It's a view library</Text></Appear>
            <Appear><Text>Render state, not changes</Text></Appear>
            <Appear><Text>Components, not templates</Text></Appear>
          </Slide>

          <Slide>React in Django apps</Slide>

          <Slide notes="">
            <Heading fit>Data manipulation</Heading>
            <Text>Example: Insert item into list</Text>
            <Image src={images.insertList.replace("/", "")} margin="0px auto 40px" height="400px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
