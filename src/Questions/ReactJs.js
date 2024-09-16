export const dummyQuestionsReactJs = [
    { 
      id: 1, 
      question: 'What is React?', 
      technology: 'React.js', 
      difficulty: 'Easy', 
      answer: 'React is a JavaScript library for building user interfaces.',
      example: true,
      codeSnippet: `import React from 'react';
  
  function App() {
    return (
      <div>
        <h1>Hello, React!</h1>
      </div>
    );
  }
  
  export default App;`
    },
    { 
      id: 2, 
      question: 'Explain closures in JavaScript', 
      technology: 'JavaScript', 
      difficulty: 'Medium', 
      answer: 'A closure is the combination of a function bundled together with references to its surrounding state.',
      example: true,
      codeSnippet: `function outerFunction(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const closure = outerFunction(10);
  console.log(closure(5)); // Output: 15`
    },
    { 
      id: 3, 
      question: 'What are React Hooks?', 
      technology: 'React.js', 
      difficulty: 'Medium', 
      answer: 'Hooks are functions that let you use state and other React features without writing a class.',
      example: true,
      codeSnippet: `import React, { useState } from 'react';
  
  function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  
  export default App;`
    },
    { 
      id: 4, 
      question: 'What is a component in React?', 
      technology: 'React.js', 
      difficulty: 'Easy', 
      answer: 'A component is a reusable piece of code that represents part of the UI in a React application.',
      example: true,
      codeSnippet: `import React from 'react';
  
  function MyComponent() {
    return <div>This is a component</div>;
  }
  
  export default MyComponent;`
    },
    { 
      id: 5, 
      question: 'What is the difference between let, const, and var?', 
      technology: 'JavaScript', 
      difficulty: 'Easy', 
      answer: 'var has function scope, while let and const have block scope. const variables cannot be reassigned.',
      example: false,
      codeSnippet: ''
    },
    { 
      id: 6, 
      question: 'What is a Virtual DOM?', 
      technology: 'React.js', 
      difficulty: 'Medium', 
      answer: 'The Virtual DOM is a lightweight representation of the actual DOM. React uses it to update the real DOM more efficiently.',
      example: false,
      codeSnippet: ''
    },
    { 
      id: 7, 
      question: 'Explain event delegation in JavaScript.', 
      technology: 'JavaScript', 
      difficulty: 'Medium', 
      answer: 'Event delegation allows us to attach a single event listener to a parent element to handle events triggered by child elements.',
      example: true,
      codeSnippet: `document.querySelector('#parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button')) {
      console.log('Button clicked!');
    }
  });`
    },
    { 
      id: 8, 
      question: 'What is JSX?', 
      technology: 'React.js', 
      difficulty: 'Easy', 
      answer: 'JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like.',
      example: true,
      codeSnippet: `import React from 'react';
  
  function App() {
    return (
      <div>
        <h1>This is JSX</h1>
      </div>
    );
  }
  
  export default App;`
    },
    { 
      id: 9, 
      question: 'Explain the difference between == and === in JavaScript.', 
      technology: 'JavaScript', 
      difficulty: 'Easy', 
      answer: '== checks for value equality with type coercion, while === checks for both value and type equality without coercion.',
      example: true,
      codeSnippet: `console.log(5 == '5');  // true
  console.log(5 === '5'); // false`
    },
    { 
      id: 10, 
      question: 'What is the purpose of the useEffect hook?', 
      technology: 'React.js', 
      difficulty: 'Medium', 
      answer: 'useEffect is used to handle side effects in functional components, such as data fetching or subscriptions.',
      example: true,
      codeSnippet: `import React, { useState, useEffect } from 'react';
  
  function App() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(result => setData(result));
    }, []);
  
    return (
      <div>
        {data ? <p>{data}</p> : <p>Loading...</p>}
      </div>
    );
  }
  
  export default App;`
    },
    { 
      id: 100, 
      question: 'What is the purpose of the useCallback hook?', 
      technology: 'React.js', 
      difficulty: 'Advanced', 
      answer: 'The useCallback hook is used to memoize functions, preventing unnecessary re-renders of child components that depend on these functions as props.',
      example: false,
      codeSnippet: ''
    }
  ];
  