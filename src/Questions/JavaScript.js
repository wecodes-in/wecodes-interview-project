export const dummyQuestionsJavaScript = [
    
    { 
      id: 11, 
      question: 'What is a higher-order function in JavaScript?', 
      technology: 'JavaScript', 
      difficulty: 'Medium', 
      answer: 'A higher-order function is a function that either takes another function as an argument or returns a function as a result.',
      example: true,
      codeSnippet: `function higherOrder(fn) {
    return function() {
      return fn();
    };
  }
  
  function sayHello() {
    return 'Hello!';
  }
  
  const greet = higherOrder(sayHello);
  console.log(greet()); // Output: Hello!`
    },
    { 
      id: 12, 
      question: 'What are keys in React and why are they important?', 
      technology: 'React.js', 
      difficulty: 'Easy', 
      answer: 'Keys help React identify which items have changed, are added, or are removed. Keys should be unique among siblings.',
      example: true,
      codeSnippet: `const items = ['Apple', 'Banana', 'Cherry'];
  
  function ItemList() {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default ItemList;`
    },
    { 
      id: 13, 
      question: 'Explain async/await in JavaScript.', 
      technology: 'JavaScript', 
      difficulty: 'Medium', 
      answer: 'Async/await is syntactic sugar over promises, allowing asynchronous code to be written in a more synchronous style.',
      example: true,
      codeSnippet: `async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();`
    },
    { 
      id: 14, 
      question: 'What is the useMemo hook in React?', 
      technology: 'React.js', 
      difficulty: 'Advanced', 
      answer: 'useMemo is a hook that memoizes the result of a computation and recalculates it only when its dependencies change.',
      example: true,
      codeSnippet: `import React, { useMemo } from 'react';
  
  function ExpensiveComponent({ num }) {
    const expensiveCalculation = useMemo(() => {
      return num * 10;
    }, [num]);
  
    return <div>Result: {expensiveCalculation}</div>;
  }
  
  export default ExpensiveComponent;`
    },
    { 
      id: 15, 
      question: 'What is a promise in JavaScript?', 
      technology: 'JavaScript', 
      difficulty: 'Easy', 
      answer: 'A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
      example: true,
      codeSnippet: `const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise fulfilled');
    }, 1000);
  });
  
  promise.then(result => {
    console.log(result); // Output: Promise fulfilled
  });`
    },
    { 
      id: 16, 
      question: 'What is the difference between state and props in React?', 
      technology: 'React.js', 
      difficulty: 'Easy', 
      answer: 'State is a local data storage that is specific to a component, while props are inputs passed to the component from its parent.',
      example: false,
      codeSnippet: ''
    },
    { 
      id: 17, 
      question: 'What is the event loop in JavaScript?', 
      technology: 'JavaScript', 
      difficulty: 'Medium', 
      answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by managing asynchronous callbacks.',
      example: true,
      codeSnippet: `console.log('Start');
  
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  
  console.log('End');
  
  // Output:
  // Start
  // End
  // Timeout`
    },
    { 
      id: 18, 
      question: 'What is Redux, and how does it work?', 
      technology: 'React.js', 
      difficulty: 'Medium', 
      answer: 'Redux is a state management library that centralizes the application state in a single store and ensures that state changes are predictable through actions and reducers.',
      example: false,
      codeSnippet: ''
    },
    { 
      id: 19, 
      question: 'What is the spread operator in JavaScript?', 
      technology: 'JavaScript', 
      difficulty: 'Easy', 
      answer: 'The spread operator (`...`) allows an iterable such as an array or object to be expanded in places where multiple arguments or elements are expected.',
      example: true,
      codeSnippet: `const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2); // Output: [1, 2, 3, 4, 5]`
    },
    { 
      id: 20, 
      question: 'What is the context API in React?', 
      technology: 'React.js', 
      difficulty: 'Advanced', 
      answer: 'The context API allows components to share values like state or functions without having to pass props through every level of the component tree.',
      example: true,
      codeSnippet: `import React, { createContext, useContext } from 'react';
  
  const MyContext = createContext();
  
  function App() {
    return (
      <MyContext.Provider value="Hello, World!">
        <ChildComponent />
      </MyContext.Provider>
    );
  }
  
  function ChildComponent() {
    const value = useContext(MyContext);
    return <div>{value}</div>;
  }
  
  export default App;`
    }
  ];
  