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
        <Deck transition={["fade"]} transitionDuration={200} progress="bar">
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

          <Slide notes="Why am I talking about this" />

          <Slide notes="What triathlon and web development have in common">
            <Heading>Diversity</Heading>
          </Slide>

          <Slide notes="full-time django, full-time react, now working on both">
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
              textSize={28}
            />
          </Slide>

          <Slide notes="Events">
            <Heading>Events</Heading>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/simple_event.js")}
              margin="20px auto"
              textSize={28}
            />
          </Slide>

          <Slide>
            <Heading>That's all!</Heading>
            <Heading size={3}>Thank you</Heading>
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

          <Slide notes="What's so special">
            <Heading>Rendering</Heading>
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

          <Slide notes="Prepare for JSX" />

          <Slide>
            <Heading>What's the JSX?</Heading>
          </Slide>

          <Slide>
            <Heading>JSX</Heading>
            <Text>Optional JS preprocessor</Text>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/simple_component.js")}
              margin="20px auto"
              textSize={28}
            />
          </Slide>

          <Slide>
            <Heading>Compiled JSX</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/simple_component.js")}
              margin="20px auto"
              textSize={28}
            />
          </Slide>

          <Slide notes="Not revolution, but evolution">
            <Heading>JSX is evolution</Heading>
            <Heading>not revolution</Heading>
          </Slide>

          <Slide notes="Prepare for components vs. templates" />

          <Slide notes="Django and React, another difference">
            <Heading>Components vs. Templates</Heading>
          </Slide>

          <Slide>
            <Heading>Django Templates</Heading>
            <Heading size={2} fit>Top to bottom</Heading>
          </Slide>

          <Slide>
            <Heading>React Components</Heading>
            <Heading size={2} fit>Bottom to top</Heading>
          </Slide>

          <Slide>
            <Heading fit>Bootstrap (HTML)</Heading>
            <CodePane
              lang="html"
              source={require("!!raw!../assets/bootstrap_component.html")}
              margin="20px auto"
              textSize={28}
            />
          </Slide>

          <Slide>
            <Heading fit>Bootstrap (JSX)</Heading>
            <CodePane
              lang="jsx"
              source={require("!!raw!../assets/bootstrap_component.js")}
              margin="20px auto"
              textSize={28}
            />
          </Slide>

          <Slide>
            <Heading>Advantages</Heading>
            <Appear><Text>Separation of concerns</Text></Appear>
            <Appear><Text>Composable</Text></Appear>
            <Appear><Text>Testable</Text></Appear>
          </Slide>


          <Slide>
            <Heading>Summary</Heading>
            <Appear><Text>It's a view library</Text></Appear>
            <Appear><Text>Render state, not changes</Text></Appear>
            <Appear><Text>Components, not templates</Text></Appear>
          </Slide>

          <Slide>
            <Heading>React in Django</Heading>
          </Slide>

          <Slide>
            <Heading>Facade</Heading>
            <Text>Take a Django app and add React frontend</Text>
          </Slide>

          <Slide>
            <Heading>Advantages</Heading>
            <Appear><Text>Easy! Try it now!</Text></Appear>
            <Appear><Text>Usable with existing project</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Disadvantages</Heading>
            <Appear><Text>Not DRY</Text></Appear>
            <Appear><Text>Poor SEO</Text></Appear>
          </Slide>

          <Slide />

          <Slide>
            <Heading>Full-stack React</Heading>
          </Slide>

          <Slide>
            <Heading fit>Replace Views and Templates</Heading>
            <Appear><Text>Django - API</Text></Appear>
            <Appear><Text>React - frontend & backend</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Server-side React</Heading>
            <Appear><Text>Fetch initial data</Text></Appear>
            <Appear><Text>Render initial markup</Text></Appear>
            <Appear><Text>Later, attach JS in browser</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Advantages</Heading>
            <Appear><Text>DRY</Text></Appear>
            <Appear><Text>Good for SEO</Text></Appear>
            <Appear><Text>Modular design</Text></Appear>
            <Appear><Text>(REST) API for free</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Disadvantages</Heading>
            <Appear><Text>Needs to replace existing code</Text></Appear>
            <Appear><Text>More complex</Text></Appear>
            <Appear><Text>Django Admin...</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Best usecase</Heading>
            <Appear><Text>Dynamic websites like GitHub</Text></Appear>
            <Appear><Text>Web applications (FB, Slack)</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Not so good for</Heading>
            <Appear><Text>Static websites (Archives)</Text></Appear>
          </Slide>

          <Slide notes="Django is a shield">
            <Heading>Security</Heading>
            <Text>Django is safe by default</Text>
            <Appear><Text>ExpressJS requires more setup</Text></Appear>
          </Slide>

          <Slide notes="Everything we want to use needs REST API">
            <Heading>The future</Heading>
            <Appear><Text>REST API for Django Admin</Text></Appear>
            <Appear><Text>REST API for Django Forms</Text></Appear>
            <Appear><Text>Anything we need...</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Django in React</Heading>
          </Slide>

          <Slide notes="When you remove everything from Django?">
            <Heading>What is Django?</Heading>
          </Slide>

          <Slide notes="Baked best practices and design decisions, shared among projects">
            <Heading>Best practices</Heading>
            <Text>And good design decisions</Text>
          </Slide>

          <Slide notes="All apps have the same installation procedure">
            <Heading>Opinionated framework</Heading>
            <Appear><Text>Good for reusable apps</Text></Appear>
          </Slide>

          <Slide notes="No framework, only starter kits or dev stacks">
            <Heading>What about ReactJS?</Heading>
          </Slide>

          <Slide>
            <Heading fit>Tip of the iceberg</Heading>
            <Appear><Text>Bundler and compiler (webpack, browserify)</Text></Appear>
            <Appear><Text>Data (Redux, Flux, ...)</Text></Appear>
            <Appear><Text>REST API (tons of libs)</Text></Appear>
          </Slide>

          <Slide notes="React isn't as mature as Django">
            <Heading>Best practices varies</Heading>
            <Text>And evolve very quickly</Text>
          </Slide>

          <Slide>
            <Heading>No reusable apps</Heading>
            <Text>Only components</Text>
          </Slide>

          <Slide>
            <Heading fit>Django-like React framework?</Heading>
            <Appear><Text>Reusable apps</Text></Appear>
            <Appear><Text>Configurable</Text></Appear>
          </Slide>

          <Slide>
            <Heading>Thank you</Heading>
            <Text lineHeight={2}>http://tricoder42.github.io/talk-react-django</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
