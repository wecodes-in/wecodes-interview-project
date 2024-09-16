export const dummyQuestionsReactJs = [
  {
    id: 1000,
    question: 'What is JSX in React?',
    technology: 'React.js',
    difficulty: 'Easy',
    answer: `
      JSX (JavaScript XML) is a syntax extension for JavaScript. It allows you to write HTML-like syntax directly in JavaScript, which is then transformed into React elements. JSX makes it easier to create React components by allowing a more declarative style of writing.
    `,
    example: true,
    codeSnippet: `
      const element = <h1>Hello, world!</h1>;
      ReactDOM.render(element, document.getElementById('root'));
    `
  },
  {
    id: 1001,
    question: 'What is the difference between functional and class components in React?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      Functional components are stateless components that accept props and return React elements. Class components, on the other hand, can maintain local state and lifecycle methods. With the introduction of React hooks, functional components can now manage state and lifecycle methods as well.
    `,
    example: true,
    codeSnippet: `
      // Functional Component
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }

      // Class Component
      class Welcome extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }
    `
  },
  {
    id: 1002,
    question: 'What are React Hooks?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      React Hooks are functions that let you use state and other React features (like lifecycle methods) in functional components. Common hooks include \`useState\`, \`useEffect\`, \`useRef\`, and \`useContext\`.
    `,
    example: true,
    codeSnippet: `
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
    `
  },
  {
    id: 1003,
    question: 'What is the useEffect hook, and how does it work?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      The \`useEffect\` hook allows you to perform side effects in functional components, such as fetching data, subscribing to events, or directly manipulating the DOM. It runs after the component renders and can also clean up after effects by returning a cleanup function.
    `,
    example: true,
    codeSnippet: `
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          document.title = \`You clicked \${count} times\`;

          // Cleanup function
          return () => {
            console.log('Cleaning up...');
          };
        }, [count]); // Dependency array to control when the effect runs

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
    `
  },
  {
    id: 1004,
    question: 'What is the useRef hook used for in React?',
    technology: 'React.js',
    difficulty: 'Advanced',
    answer: `
      The \`useRef\` hook allows you to persist values across renders without causing a re-render when the value changes. It is often used to access DOM elements directly or to keep a mutable value.
    `,
    example: true,
    codeSnippet: `
      import React, { useRef, useEffect } from 'react';

      function FocusInput() {
        const inputRef = useRef(null);

        useEffect(() => {
          inputRef.current.focus();  // Focus the input element on mount
        }, []);

        return (
          <input ref={inputRef} type="text" />
        );
      }
    `
  },
  {
    id: 1005,
    question: 'What is the difference between useMemo and useCallback?',
    technology: 'React.js',
    difficulty: 'Advanced',
    answer: `
      \`useMemo\` is used to memoize the result of a calculation, while \`useCallback\` is used to memoize a function. Both hooks optimize performance by preventing unnecessary re-renders when dependencies have not changed.
    `,
    example: true,
    codeSnippet: `
      import React, { useMemo, useCallback, useState } from 'react';

      function ExpensiveComponent({ compute }) {
        return <div>{compute()}</div>;
      }

      function ParentComponent() {
        const [count, setCount] = useState(0);

        // Memoizing an expensive computation
        const expensiveCalculation = useMemo(() => {
          return () => {
            return count * 1000;
          };
        }, [count]);

        // Memoizing a function
        const memoizedCallback = useCallback(() => {
          console.log('Function memoized!');
        }, []);

        return (
          <div>
            <button onClick={() => setCount(count + 1)}>
              Increment
            </button>
            <ExpensiveComponent compute={expensiveCalculation} />
          </div>
        );
      }
    `
  },
  {
    id: 1006,
    question: 'What is React context, and how do you use it?',
    technology: 'React.js',
    difficulty: 'Advanced',
    answer: `
      React Context is a way to pass data through the component tree without passing props down manually at every level. It is useful for managing global state (like themes or user authentication) in an app.
    `,
    example: true,
    codeSnippet: `
      import React, { createContext, useContext } from 'react';

      const ThemeContext = createContext('light');

      function ThemeComponent() {
        const theme = useContext(ThemeContext);
        return <div>The theme is {theme}</div>;
      }

      function App() {
        return (
          <ThemeContext.Provider value="dark">
            <ThemeComponent />
          </ThemeContext.Provider>
        );
      }
    `
  },
   {
    id: 1007,
    question: 'What is the difference between a controlled and uncontrolled component in React?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      A controlled component is an input element whose value is controlled by React's state, making React the source of truth for that form element. An uncontrolled component, on the other hand, relies on the DOM to store its current value, using a \`ref\` to access the value when needed.
    `,
    example: true,
    codeSnippet: `
      // Controlled Component
      class ControlledInput extends React.Component {
        constructor(props) {
          super(props);
          this.state = { value: '' };
        }
        
        handleChange = (event) => {
          this.setState({ value: event.target.value });
        };

        render() {
          return (
            <input 
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          );
        }
      }

      // Uncontrolled Component
      class UncontrolledInput extends React.Component {
        constructor(props) {
          super(props);
          this.inputRef = React.createRef();
        }

        handleSubmit = () => {
          alert(this.inputRef.current.value);
        };

        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" ref={this.inputRef} />
              <button type="submit">Submit</button>
            </form>
          );
        }
      }
    `
  },
  {
    id: 1008,
    question: 'What is React Fiber, and how does it improve React’s performance?',
    technology: 'React.js',
    difficulty: 'Advanced',
    answer: `
      React Fiber is a complete rewrite of React's reconciliation algorithm, introduced in React 16. It improves React's performance by breaking the rendering work into smaller units, making it more responsive and better at handling animations and user interactions without blocking the UI.
    `,
    example: false,
    codeSnippet: ``
  },
  {
    id: 1009,
    question: 'What is the purpose of the useReducer hook, and how does it differ from useState?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      \`useReducer\` is a hook that lets you manage more complex state logic compared to \`useState\`. It is often used when state logic depends on multiple sub-values or when the next state depends on the previous state. While \`useState\` returns a state variable and an updater function, \`useReducer\` returns a state and a dispatch function for triggering state changes.
    `,
    example: true,
    codeSnippet: `
      import React, { useReducer } from 'react';

      function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return { count: state.count - 1 };
          default:
            return state;
        }
      }

      function Counter() {
        const [state, dispatch] = useReducer(reducer, { count: 0 });

        return (
          <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
              Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
              Decrement
            </button>
          </div>
        );
      }
    `
  },
  {
    id: 1010,
    question: 'What is the purpose of the useLayoutEffect hook?',
    technology: 'React.js',
    difficulty: 'Advanced',
    answer: `
      \`useLayoutEffect\` is similar to \`useEffect\`, but it runs synchronously after all DOM mutations are completed. It is useful for performing DOM measurements or making DOM updates that must happen before the browser paints. Unlike \`useEffect\`, \`useLayoutEffect\` blocks the render until it finishes, which can affect performance if overused.
    `,
    example: true,
    codeSnippet: `
      import React, { useLayoutEffect, useRef, useState } from 'react';

      function LayoutEffectExample() {
        const [size, setSize] = useState({ width: 0, height: 0 });
        const divRef = useRef(null);

        useLayoutEffect(() => {
          const { offsetWidth, offsetHeight } = divRef.current;
          setSize({ width: offsetWidth, height: offsetHeight });
        }, []);

        return (
          <div>
            <div ref={divRef} style={{ width: '100%', height: '100px', backgroundColor: 'lightblue' }}>
              Resizable Div
            </div>
            <p>Width: {size.width}, Height: {size.height}</p>
          </div>
        );
      }
    `
  },
  {
    id: 1011,
    question: 'How does React’s key prop work, and why is it important?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      The \`key\` prop in React is used to uniquely identify elements in a list. It helps React efficiently update the DOM by identifying which items have changed, been added, or removed. Without keys, React may re-render the entire list, resulting in performance issues.
    `,
    example: true,
    codeSnippet: `
      function ItemList({ items }) {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        );
      }
    `
  },
  {
    id: 1012,
    question: 'What is PropTypes in React, and why would you use it?',
    technology: 'React.js',
    difficulty: 'Medium',
    answer: `
      PropTypes is a built-in feature of React used for type-checking the props passed to a component. It helps ensure that components receive the correct type of props and that no required props are missing. This improves code maintainability and reduces runtime errors.
    `,
    example: true,
    codeSnippet: `
      import React from 'react';
      import PropTypes from 'prop-types';

      function Greeting({ name, age }) {
        return <p>Hello, {name}. You are {age} years old.</p>;
      }

      Greeting.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number
      };

      Greeting.defaultProps = {
        age: 25
      };
    `
  },
  {
    id: 1013,
    question: 'What are error boundaries in React, and how do you implement one?',
    technology: 'React.js',
    difficulty: 'Advanced',
    answer: `
      Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app. They are implemented using class components by overriding the \`componentDidCatch\` lifecycle method.
    `,
    example: true,
    codeSnippet: `
      class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
          return { hasError: true };
        }

        componentDidCatch(error, info) {
          console.log("Error:", error, "Info:", info);
        }

        render() {
          if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
          }

          return this.props.children;
        }
      }

      function App() {
        return (
          <ErrorBoundary>
            <MyComponent />
          </ErrorBoundary>
        );
      }
    `
  }
  ];
  
