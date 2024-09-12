const frontendQuizQuestions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperText MultiLanguage", "HyperText Markup Locator"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<script>", "<css>", "<stylesheet>"],
      answer: "<style>"
    },
    {
      question: "What is the default value of the `position` property in CSS?",
      options: ["static", "relative", "absolute", "fixed"],
      answer: "static"
    },
    {
      question: "How do you select an element with the class name 'my-class' in CSS?",
      options: [".my-class", "#my-class", "my-class", "class=my-class"],
      answer: ".my-class"
    },
    {
      question: "Which method is used to attach an event handler to an HTML element in JavaScript?",
      options: ["addEventListener()", "attachEvent()", "onEvent()", "handleEvent()"],
      answer: "addEventListener()"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading Script Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "What is the purpose of the `z-index` property in CSS?",
      options: ["To specify the stack order of elements", "To adjust the size of elements", "To set the opacity of elements", "To change the font size of elements"],
      answer: "To specify the stack order of elements"
    },
    {
      question: "What is the use of the `flex` property in CSS Flexbox?",
      options: ["To define how a flex item will grow relative to the rest", "To align flex items", "To set the width of flex items", "To set the margin of flex items"],
      answer: "To define how a flex item will grow relative to the rest"
    },
    {
      question: "In React, what is the purpose of `useState` hook?",
      options: ["To manage state in functional components", "To handle side effects", "To perform context management", "To define prop types"],
      answer: "To manage state in functional components"
    },
    {
      question: "Which method is used to update the state in a React component?",
      options: ["setState()", "updateState()", "changeState()", "modifyState()"],
      answer: "setState()"
    },
    {
      question: "What does `JSON` stand for?",
      options: ["JavaScript Object Notation", "JavaScript Object Notation Syntax", "JavaScript Online Notation", "JavaScript Original Notation"],
      answer: "JavaScript Object Notation"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of the `key` prop in React?",
      options: ["To uniquely identify elements in a list", "To manage component state", "To pass data between components", "To handle events"],
      answer: "To uniquely identify elements in a list"
    },
    {
      question: "What does `API` stand for?",
      options: ["Application Programming Interface", "Application Programming Interaction", "Advanced Programming Interface", "Advanced Programming Interaction"],
      answer: "Application Programming Interface"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["color", "font-color", "text-color", "background-color"],
      answer: "color"
    },
    {
      question: "How do you create a comment in HTML?",
      options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "# This is a comment"],
      answer: "<!-- This is a comment -->"
    },
    {
      question: "In JavaScript, how do you check if a variable `x` is an array?",
      options: ["Array.isArray(x)", "x.isArray()", "typeof x === 'array'", "x instanceof Array"],
      answer: "Array.isArray(x)"
    },
    {
      question: "What is the purpose of the `async` keyword in JavaScript?",
      options: ["To define asynchronous functions", "To create synchronous functions", "To handle errors", "To define variables"],
      answer: "To define asynchronous functions"
    },
    {
      question: "What is the main function of the `ReactDOM.render` method?",
      options: ["To render a React element into the DOM", "To update the React state", "To handle routing", "To manage component lifecycle"],
      answer: "To render a React element into the DOM"
    },
    {
      question: "Which CSS property is used to control the visibility of an element?",
      options: ["visibility", "display", "opacity", "visibility"],
      answer: "visibility"
    },
    {
      question: "What is the purpose of the `useEffect` hook in React?",
      options: ["To handle side effects in functional components", "To manage state", "To define component structure", "To handle events"],
      answer: "To handle side effects in functional components"
    },
    {
      question: "What does the `transform` property do in CSS?",
      options: ["Applies a 2D or 3D transformation to an element", "Changes the position of an element", "Adjusts the opacity of an element", "Sets the font size of an element"],
      answer: "Applies a 2D or 3D transformation to an element"
    },
    {
      question: "Which HTML tag is used to link external JavaScript files?",
      options: ["<link>", "<script>", "<js>", "<import>"],
      answer: "<script>"
    },
    {
      question: "What is a closure in JavaScript?",
      options: ["A function that retains access to its lexical scope", "An error handling mechanism", "A method to create objects", "A way to manage asynchronous code"],
      answer: "A function that retains access to its lexical scope"
    },
    {
      question: "How can you add a comment in a JavaScript file?",
      options: ["// This is a comment", "/* This is a comment */", "## This is a comment", "# This is a comment"],
      answer: "// This is a comment"
    },
    {
      question: "What is the role of the `virtual DOM` in React?",
      options: ["To optimize updates to the actual DOM", "To manage component state", "To handle routing", "To define component structure"],
      answer: "To optimize updates to the actual DOM"
    },
    {
      question: "What does `npm` stand for?",
      options: ["Node Package Manager", "Node Program Manager", "Node Project Manager", "Node Programming Manager"],
      answer: "Node Package Manager"
    },
    {
      question: "What is the purpose of the `bind()` method in JavaScript?",
      options: ["To set the `this` value of a function", "To create a new function", "To bind events", "To manage asynchronous code"],
      answer: "To set the `this` value of a function"
    },
    {
      question: "How do you select an element by its ID in CSS?",
      options: ["#id", ".id", "id", "element#id"],
      answer: "#id"
    },
    {
      question: "What is the purpose of the `redux` library in React applications?",
      options: ["To manage application state", "To handle routing", "To optimize performance", "To manage component lifecycle"],
      answer: "To manage application state"
    },
    {
      question: "Which HTML tag is used to define a navigation link?",
      options: ["<nav>", "<link>", "<a>", "<nav-link>"],
      answer: "<a>"
    },
    {
      question: "What is the `event delegation` concept in JavaScript?",
      options: ["Attaching a single event listener to a parent element", "Handling multiple events on the same element", "Delegating event handling to child elements", "Creating custom events"],
      answer: "Attaching a single event listener to a parent element"
    },
    {
      question: "Which CSS property is used to change the font size of text?",
      options: ["font-size", "text-size", "font-style", "text-style"],
      answer: "font-size"
    },
    {
      question: "How do you define a function in JavaScript?",
      options: ["function name() {}", "def name() {}", "func name() {}", "function name[] {}"],
      answer: "function name() {}"
    },
    {
      question: "What is the purpose of the `getElementById` method in JavaScript?",
      options: ["To select an element by its ID", "To create a new element", "To modify an element's style", "To get the value of an input field"],
      answer: "To select an element by its ID"
    },
    {
      question: "What is the purpose of `Webpack` in frontend development?",
      options: ["To bundle and optimize JavaScript and other assets", "To handle routing", "To manage component state", "To optimize CSS"],
      answer: "To bundle and optimize JavaScript and other assets"
    },
    {
      question: "Which JavaScript method converts a JSON string into a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
      answer: "JSON.parse()"
    },
    {
      question: "What is the purpose of the `useReducer` hook in React?",
      options: ["To manage complex state logic in functional components", "To handle side effects", "To manage component lifecycle", "To handle context"],
      answer: "To manage complex state logic in functional components"
    },
    {
      question: "How do you create a React functional component?",
      options: ["function ComponentName() {}", "const ComponentName = () => {}", "class ComponentName extends React.Component {}", "Both a and b"],
      answer: "Both a and b"
    }
  ];
  
  export default frontendQuizQuestions;
  