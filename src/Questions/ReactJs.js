export const dummyQuestionsReactJs = [
  {
    id: 999,
    question: "What is React.js?",
    technology: "React.js",
    difficulty: "Easy",
    answer: `
       <h2>React.js: A Powerful JavaScript Library for UI Development</h2>
    
    <p>
        <strong>React.js</strong> is an open-source JavaScript library developed by Facebook for building dynamic and interactive user interfaces, 
        especially for single-page applications (<strong>SPAs</strong>). It allows developers to create reusable UI components and manage application 
        state efficiently.
    </p>

    <p>
        React uses a <strong>virtual DOM (Document Object Model)</strong> to optimize rendering performance by updating only the necessary parts of 
        the UI when data changes. It follows a <strong>component-based architecture</strong>, making it easier to build and maintain large-scale applications.
    </p>

    <h2>Key Features of React</h2>
    <ul>
        <li><strong>Declarative UI</strong>: React efficiently updates and renders the UI when data changes.</li>
        <li><strong>Component-Based</strong>: Applications are structured using reusable and independent components.</li>
        <li><strong>Virtual DOM</strong>: Enhances performance by minimizing direct interactions with the real DOM.</li>
        <li><strong>Unidirectional Data Flow</strong>: Ensures predictable state management by passing data from parent to child components.</li>
        <li><strong>React Hooks</strong>: Enable functional components to manage state and lifecycle methods without using class components.</li>
    </ul> `,
    example: true,
    codeSnippet: `
      import React from 'react';
      import ReactDOM from 'react-dom';
  
      function App() {
        return <h1>Hello, React!</h1>;
      }
  
      ReactDOM.render(<App />, document.getElementById('root'));
    `,
  },
  {
    id: 1000,
    question: "What is JSX in React?",
    technology: "React.js",
    difficulty: "Easy",
    answer: `
      JSX (JavaScript XML) is a syntax extension for JavaScript. It allows you to write HTML-like syntax directly in JavaScript, which is then transformed into React elements. JSX makes it easier to create React components by allowing a more declarative style of writing.
    `,
    example: true,
    codeSnippet: `
      const element = <h1>Hello, world!</h1>;
      ReactDOM.render(element, document.getElementById('root'));
    `,
  },
  {
    id: 1001,
    question:
      "What is the difference between functional and class components in React?",
    technology: "React.js",
    difficulty: "Medium",
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
    `,
  },
  {
    id: 1002,
    question: "What are React Hooks?",
    technology: "React.js",
    difficulty: "Medium",
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
    `,
  },
  {
    id: 1003,
    question: "What is the useEffect hook, and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
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
    `,
  },
  {
    id: 1004,
    question:
      "What is React Fiber, and how does it improve React’s performance?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
      React Fiber is a complete rewrite of React's reconciliation algorithm, introduced in React 16. It improves React's performance by breaking the rendering work into smaller units, making it more responsive and better at handling animations and user interactions without blocking the UI.
    `,
    example: false,
    codeSnippet: ``,
  },
  {
    id: 1005,
    question:
      "What is the purpose of the useReducer hook, and how does it differ from useState?",
    technology: "React.js",
    difficulty: "Medium",
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
    `,
  },
  {
    id: 1006,
    question: "What is the purpose of the useLayoutEffect hook?",
    technology: "React.js",
    difficulty: "Advanced",
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
    `,
  },

  {
    id: 1007,
    question: "What is PropTypes in React, and why would you use it?",
    technology: "React.js",
    difficulty: "Medium",
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
    `,
  },
  {
    id: 1008,
    question:
      "What are error boundaries in React, and how do you implement one?",
    technology: "React.js",
    difficulty: "Advanced",
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
    `,
  },
  {
    id: 1009,
    question: "What are props in React?",
    technology: "React.js",
    difficulty: "Easy",
    answer: `
      In React, **props** (short for "properties") are used to pass data from a parent component to a child component. They enable reusable and dynamic components by allowing values to be passed as arguments.
  
      Props are **read-only** and cannot be modified by the child component. This ensures a unidirectional data flow, making React applications more predictable and easier to debug.
  
      Key points about props:
      - Props help pass data between components.
      - They are immutable (cannot be changed by the receiving component).
      - Props are received as function arguments in functional components.
      - In class components, props are accessed via \`this.props\`.
  
    `,
    example: true,
    codeSnippet: `
      import React from 'react';
  
      // Child component receiving props
      function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
      }
  
      // Parent component passing props
      function App() {
        return <Greeting name="Gajendra" />;
      }
  
      export default App;
    `,
  },
  {
    id: 1010,
    question: "What is the difference between state and props in React?",
    technology: "React.js",
    difficulty: "Easy",
    answer: `  
  <div>  
    <h2>State and Props in React</h2>  
    <div>  
      <h3>State</h3>  
      <p>State is used to manage a component’s internal data. Unlike props, state is mutable, meaning it can change over time, typically using the useState hook or class component state.</p>  
      <p>State is useful for handling dynamic and interactive UI updates.</p>  
    </div>  
    <div>  
      <h3>Props</h3>  
      <p>Props (short for properties) are used to pass data from a parent component to a child component. They are immutable, meaning a child component cannot modify them.</p>  
      <p>Props enable reusability and data flow between components.</p>  
    </div>  
    <div>  
      <h3>Key Difference</h3>  
      <p>Props allow communication between components, while state is managed locally within a component.</p>  
    </div>  
  </div>  
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    // Component using props
    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }

    // Component using state
    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }

    function App() {
      return (
        <div>
          <Greeting name="Gajendra" />
          <Counter />
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1011,
    question: "What is state in React?",
    technology: "React.js",
    difficulty: "Easy",
    answer: `
    <div>
      <h2>State in React</h2>
      <div>
        <p>In React, <strong>state</strong> is a built-in object that allows a component to store and manage data that can change over time. Unlike props, which are passed down from a parent component, state is managed within the component itself.</p>
        <p>State is <strong>mutable</strong>, meaning it can be modified over time, typically through the use of the <code>useState</code> hook in functional components or the <code>this.setState()</code> method in class components.</p>
        <p>When the state changes, React automatically triggers a re-render of the component to reflect the updated state in the UI.</p>
        <p>State is often used to handle dynamic, interactive, and user-driven data, such as form inputs, button clicks, or anything that changes over time within the component.</p>
      </div>
      </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }

    export default Counter;
  `,
  },
  {
    id: 1015,
    question: "How does React handle rendering?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>How React Handles Rendering</h2>
      <div>
        <p>React uses a virtual DOM to optimize and handle the rendering process. When a component's state or props change, React doesn't immediately update the actual DOM. Instead, it updates the virtual DOM first, which is a lightweight copy of the actual DOM.</p>
        <p>The virtual DOM allows React to quickly determine which parts of the UI need to be updated by comparing the previous virtual DOM with the new one (a process called "reconciliation"). This comparison helps React identify the minimum number of changes that need to be made to the real DOM.</p>
        <p>Once React has determined which changes to apply, it efficiently updates the real DOM, reducing the number of costly DOM manipulations. This makes React’s rendering process highly efficient and helps in providing a smooth user experience.</p>
        <p>React's rendering flow can be broken down into the following steps:</p>
        <ul>
          <li>React triggers a re-render when the state or props change.</li>
          <li>The virtual DOM is updated based on the new state or props.</li>
          <li>React compares the new virtual DOM with the previous one using a diffing algorithm.</li>
          <li>Only the necessary changes are applied to the actual DOM.</li>
        </ul>
      </div>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }

    export default Counter;
  `,
  },
  {
    id: 1016,
    question: "What is the virtual DOM, and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
  
      <div>
        The Virtual DOM is a lightweight copy of the real DOM.

       <p> Every time the state of a component changes, React creates a new Virtual DOM instead of updating the real DOM immediately.</p>

       <p> The VDOM is an in-memory representation of the UI, stored as a JavaScript object. It is much faster to manipulate compared to the real DOM because it acts as a data structure.</p>

        <p><h3>How React Uses the Virtual DOM</h3></p>

        <p><strong>1. Initial Rendering:</strong>
        When a component renders for the first time, React creates a VDOM by mirroring the actual DOM.</p>

      <p>  <strong>2. Component Updates:</strong>
        When the state of a component changes, React recalculates the Virtual DOM by applying updates to its Virtual DOM. The changes are not immediately applied to the real DOM.</p>

      <p>  <strong>3. Diffing:</strong>
        React then compares the updated Virtual DOM with the previous Virtual DOM using a process called diffing. This allows React to identify exactly what has changed.</p>

       <p> <strong>4. Efficient Updates:</strong>
        React only applies the differences between the two Virtual DOMs to the real DOM. This process minimizes the number of updates to the real DOM, ensuring better performance, especially for applications with many dynamic UI changes.</p>
      </div>
   
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }

    export default Counter;
  `,
  },

  {
    id: 1017,
    question: "What are React hooks? Name a few.",
    technology: "React.js",
    difficulty: "Easy",
    answer: `
    <div>
      <h2>React Hooks</h2>
      <div>
        <p>React hooks are functions that allow you to use state and lifecycle features in functional components, which was previously only possible in class components. Hooks were introduced in React 16.8 to make it easier to manage state, side effects, and other features in functional components. They provide a more concise and readable way to write React components, making the codebase simpler and easier to maintain.</p>
        <p>Some commonly used React hooks include:</p>
        <ul>
          <li><strong>useState</strong> - Allows you to add state to functional components.</li>
          <li><strong>useEffect</strong> - Enables you to perform side effects in function components, such as fetching data, subscribing to events, or manually updating the DOM.</li>
          <li><strong>useContext</strong> - Lets you access the value of a context directly in a function component.</li>
          <li><strong>useReducer</strong> - A more advanced alternative to useState, useful for managing complex state logic in components.</li>
          <li><strong>useRef</strong> - Provides a way to access and interact with DOM elements or store mutable values that don't trigger re-rendering.</li>
          <li><strong>useMemo</strong> - Memoizes expensive calculations, ensuring that they only run when necessary.</li>
          <li><strong>useCallback</strong> - Returns a memoized version of a callback function, preventing unnecessary re-creations of functions between renders.</li>
        </ul>
        <p>These hooks help React developers write clean, reusable, and more efficient code for handling state and other logic within functional components.</p>
      </div>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from 'react';

    function Timer() {
      const [time, setTime] = useState(0);

      useEffect(() => {
        const timerId = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
        return () => clearInterval(timerId);
      }, []);

      return <div>Time: {time} seconds</div>;
    }

    export default Timer;
  `,
  },
  {
    id: 1019,
    question: "Create a simple custom hook for counting numbers.",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Creating a Simple Counter Custom Hook in React</h2>
      <div>
        <p>This custom hook allows you to create a counter that can be incremented and reset. It's a good example of how hooks can be used to manage local state and encapsulate logic that can be reused across components.</p>
      </div>
    </div>
  `,
    example: true,
    codeSnippet: `
    import { useState } from 'react';

    // Custom hook for counting numbers
    function useCounter(initialValue = 0) {
      const [count, setCount] = useState(initialValue);

      const increment = () => setCount(count + 1);
      const reset = () => setCount(0);

      return { count, increment, reset };
    }

    export default useCounter;
  `,
  },
  {
    id: 1020,
    question: "Create a custom hook for fetching data from an API.",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Custom Hook for Fetching Data in React</h2>
      <div>
        <p>The custom hook below is designed to fetch data from an API. It handles loading, error, and data states, making it reusable in different components. Using this hook, you can easily manage API calls and response states in your React application.</p>
      </div>
    </div>
  `,
    example: true,
    codeSnippet: `
    import { useState, useEffect } from 'react';

    // Custom hook to fetch data from an API
    function useFetch(url) {
      const [data, setData] = useState(null);  // Holds the fetched data
      const [loading, setLoading] = useState(true);  // Tracks loading state
      const [error, setError] = useState(null);  // Tracks error state

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);  // Fetch the data from the URL
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();  // Parse the JSON data
            setData(result);  // Store the result in state
          } catch (error) {
            setError(error.message);  // Store the error message in state
          } finally {
            setLoading(false);  // Set loading to false after the request finishes
          }
        };

        fetchData();  // Trigger the fetch on component mount
      }, [url]);  // Re-run the effect if the URL changes

      return { data, loading, error };  // Return the data, loading, and error states
    }

    export default useFetch;

    // App Component using useFetch Hook
    import React from 'react';
    import useFetch from './path/to/useFetch';

    function App() {
      const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

      return (
        <div>
          <h1>Fetched Posts</h1>
          <ul>
            {data && data.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1021,
    question: "What is useEffect, and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `<div>
      <h2>useEffect Hook in React</h2>
      <div>
        <p>The <strong>useEffect</strong> hook is used in React to perform side effects in functional components. Side effects are operations that can interact with the outside world, such as fetching data, subscribing to events, manually modifying the DOM, or timers. This hook allows you to run such code when a component mounts, updates, or unmounts.</p>
        <p>By default, the <strong>useEffect</strong> hook runs after every render, but you can control its behavior by passing dependencies. If you provide an empty dependency array ' [] ', the effect will run only once, mimicking componentDidMount. If you specify dependencies in the array, the effect will run when any of those dependencies change, mimicking componentDidUpdate. The effect can also return a cleanup function that will run when the component is unmounted or when the effect is about to rerun.</p>
      </div>
    </div>`,
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from 'react';

    function Timer() {
      const [seconds, setSeconds] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
      }, []);  // Empty array means this effect runs once when the component mounts

      return <div>Time: {seconds} seconds</div>;
    }

    export default Timer; `,
  },
  {
    id: 1022,
    question: "Explain controlled vs. uncontrolled components in React.",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Controlled vs. Uncontrolled Components in React</h2>
      <div>
        <h3>Controlled Components</h3>
        <p>A controlled component is a form element whose value is controlled by React state. In a controlled component, the form data is handled by the component's state. Whenever the input field changes, the React state is updated, and the form field reflects the updated state. The value of the input field is always derived from the state, and any changes to the input field trigger state updates.</p>
        <p>For example, when a user types in a text input, React updates the state, and the input’s value is directly tied to the state value. This gives React full control over the form element.</p>
      </div>
      <div>
        <h3>Uncontrolled Components</h3>
        <p>An uncontrolled component, on the other hand, is a form element where the form data is handled by the DOM itself, rather than React state. In this case, React does not control the form field’s value directly, and instead, the DOM manages it. You can access the current value of the input field by using React refs, but React doesn’t update the value continuously based on state.</p>
        <p>Uncontrolled components are generally easier to set up for simple forms and can be useful when you don't need React to manage the input state.</p>
      </div>
      <div>
        <h3>Key Difference</h3>
        <p>The key difference between controlled and uncontrolled components is that controlled components are fully managed by React’s state, while uncontrolled components are managed by the DOM, with React interacting through refs when needed.</p>
      </div>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    // Controlled Component
    function ControlledInput() {
      const [value, setValue] = useState('');

      const handleChange = (event) => {
        setValue(event.target.value);
      };

      return (
        <div>
          <input type="text" value={value} onChange={handleChange} />
        </div>
      );
    }

    // Uncontrolled Component
    function UncontrolledInput() {
      const inputRef = React.createRef();

      const handleSubmit = () => {
        alert('Input value: ' + inputRef.current.value);
      };

      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    }

    export { ControlledInput, UncontrolledInput };
  `,
  },

  {
    id: 1023,
    question: "What is the useRef hook used for in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <p>The <strong>useRef</strong> hook in React is used to create a mutable reference that persists across renders without causing a re-render when updated. It is commonly used for:</p>
      <ul>
        <li><strong>Accessing DOM Elements</strong> – You can use useRef to get a reference to a DOM element and manipulate it directly.</li>
        <li><strong>Storing Mutable Values</strong> – Unlike state variables, changing a useRef value does not trigger a re-render.</li>
        <li><strong>Persisting Values Across Renders</strong> – Since useRef does not cause re-renders, it is useful for storing values that need to persist, like timers or previous values.</li>
        <li><strong>Keeping Track of Previous Values</strong> – You can use useRef to store the previous state of a component.</li>
      </ul>
      <p><strong>Key Takeaways:</strong></p>
      <ul>
        <li>useRef is not for triggering re-renders.</li>
        <li>It can be used to access and manipulate the DOM.</li>
        <li>Useful for storing values that persist across renders without causing re-renders.</li>
        <li>Helps in handling timers, event listeners, and previous values.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
  //1. Accessing DOM Elements – You can use useRef to get a reference to a DOM element and manipulate it directly.
    
  import { useRef, useEffect, useState } from 'react';

    function InputFocus() {
      const inputRef = useRef(null);
      
      useEffect(() => {
        inputRef.current.focus(); // Focus the input when the component mounts
      }, []);
      
      return <input ref={inputRef} type='text' />;
    }

  // 2. Storing Mutable Values – Unlike state variables, changing a useRef value does not trigger a re-render.
    function Counter() {
      const countRef = useRef(0);

      const increment = () => {
        countRef.current += 1;
        console.log('Count:', countRef.current); // Logs updated value
      };

      return <button onClick={increment}>Increment</button>;
    }
//3. Persisting Values Across Renders – Since useRef does not cause re-renders, it is useful for storing values that need to persist, like timers or previous values.
    function Timer() {
      const timerId = useRef(null);

      const startTimer = () => {
        timerId.current = setInterval(() => console.log('Running...'), 1000);
      };

      const stopTimer = () => {
        clearInterval(timerId.current);
      };

      return (
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
        </div>
      );
    }
//4. Keeping Track of Previous Values – You can use useRef to store the previous state of a component.
    function PreviousValue() {
      const [count, setCount] = useState(0);
      const prevCountRef = useRef();

      useEffect(() => {
        prevCountRef.current = count; // Store previous value
      });

      return (
        <div>
          <p>Current: {count}</p>
          <p>Previous: {prevCountRef.current}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
  `,
  },
  {
    id: 1025,
    question: "What is React context, and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>What is React Context?</h2>
      <p>React Context is a feature in React that allows for the sharing of data across the component tree without having to explicitly pass props down at every level. It's designed to handle global data that needs to be accessible by many components in an application, such as user authentication, theme preferences, or language settings.</p>

      <h3>How Does React Context Work?</h3>
      <p>React Context works by creating a <strong>Context object</strong> which holds the data you want to share globally. The Context object provides a <strong>Provider</strong> component that is used to supply the data to the rest of the component tree. Any component that needs access to the context can consume the data using the <strong>useContext</strong> hook (for functional components) or <strong>Context.Consumer</strong> (for class components).</p>

      <h3>Steps to Use React Context</h3>
      <ol>
        <li><strong>Create a Context</strong>: Use <code>React.createContext</code> to create a Context object.</li>
        <li><strong>Provide the Context</strong>: Use the <code>Provider</code> component at a higher level in the component tree to make the context data available to child components.</li>
        <li><strong>Consume the Context</strong>: Use the <code>useContext</code> hook or <code>Context.Consumer</code> to access the context data in the child components.</li>
      </ol>

      <h3>Example Use Case</h3>
      <p>A common use case for React Context is managing themes. You can provide the current theme context at the top of the component tree and then access it in any component within the tree.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Eliminates the need to manually pass props through every level of the component tree.</li>
        <li>Useful for managing global state or data that must be accessed by many components.</li>
        <li>Works seamlessly with functional components using the <code>useContext</code> hook.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useContext } from 'react';

    // Create a Context object
    const ThemeContext = React.createContext();

    // Component to provide the context value
    function ThemeProvider({ children }) {
      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    }

    // Component to consume the context value
    function ThemedComponent() {
      const { theme, toggleTheme } = useContext(ThemeContext);

      return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
          <p>The current theme is {theme}</p>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
    }

    function App() {
      return (
        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
      );
    }

    export default App;
  `,
  },
  {
    id: 1026,
    question: "What is the significance of keys in lists?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Significance of Keys in Lists in React</h2>
      <p>In React, keys are special string attributes used to identify which items in a list are changed, added, or removed. They help React optimize the process of updating the User Interface (UI) when items in a list change.</p>
      
      <h3>Why Are Keys Important?</h3>
      <ul>
        <li><strong>Efficient Re-rendering:</strong> React uses keys to efficiently determine which items in a list need to be re-rendered, avoiding unnecessary re-renders. When an item’s key changes, React can quickly re-render that item rather than re-rendering the entire list.</li>
        <li><strong>Stable Identity:</strong> Keys provide a stable identity to each element. Without keys, React may have difficulty identifying which elements were modified, leading to potential rendering bugs or performance issues.</li>
        <li><strong>Performance Optimization:</strong> When updating the DOM, React uses keys to know which elements to keep or re-render, allowing React to minimize DOM manipulation, improving the performance of updates.</li>
      </ul>

      <h3>How Keys Work?</h3>
      <p>When rendering a list of elements in React, the keys must be unique for each element within the list. Typically, keys are passed as a prop to each child element, and React will use these keys to identify the items between renders.</p>

      <h3>Example Use Case</h3>
      <p>In a dynamic list, if an item is removed or reordered, the key helps React recognize the item and perform minimal updates, instead of re-rendering the entire list. For example, if the order of items changes or if a new item is added, React can use the key to know which item to add or move.</p>
      
      <h3>Best Practices for Using Keys</h3>
      <ul>
        <li>Keys should be unique among siblings, not globally unique.</li>
        <li>Avoid using indexes as keys if the list can change dynamically, as it can lead to inefficient re-renders.</li>
        <li>Use stable IDs or unique strings as keys wherever possible.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React from 'react';

    function ItemList({ items }) {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }

    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];

    function App() {
      return <ItemList items={items} />;
    }

    export default App;
  `,
  },
  {
    id: 1027,
    question: "How do you handle forms in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Handling Forms in React</h2>
      <p>Forms in React are handled using controlled and uncontrolled components. Controlled components use React's state to manage form data, while uncontrolled components rely on the DOM itself to manage the form data.</p>
      
      <h3>Controlled Components</h3>
      <p>In controlled components, the form data is bound to the component's state. React manages the state, and every time a user interacts with the form, the state is updated. This gives React complete control over the form input elements.</p>
      
      <h4>Advantages of Controlled Components</h4>
      <ul>
        <li><strong>Single source of truth:</strong> Since the form state is controlled by React, it's easy to track and manipulate the form data in one place.</li>
        <li><strong>Validation:</strong> You can easily perform validation directly on the form inputs by checking the state values before submitting the form.</li>
        <li><strong>Conditional rendering:</strong> You can easily modify the UI based on the form's state.</li>
      </ul>

      <h3>Uncontrolled Components</h3>
      <p>Uncontrolled components, on the other hand, do not have their state managed by React. Instead, they rely on the DOM to keep track of their values, and you can access the form data using references (refs).</p>
      
      <h4>Advantages of Uncontrolled Components</h4>
      <ul>
        <li><strong>Less boilerplate code:</strong> Uncontrolled components do not require state management, so they require fewer lines of code for simple forms.</li>
        <li><strong>Faster for simple forms:</strong> If you don't need to track or manipulate the form data often, uncontrolled components may be simpler and faster.</li>
      </ul>

      <h3>Handling Form Submissions</h3>
      <p>In React, form submission is usually handled by an event handler (e.g., onSubmit). When the form is submitted, React processes the data based on the controlled or uncontrolled approach used. After submission, you can perform actions such as validating the data or sending it to a backend server.</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    function Form() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    }

    export default Form;
  `,
  },
  {
    id: 1028,
    question: "What is the useMemo hook used for?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>useMemo Hook in React</h2>
      <p>The <code>useMemo</code> hook is used to optimize performance by memoizing the result of a calculation or a function, meaning it only recalculates the value when its dependencies change. This helps prevent unnecessary recalculations on each render, improving the efficiency of your React app, especially when working with expensive calculations.</p>
      
      <h3>How useMemo Works</h3>
      <p>The <code>useMemo</code> hook takes two arguments: a function that performs the calculation and an array of dependencies. React will only recompute the memoized value when one of the dependencies changes. If the dependencies remain the same, React will return the memoized value from the previous render, thus avoiding re-executing the calculation.</p>

      <h3>When to Use useMemo</h3>
      <p>Use <code>useMemo</code> when you need to perform expensive calculations or when you want to prevent unnecessary rerenders due to passing complex objects as props or recalculating values multiple times within components.</p>

      <h4>Key Considerations</h4>
      <ul>
        <li><strong>Performance optimization:</strong> The primary reason to use <code>useMemo</code> is to optimize performance by avoiding unnecessary recalculations.</li>
        <li><strong>Not always necessary:</strong> If the computation is cheap or the component doesn't rerender often, it may be unnecessary to use <code>useMemo</code> as React is optimized for performance on its own.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useMemo, useState } from 'react';

    function ExpensiveCalculationComponent() {
      const [count, setCount] = useState(0);

      // An expensive calculation that should be memoized
      const expensiveValue = useMemo(() => {
        console.log('Calculating expensive value...');
        return count * 1000;
      }, [count]); // Recalculate only when 'count' changes

      return (
        <div>
          <p>Expensive Value: {expensiveValue}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }

    export default ExpensiveCalculationComponent;
  `,
  },
  {
    id: 1029,
    question: "What is the difference between React.memo and useMemo?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>

       <h3><strong>useMemo</strong></h3>
      <p><code>useMemo</code> is a React hook used to memoize the result of an expensive function or calculation. It returns a memoized value that will only be recalculated if one of the dependencies changes. <code>useMemo</code> is often used for optimizing performance when dealing with costly calculations inside a component or when passing complex values as props to child components.</p>

      <h3><strong>React.memo</strong></h3>
      <p><code>React.memo</code> is a higher-order component (HOC) used to memoize a component. It prevents unnecessary re-renders of a component when its props have not changed. This is useful when a component receives complex objects as props or when it renders frequently. React will only re-render the component if the props have changed, otherwise, it will reuse the previous render output.</p>
      
   
      <h3>Key Differences</h3>
      <ul>
        <li><strong>Purpose:</strong> <code>React.memo</code> is used to prevent unnecessary re-renders of components, while <code>useMemo</code> is used to memoize a calculated value inside a component.</li>
        <li><strong>Usage:</strong> <code>React.memo</code> wraps around a component, while <code>useMemo</code> is used to memoize values within a component.</li>
        <li><strong>Performance optimization:</strong> <code>React.memo</code> is used to optimize components by preventing re-renders when props haven’t changed, and <code>useMemo</code> optimizes expensive calculations or function results.</li>
      </ul>

      <h3>When to Use</h3>
      <ul>
        <li><strong>React.memo:</strong> Use it when you want to prevent unnecessary re-renders of a functional component based on unchanged props.</li>
        <li><strong>useMemo:</strong> Use it when you need to memoize a value or computation that is expensive and should not be recalculated unnecessarily during every render.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useMemo } from 'react';

    // Memoized Component
    const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
      console.log('Rendering ExpensiveComponent');
      return <div>{data}</div>;
    });

    function App() {
      const [count, setCount] = useState(0);
      const expensiveValue = useMemo(() => {
        console.log('Calculating expensive value...');
        return count * 1000;
      }, [count]);

      return (
        <div>
          <ExpensiveComponent data={expensiveValue} />
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1030,
    question: "What is a Higher-Order Component (HOC) in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Higher-Order Component (HOC) in React</h2>
      <p>A <strong>Higher-Order Component (HOC)</strong> is a function in React that takes a component and returns a new component with additional functionality. It is a pattern used to share common logic across multiple components without modifying the original component's code. HOCs are used to enhance a component's behavior by injecting additional props, state, or functionality.</p>
      
      <h3>How does it work?</h3>
      <p>HOCs work by wrapping a component with a function. This function enhances the component's behavior by adding or modifying props, state, or side effects, without altering the original component's structure. The component passed into the HOC becomes the "wrapped" component, and the resulting component is called a "higher-order" component.</p>
      
      <h3>Example Use Cases</h3>
      <ul>
        <li><strong>Reusability:</strong> HOCs help in reusing common logic across different components, such as authentication, logging, data fetching, etc.</li>
        <li><strong>Code Modularity:</strong> HOCs promote cleaner and more modular code by abstracting logic away from individual components.</li>
        <li><strong>State Management:</strong> HOCs can be used to share state or behavior between components that don't directly share a parent-child relationship.</li>
      </ul>

      <h3>Example of HOC</h3>
      <p>Here's a simple example of an HOC that adds a loading spinner to a component:</p>

      <pre>
        <code>
          import React, { useState, useEffect } from 'react';

          // HOC to add loading functionality
          function withLoading(Component) {
            return function WithLoadingComponent(props) {
              const [loading, setLoading] = useState(true);

              useEffect(() => {
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }, []);

              if (loading) {
                return <div>Loading...</div>;
              }
              return <Component {...props} />;
            };
          }

          // Original component
          function MyComponent() {
            return <div>Data has been loaded!</div>;
          }

          // Wrapping the component with the HOC
          const MyComponentWithLoading = withLoading(MyComponent);

          export default MyComponentWithLoading;
        </code>
      </pre>

      <h3>Benefits of Using HOCs</h3>
      <ul>
        <li><strong>Code Reusability:</strong> You can share functionality across components without duplicating code.</li>
        <li><strong>Separation of Concerns:</strong> HOCs allow you to separate concerns, such as fetching data or managing state, from your components.</li>
        <li><strong>Enhances Component Flexibility:</strong> You can easily compose multiple HOCs to enhance components with different functionalities.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from 'react';

    // HOC to add loading functionality
    function withLoading(Component) {
      return function WithLoadingComponent(props) {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }, []);

        if (loading) {
          return <div>Loading...</div>;
        }
        return <Component {...props} />;
      };
    }

    // Original component
    function MyComponent() {
      return <div>Data has been loaded!</div>;
    }

    // Wrapping the component with the HOC
    const MyComponentWithLoading = withLoading(MyComponent);

    export default MyComponentWithLoading;
  `,
  },
  {
    id: 1032,
    question:
      "What is the difference between useMemo and useCallback in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <p>Both <strong>useMemo</strong> and <strong>useCallback</strong> are React hooks that help with performance optimization by memoizing values or functions. However, they are used for different purposes.</p>

      <h3><strong>useMemo</strong></h3>
      <p>The <strong>useMemo</strong> hook is used to memoize a computed value or result of a function. It only recalculates the value when one of its dependencies changes. This is particularly useful when performing expensive calculations or operations to avoid recalculating them on every render.</p>

      <h3><strong>useCallback</strong></h3>
      <p>The <strong>useCallback</strong> hook, on the other hand, is used to memoize a function itself. It ensures that the same function reference is returned unless its dependencies change. This is helpful to prevent unnecessary re-renders of child components that rely on function references (like when passing functions as props).</p>

      <h3>Key Differences</h3>
      <ul>
        <li><strong>Purpose:</strong> <code>useMemo</code> is used to memoize values, whereas <code>useCallback</code> is used to memoize functions.</li>
        <li><strong>Return Value:</strong> <code>useMemo</code> returns the memoized result of a computation, while <code>useCallback</code> returns the memoized function.</li>
        <li><strong>Use Case:</strong> <code>useMemo</code> is ideal for optimizing expensive computations, and <code>useCallback</code> is useful when passing callbacks to child components to prevent unnecessary re-renders.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useCallback, useMemo } from 'react';

    function App() {
      const [count, setCount] = useState(0);
      const [isClicked, setIsClicked] = useState(false);

      // useMemo example: memoize expensive calculation
      const expensiveCalculation = useMemo(() => {
        console.log('Expensive calculation running...');
        return count * 2;
      }, [count]);

      // useCallback example: memoize function
      const handleClick = useCallback(() => {
        setIsClicked(prev => !prev);
      }, [setIsClicked]);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <p>Expensive Calculation Result: {expensiveCalculation}</p>

          <button onClick={handleClick}>
            {isClicked ? 'Clicked' : 'Not Clicked'}
          </button>
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1035,
    question: "How can you handle conditional rendering in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Conditional Rendering in React</h2>
      <p>Conditional rendering in React is the process of rendering different UI elements or components based on specific conditions. It allows React to display content dynamically depending on state, props, or any other variables. There are various ways to handle conditional rendering in React.</p>

      <h3>Common Approaches</h3>
      <p>1. **Using if-else statements**: You can use simple JavaScript <code>if</code> statements to decide which JSX code to render.</p>
      <p>2. **Using ternary operators**: Ternary operators are great for concise conditional rendering.</p>
      <p>3. **Using logical && operator**: This method is useful for rendering content based on a true condition.</p>

      <h3>Examples of Conditional Rendering</h3>
      <p>Conditional rendering is helpful for showing or hiding elements, managing form validations, handling loading states, and more.</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    function App() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      
      // Method 1: Using if-else statement
      let content;
      if (isLoggedIn) {
        content = <h2>Welcome Back!</h2>;
      } else {
        content = <h2>Please Log In</h2>;
      }

      // Method 2: Using Ternary operator
      // const content = isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Log In</h2>;

      // Method 3: Using && operator
      // const content = isLoggedIn && <h2>Welcome Back!</h2>;

      return (
        <div>
          {content}
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </button>
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1036,
    question: "How do you prevent unnecessary re-renders in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Preventing Unnecessary Re-renders in React</h2>
      <p>Unnecessary re-renders in React can impact performance, especially in large applications. React will re-render components whenever their state or props change. However, re-renders can be avoided or minimized by applying specific strategies and hooks.</p>

      <h3>Key Strategies to Prevent Re-renders:</h3>
      
      <p><strong>1. Using React.memo:</strong> This higher-order component (HOC) helps prevent re-renders of functional components if the props have not changed.</p>
      <p><strong>2. Using useMemo:</strong> The <code>useMemo</code> hook is used to memoize expensive calculations, preventing them from being recalculated on each render unless the dependencies change.</p>
      <p><strong>3. Using useCallback:</strong> The <code>useCallback</code> hook is used to memoize functions, preventing unnecessary re-renders caused by new function references.</p>
      <p><strong>4. Using shouldComponentUpdate:</strong> In class components, you can implement the <code>shouldComponentUpdate</code> lifecycle method to decide whether a component should re-render based on changes in state or props.</p>
      <p><strong>5. Avoiding inline functions and objects:</strong> Inline functions and objects can lead to new references on each render, causing re-renders. Instead, use stable function references or memoization techniques.</p>
      
      <h3>Examples:</h3>
      <p>In a functional component, you can wrap the component with <code>React.memo</code> to optimize rendering.</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useCallback } from 'react';

    // Component wrapped with React.memo to prevent unnecessary re-renders
    const ExpensiveComponent = React.memo(({ count, onClick }) => {
      console.log('Rendering ExpensiveComponent');
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={onClick}>Increment</button>
        </div>
      );
    });

    function App() {
      const [count, setCount] = useState(0);

      // Memoizing the increment function to prevent re-renders
      const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
      }, []);  // Dependency array ensures increment is stable

      return (
        <div>
          <h2>React Optimization Example</h2>
          <ExpensiveComponent count={count} onClick={increment} />
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1037,
    question: "What is lazy loading in React, and how is it implemented?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>Lazy Loading in React</h2>
      <p>Lazy loading is a technique used in React to load components only when they are required, rather than loading them all at once. This can significantly improve the performance of the application by reducing the initial loading time and decreasing the amount of JavaScript that needs to be parsed and executed. Lazy loading is especially useful for large applications with many routes or components that are not immediately necessary for the user.</p>

      <h3>How Lazy Loading Works in React:</h3>
      <p>In React, lazy loading is implemented using the <code>React.lazy</code> function, which allows you to dynamically import a component only when it’s needed. React also provides a <code>Suspense</code> component to handle the loading state while the component is being fetched.</p>

      <h3>Key Concepts:</h3>
      <p><strong>React.lazy:</strong> This function takes a function that returns a dynamic import and returns a React component that can be rendered when it’s loaded.</p>
      <p><strong>Suspense:</strong> The <code>Suspense</code> component is used to wrap the lazy-loaded component and manage the loading state. You can specify a fallback UI (like a loading spinner) while the component is being loaded.</p>

      <h3>Benefits of Lazy Loading:</h3>
      <ul>
        <li>Improved initial load performance.</li>
        <li>Reduced JavaScript bundle size.</li>
        <li>Better user experience with smoother interactions and faster load times.</li>
      </ul>

      <h3>Example of Lazy Loading:</h3>
      <p>Here’s how you can implement lazy loading in a React application:</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { Suspense, lazy } from 'react';

    // Lazy load the component
    const LazyComponent = lazy(() => import('./LazyComponent'));

    function App() {
      return (
        <div>
          <h2>Lazy Loading Example</h2>
          {/* Suspense is used to show loading state until LazyComponent is loaded */}
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1038,
    question: "What is the difference between useEffect and componentDidMount?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>useEffect vs componentDidMount in React</h2>
      <p>Both <code>useEffect</code> and <code>componentDidMount</code> are used to handle side effects in React, but they belong to different types of components and have some key differences in their usage and behavior.</p>
      
      <h3>1. <code>useEffect</code>:</h3>
      <p><code>useEffect</code> is a React Hook that was introduced in React 16.8 for function components. It is used to perform side effects, such as fetching data, directly interacting with the DOM, or subscribing to external data sources. <code>useEffect</code> runs after every render by default but can be controlled to run only when specific dependencies change by passing an array of dependencies as the second argument.</p>
      
      <h3>2. <code>componentDidMount</code>:</h3>
      <p><code>componentDidMount</code> is a lifecycle method in React class components. It is called once immediately after a component is added to the DOM, i.e., when the component has finished rendering. It is primarily used for tasks like fetching data or subscribing to external APIs.</p>
      
      <h3>Key Differences:</h3>
      <ul>
        <li><strong>Type of Component:</strong> <code>useEffect</code> is used in function components, whereas <code>componentDidMount</code> is used in class components.</li>
        <li><strong>Execution Timing:</strong> <code>componentDidMount</code> is called after the component is mounted, whereas <code>useEffect</code> is executed after the render cycle but can be controlled with a dependency array to run only when specific values change.</li>
        <li><strong>Control over Execution:</strong> With <code>useEffect</code>, you have more flexibility in controlling when the effect runs based on the dependency array, whereas <code>componentDidMount</code> runs only once after the component is mounted.</li>
      </ul>
    </div>
  `,
    example: false,
    codeSnippet: "",
  },
  {
    id: 1039,
    question: "What is the React lifecycle for function-based components?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <h2>React Lifecycle for Function-based Components</h2>
      <p>In React, function-based components don't have traditional lifecycle methods like class components (e.g., <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>). However, function-based components can handle lifecycle-like behavior using React Hooks, primarily <code>useEffect</code> and <code>useState</code> for managing side effects and state.</p>
      
      <h3>1. Mounting</h3>
      <p>When a function component is rendered for the first time, you can use <code>useEffect</code> to replicate the behavior of <code>componentDidMount</code> in class components. It runs once after the initial render.</p>
      <pre>
        useEffect(() => {
          // Code to run once after the component mounts
        }, []); // Empty dependency array means it runs only once
      </pre>
      
      <h3>2. Updating</h3>
      <p>For updates, <code>useEffect</code> also acts like <code>componentDidUpdate</code> in class components. It runs after every render, but you can control it by specifying dependencies. The effect will only run when the specified dependencies change.</p>
      <pre>
        useEffect(() => {
          // Code to run when specific state or props change
        }, [dependency1, dependency2]); // Runs when dependencies change
      </pre>
      
      <h3>3. Unmounting</h3>
      <p>You can replicate the behavior of <code>componentWillUnmount</code> in function components by returning a cleanup function from <code>useEffect</code>. This cleanup function is executed when the component is about to unmount or before the effect re-runs.</p>
      <pre>
        useEffect(() => {
          // Setup code
          return () => {
            // Cleanup code when component unmounts
          };
        }, []); // Empty dependency array means it runs only once
      </pre>
      
      <h3>Summary</h3>
      <p>In function-based components, React's lifecycle is managed using hooks like <code>useEffect</code> and <code>useState</code>, enabling developers to handle side effects, manage state, and perform cleanup when the component is mounted, updated, or unmounted.</p>
    </div>
  `,
    example: false,
    codeSnippet: "",
  },
  {
    id: 1041,
    question: "Explain the working of React Fiber.",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>React Fiber</h2>
      <p>React Fiber is the reimplementation of React’s core algorithm for rendering updates in a more efficient way. It is designed to optimize rendering performance by breaking work into units and making the UI more responsive, especially for complex applications.</p>

      <h3>Key Features of React Fiber</h3>
      <ul>
        <li><strong>Incremental Rendering:</strong> React Fiber allows React to render UI in small chunks. This means that React can pause rendering work and continue it later, allowing the browser to remain responsive by doing other tasks, like handling user interactions.</li>
        <li><strong>Prioritized Updates:</strong> React Fiber introduces a priority system to handle different types of updates. It allows React to prioritize urgent updates (e.g., animations or user interactions) over non-urgent ones (e.g., data fetching or background updates), making the UI feel snappy and responsive.</li>
        <li><strong>Concurrency:</strong> With React Fiber, React can prepare multiple versions of the UI at the same time. This allows React to switch between different versions of the UI and commit the final version when it’s ready. This concurrency ensures that the UI remains interactive even when React is working on complex updates.</li>
        <li><strong>Better Error Handling:</strong> React Fiber allows better error boundaries and error recovery mechanisms. In case of a failure during the rendering phase, React can handle the error more gracefully, preventing the entire app from crashing.</li>
      </ul>

      <h3>How React Fiber Works</h3>
      <p>Fiber operates in a more granular way compared to the old React rendering algorithm. The rendering work is divided into “units” called fibers, each representing a component and its work to be done. The render process goes through three stages: rendering, committing, and finalizing.</p>

      <h4>Rendering Phase</h4>
      <p>During the rendering phase, React creates a fiber tree and schedules updates to it. Instead of blocking the browser, React breaks down the work into small units and checks if it needs to pause or continue based on priority. This is where React decides if it should do a high-priority task (like handling user input) or a lower-priority task (like rendering background content).</p>

      <h4>Committing Phase</h4>
      <p>Once the rendering phase is complete, React commits the changes to the DOM. This is the phase where actual changes are applied to the UI. The committing phase ensures that changes are visible to the user at the right time, without blocking user interactions.</p>

      <h4>Finalizing Phase</h4>
      <p>In the finalizing phase, React cleans up any resources and prepares the UI for the next rendering cycle. This ensures that any necessary updates are finalized and that React is ready to handle new changes.</p>

      <h3>Advantages of React Fiber</h3>
      <ul>
        <li>Improved performance, especially for complex apps and animations.</li>
        <li>More predictable and efficient handling of user interactions.</li>
        <li>Better support for concurrency, making it easier to manage multiple UI updates at once.</li>
        <li>Enhanced error handling and recovery mechanisms.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>React Fiber is a significant upgrade to React's rendering algorithm, allowing for incremental rendering, prioritized updates, and better concurrency management. It makes React more efficient and capable of handling complex UIs and interactions, making the overall experience smoother for users.</p>
    </div>
  `,
    example: false,
    codeSnippet: "",
  },
  {
    id: 1042,
    question: "What is Suspense in React?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>React Suspense</h2>
      <p>Suspense is a feature introduced in React to handle asynchronous operations like data fetching, code splitting, and loading components in a more seamless and efficient manner. It allows developers to specify the loading states for components that depend on async data or resources and render fallback content while the required data or components are being loaded.</p>

      <h3>How Suspense Works</h3>
      <p>Suspense is used in combination with React's Concurrent Mode to enable more fine-grained control over rendering. When a component is waiting for asynchronous resources, you can "suspend" the rendering of that component until the resource is ready. During this time, React will display a fallback UI (like a loading spinner or message) to inform users that the component is being loaded.</p>

      <h3>Key Features of Suspense</h3>
      <ul>
        <li><strong>Loading State Handling:</strong> Suspense provides an elegant way to handle loading states for components that rely on async data or resources without having to manually manage loading indicators.</li>
        <li><strong>Code Splitting:</strong> Suspense allows you to use <code>React.lazy</code> to dynamically import components only when they are needed. This helps in reducing the initial bundle size and improving the performance of your application.</li>
        <li><strong>Fallback UI:</strong> While waiting for the asynchronous operation to complete, Suspense lets you specify a fallback UI (e.g., loading spinner, skeleton screen) that can be shown until the component or data is ready to be rendered.</li>
        <li><strong>Improved User Experience:</strong> Suspense allows React to show the most important content to users as quickly as possible while handling less important or delayed content in the background.</li>
      </ul>

      <h3>How to Use Suspense</h3>
      <p>Suspense works by wrapping components that rely on async resources inside a <code>&lt;Suspense&gt;</code> component and providing a fallback prop to display while the component is waiting for the resource.</p>
      <p>Here’s a simple example of using Suspense with <code>React.lazy</code> for code splitting:</p>

      <pre>
        <code>
          import React, { Suspense } from 'react';

          // Dynamically import a component
          const LazyComponent = React.lazy(() => import('./LazyComponent'));

          function App() {
            return (
              <div>
                <h1>My React App</h1>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </Suspense>
              </div>
            );
          }

          export default App;
        </code>
      </pre>

      <h3>Suspense for Data Fetching</h3>
      <p>Suspense can also be used with data fetching. In this case, you would wrap a component that fetches data in a Suspense boundary and use a library like <code>React Query</code> or <code>Relay</code> that integrates with Suspense for data fetching. When the data is being fetched, the fallback UI is shown, and once the data is loaded, the component is rendered.</p>

      <h3>Benefits of Using Suspense</h3>
      <ul>
        <li>Enables easier handling of loading states for async data or components.</li>
        <li>Improves user experience by showing fallback content instead of leaving blank or partially rendered content on the screen.</li>
        <li>Helps in optimizing the performance of the app by enabling code splitting and dynamic loading of components.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Suspense is a powerful tool in React that makes handling asynchronous operations like data fetching and code splitting easier and more intuitive. It provides a way to manage loading states and fallback content seamlessly, enhancing the performance and user experience of React applications.</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { Suspense } from 'react';

    const LazyComponent = React.lazy(() => import('./LazyComponent'));

    function App() {
      return (
        <div>
          <h1>My React App</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1045,
    question: "Explain error boundaries in React (function-based component).",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>Error Boundaries in React (Function-Based Component)</h2>
      <p>Error boundaries in React are components designed to catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the whole app. They help ensure that errors in parts of your application don’t affect other parts, making your app more resilient.</p>

      <h3>How Error Boundaries Work in Function-Based Components</h3>
      <p>In function-based components, React doesn’t provide the traditional class component methods like <code>componentDidCatch</code> and <code>getDerivedStateFromError</code>. However, we can achieve error boundary behavior using hooks like <code>useState</code> and <code>useEffect</code>, combined with JavaScript's <code>try/catch</code> mechanism to catch errors and handle them properly.</p>

      <h4>Steps for Creating Error Boundaries in Functional Components</h4>
      <ol>
        <li><strong>useState:</strong> We'll use <code>useState</code> to manage error states (whether an error has occurred and the error message).</li>
        <li><strong>try/catch:</strong> Inside the rendering logic, we'll wrap potentially error-prone code with <code>try/catch</code>.</li>
        <li><strong>Fallback UI:</strong> If an error occurs, we'll show a fallback UI, like an error message or custom error page.</li>
      </ol>

      <h3>Code Example</h3>
      <p>Here is how you can implement an error boundary in a function-based component:</p>

      <pre>
        <code>
          import React, { useState, useEffect } from 'react';

          function ErrorBoundary({ children }) {
            const [hasError, setHasError] = useState(false);
            const [errorInfo, setErrorInfo] = useState(null);

            useEffect(() => {
              // Resets error state when children change
              setHasError(false);
              setErrorInfo(null);
            }, [children]);

            const handleError = (error, info) => {
              setHasError(true);
              set ErrorInfo({ error, info });
            };

            if (hasError) {
              return (
                < div>
                  < h1>Something went wrong</h1>
                  < p>{errorInfo?.error?.toString()}</p>
                < /div>
              );
            }

            // Wrapping children with try/catch to catch any error in child components
            try {
              return children;
            } catch (error) {
              handleError(error, 'Error during rendering');
            }
          }

          export default ErrorBoundary;
        </code>
      </pre>

      <h3>Usage of Error Boundary</h3>
      <p>Once you have the error boundary, you can use it in your app by wrapping any component that may throw an error:</p>

      <pre>
        <code>
          import React from 'react';
          import ErrorBoundary from 'ErrorBoundary';

          function App() {
            return (
              < ErrorBoundary >
                < ComponentThatMayThrowError />
              < / ErrorBoundary > 
            );
          }

          export default App;
        </code>
      </pre>

      <h3>Limitations</h3>
      <ul>
        <li>Error boundaries do not catch errors in event handlers, asynchronous code, or server-side rendering.</li>
        <li>Errors in the error boundary component itself will not be caught.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>While error boundaries in class components are built-in in React, using a functional component with hooks like <code>useState</code> and <code>useEffect</code> provides a way to achieve similar functionality. This allows developers to gracefully handle errors in function-based components and prevent crashes from affecting the entire application.</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from 'react';

    function ErrorBoundary({ children }) {
      const [hasError, setHasError] = useState(false);
      const [errorInfo, setErrorInfo] = useState(null);

      useEffect(() => {
        // Resets error state when children change
        setHasError(false);
        setErrorInfo(null);
      }, [children]);

      const handleError = (error, info) => {
        setHasError(true);
        setErrorInfo({ error, info });
      };

      if (hasError) {
        return (
          < div>
            <h1>Something went wrong.</h1>
            <p>{errorInfo?.error?.toString()}</p>
          < /div>
        );
      }

      // Wrapping children with try/catch to catch any error in child components
      try {
        return children;
      } catch (error) {
        handleError(error, 'Error during rendering');
      }
    }

    export default ErrorBoundary;
  `,
  },
  {
    id: 1050,
    question: "What is the difference between Context API and Redux?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>Context API vs Redux</h2>
      <p>Both Context API and Redux are used for state management in React applications, but they differ in their use cases, complexity, and how they handle data flow within an application.</p>

      <h3>1. Use Case</h3>
      <ul>
        <li><strong>Context API:</strong> It is a built-in React feature designed to share global state throughout the component tree without passing props manually at each level. It's ideal for simple state management, especially when the application doesn't require complex or high-frequency updates.</li>
        <li><strong>Redux:</strong> It is a more robust state management library used for managing and centralizing application state. Redux is particularly useful when handling complex state interactions and side effects like API calls, state persistence, and middleware integration. It offers more powerful debugging and a clear separation of concerns.</li>
      </ul>

      <h3>2. Complexity</h3>
      <ul>
        <li><strong>Context API:</strong> Simple and easy to implement, ideal for smaller or less complex applications. It allows you to create a context using the <code>createContext</code> method and provides a <code>Provider</code> to make data available across the component tree.</li>
        <li><strong>Redux:</strong> Requires more boilerplate code, such as actions, reducers, and store configuration. It follows a strict pattern for managing the global state, which can be overkill for small applications but offers significant advantages for large, complex applications.</li>
      </ul>

      <h3>3. Performance</h3>
      <ul>
        <li><strong>Context API:</strong> Context API can trigger re-renders for all consumers of the context when its value changes, which might lead to performance issues in large applications. This happens because it doesn’t have built-in optimizations like Redux does.</li>
        <li><strong>Redux:</strong> Redux uses a more optimized method of state updates and triggers re-renders only for components that are directly connected to the parts of the state they need. This makes Redux a better choice for larger applications where performance and fine-grained control over updates are essential.</li>
      </ul>

      <h3>4. Flexibility and Middleware</h3>
      <ul>
        <li><strong>Context API:</strong> It doesn’t offer built-in support for middleware or side-effect management like API calls. It’s a simple, synchronous data flow tool.</li>
        <li><strong>Redux:</strong> Redux supports middleware (e.g., <code>redux-thunk</code>, <code>redux-saga</code>) that allows you to handle asynchronous actions, logging, and more advanced scenarios. Middleware is useful for handling side effects, dispatching actions, and async data flow.</li>
      </ul>

      <h3>5. Debugging</h3>
      <ul>
        <li><strong>Context API:</strong> Debugging can be more challenging with Context API because the state is less traceable, and there’s no built-in devtools for tracking state changes over time.</li>
        <li><strong>Redux:</strong> Redux provides excellent developer tools (Redux DevTools) to track every action, inspect the state changes, and even time-travel debug. This makes debugging more powerful in complex applications.</li>
      </ul>

      <h3>6. Community and Ecosystem</h3>
      <ul>
        <li><strong>Context API:</strong> Since Context API is built into React, it is lightweight and doesn't require any external dependencies. However, it has a smaller ecosystem compared to Redux.</li>
        <li><strong>Redux:</strong> Redux has a larger ecosystem, including libraries like <code>react-redux</code> to integrate with React and tools like Redux DevTools. It also has a vast community and many resources for learning and support.</li>
      </ul>

      <h3>Key Difference Summary</h3>
      <p>While both Context API and Redux are used for state management, Context API is best suited for simpler use cases, while Redux is better suited for managing more complex state interactions, performance optimizations, and asynchronous tasks.</p>
    </div>
  `,
    example: false,
    codeSnippet: `
    {
      // No specific code snippet needed as this is a conceptual explanation.
    }
  `,
  },
  {
    id: 1051,
    question: "How does Redux work in React applications?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>How Redux Works in React Applications</h2>
      <p>Redux is a predictable state container for JavaScript applications, and it works in React applications by managing global state and providing a centralized store to which components can connect. It follows a strict unidirectional data flow, which makes state changes more predictable and easier to debug.</p>

      <h3>1. The Store</h3>
      <p>In Redux, the <strong>store</strong> is the central place where the entire application's state is stored. It's an object that holds all the data, and it is immutable (cannot be directly changed). To update the state, we dispatch actions that are handled by reducers.</p>

      <h3>2. Actions</h3>
      <p><strong>Actions</strong> are plain JavaScript objects that represent events that will trigger a state change in the store. Each action must have a <code>type</code> property (a string constant that identifies the action) and an optional <code>payload</code> containing data that needs to be sent along with the action.</p>

      <h3>3. Reducers</h3>
      <p><strong>Reducers</strong> are functions that specify how the application's state changes in response to actions. They take the current state and the action dispatched, then return a new state. Reducers are pure functions, meaning they don't modify the state directly but return a new state object.</p>

      <h3>4. Dispatching Actions</h3>
      <p>To change the state in Redux, you dispatch an action using the <code>dispatch()</code> function. When an action is dispatched, Redux sends the action to the reducer, which then processes the action and returns the new state.</p>

      <h3>5. Connecting Redux with React</h3>
      <p>To connect Redux with a React component, you use the <code>connect()</code> function from the <code>react-redux</code> library. The <code>connect()</code> function allows components to subscribe to the Redux store and dispatch actions. The component will re-render whenever the part of the state it is subscribed to changes.</p>

      <h3>6. Provider</h3>
      <p>The <code>Provider</code> component from <code>react-redux</code> is used to make the Redux store available to all components in your React application. It should wrap the root component of the application.</p>

      <h3>Steps to Implement Redux in React</h3>
      <ul>
        <li>1. <strong>Define actions:</strong> Create action creators to define the actions that can be dispatched.</li>
        <li>2. <strong>Create reducers:</strong> Write reducers to specify how state changes in response to actions.</li>
        <li>3. <strong>Configure the store:</strong> Create a Redux store using <code>createStore</code> from Redux.</li>
        <li>4. <strong>Wrap the root component with Provider:</strong> Use the <code>Provider</code> component to make the store accessible throughout the component tree.</li>
        <li>5. <strong>Connect components:</strong> Use the <code>connect()</code> function to connect components to the Redux store.</li>
      </ul>

      <h3>Example Flow</h3>
      <p>When a user clicks a button in a React component, it dispatches an action to update the state. The action is processed by a reducer, which creates a new state. The component that is connected to the Redux store will re-render with the updated state.</p>
    </div>
  `,
    example: false,
    codeSnippet: `
    {
      // No specific code snippet needed as this is a conceptual explanation.
    }
  `,
  },
  {
    id: 1052,
    question: "What are React portals, and why would you use them?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>What are React Portals, and Why Would You Use Them?</h2>
      <p><strong>React Portals</strong> provide a way to render a child component into a DOM node that exists outside the parent component's DOM hierarchy. In simpler terms, it allows you to render a component in a different part of the DOM tree, outside the typical parent-child structure.</p>

      <h3>How Portals Work</h3>
      <p>Normally, a component's JSX is rendered inside its parent component. However, with portals, you can "break" this structure and render the component in a different part of the DOM. This is achieved using the <code>ReactDOM.createPortal()</code> function.</p>

      <h3>Syntax</h3>
      <p>The basic syntax for creating a portal is:</p>
      <pre>
        ReactDOM.createPortal(child, container)
      </pre>
      <p>Where:</p>
      <ul>
        <li><strong>child:</strong> The child React component or element that you want to render.</li>
        <li><strong>container:</strong> The DOM node where you want to render the child element (outside of the parent component).</li>
      </ul>

      <h3>Use Cases for React Portals</h3>
      <p>Portals are helpful in various scenarios, particularly when you need to render components outside the normal parent-child hierarchy:</p>
      <ul>
        <li><strong>Modals, Dialogs, and Tooltips:</strong> Portals are commonly used to render modals, tooltips, and dropdowns that need to be rendered outside the normal flow of the component tree (e.g., outside of other components' borders or z-index constraints).</li>
        <li><strong>Overlays:</strong> Any UI elements like overlays or loading spinners that need to be visually layered over other components can be effectively managed using portals.</li>
        <li><strong>Performance Considerations:</strong> When rendering content like tooltips, pop-ups, or menus that may require their own layer, portals help avoid unnecessary rerenders of components that are outside the region of interest.</li>
      </ul>

      <h3>Example of React Portals</h3>
      <p>In the following example, a modal is rendered using React portals:</p>
      <pre>
        import React, { useState } from 'react';
        import ReactDOM from 'react-dom';

        function Modal({ isOpen, onClose }) {
          if (!isOpen) return null;

          return ReactDOM.createPortal(
            <div className="modal">
              <div className="modal-content">
                <h2>Modal</h2>
                <button onClick={onClose}>Close</button>
              </div>
            </div>,
            document.getElementById('modal-root') // The container outside the React component hierarchy
          );
        }

        function App() {
          const [isModalOpen, setModalOpen] = useState(false);

          const toggleModal = () => setModalOpen(!isModalOpen);

          return (
            <div>
              <button onClick={toggleModal}>Open Modal</button>
              <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </div>
          );
        }

        export default App;
      </pre>

      <p>In this example, the modal component is rendered into the <code>modal-root</code> div, which exists outside the normal component hierarchy in the DOM.</p>

      <h3>Why Use Portals?</h3>
      <p>Portals allow you to break out of the normal DOM structure when necessary, offering the following advantages:</p>
      <ul>
        <li><strong>Better control over z-index:</strong> By rendering outside the parent DOM hierarchy, you can control UI elements like modals and tooltips more effectively.</li>
        <li><strong>Improved accessibility:</strong> Some UI elements (e.g., dialogs) may need to be outside the regular parent structure for screen readers to work more effectively.</li>
        <li><strong>Cleaner component structure:</strong> Portals allow for cleaner component designs, especially for elements that need to be rendered over other components, such as pop-ups and notifications.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';
    import ReactDOM from 'react-dom';

    function Modal({ isOpen, onClose }) {
      if (!isOpen) return null;

      return ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <h2>Modal</h2>
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.getElementById('modal-root')
      );
    }

    function App() {
      const [isModalOpen, setModalOpen] = useState(false);

      const toggleModal = () => setModalOpen(!isModalOpen);

      return (
        <div>
          <button onClick={toggleModal}>Open Modal</button>
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1053,
    question:
      "What is the difference between class-based lifecycle methods and hooks?",
    technology: "React.js",
    difficulty: "Intermediate",
    answer: `
    <div>
      <h2>Difference Between Class-Based Lifecycle Methods and Hooks</h2>
      <p>In React, there are two main ways to handle component lifecycle: class-based lifecycle methods and hooks (which are used in function components). Both serve similar purposes but differ in their implementation and usage. Here's a breakdown of the key differences:</p>

      <h3>1. Syntax and Component Type</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> Class components use lifecycle methods like <code>componentDidMount()</code>, <code>componentDidUpdate()</code>, and <code>componentWillUnmount()</code> to handle various stages of the component's life.</p>
      <p><strong>Hooks:</strong> Hooks are functions that allow you to use state and other React features in function components. The most common hooks for lifecycle purposes are <code>useEffect()</code> and <code>useState()</code>.</p>

      <h3>2. Reusability</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> In class components, lifecycle methods are tied to the component class itself and can be more difficult to reuse across different components.</p>
      <p><strong>Hooks:</strong> Hooks promote better reusability. Since hooks are just functions, they can be extracted into custom hooks and reused across multiple components.</p>

      <h3>3. Side Effects Management</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> In class components, side effects are typically handled in <code>componentDidMount()</code>, <code>componentDidUpdate()</code>, and <code>componentWillUnmount()</code>.</p>
      <p><strong>Hooks:</strong> In function components, the <code>useEffect()</code> hook is used to manage side effects, replacing the need for multiple lifecycle methods.</p>

      <h3>4. State and Side Effect Combination</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> You manage state in class components with <code>this.state</code> and update it with <code>this.setState()</code>. Side effects like data fetching or subscriptions are handled in lifecycle methods.</p>
      <p><strong>Hooks:</strong> With hooks, you can manage both state and side effects in the same function component using <code>useState()</code> for state and <code>useEffect()</code> for side effects. This leads to more compact and readable code.</p>

      <h3>5. Lifecycle Phases</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> Class components have lifecycle phases like Mounting, Updating, and Unmounting, which are managed using methods like <code>componentDidMount()</code>, <code>componentDidUpdate()</code>, and <code>componentWillUnmount()</code>.</p>
      <p><strong>Hooks:</strong> In function components, lifecycle phases are managed using <code>useEffect()</code>, with the ability to specify dependencies to control when effects should run (similar to lifecycle method phases).</p>

      <h3>6. Contextual Handling</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> In class components, managing context requires explicit methods like <code>static contextType</code> or the <code>Context.Consumer</code> pattern to consume context.</p>
      <p><strong>Hooks:</strong> In function components, you can use the <code>useContext()</code> hook to consume context directly, leading to cleaner and more readable code.</p>

      <h3>7. Performance Considerations</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> Class components might have a slightly heavier performance cost due to their more complex internal state and the management of lifecycle methods.</p>
      <p><strong>Hooks:</strong> Function components with hooks tend to be more lightweight, as they avoid the overhead associated with class-based components and their lifecycle methods.</p>

      <h3>8. Handling Multiple Effects</h3>
      <p><strong>Class-Based Lifecycle Methods:</strong> You might end up managing multiple lifecycle methods for different side effects, which can become difficult to manage in large components.</p>
      <p><strong>Hooks:</strong> Hooks, especially <code>useEffect()</code>, allow you to handle multiple side effects inside a single function, keeping related code together.</p>

      <h3>Summary of Key Differences</h3>
      <ul>
        <li>Class components use lifecycle methods (e.g., <code>componentDidMount()</code>, <code>componentDidUpdate()</code>, <code>componentWillUnmount()</code>), while function components use hooks like <code>useEffect()</code> and <code>useState()</code>.</li>
        <li>Hooks provide greater reusability, cleaner code, and better composition compared to class-based lifecycle methods.</li>
        <li>Hooks allow you to manage both state and side effects in the same function, reducing complexity and improving maintainability.</li>
        <li>Function components with hooks offer better performance compared to class components, as they avoid unnecessary lifecycle overhead.</li>
      </ul>
    </div>
  `,
    example: false,
    codeSnippet: null,
  },
  {
    id: 1057,
    question: "How do you optimize performance in a React application?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>Performance Optimization in React Applications</h2>
      <p>Optimizing performance in React applications is essential to ensure smooth user experiences, especially in large applications. Here are several strategies to improve the performance of React applications:</p>

      <h3>1. Memoization (React.memo)</h3>
      <p><strong>React.memo:</strong> Use <code>React.memo()</code> to prevent unnecessary re-renders of components by memoizing the component output. It will only re-render the component when the props change.</p>

      <h3>2. useMemo and useCallback Hooks</h3>
      <p><strong>useMemo:</strong> The <code>useMemo()</code> hook is used to memoize expensive calculations, so they don't need to be recalculated on every render unless specific dependencies change.</p>
      <p><strong>useCallback:</strong> The <code>useCallback()</code> hook helps you prevent the recreation of functions on every render, which can be beneficial in preventing unnecessary re-renders of child components.</p>

      <h3>3. Code Splitting</h3>
      <p><strong>Code Splitting:</strong> Implement code splitting with tools like <code>React.lazy()</code> and <code>Suspense</code> to load only the necessary code for the initial page load, thus reducing the bundle size.</p>

      <h3>4. Virtualization of Lists</h3>
      <p><strong>List Virtualization:</strong> Use libraries like <code>react-window</code> or <code>react-virtualized</code> to render only a subset of a long list of items on the screen at a time. This can drastically improve performance for large lists.</p>

      <h3>5. Avoid Anonymous Functions in JSX</h3>
      <p><strong>Avoiding Anonymous Functions:</strong> Inline anonymous functions in JSX can cause unnecessary re-renders. Define functions outside of JSX or use <code>useCallback</code> to optimize them.</p>

      <h3>6. Avoid Unnecessary State Updates</h3>
      <p><strong>State Updates:</strong> Ensure that state updates do not occur unnecessarily. Using <code>shouldComponentUpdate()</code> in class components or <code>React.memo()</code> in function components helps prevent unnecessary re-renders caused by state updates.</p>

      <h3>7. Debouncing and Throttling</h3>
      <p><strong>Debouncing and Throttling:</strong> For performance-heavy operations (like API calls or handling user input), use debouncing or throttling to limit how often these operations are triggered, especially for events like typing or scrolling.</p>

      <h3>8. Server-Side Rendering (SSR) and Static Site Generation (SSG)</h3>
      <p><strong>SSR and SSG:</strong> Consider server-side rendering or static site generation to improve initial load times by pre-rendering content on the server before sending it to the browser.</p>

      <h3>9. Use PureComponent for Class Components</h3>
      <p><strong>PureComponent:</strong> In class components, using <code>React.PureComponent</code> can help by automatically implementing the <code>shouldComponentUpdate()</code> lifecycle method for you, ensuring that the component re-renders only when its props or state change.</p>

      <h3>10. Optimize Images and Media</h3>
      <p><strong>Image Optimization:</strong> Use appropriate image formats (e.g., WebP), compress images, and implement lazy loading for images to improve performance, especially on resource-heavy pages.</p>

      <h3>11. Use Web Workers for Heavy Tasks</h3>
      <p><strong>Web Workers:</strong> Offload CPU-intensive tasks like data processing or calculations to Web Workers, which run in the background and do not block the main UI thread.</p>

      <h3>12. Avoid Large Component Trees</h3>
      <p><strong>Avoid Deep Component Trees:</strong> Keep the component tree shallow and break down complex components into smaller, more manageable ones. This improves the overall performance of React's reconciliation process.</p>

      <h3>13. Optimize Context Usage</h3>
      <p><strong>Context API Optimization:</strong> Be cautious when using the Context API as it can lead to unnecessary re-renders of consumers. Use multiple contexts to separate different pieces of state, and memoize context values to reduce re-renders.</p>

      <h3>14. Use the Profiler API</h3>
      <p><strong>React Profiler:</strong> Use React's built-in Profiler API to measure component performance and identify bottlenecks. The profiler helps you track render times and the reasons behind component re-renders.</p>

      <h3>Conclusion</h3>
      <p>Performance optimization in React involves a combination of techniques and best practices to minimize re-renders, reduce bundle sizes, and ensure a smooth user experience. By leveraging features like memoization, code splitting, lazy loading, and optimizing the state management, React applications can run efficiently even at scale.</p>
    </div>
  `,
    example: false,
    codeSnippet: null,
  },
  {
    id: 1058,
    question: "How does React handle server-side rendering (SSR)?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>React and Server-Side Rendering (SSR)</h2>
      <p>Server-side rendering (SSR) is a technique where React components are rendered on the server instead of the browser. The rendered HTML is then sent to the client, allowing the page to load faster and be indexed by search engines more efficiently.</p>

      <h3>How SSR Works in React</h3>
      <p>In traditional client-side rendering, React renders the components in the browser, which means the browser first loads a blank page and then JavaScript populates the content. With SSR, the server pre-renders the React components and sends the fully rendered HTML to the client, allowing the page to be visible to the user immediately.</p>
      
      <h3>Steps for SSR in React</h3>
      <p>Here’s a basic outline of how SSR works in React:</p>
      <ol>
        <li>The React application is run on the server using <code>ReactDOMServer</code> (specifically the <code>ReactDOMServer.renderToString()</code> method).</li>
        <li>During this process, React generates the HTML for the initial page load.</li>
        <li>The generated HTML is sent from the server to the client as a fully rendered page.</li>
        <li>Once the page is loaded in the browser, React takes over and "hydrates" the page, attaching event listeners and re-enabling React functionality using <code>ReactDOM.hydrate()</code>.</li>
      </ol>

      <h3>Key Concepts in SSR</h3>
      <ul>
        <li><strong>ReactDOMServer:</strong> This package provides methods like <code>renderToString</code> and <code>renderToStaticMarkup</code> to render React components to HTML on the server.</li>
        <li><strong>Hydration:</strong> After the page is rendered on the server and sent to the browser, React "hydrates" the page by attaching event handlers and other JavaScript logic to the existing HTML markup, allowing it to become a fully interactive React application.</li>
        <li><strong>Pre-rendering:</strong> The HTML content is fully generated on the server, and the JavaScript is responsible only for rehydrating and making the page interactive on the client.</li>
      </ul>

      <h3>Benefits of SSR</h3>
      <ul>
        <li><strong>Faster Initial Load:</strong> SSR allows the user to view the content more quickly because the HTML is generated and sent from the server. This is beneficial for performance and user experience, especially on slower networks or devices.</li>
        <li><strong>SEO Benefits:</strong> Search engines can index the fully rendered HTML content without needing to execute JavaScript, improving SEO (Search Engine Optimization) and discoverability of the content.</li>
        <li><strong>Improved Performance:</strong> The initial page load is faster, as the client does not need to wait for JavaScript to execute before rendering the content.</li>
      </ul>

      <h3>Challenges of SSR</h3>
      <ul>
        <li><strong>Complexity:</strong> Setting up SSR can be more complex than traditional client-side rendering. It requires a Node.js server and a proper configuration to handle server-side rendering of React components.</li>
        <li><strong>Client-Side Hydration:</strong> After the server sends the HTML, React must hydrate the page, which can sometimes lead to performance issues if not handled properly.</li>
        <li><strong>Server Load:</strong> SSR can increase the load on the server since it is responsible for rendering the components and sending them to the client. This can be resource-intensive, especially for dynamic content.</li>
      </ul>

      <h3>Popular Tools for SSR in React</h3>
      <p>Popular frameworks that enable SSR for React applications include:</p>
      <ul>
        <li><strong>Next.js:</strong> A popular React framework that simplifies SSR and offers built-in tools for static site generation (SSG) and server-side rendering.</li>
        <li><strong>Razzle:</strong> A tool that allows for universal rendering of React applications with minimal configuration.</li>
        <li><strong>Gatsby:</strong> Primarily used for static site generation, Gatsby also allows you to render pages at build time and serve them as pre-built HTML files.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>React’s server-side rendering (SSR) provides significant advantages in terms of initial page load performance and SEO, especially for content-heavy or public-facing applications. However, it comes with added complexity and performance considerations that developers should be aware of. Using modern frameworks like Next.js can help mitigate many of the challenges involved in SSR.</p>
    </div>
  `,
    example: false,
    codeSnippet: null,
  },
  {
    id: 1061,
    question: "Explain the concept of hydration in React.",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <div>
      <h2>What is Hydration in React?</h2>
      <p>Hydration in React is the process of making a server-rendered page interactive by attaching React’s event listeners and re-enabling React’s functionality. It occurs after the server sends the pre-rendered HTML to the browser. Hydration allows React to take over the static HTML content, making it a fully interactive React application.</p>

      <h3>How Hydration Works</h3>
      <p>When you perform server-side rendering (SSR) in React, the server generates static HTML of the initial page, which is then sent to the client. Initially, this HTML is just a static page without any interactivity. Hydration is the process where React "attaches" event listeners and other JavaScript logic to the existing HTML on the client-side, enabling the React components to become fully interactive.</p>

      <h3>Key Concepts in Hydration</h3>
      <ul>
        <li><strong>Hydration vs. Rendering:</strong> Rendering refers to generating the content from React components, while hydration refers to making that content interactive. Hydration is specifically done after the HTML has been rendered on the server.</li>
        <li><strong>ReactDOM.hydrate:</strong> Hydration is handled by the <code>ReactDOM.hydrate()</code> method, which is used instead of <code>ReactDOM.render()</code> when initializing the application on the client side after SSR.</li>
        <li><strong>Matching HTML:</strong> The HTML generated by the server must match exactly with the HTML React generates on the client side. If there’s a mismatch, React will throw an error or warn the developer about the inconsistency.</li>
      </ul>

      <h3>Why is Hydration Important?</h3>
      <ul>
        <li><strong>Faster Page Load:</strong> By rendering the content on the server first, the user can see the page’s content almost immediately, without waiting for JavaScript to load and render the page. Hydration adds interactivity without causing any delays in rendering.</li>
        <li><strong>SEO Benefits:</strong> Since the page is pre-rendered on the server, search engines can index the content even before JavaScript has been executed, improving SEO.</li>
        <li><strong>Maintaining UI State:</strong> Hydration ensures that the interactive behavior of the page is preserved when React takes over the server-rendered HTML.</li>
      </ul>

      <h3>How to Perform Hydration in React</h3>
      <p>To perform hydration in React, the <code>ReactDOM.hydrate()</code> method is used on the client side. Here’s how it works:</p>
      <ol>
        <li>On the server, the initial HTML is generated using <code>ReactDOMServer.renderToString()</code> and sent to the client.</li>
        <li>On the client, React takes over the static HTML by calling <code>ReactDOM.hydrate()</code> to enable event handling and make the page interactive.</li>
      </ol>

      <h3>Example</h3>
      <pre>
        <code>
          import React from 'react';
          import ReactDOM from 'react-dom';
          import App from './App';

          // On the client-side (after SSR)
          ReactDOM.hydrate(
            &lt;App /&gt;,
            document.getElementById('root')  // The container where the app is attached
          );
        </code>
      </pre>

      <h3>Challenges with Hydration</h3>
      <ul>
        <li><strong>Mismatch between Server and Client Render:</strong> If the server-generated HTML doesn’t match the HTML generated by React on the client, React will throw a warning and may fail to hydrate the page correctly.</li>
        <li><strong>Performance Considerations:</strong> Hydration adds an additional step after the initial rendering, which could affect performance, especially if the app is large or contains heavy JavaScript logic.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Hydration is a crucial part of server-side rendering (SSR) in React. It allows React to take over a server-rendered page and add interactivity to it. The process ensures that the initial page load is fast and SEO-friendly while maintaining a seamless user experience by adding dynamic behavior to static content.</p>
    </div>
  `,
    example: false,
    codeSnippet: `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    // On the client-side (after SSR)
    ReactDOM.hydrate(
      <App />,
      document.getElementById('root')
    );
  `,
  },
  {
    id: 1062,
    question: "How do you manage authentication in a React app?",
    technology: "React.js",
    difficulty: "Intermediate",
    answer: `
    <div>
      <h2>Managing Authentication in React</h2>
      <p>Authentication in a React application is crucial for securing user data and controlling access to specific parts of the app. React does not have built-in authentication mechanisms, but we can handle it through a combination of state management, browser storage, and routing. The general process involves handling login, protecting routes, storing authentication tokens, and redirecting users based on their authentication status.</p>

      <h3>Steps to Manage Authentication in React</h3>
      <ul>
        <li><strong>Login:</strong> When a user logs in, their credentials (usually username and password) are sent to a backend API, which returns an authentication token (such as JWT).</li>
        <li><strong>Store Authentication Token:</strong> Once the user is authenticated, store the authentication token (typically JWT) in <code>localStorage</code>, <code>sessionStorage</code>, or <code>cookies</code> to maintain the user's session across page reloads.</li>
        <li><strong>Protected Routes:</strong> Use React Router to protect specific routes by checking if the user is authenticated before rendering the protected components.</li>
        <li><strong>Logout:</strong> To log out, clear the stored authentication token and redirect the user to the login page or public area of the app.</li>
      </ul>

      <h3>How to Protect Routes</h3>
      <p>You can protect routes in React using a combination of state and React Router. A protected route will check whether the user is authenticated before rendering the component.</p>

      <h3>Example of Protected Route</h3>
      <pre>
        <code>
          import React from 'react';
          import { Route, Redirect } from 'react-router-dom';

          function ProtectedRoute({ component: Component, ...rest }) {
            const isAuthenticated = localStorage.getItem('authToken');
            return (
              <Route
                {...rest}
                render={(props) =>
                  isAuthenticated ? (
                    <Component {...props} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            );
          }
        </code>
      </pre>

      <h3>Authentication Flow</h3>
      <ul>
        <li><strong>Login:</strong> After successfully authenticating with the backend, store the JWT token in localStorage.</li>
        <li><strong>Checking Authentication:</strong> Use the token in localStorage to check if the user is authenticated when accessing a protected route.</li>
        <li><strong>Logout:</strong> When logging out, clear the token and redirect the user to a public route.</li>
      </ul>

      <h3>Example of Login Flow with JWT</h3>
      <pre>
        <code>
          import React, { useState } from 'react';

          function Login() {
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
            const [error, setError] = useState('');

            const handleLogin = async (e) => {
              e.preventDefault();
              const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
              });

              if (response.ok) {
                const data = await response.json();
                localStorage.setItem('authToken', data.token); // Store JWT
                window.location.href = '/dashboard'; // Redirect to dashboard
              } else {
                setError('Invalid credentials');
              }
            };

            return (
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
              </form>
            );
          }

          export default Login;
        </code>
      </pre>

      <h3>Handling Authentication with Context API</h3>
      <p>You can also manage authentication using React's Context API to maintain the authentication state across your app.</p>

      <h3>Example using Context API</h3>
      <pre>
        <code>
          import React, { createContext, useState, useContext } from 'react';

          const AuthContext = createContext();

          export function useAuth() {
            return useContext(AuthContext);
          }

          export function AuthProvider({ children }) {
            const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

            const login = (token) => {
              localStorage.setItem('authToken', token);
              setAuthToken(token);
            };

            const logout = () => {
              localStorage.removeItem('authToken');
              setAuthToken(null);
            };

            return (
              <AuthContext.Provider value={{ authToken, login, logout }}>
                {children}
              </AuthContext.Provider>
            );
          }
        </code>
      </pre>

      <h3>Conclusion</h3>
      <p>Authentication in React applications can be managed using tokens like JWT, storing the token in <code>localStorage</code> or <code>cookies</code>, and using React Router to protect specific routes. Additionally, using the Context API helps manage the authentication state globally in your app, making it easier to handle across different components.</p>
    </div>
  `,
    example: false,
    codeSnippet: `
    import React, { useState } from 'react';

    function Login() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('https://example.com/api/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('authToken', data.token); // Store JWT
          window.location.href = '/dashboard'; // Redirect to dashboard
        } else {
          setError('Invalid credentials');
        }
      };

      return (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      );
    }

    export default Login;
  `,
  },

  {
    id: 1063,
    question: "What are render props, and how do they work?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <p>Render props is a pattern in React for sharing code between components. It involves passing a function as a prop to a child component, and this function returns JSX to be rendered. This approach allows for flexible and reusable component logic, as the child component can use the render prop to control the UI or behavior dynamically.</p>

    <p>Instead of providing static data, render props allow a function to be passed that gives the child component control over what gets rendered, making the component more dynamic and reusable.</p>
`,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    // DataProvider component that uses render prop
    function DataProvider({ render }) {
      const [data, setData] = useState('Initial Data');

      const changeData = () => {
        setData('Updated Data');
      };

      return (
        <div>
          <button onClick={changeData}>Change Data</button>
          {/* Render prop function is called with the data */}
          {render(data)}
        </div>
      );
    }

    // App component using the render prop
    function App() {
      return (
        <DataProvider
          render={(data) => (
            <div>
              <h1>Received Data: {data}</h1>
            </div>
          )}
        />
      );
    }

    export default App;
  `,
  },
  {
    id: 1064,
    question: "How does React handle event delegation?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    In React, event delegation is handled using a single event listener attached to the root of the component (or the root DOM node of the entire app, in some cases). This is different from traditional DOM where individual event listeners are attached to each element that requires handling an event.

    React takes advantage of event bubbling by attaching a single event listener to the root of the component (or document). When an event occurs, it bubbles up through the DOM tree to the root, where React intercepts it and delegates it to the appropriate event handler based on the target element.

    This process improves performance by reducing the number of event listeners in the DOM, as only one listener is required to handle events for multiple child elements.

    In React, you define event handlers directly on the components' JSX elements, and React internally uses event delegation for efficiently handling events.
  `,
    example: true,
    codeSnippet: `
    import React, { useState } from 'react';

    function EventDelegation() {
      const [clickedItem, setClickedItem] = useState(null);

      const handleClick = (event) => {
        setClickedItem(event.target.innerText); // Accessing the clicked element's text
      };

      return (
        <div>
          <ul onClick={handleClick}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          {clickedItem && <p>You clicked: {clickedItem}</p>}
        </div>
      );
    }

    export default EventDelegation;
  `,
  },
  {
    id: 1065,
    question: "What is the role of middleware in Redux?",
    technology: "Redux",
    difficulty: "Medium",
    answer: `
    <p>Middleware in Redux serves as a mechanism to extend the store's capabilities by allowing you to intercept and modify actions before they reach the reducer. It acts as a bridge between the dispatching of an action and the point at which the action reaches the reducer.</p>

    <p>The primary role of middleware in Redux includes:</p>

    <ol>
      <li><strong>Asynchronous Actions</strong>: Middleware can help handle asynchronous operations like API calls or other side-effects. For example, 'redux-thunk' or 'redux-saga' middleware allows you to write action creators that return functions (or generators) instead of simple action objects, making it easier to manage asynchronous actions.</li>
      <li><strong>Logging</strong>: Middleware can be used for logging the dispatched actions and the resulting state changes, which helps in debugging and tracking the application state.</li>
      <li><strong>State Manipulation</strong>: Middleware can modify or enrich actions before they reach the reducers. For example, logging certain types of actions or attaching additional metadata to the action.</li>
      <li><strong>Analytics and Metrics</strong>: Middleware can be used to send event data or track user interactions for analytics purposes before actions reach the reducers.</li>
      <li><strong>Preventing Unwanted Actions</strong>: Middleware can also block certain actions from being dispatched or modify them based on the current state of the application.</li>
    </ol>

    <p>Overall, middleware provides a flexible and powerful way to add custom logic into the action dispatch process in a Redux-based state management system.</p>
  `,
    example: true,
    codeSnippet: `
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';

    // Reducer example
    const reducer = (state = { value: 0 }, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { value: state.value + 1 };
        case 'DECREMENT':
          return { value: state.value - 1 };
        default:
          return state;
      }
    };

    // Action creator with thunk
    const incrementAsync = () => {
      return (dispatch) => {
        setTimeout(() => {
          dispatch({ type: 'INCREMENT' });
        }, 1000);
      };
    };

    // Create store with middleware
    const store = createStore(reducer, applyMiddleware(thunk));

    store.dispatch(incrementAsync());

    // Access store's state
    console.log(store.getState());  // { value: 0 } (initial state, until action is processed)
  `,
  },
  {
    id: 1066,
    question: "How do you debounce and throttle function calls in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <p>Debouncing and throttling are two techniques used to limit the number of times a function is invoked in response to events such as user input or scrolling. These techniques are particularly useful in optimizing performance and avoiding unnecessary function calls during high-frequency events.</p>

    <h3>Debouncing:</h3>
    <p>Debouncing ensures that a function is called only after a certain amount of time has passed since the last invocation. It is typically used when you want to wait for the user to stop typing before triggering an action (e.g., an API call on a search input field).</p>

    <strong>How debouncing works</strong>: When an event occurs, it resets a timer. Only when the event stops for a certain duration, the function is triggered.

    <strong>Use case</strong>: Search input, form validation, etc.

    <h3>Throttling:</h3>
    <p>Throttling ensures that a function is called at a fixed interval, regardless of how frequently an event occurs. It is used to limit the number of function calls over time.</p>

    <strong>How throttling works</strong>: The function is executed once every set interval, no matter how many times the event is triggered during that period.

    <strong>Use case</strong>: Scrolling, resizing, window events, etc.

    <p>React provides built-in hooks or libraries like Lodash to implement debouncing and throttling.</p>
  `,
    example: true,
    codeSnippet: `
    import { useState } from 'react';
    import { debounce, throttle } from 'lodash';

    function App() {
      const [query, setQuery] = useState('');

      const handleChangeDebounce = debounce((value) => {
        console.log('Debounced value:', value);
      }, 500); // Function will be called after 500ms

      const handleChangeThrottle = throttle((value) => {
        console.log('Throttled value:', value);
      }, 1000); // Function will be called once every 1000ms

      const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        handleChangeDebounce(value);  // Debounced
        handleChangeThrottle(value);  // Throttled
      };

      return (
        <div>
          <input type="text" value={query} onChange={handleChange} placeholder="Type something" />
        </div>
      );
    }

    export default App;
  `,
  },
  {
    id: 1067,
    question: "What is React Concurrent Mode?",
    technology: "React",
    difficulty: "Advanced",
    answer: `
    <p>React Concurrent Mode is a set of features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed. It enables React to work on multiple tasks simultaneously and prioritize important updates to keep the UI responsive and smooth, even during complex rendering tasks.</p>

    <h3>Key Concepts:</h3>
    
    <ol>
      <li><strong>Concurrency</strong>: React can work on multiple tasks at once, breaking up complex tasks into smaller units. This allows React to give priority to more important tasks (like user interactions) and defer less critical tasks (like non-visible components).</li>
      <li><strong>Interruptible Rendering</strong>: With Concurrent Mode, React can interrupt a rendering task if a higher priority task comes in. For example, if the user types in a text field, React can pause rendering the list and respond to the typing event immediately.</li>
      <li><strong>Time Slicing</strong>: React breaks up the rendering work into chunks, executing small pieces of it over multiple frames. This prevents the UI from freezing during complex updates, ensuring smooth animations and interactions.</li>
      <li><strong>Suspense</strong>: React Concurrent Mode works well with the Suspense feature, which lets React pause rendering while waiting for data or other resources to load. Once the data is ready, React can resume rendering the component. This improves user experience by displaying loading indicators until content is ready.</li>
    </ol>

    <h3>Benefits of Concurrent Mode:</h3>
    <ul>
      <li><strong>Improved User Experience</strong>: The UI remains interactive and responsive even when there are complex rendering tasks, such as large lists or slow network requests.</li>
      <li><strong>Faster Rendering</strong>: React can prioritize important tasks like user interactions, making the app feel faster.</li>
      <li><strong>Better Server-Side Rendering (SSR)</strong>: Concurrent Mode helps with SSR by enabling React to handle server-side rendering more efficiently, reducing time-to-first-byte (TTFB).</li>
    </ul>

    <h3>When to Use Concurrent Mode:</h3>
    <ul>
      <li>It is ideal for larger, more complex applications where responsiveness is crucial.</li>
      <li>It works best when paired with features like Suspense and lazy loading to improve perceived performance.</li>
    </ul>

    <p>React Concurrent Mode is still experimental, and developers need to enable it manually in their applications.</p>
  `,
    example: false,
    codeSnippet: "",
  },

  {
    id: 1068,
    question: "What are micro-frontends, and how can React be used with them?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: ` <p>Micro-frontends are an architectural approach to building front-end applications by breaking them down into smaller, more manageable, and independent sections. Each section (or "micro-frontend") can be developed, deployed, and maintained independently, allowing teams to work on different parts of a larger application without interfering with each other. This approach promotes scalability, flexibility, and parallel development in large projects.</p>

    <h3>Key Concepts:</h3>
    
    <ol>
      <li><strong>Independent Deployments</strong>: Each micro-frontend is an independent application that can be deployed separately. This allows teams to update and deploy parts of the application without impacting the entire system.</li>
      <li><strong>Separation of Concerns</strong>: Different teams can work on different parts of the UI (e.g., navigation, user profile, product listings) without worrying about overlapping responsibilities or dependencies.</li>
      <li><strong>Interoperability</strong>: Micro-frontends need to communicate with each other but can be built using different technologies, such as React, Angular, Vue, or even vanilla JavaScript. They typically use APIs or shared event-driven communication mechanisms for interaction.</li>
      <li><strong>Composition</strong>: Micro-frontends are usually composed together on the client-side, either by a framework or manually, into a unified user interface.</li>
    </ol>

    <h3>How React Can Be Used with Micro-Frontends:</h3>
    
    <ol>
      <li><strong>React as a Micro-Frontend</strong>: React can be used to build each micro-frontend independently. Each micro-frontend could be a React application that is responsible for a specific section of the UI, such as the cart, user profile, or dashboard.</li>
      <li><strong>Module Federation</strong>: React applications can leverage Webpack's Module Federation to load and share code between different micro-frontends. This allows micro-frontends built with React to import and use components from other micro-frontends dynamically at runtime, reducing the need for duplicated code.</li>
      <li><strong>Iframe or Custom Elements</strong>: Micro-frontends can also be loaded as iframes or web components (custom elements). For example, a React micro-frontend can be encapsulated as a web component and integrated into a different part of the application that uses Angular or Vue.js.</li>
      <li><strong>Shared State and Communication</strong>: Since each micro-frontend is independent, they might need to communicate and share state. This can be done using shared services or event emitters, or by using global state management techniques such as Redux or even React Context, depending on the structure of the micro-frontends.</li>
      <li><strong>Routing</strong>: Micro-frontends can share routing and URLs, or each one can have its own routing system. React Router can be used in each micro-frontend to manage its internal routing, or the root application can handle routing and dynamically load micro-frontends based on the URL.</li>
    </ol>

    <h3>Benefits of Micro-Frontends:</h3>
    <ul>
      <li><strong>Scalability</strong>: Teams can work on different parts of the application independently, improving development speed and allowing for better scalability.</li>
      <li><strong>Flexibility</strong>: Each micro-frontend can use the technology stack that best suits its needs, whether it’s React, Angular, Vue, or others.</li>
      <li><strong>Faster Releases</strong>: Micro-frontends allow for independent deployment, meaning changes to one part of the application can be deployed without affecting the whole system.</li>
      <li><strong>Improved Maintainability</strong>: Since each part of the application is smaller and isolated, it is easier to maintain, test, and debug.</li>
    </ul>

    <h3>When to Use Micro-Frontends:</h3>
    <ul>
      <li>Large, complex applications where different teams are responsible for different features or sections of the UI.</li>
      <li>Projects that require continuous, independent deployment cycles.</li>
      <li>Scenarios where different technologies need to be used within the same app, or where multiple applications need to be integrated into a larger system.</li>
    </ul>

    <p>Micro-frontends come with challenges like integration complexity, shared state management, and performance optimizations. React, with its modularity and component-based architecture, fits well into the micro-frontend ecosystem, allowing teams to manage their sections of the UI independently.</p>
 `,
    example: false,
    codeSnippet: `
    // Example of using Module Federation to share a React component across different micro-frontends

    // Micro-Frontend 1: Host application
    import React from 'react';
    import ReactDOM from 'react-dom';

    const App = () => {
      return (
        <div>
          <h1>Main Application</h1>
          <div id="micro-frontend-container"></div>
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));

    // Micro-Frontend 2: Remote component shared via Module Federation
    import React from 'react';

    const RemoteComponent = React.lazy(() => import('microFrontend2/Component'));

    const App = () => {
      return (
        <div>
          <h1>Host Application</h1>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RemoteComponent />
          </React.Suspense>
        </div>
      );
    };
  `,
  },
  {
    id: 1069,
    question: "How do you implement infinite scrolling in React?",
    technology: "React.js",
    difficulty: "Intermediate",
    answer: `
    <p>Infinite scrolling is a technique used in web development to load more content dynamically as the user scrolls down the page, typically used in applications with long lists or feeds. It helps enhance user experience by providing a smooth, seamless loading of content without requiring the user to navigate to a new page or click to load more items.</p>

    <p>To implement infinite scrolling in React, you typically need to:</p>
    <ol>
      <li><strong>Track the scroll position</strong>: Use the window or scrollable element's scroll event to track when the user has reached the bottom.</li>
      <li><strong>Trigger a data fetch</strong>: When the user reaches the bottom of the page (or a threshold), trigger a data fetch to load more items.</li>
      <li><strong>Update the component state</strong>: Store the fetched data in the component’s state and render it.</li>
    </ol>

    <h3>Steps to Implement Infinite Scrolling in React:</h3>
    <ol>
      <li><strong>Create a component to manage the list</strong>: This component will manage the state for the items being displayed and the loading state.</li>
      <li><strong>Track the scroll position</strong>: You can listen for the <code>'scroll'</code> event or use the <code>'IntersectionObserver'</code> API to detect when the user has reached the bottom of the page.</li>
      <li><strong>Fetch more data</strong>: Once the scroll position reaches the bottom, fetch more data and update the state.</li>
      <li><strong>Display the new data</strong>: Append the new data to the current list and re-render the component.</li>
    </ol>

    <h3>Example:</h3>
    <p>The following is a basic implementation of infinite scrolling using React:</p>
    <ul>
      <li><strong>State management</strong>: Use React’s <code>useState</code> to manage the list of items and <code>useEffect</code> for the scroll event handler.</li>
      <li><strong>Scroll handler</strong>: Add an event listener to the window’s <code>scroll</code> event to detect when the user reaches the bottom.</li>
      <li><strong>Data fetching</strong>: Simulate fetching data (you can replace this with actual API calls).</li>
    </ul>

    <h3>Example Code:</h3>
    <pre>
      <code>
        import React, { useState, useEffect } from 'react';

        function InfiniteScroll() {
          const [items, setItems] = useState([]); // Items to display
          const [loading, setLoading] = useState(false); // Loading state
          const [page, setPage] = useState(1); // Page number for pagination

          // Function to fetch data
          const fetchData = async () => {
            setLoading(true);
            const response = await fetch(\`https://api.example.com/items?page=\${page}\`);
            const data = await response.json();
            setItems(prevItems => [...prevItems, ...data.items]);
            setLoading(false);
          };

          // Use useEffect to trigger fetch when page changes
          useEffect(() => {
            fetchData();
          }, [page]);

          // Scroll event handler
          const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
              setPage(prevPage => prevPage + 1); // Load the next page
            }
          };

          useEffect(() => {
            // Add event listener for scroll
            window.addEventListener('scroll', handleScroll);

            // Cleanup the event listener on component unmount
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

          return (
            <div>
              <ul>
                {items.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              {loading && <div>Loading...</div>}
            </div>
          );
        }

        export default InfiniteScroll;
      </code>
    </pre>

    <h3>Explanation</h3>
    <ol>
      <li><strong>State Variables</strong>:
        <ul>
          <li><code>items</code>: Holds the list of items that are currently displayed.</li>
          <li><code>loading</code>: Tracks whether new data is being fetched.</li>
          <li><code>page</code>: Keeps track of the current page to handle pagination.</li>
        </ul>
      </li>
      <li><strong>fetchData function</strong>: Fetches data from an API (you can replace this with a real API call). When new data is fetched, it appends to the current list of items.</li>
      <li><strong>handleScroll function</strong>: Detects when the user has reached the bottom of the page and increments the page number to trigger the next data fetch.</li>
      <li><strong>useEffect hooks</strong>:
        <ul>
          <li>The first <code>useEffect</code> triggers the data fetch whenever the page number changes.</li>
          <li>The second <code>useEffect</code> listens for the scroll event and cleans up the event listener when the component unmounts.</li>
        </ul>
      </li>
    </ol>

    <h3>Considerations for Infinite Scrolling:</h3>
    <ul>
      <li><strong>Performance</strong>: You should implement throttling or debouncing to avoid excessive fetches and improve performance.</li>
      <li><strong>Loading State</strong>: Handle the loading state properly to inform users that data is being fetched.</li>
      <li><strong>Error Handling</strong>: Ensure proper error handling in case the API request fails.</li>
      <li><strong>End of Data</strong>: Handle cases where no more data is available (e.g., by disabling further scroll triggering once all pages have been loaded).</li>
    </ul>
  `,
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from 'react';

    function InfiniteScroll() {
      const [items, setItems] = useState([]); // Items to display
      const [loading, setLoading] = useState(false); // Loading state
      const [page, setPage] = useState(1); // Page number for pagination

      // Function to fetch data
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch(\`https://api.example.com/items?page=\${page}\`);
        const data = await response.json();
        setItems(prevItems => [...prevItems, ...data.items]);
        setLoading(false);
      };

      // Use useEffect to trigger fetch when page changes
      useEffect(() => {
        fetchData();
      }, [page]);

      // Scroll event handler
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
          setPage(prevPage => prevPage + 1); // Load the next page
        }
      };

      useEffect(() => {
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {loading && <div>Loading...</div>}
        </div>
      );
    }

    export default InfiniteScroll;
  `,
  },
  {
    id: 1070,
    question:
      "How would you handle large-scale state management in a React app?",
    technology: "React.js",
    difficulty: "Advanced",
    answer: `
    <p>Handling large-scale state management in a React application requires a robust solution that can scale efficiently as the app grows. To achieve this, several strategies can be employed, including centralized state management tools, component design patterns, and code organization strategies.</p>

    <h3>Strategies for Handling Large-Scale State Management in React:</h3>
    
    <ol>
      <li><strong>Use Context API for App-Wide State</strong>: 
        <p>The React Context API is great for managing application-wide state, like user authentication data, themes, or preferences. However, it may not be optimal for complex or deeply nested state due to re-rendering issues.</p>
      </li>
      
      <li><strong>Redux or Redux Toolkit</strong>: 
        <p>For large-scale state management, Redux is a popular solution that allows you to manage the state globally, in a predictable way, with a single source of truth. Redux Toolkit simplifies Redux setup and reduces boilerplate code. It's highly suitable for applications with complex logic, as it follows a unidirectional data flow.</p>
      </li>
      
      <li><strong>Recoil or Zustand</strong>: 
        <p>Recoil and Zustand are newer libraries that offer simpler and more lightweight alternatives to Redux. Recoil introduces an atom-based state management system, which is more flexible for complex apps. Zustand is a minimal state management library that uses hooks, making it easier to integrate with React without the overhead of more complex solutions like Redux.</p>
      </li>
      
      <li><strong>Component-Level State</strong>: 
        <p>For less global state, it's a good practice to manage state at the component level using <code>useState</code> or <code>useReducer</code>. This reduces the complexity of managing global state and can improve performance by limiting unnecessary re-renders.</p>
      </li>
      
      <li><strong>useReducer</strong>: 
        <p>For complex local component state, <code>useReducer</code> is a better alternative to <code>useState</code>. It helps in managing more structured state transitions and is especially useful in situations with multiple state changes in one component.</p>
      </li>
      
      <li><strong>Server State Management (React Query / Apollo Client)</strong>: 
        <p>If your application needs to fetch and manage data from a server, React Query and Apollo Client provide a powerful solution for managing server state. They handle caching, fetching, pagination, and syncing data, reducing the need to manually manage global state for API responses.</p>
      </li>
    </ol>

    <h3>Example Using Redux Toolkit:</h3>
    <p>Here is a simple example of how you might use Redux Toolkit in a large-scale React app to manage state:</p>

    <h4>Setting up Redux Store:</h4>
    <pre><code>npm install @reduxjs/toolkit react-redux</code></pre>

    <h4>Create a Redux Slice:</h4>
    <pre><code>
      import { createSlice } from '@reduxjs/toolkit';

      const userSlice = createSlice({
        name: 'user',
        initialState: {
          userData: null,
          isLoggedIn: false,
        },
        reducers: {
          setUser(state, action) {
            state.userData = action.payload;
            state.isLoggedIn = true;
          },
          logout(state) {
            state.userData = null;
            state.isLoggedIn = false;
          },
        },
      });

      export const { setUser, logout } = userSlice.actions;
      export default userSlice.reducer;
    </code></pre>

    <h4>Configure the Store:</h4>
    <pre><code>
      import { configureStore } from '@reduxjs/toolkit';
      import userReducer from '../features/userSlice';

      const store = configureStore({
        reducer: {
          user: userReducer,
        },
      });

      export default store;
    </code></pre>

    <h4>Using Redux Store in React:</h4>
    <pre><code>
      import React from 'react';
      import { Provider } from 'react-redux';
      import store from './app/store';
      import App from './App';

      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );
    </code></pre>

    <h4>Accessing State in Components:</h4>
    <pre><code>
      import React from 'react';
      import { useSelector, useDispatch } from 'react-redux';
      import { logout } from '../features/userSlice';

      const UserProfile = () => {
        const userData = useSelector((state) => state.user.userData);
        const dispatch = useDispatch();

        return (
          <div>
            <h1>{userData ? ' Hello, $ {userData.name}' : 'Guest'}</h1>
            {userData && <button onClick={() => dispatch(logout())}>Logout</button>}
          </div>
        );
      };

      export default UserProfile;
    </code></pre>

    <h3>Best Practices for Large-Scale State Management:</h3>
    <ul>
      <li><strong>Avoid Prop Drilling</strong>: Use Context API or state management libraries to prevent passing props too deeply into the component tree.</li>
      <li><strong>Modularize State</strong>: Split your state management logic into multiple reducers, slices, or store configurations to maintain scalability.</li>
      <li><strong>Optimize Performance</strong>: Use selectors and memoization to avoid unnecessary re-renders.</li>
      <li><strong>Consider Async Logic</strong>: Libraries like Redux Thunk or Redux Saga help manage asynchronous actions efficiently.</li>
      <li><strong>Centralize Server-Side State</strong>: Use libraries like React Query or Apollo Client to handle server state and reduce complexity in your Redux store.</li>
    </ul>

    <p>By following these strategies, you can manage state effectively and scale your React application as it grows.</p>
  `,
    example: true,
    codeSnippet: `
    // Example code for using Redux Toolkit in a React app

    import React, { useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { setUser, logout } from './features/userSlice';

    const UserProfile = () => {
      const userData = useSelector((state) => state.user.userData);
      const dispatch = useDispatch();

      const [name, setName] = useState('');

      const handleLogin = () => {
        dispatch(setUser({ name }));
      };

      return (
        <div>
          <h1>{userData ?  ' Hello, $ {userData.name}  : 'Guest'}</h1>
          {!userData ? (
            <>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
              />
              <button onClick={handleLogin}>Login</button>
            </>
          ) : (
            <button onClick={() => dispatch(logout())}>Logout</button>
          )}
        </div>
      );
    };

    export default UserProfile;
  `,
  },
  {
    id: 1071,
    question: "++What is debouncing in React, and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
    answer:
      "Debouncing is a technique that delays function execution until after a specified time has elapsed since the last time it was invoked. It helps in optimizing performance by limiting the number of API calls or event executions.",
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from "react";

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => clearTimeout(handler);
        }, [value, delay]);

        return debouncedValue;
    }

    function SearchComponent() {
        const [query, setQuery] = useState("");
        const debouncedQuery = useDebounce(query, 500);

        useEffect(() => {
            if (debouncedQuery) {
                console.log("Fetching results for:", debouncedQuery);
                // Call API or perform action
            }
        }, [debouncedQuery]);

        return (
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        );
    }

    export default SearchComponent;
  `,
  },
  {
    id: 1072,
    question: "++What is throttling in React, and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
    answer:
      "Throttling is a technique that limits the execution of a function to once every specified interval. It is useful for optimizing performance when handling events like scrolling or resizing.",
    example: true,
    codeSnippet: `
    import React, { useState, useEffect } from "react";

    function useThrottle(value, limit) {
        const [throttledValue, setThrottledValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setThrottledValue(value);
            }, limit);

            return () => clearTimeout(handler);
        }, [value, limit]);

        return throttledValue;
    }

    function ScrollComponent() {
        const [scrollY, setScrollY] = useState(0);
        const throttledScrollY = useThrottle(scrollY, 1000); // Updates only once per second

        useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        return <div>Scrolled Position: {throttledScrollY}px</div>;
    }

    export default ScrollComponent;
  `,
  },
  {
    id: 1073,
    topic: "File Upload in React.js",
    technology: "React.js",
    difficulty: "Medium",
    question: "How do you upload a file in React.js using Axios?",
    answer: `
      <p>To upload a file in React.js, you can use the <strong>FormData</strong> API and send it to the backend using <strong>Axios</strong>. </p>
      <p>Steps:</p>
      <ul>
        <li>Use <code>&lt;input type="file"&gt;</code> to select a file.</li>
        <li>Store the selected file in a React state variable.</li>
        <li>Use <strong>FormData</strong> to append the file.</li>
        <li>Send a POST request to the server with <code>multipart/form-data</code> headers.</li>
      </ul>
    `,
    example: true,
    codeSnippet: `
      import React, { useState } from "react";
      import axios from "axios";

      const FileUpload = () => {
        const [file, setFile] = useState(null);
        const [uploading, setUploading] = useState(false);
        const [message, setMessage] = useState("");

        // Handle file selection
        const handleFileChange = (event) => {
          setFile(event.target.files[0]);
        };

        // Handle file upload
        const handleUpload = async () => {
          if (!file) {
            setMessage("Please select a file first.");
            return;
          }

          const formData = new FormData();
          formData.append("file", file);

          try {
            setUploading(true);
            const response = await axios.post("http://localhost:5000/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            setMessage("File uploaded successfully!");
            console.log(response.data);
          } catch (error) {
            setMessage("Error uploading file.");
            console.error(error);
          } finally {
            setUploading(false);
          }
        };

        return (
          <div>
            <h2>Upload a File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
            <p>{message}</p>
          </div>
        );
      };

      export default FileUpload;
    `,
  },
  {
    id: 1074,
    question: "++What is the Context API in React and how does it work?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <p>The <strong>Context API</strong> in React is a built-in feature that allows you to share values like themes, authentication status, or user data across the component tree without prop drilling.</p>
      <p>Context API provides a global state that can be accessed anywhere in the application without having to pass props manually through multiple components.</p>
      <p><strong>How Context API Works:</strong></p>
      <ol>
        <li><strong>Create a Context:</strong> Using <code>React.createContext</code>.</li>
        <li><strong>Provide the Context:</strong> Using a <code>Provider</code> to wrap components that need access to the context.</li>
        <li><strong>Consume the Context:</strong> Using the <code>useContext</code> hook or the <code>Consumer</code> component.</li>
      </ol>
      <p>Here’s an example of implementing a Theme Context:</p>
    </div>
  `,
    example: true,
    codeSnippet: `
    import React, { createContext, useState, useContext } from "react";

    // 1. Create Context
    const ThemeContext = createContext();

    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState("light");

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    export default ThemeContext;

    // 2. Consume Context in a component
    const ThemeSwitcher = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);

      return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px", textAlign: "center" }}>
          <h2>Current Theme: {theme}</h2>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
    };

    export default ThemeSwitcher;

    // 3. Wrap App with ThemeProvider
    import React from "react";
    import { ThemeProvider } from "./ThemeContext";
    import ThemeSwitcher from "./ThemeSwitcher";

    const App = () => {
      return (
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      );
    };

    export default App;
  `,
  },
  {
    id: 1075,
    question:
      "++What is the difference between Redux and Context API in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <div>
      <p>Redux and Context API are both used for state management in React applications, but they serve different purposes and have varying levels of complexity.</p>
      <table border="1">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Redux</th>
            <th>Context API</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Purpose</strong></td>
            <td>Used for complex state management with predictable state changes and middleware support.</td>
            <td>Primarily for prop drilling elimination and lightweight state sharing.</td>
          </tr>
          <tr>
            <td><strong>Performance</strong></td>
            <td>Efficient with optimizations like useSelector and memoization but requires extra setup.</td>
            <td>May cause unnecessary re-renders if not optimized properly.</td>
          </tr>
          <tr>
            <td><strong>Boilerplate</strong></td>
            <td>Requires actions, reducers, and a store, making it more complex.</td>
            <td>Minimal setup, uses React's built-in API.</td>
          </tr>
       
          <tr>
            <td><strong>Scalability</strong></td>
            <td>Highly scalable and suitable for large applications.</td>
            <td>Best for small to medium applications with limited global state.</td>
          </tr>
          <tr>
            <td><strong>Reactivity</strong></td>
            <td>Uses a centralized store, ensuring predictable state updates.</td>
            <td>Reacts to state changes but can cause unnecessary re-renders if not used with useMemo or useReducer.</td>
          </tr>
         
          <tr>
            <td><strong>Ease of Debugging</strong></td>
            <td>Has powerful dev tools like Redux DevTools.</td>
            <td>Lacks built-in debugging tools.</td>
          </tr>
          <tr>
            <td><strong>Reusability</strong></td>
            <td>Can reuse logic across different projects easily.</td>
            <td>More tightly coupled with the component tree.</td>
          </tr>
        </tbody>
      </table>
      <p><strong>When to Use Redux:</strong></p>
      <ul>
        <li>You have a large-scale application with complex state management needs.</li>
        <li>You need to debug state transitions extensively.</li>
        <li>You require middleware for handling side effects (e.g., API calls).</li>
        <li>You have multiple components requiring deep state management.</li>
      </ul>
      <p><strong>When to Use Context API:</strong></p>
      <ul>
        <li>You have a small to medium project with limited global state.</li>
        <li>You want a lightweight solution without external dependencies.</li>
        <li>You are mainly solving the prop-drilling problem.</li>
      </ul>
      <p><strong>Conclusion:</strong> If your app is simple and doesn’t require advanced state management, Context API is a good choice. However, for more complex apps with extensive state transitions, Redux is more suitable.</p>
    </div>
  `,
    example: false,
    codeSnippet: ``,
  },

  {
    id: 1076,
    question:
      "Create Private & Public Routes , login , Authentication vs Authorization ",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
    <div>
      <h3>PrivateRoute Component (Protecting Dashboard)</h3>
      <p>The <strong>PrivateRoute</strong> component ensures that only authenticated users can access certain pages, like a dashboard.</p>
      <ul>
        <li>It retrieves the authentication token from cookies.</li>
        <li>If the token exists, it renders the <code>Outlet</code>, allowing access to child components.</li>
        <li>If the token is missing, it redirects the user to the login page.</li>
      </ul>
      
      <h4>Example Implementation:</h4>
      <pre>
        <code>
          import { Navigate, Outlet } from "react-router-dom";
          import Cookies from "js-cookie";

          const PrivateRoute = () => {
            const token = Cookies.get("token"); 
            return token ? <Outlet /> : <Navigate to="/login" />;
          };
        </code>
      </pre>

      <h3>PublicRoute Component (Restricting Login/Register for Authenticated Users)</h3>
      <p>The <strong>PublicRoute</strong> component prevents authenticated users from accessing pages like login or register.</p>
      <ul>
        <li>It checks for an authentication token in cookies.</li>
        <li>If the token exists, it redirects the user to the dashboard.</li>
        <li>Otherwise, it renders the provided element (e.g., Login or Register page).</li>
      </ul>

      <h4>Example Implementation:</h4>
      <pre>
        <code>
          import { Navigate } from "react-router-dom";
          import Cookies from "js-cookie";

          const PublicRoute = ({ element }) => {
            const token = Cookies.get("token");
            return token ? <Navigate to="/dashboard" /> : element;
          };
        </code>
      </pre>

      <h3>📌 Use Cases:</h3>
      <ul>
        <li><strong>PrivateRoute:</strong> Used to protect sensitive routes like dashboards or user profiles.</li>
        <li><strong>PublicRoute:</strong> Used to restrict authenticated users from accessing login or signup pages.</li>
      </ul>
    </div>
  `,
    example: true,
    codeSnippet: `
  Authentication happens first.
🔹 Authorization happens after authentication.


Authentication (Login & Logout)
Store user token after login.
Check if the user is authenticated using cookies.
🔹 auth.js (Authentication Helper)
-------------------
import Cookies from "js-cookie";

export const login = (user) => {
  Cookies.set("token", "123456789"); // Simulated token
  Cookies.set("role", user.role); // Store user role (admin/user)
};

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("role");
};

export const isAuthenticated = () => !!Cookies.get("token");

export const getUserRole = () => Cookies.get("role");
3️⃣ Create Private & Public Routes
Private Route → Allows only authenticated users.
Public Route → Redirects logged-in users away from login/register pages.
🔹 routes.js (Routes with Authentication & Authorization)
--------------------------------------------
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import App from "./App";
import Cookies from "js-cookie"; 
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

const PrivateRoute = () => {
  return Cookies.get("token") ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = ({ element }) => {
  return Cookies.get("token") ? <Navigate to="/dashboard" /> : element;
};

const AdminRoute = () => {
  return Cookies.get("role") === "admin" ? <Outlet /> : <Navigate to="/dashboard" />;
};

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <PublicRoute element={<Login />} /> },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [{ path: "", element: <Dashboard /> }],
  },
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [{ path: "", element: <AdminPanel /> }],
  },
  { path: "*", element: <Navigate to="/login" /> },
]);

export default router;
4️⃣ Implement Login & Logout
🔹 Login.js (Login Page)
-----------------------------------------------------------------
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login({ role }); // Store role-based access
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin("user")}>Login as User</button>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    </div>
  );
};

export default Login;
🔹 Dashboard.js (User Dashboard)

import { logout } from "../auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
🔹 AdminPanel.js (Restricted Admin Access)

const AdminPanel = () => {
  return <h2>Welcome, Admin! You have special privileges.</h2>;
};

export default AdminPanel;
5️⃣ Wrap Everything in App.js

import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
How This Works?
✅ Login as a user → Redirects to dashboard.
✅ Login as an admin → Can access dashboard & admin panel.
✅ Unauthorized access to /admin → Redirects non-admin users.
✅ Logout removes cookies & redirects to login.

🚀 Summary
Authentication → Login/logout with cookies.
Authorization → Role-based access control (AdminRoute).
Protected Routes → Users can't access restricted pages.
Would you like to add JWT for secure authentication? 😊
  `,
  },
  {
    id: 1077,
    question:
      "**What is the difference between useMemo and useCallback in React?",
    technology: "React.js",
    difficulty: "Medium",
    answer: `
    <p><strong>Difference Between <code>useMemo</code> and <code>useCallback</code>:</strong></p>
    <ul>
      <li><code>useMemo</code> → Returns a <strong>memoized value</strong>. Used for optimizing expensive calculations.</li>
      <li><code>useCallback</code> → Returns a <strong>memoized function</strong>. Used for preventing function recreation.</li>
    </ul>

    <h3>📌 When to Use?</h3>
    <ul>
      <li>✅ Use <code>useMemo</code> when you want to <strong>cache computed values</strong> and avoid unnecessary recalculations.</li>
      <li>✅ Use <code>useCallback</code> when you want to <strong>memoize functions</strong> to avoid unnecessary re-renders.</li>
    </ul>

    
  `,
  example: true,
    codeSnippet: `

    <h3>📝 Example of <code>useMemo</code></h3>
  
            import { useState, useMemo } from "react";

            function ExpensiveCalculation({ num }) {
                const computedValue = useMemo(() => {
                    console.log("Calculating...");
                    return num * 10; // Simulated expensive computation
                }, [num]);

                return <p>Computed Value: {computedValue}</p>;
            }

            function App() {
                const [count, setCount] = useState(0);
                return (
                    <div>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                        <ExpensiveCalculation num={count} />
                    </div>
                );
            }

            export default App;
   

    <h3>📝 Example of <code>useCallback</code></h3>

            import { useState, useCallback } from "react";

            function Button({ onClick }) {
                console.log("Button re-rendered");
                return <button onClick={onClick}>Click Me</button>;
            }

            function App() {
                const [count, setCount] = useState(0);

                const memoizedClickHandler = useCallback(() => {
                    console.log("Button clicked");
                }, []);

                return (
                    <div>
                        <p>Count: {count}</p>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                        <Button onClick={memoizedClickHandler} />
                    </div>
                );
            }

            export default App;
  `,
  },
];
