export const dummyQuestionsJavaScript = [
  {
    id: 1,
    question: "What is JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "JavaScript is a programming language used to create dynamic content on websites, such as interactive forms and animations. It is mainly used for client-side development but can also be used on the server-side using environments like Node.js.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 2,
    question: "What is JavaScript? js",
    technology: "JavaScript",
    difficulty: "Easy",
    answer: `
      <p><strong>What is JavaScript?</strong></p>
      <p>JavaScript is a programming language that allows you to create <strong>dynamic and interactive</strong> web pages. It enables you to manipulate <strong>HTML & CSS</strong>, handle events, make API calls, and add animations.</p>
      <p><strong>Example of JavaScript in action:</strong></p>
    `,
    example: true,
    codeSnippet: `
      document.getElementById("btn").addEventListener("click", function() {
          alert("Hello, JavaScript is working!");
      });
    `
  },
  {
    id: 3,
    question: "Explain var, let, and const with examples.",
    answer:
      "<p>In JavaScript, <code>var</code>, <code>let</code>, and <code>const</code> are used to declare variables, but they have different characteristics:</p>" +
      "<p><strong>var:</strong> The <code>var</code> keyword is the oldest way to declare variables in JavaScript. Variables declared with <code>var</code> are function-scoped or globally-scoped, depending on where they are declared. If declared inside a function, they are accessible within that function, and if declared outside, they are globally accessible. <code>var</code> does not have block-scoping.</p>" +
      "<p><strong>let:</strong> The <code>let</code> keyword was introduced in ES6 and is block-scoped. This means that a variable declared with <code>let</code> is only accessible within the block, statement, or expression in which it is defined (e.g., inside loops or conditionals).</p>" +
      "<p><strong>const:</strong> The <code>const</code> keyword also introduced in ES6 is used to declare variables that cannot be reassigned after their initial assignment. However, it is block-scoped, like <code>let</code>, but with the added restriction that the value cannot be changed once assigned. Note that for objects or arrays, their contents can still be modified, but the reference cannot be changed.</p>" +
      "<p><strong>Examples:</strong></p>" +
      "<pre><code>// var example\nvar x = 10;\nconsole.log(x); // 10\nx = 20;\nconsole.log(x); // 20\n\n// let example\nlet y = 30;\nconsole.log(y); // 30\ny = 40;\nconsole.log(y); // 40\n\n// const example\nconst z = 50;\nconsole.log(z); // 50\n// z = 60; // Error: Assignment to constant variable</code></pre>" +
      "<p>In the examples above:</p>" +
      "<ul>" +
      "<li><code>var</code> allows reassignment.</li>" +
      "<li><code>let</code> allows reassignment but is block-scoped.</li>" +
      "<li><code>const</code> does not allow reassignment but is block-scoped.</li>" +
      "</ul>",
    codeSnippet:
      "<pre><code>// var example\nvar x = 10;\nconsole.log(x); // 10\nx = 20;\nconsole.log(x); // 20\n\n// let example\nlet y = 30;\nconsole.log(y); // 30\ny = 40;\nconsole.log(y); // 40\n\n// const example\nconst z = 50;\nconsole.log(z); // 50\n// z = 60; // Error: Assignment to constant variable</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Easy"
  }
  ,
  {
    id: 4,
    question: "Explain hoisting in JavaScript.",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compilation phase. Variables declared using var are hoisted, but not initialized, whereas let and const are hoisted but cannot be accessed until initialized (Temporal Dead Zone).",
    example: true,
    codeSnippet: `console.log(hoistedVar); // Output: undefined (var hoisted)
var hoistedVar = 'I am hoisted';

console.log(notHoistedVar); // ReferenceError (let not hoisted)
let notHoistedVar = 'I am not hoisted';`,
  },
  {
    id: 5,
    question: "What is the difference between == and === in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "== performs type coercion, meaning it converts the operands to the same type before making the comparison. === checks both type and value without performing type conversion.",
    example: true,
    codeSnippet: `console.log(2 == '2'); // Output: true (type coercion)
console.log(2 === '2'); // Output: false (strict equality check)`,
  },
  {
    id: 6,
    question: "What is a callback function?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A callback function is a function that is passed as an argument to another function and executed after the outer function has completed. It is commonly used in asynchronous programming to handle events or data once they are available.",
    example: true,
    codeSnippet: `function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}

fetchData((message) => {
  console.log(message); // Output: Data fetched
});`,
  },
  {
    id: 7,
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "An IIFE is a JavaScript function that runs as soon as it is defined. It is used to create a new scope to avoid polluting the global scope with variables and functions.",
    example: true,
    codeSnippet: `(function() {
  console.log('I am an IIFE');
})(); // Output: I am an IIFE`,
  },
  {
    id: 8,
    question: "What is the difference between null and undefined?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      'undefined is a variable that has been declared but has not been assigned a value. null is an assignment value representing "no value".',
    example: false,
    codeSnippet: "",
  },
  {
    id: 9,
    question: "What are JavaScript data types?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "JavaScript supports primitive data types such as Number, String, Boolean, Undefined, Null, Symbol, and BigInt. Additionally, objects like arrays and functions are considered non-primitive or reference types.",
    example: true,
    codeSnippet: `const str = "Hello"; // String
const num = 123; // Number
const bool = true; // Boolean
const obj = { name: 'John' }; // Object
const arr = [1, 2, 3]; // Array (Object)`,
  },
  
  {
    id: 10,
    question: "What is event delegation in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Event delegation is a technique where a single event handler is used to handle events on multiple child elements by taking advantage of event bubbling. It improves performance when dealing with many child elements.",
    example: true,
    codeSnippet: `document.getElementById('parent').addEventListener('click', (event) => {
  if (event.target && event.target.matches('button.class')) {
    console.log('Button clicked');
  }
});`,
  },
  {
    id: 11,
    question: "What is a higher-order function in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A higher-order function is a function that either takes another function as an argument or returns a function as a result.",
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
console.log(greet()); // Output: Hello!`,
  },

  {
    id: 12,
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "Synchronous JavaScript is executed line by line, blocking subsequent code until the current task is completed. Asynchronous JavaScript allows non-blocking execution, so tasks can run in parallel using mechanisms like callbacks, promises, or async/await.",
    example: true,
    codeSnippet: `// Synchronous code example
console.log('Start');
console.log('End');

// Asynchronous code example
console.log('Start');
setTimeout(() => console.log('Timeout'), 1000);
console.log('End');

// Output: Start, End, Timeout`,
  },



  {
    id: 14,
    question: "What is the difference between call, apply, and bind?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      'call and apply are used to invoke a function with a specific "this" context, where call accepts arguments one by one and apply takes them as an array. bind creates a new function with a specified "this" context and arguments.',
    example: true,
    codeSnippet: `const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Smith'
};

console.log(person.fullName.call(person2)); // Output: Jane Smith
console.log(person.fullName.apply(person2)); // Output: Jane Smith

const boundFullName = person.fullName.bind(person2);
console.log(boundFullName()); // Output: Jane Smith`,
  },

 

  {
    id: 16,
    question:
      "What is the difference between function declarations and function expressions?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A function declaration defines a named function that can be hoisted. A function expression defines a function inside an expression and is not hoisted, meaning it cannot be used before its definition.",
    example: true,
    codeSnippet: `// Function Declaration
function greet() {
  return 'Hello!';
}

// Function Expression
const greet = function() {
  return 'Hello!';
};`,
  },
  {
    id: 17,
    question:
      "Explain the difference between call by value and call by reference in JavaScript. Can you give an example of each?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
      - **Call by value**: JavaScript passes primitive data types (like numbers, strings, booleans) by value. Changes inside the function do not affect the original variable.
      - **Call by reference**: JavaScript passes reference types (like objects and arrays) by reference, so changes inside the function affect the original object or array.
    `,
    example: true,
    codeSnippet: `
      // Call by value
      let num = 10;
      function changeValue(x) {
        x = 20;
      }
      changeValue(num);
      console.log(num);  // Output: 10

      // Call by reference
      let obj = { name: "Alice" };
      function modifyObject(o) {
        o.name = "Bob";
      }
      modifyObject(obj);
      console.log(obj);  // Output: { name: "Bob" }
    `,
  },
  {
    id: 18,
    question:
      'If JavaScript uses "call by value" for both primitive and reference types, why do objects behave as though they are passed by reference?',
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "JavaScript passes a copy of the reference when dealing with objects. The reference itself is passed by value, but it allows modification of the object.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 19,
    question:
      "What happens if you reassign an object parameter inside a function?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Reassigning an object parameter inside a function only changes the local reference, not the original object.",
    example: true,
    codeSnippet: `
      let obj = { name: "Alice" };
      function modifyObject(o) {
        o = { name: "Bob" };
      }
      modifyObject(obj);
      console.log(obj);  // Output: { name: "Alice" }
    `,
  },
  {
    id: 20,
    question:
      "Can you simulate pass by reference behavior for primitive types in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "You can wrap primitives in an object to simulate pass by reference.",
    example: true,
    codeSnippet: `
      let value = { num: 5 };
      function modifyPrimitive(val) {
        val.num = 10;
      }
      modifyPrimitive(value);
      console.log(value.num);  // Output: 10
    `,
  },
  {
    id: 21,
    question:
      "What happens if you try to modify an object property inside a function but also reassign it?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Modifying an object's property affects the original object, but reassigning the object only affects the local reference.",
    example: true,
    codeSnippet: `
      let obj = { name: "Alice", details: { age: 25 } };
      function modifyObject(o) {
        o.name = "Bob";
        o = { name: "Charlie" };
      }
      modifyObject(obj);
      console.log(obj);  // Output: { name: "Bob", details: { age: 25 } }
    `,
  },
  {
    id: 22,
    question:
      "Are arrays passed by value or by reference in JavaScript? How can you prove it?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "Arrays are passed by reference. Modifying the array inside the function affects the original array.",
    example: true,
    codeSnippet: `
      let arr = [1, 2, 3];
      function modifyArray(a) {
        a[0] = 10;
      }
      modifyArray(arr);
      console.log(arr);  // Output: [10, 2, 3]
    `,
  },
  {
    id: 23,
    question:
      "How can you prevent an object from being modified inside a function, despite JavaScript's call by reference behavior?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: "Use Object.freeze() to make an object immutable.",
    example: true,
    codeSnippet: `
      let obj = { name: "Alice" };
      Object.freeze(obj);
      function modifyObject(o) {
        o.name = "Bob";
      }
      modifyObject(obj);
      console.log(obj);  // Output: { name: "Alice" }
    `,
  },
  {
    id: 24,
    question:
      "How does the spread operator (...) behave in terms of call by value and reference?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The spread operator creates a shallow copy of an object or array. It copies the top level but not nested objects. Therefore, nested objects are still passed by reference.",
    example: true,
    codeSnippet: `
      let obj = { name: "Alice", details: { age: 25 } };
      let copy = { ...obj };
      copy.name = "Bob";
      copy.details.age = 30;
      console.log(obj.details.age);  // Output: 30
    `,
  },
  {
    id: 25,
    question:
      "Does JavaScript support true pass by reference, where the variable's reference can be changed from inside the function?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "No, JavaScript does not support true pass by reference. You can modify the contents of an object, but not the reference itself.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 26,
    question:
      "How does JavaScript handle the immutability of primitive data types when passed into functions?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Primitive types are immutable, so JavaScript passes a copy into the function, leaving the original variable unchanged.",
    example: true,
    codeSnippet: `
      let str = "Hello";
      function changeString(s) {
        s = "World";
      }
      changeString(str);
      console.log(str);  // Output: Hello
    `,
  },
  {
    id: 27,
    question: "What is the event loop in JavaScript, and how does it work?",
    answer:
      "<p>The <strong>event loop</strong> in JavaScript is a mechanism that allows JavaScript to perform non-blocking I/O operations, despite being single-threaded. It works by continuously monitoring the message queue and executing the tasks in it, one by one. The event loop enables asynchronous behavior by allowing JavaScript to handle multiple operations (like I/O tasks) while still keeping the main thread available for other tasks.</p>" +
      "<p>Here's how it works:</p>" +
      "<ul>" +
      "<li><strong>Call Stack:</strong> The call stack holds the functions that are currently being executed. When a function is called, it's added to the call stack. When the function finishes, it is removed from the call stack.</li>" +
      "<li><strong>Message Queue:</strong> The message queue contains messages (or events) that need to be processed. These messages correspond to events like user interactions, I/O tasks, and timers. Once the call stack is empty, the event loop processes the messages from the queue.</li>" +
      "<li><strong>Event Loop:</strong> The event loop continuously checks if the call stack is empty. If it is, it takes the first message from the queue and pushes the corresponding callback function onto the stack for execution.</li>" +
      "</ul>" +
      "<p>For example, if a function contains a timer (e.g., setTimeout) or an I/O operation, the event loop will allow the JavaScript engine to handle other tasks while waiting for the timer or I/O operation to finish. Once the timer completes, the associated callback is pushed to the call stack for execution.</p>" +
      "<p><strong>Example:</strong></p>" +
      "<pre><code>console.log('Start');\n\nsetTimeout(() => {\n  console.log('Inside timeout');\n}, 1000);\n\nconsole.log('End');</code></pre>" +
      "<p>In the above example:</p>" +
      "<ul>" +
      "<li>The first <code>console.log('Start');</code> is executed and printed.</li>" +
      "<li>The <code>setTimeout()</code> function schedules the callback to be executed after 1000 milliseconds and continues to the next statement.</li>" +
      "<li>The second <code>console.log('End');</code> is executed and printed immediately after 'Start'.</li>" +
      "<li>After 1000 milliseconds, the callback is placed in the message queue, and once the call stack is empty, the event loop processes it, printing 'Inside timeout'.</li>" +
      "</ul>",
    codeSnippet:
      "<pre><code>console.log('Start');\n\nsetTimeout(() => {\n  console.log('Inside timeout');\n}, 1000);\n\nconsole.log('End');</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  },
  
  {
    id: 28,
    question:
      "Explain the difference between synchronous and asynchronous programming in JavaScript.",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      - **Synchronous**: In synchronous programming, tasks are executed sequentially, one after the other. Each task must complete before the next one begins.
      - **Asynchronous**: In asynchronous programming, tasks can be executed concurrently. Non-blocking code allows for tasks like network requests to run in the background, and other code can continue executing without waiting for the task to complete.
    `,
    example: false,
    codeSnippet: `
      // Synchronous
      console.log('Task 1');
      console.log('Task 2');

      // Asynchronous
      console.log('Task 1');
      setTimeout(() => {
        console.log('Task 2');
      }, 1000);
      console.log('Task 3');

      // Output (Asynchronous):
      // Task 1
      // Task 3
      // Task 2
    `,
  },
  {
    id: 29,
    question: "What are promises in JavaScript, and how do they work?",
    answer:
      "<p>A <strong>Promise</strong> in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations in a more manageable and readable way than using traditional callbacks. A promise can be in one of three states:</p>" +
      "<ul>" +
      "<li><strong>Pending:</strong> The initial state, before the operation completes or fails.</li>" +
      "<li><strong>Fulfilled:</strong> The operation completed successfully.</li>" +
      "<li><strong>Rejected:</strong> The operation failed.</li>" +
      "</ul>" +
      "<p>Promises have a <code>then()</code> method to handle the success result and a <code>catch()</code> method to handle the error if the promise is rejected.</p>" +
      "<p><strong>How do Promises work?</strong></p>" +
      "<p>A promise is created using the <code>new Promise()</code> constructor. Inside the constructor, you pass an executor function, which takes two arguments: <code>resolve</code> and <code>reject</code>. When the asynchronous operation is successful, you call <code>resolve()</code>, and when it fails, you call <code>reject()</code>.</p>" +
      "<p><strong>Example:</strong></p>" +
      "<pre><code>const myPromise = new Promise((resolve, reject) => {\n" +
      "  let success = true;\n" +
      "  if (success) {\n" +
      "    resolve('The operation was successful!');\n" +
      "  } else {\n" +
      "    reject('The operation failed.');\n" +
      "  }\n" +
      "});\n\n" +
      "myPromise\n" +
      "  .then(result => {\n" +
      "    console.log(result); // This will log 'The operation was successful!'\n" +
      "  })\n" +
      "  .catch(error => {\n" +
      "    console.log(error); // This will log 'The operation failed.'\n" +
      "  });\n" +
      "</code></pre>" +
      "<p>In the example above:</p>" +
      "<ul>" +
      "<li>The promise is created with an executor function that simulates either a successful or failed operation.</li>" +
      "<li>If <code>resolve()</code> is called, the promise is fulfilled, and the <code>then()</code> method is executed with the success result.</li>" +
      "<li>If <code>reject()</code> is called, the promise is rejected, and the <code>catch()</code> method handles the error.</li>" +
      "</ul>" +
      "<p>Promises allow for better handling of asynchronous code by chaining operations and providing cleaner error handling than traditional callback functions.</p>",
    codeSnippet:
      "<pre><code>const myPromise = new Promise((resolve, reject) => {\n" +
      "  let success = true;\n" +
      "  if (success) {\n" +
      "    resolve('The operation was successful!');\n" +
      "  } else {\n" +
      "    reject('The operation failed.');\n" +
      "  }\n" +
      "});\n\n" +
      "myPromise\n" +
      "  .then(result => {\n" +
      "    console.log(result); // This will log 'The operation was successful!'\n" +
      "  })\n" +
      "  .catch(error => {\n" +
      "    console.log(error); // This will log 'The operation failed.'\n" +
      "  });\n" +
      "</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  }
  ,

  {
    id: 31,
    question: "What is the difference between `==` and `===` in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      - **\`==\` (Loose Equality)**: Performs type coercion before comparing two values. This means different types can be considered equal if JavaScript can convert one type to another.
      - **\`===\` (Strict Equality)**: Does not perform type coercion and only returns true if the values are of the same type and equal in value.
    `,
    example: true,
    codeSnippet: `
      console.log(2 == '2');  // Output: true (loose equality, type coercion happens)
      console.log(2 === '2'); // Output: false (strict equality, no type coercion)
    `,
  },
  {
    id: 32,
    question:
      "What is a generator function in JavaScript, and how does it work?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      A generator function is a special type of function that can be paused and resumed. It is defined using the \`function*\` syntax and uses the \`yield\` keyword to return values sequentially. Generator functions return an iterator object.
    `,
    example: true,
    codeSnippet: `
      function* generator() {
        yield 'First';
        yield 'Second';
        yield 'Third';
      }

      const gen = generator();

      console.log(gen.next().value);  // Output: First
      console.log(gen.next().value);  // Output: Second
      console.log(gen.next().value);  // Output: Third
    `,
  },
  {
    id: 33,
    question:
      "What is a closure in JavaScript, and why is it useful in advanced programming?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      A closure is a function that retains access to its outer scope even after the outer function has returned. Closures are useful for data encapsulation, creating private variables, and managing asynchronous behavior.
    `,
    example: true,
    codeSnippet: `
      function outer() {
        let count = 0;
        return function() {
          count++;
          return count;
        };
      }

      const increment = outer();
      console.log(increment());  // Output: 1
      console.log(increment());  // Output: 2
    `,
  },
  {
    id: 34,
    question:
      "What is the difference between `null` and `undefined` in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      - **\`undefined\`**: A variable that has been declared but not assigned a value. It is also the default return value of functions that do not explicitly return something.
      - **\`null\`**: An assignment value that represents "no value" or "empty".
    `,
    example: true,
    codeSnippet: `
      let x;
      console.log(x);  // Output: undefined

      let y = null;
      console.log(y);  // Output: null
    `,
  },
  {
    id: 35,
    question: "Explain the module pattern in JavaScript and its advantages.",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      The module pattern is a design pattern that helps organize code into self-contained units (modules). It creates private variables and functions by using closures, and only exposes the parts of the code that are needed (public API). This improves code maintainability, encapsulation, and avoids polluting the global scope.
    `,
    example: true,
    codeSnippet: `
      const Module = (function() {
        let privateVar = 'I am private';

        function privateMethod() {
          console.log(privateVar);
        }

        return {
          publicMethod: function() {
            privateMethod();
          }
        };
      })();

      Module.publicMethod();  // Output: I am private
    `,
  },
  {
    id: 36,
    question:
      "What is the difference between `.map()` and `.forEach()` methods in JavaScript arrays?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
      - **\`.map()\`**: Returns a new array with the results of calling a function for every array element. It does not modify the original array.
      - **\`.forEach()\`**: Executes a provided function once for each array element, but does not return a new array or alter the original array.
    `,
    example: true,
    codeSnippet: `
      const arr = [1, 2, 3, 4];

      const mappedArr = arr.map(num => num * 2);
      console.log(mappedArr); // Output: [2, 4, 6, 8]

      arr.forEach(num => console.log(num * 2));
      // Output:
      // 2
      // 4
      // 6
      // 8
    `,
  },
  {
    id: 37,
    question:
      "How does `.reduce()` work in JavaScript, and what are its use cases?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      \`.reduce()\` applies a function against an accumulator and each element of the array (from left to right) to reduce it to a single value. It is commonly used for summing values, flattening arrays, or calculating statistics.
    `,
    example: true,
    codeSnippet: `
      const numbers = [1, 2, 3, 4, 5];

      const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      console.log(sum); // Output: 15

      const flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => acc.concat(cur), []);
      console.log(flattened); // Output: [0, 1, 2, 3, 4, 5]
    `,
  },
  {
    id: 38,
    question:
      "What is the difference between `.filter()` and `.find()` in JavaScript arrays?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
      - **\`.filter()\`**: Returns a new array with all elements that pass the test implemented by the provided function.
      - **\`.find()\`**: Returns the value of the first element that passes the test implemented by the provided function. It returns \`undefined\` if no element passes the test.
    `,
    example: true,
    codeSnippet: `
      const arr = [1, 2, 3, 4, 5];

      const filtered = arr.filter(num => num > 2);
      console.log(filtered); // Output: [3, 4, 5]

      const found = arr.find(num => num > 2);
      console.log(found); // Output: 3
    `,
  },
  {
    id: 39,
    question: "What is array destructuring, and how can it be useful?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
      Array destructuring is a syntax that allows you to unpack values from arrays into distinct variables. It can be used for extracting values from arrays in a concise way.
    `,
    example: true,
    codeSnippet: `
      const numbers = [1, 2, 3, 4, 5];

      const [first, second, , fourth] = numbers;
      console.log(first); // Output: 1
      console.log(second); // Output: 2
      console.log(fourth); // Output: 4
    `,
  },

  {
    id: 41,
    question: "How can you flatten a multi-dimensional array in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      A multi-dimensional array can be flattened into a single-dimensional array using \`Array.prototype.flat()\`, \`reduce()\`, or recursive functions. The \`flat()\` method is the most straightforward and allows specifying the depth to flatten.
    `,
    example: true,
    codeSnippet: `
      const nestedArr = [1, [2, [3, 4], 5]];

      const flatArr = nestedArr.flat(2);
      console.log(flatArr); // Output: [1, 2, 3, 4, 5]

      // Using reduce() to flatten
      const flattenedWithReduce = nestedArr.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flat() : val), []);
      console.log(flattenedWithReduce); // Output: [1, 2, 3, 4, 5]
    `,
  },
  {
    id: 42,
    question:
      "How does the `.sort()` method work for arrays in JavaScript? Explain with examples.",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      The \`.sort()\` method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings, but you can provide a comparator function for custom sorting logic.
    `,
    example: true,
    codeSnippet: `
      const numbers = [3, 1, 4, 1, 5, 9];
      numbers.sort();
      console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]

      // Custom sorting (numerical order)
      numbers.sort((a, b) => a - b);
      console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]

      // Sorting objects
      const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
      people.sort((a, b) => a.age - b.age);
      console.log(people); // Output: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
    `,
  },
  {
    id: 43,
    question:
      "Explain the difference between `.splice()` and `.slice()` methods in JavaScript arrays.",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
      - **\`.splice()\`**: Modifies the original array by removing or adding elements. It returns the removed elements.
      - **\`.slice()\`**: Does not modify the original array and returns a shallow copy of a portion of the array.
    `,
    example: true,
    codeSnippet: `
      const arr = [1, 2, 3, 4, 5];

      const splicedArr = arr.splice(2, 2);
      console.log(splicedArr); // Output: [3, 4]
      console.log(arr); // Output: [1, 2, 5]

      const slicedArr = arr.slice(1, 3);
      console.log(slicedArr); // Output: [2, 5]
      console.log(arr); // Output: [1, 2, 5] (original array unchanged)
    `,
  },
  {
    id: 44,
    question:
      "What are typed arrays in JavaScript, and when would you use them?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      Typed arrays in JavaScript are array-like objects that provide a mechanism for accessing raw binary data. Each type of typed array represents a specific binary data format (e.g., \`Int8Array\`, \`Float32Array\`). They are useful when working with binary data, such as in WebGL or when handling file I/O.
    `,
    example: true,
    codeSnippet: `
      const buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
      const int32View = new Int32Array(buffer);

      int32View[0] = 42;
      console.log(int32View[0]); // Output: 42
    `,
  },
  {
    id: 45,
    question:
      "What is the difference between `.every()` and `.some()` methods in JavaScript arrays?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer: `
      - **\`.every()\`**: Tests whether all elements in the array pass the provided test function. It returns \`true\` only if all elements pass the test.
      - **\`.some()\`**: Tests whether at least one element in the array passes the provided test function. It returns \`true\` if any element passes the test.
    `,
    example: true,
    codeSnippet: `
      const arr = [1, 2, 3, 4, 5];

      const allEven = arr.every(num => num % 2 === 0);
      console.log(allEven); // Output: false

      const someEven = arr.some(num => num % 2 === 0);
      console.log(someEven); // Output: true
    `,
  },
  {
    id: 47,
    question: "What are the different data types in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "JavaScript has several data types, categorized into primitive and reference types. Primitive types include String, Number, Boolean, Null, Undefined, BigInt, and Symbol. Reference types include Objects, Arrays, and Functions.",
    example: true,
    codeSnippet:
      "const name = 'John'; // String\nconst age = 25; // Number\nconst isStudent = false; // Boolean\nconst value = null; // Null\nconst data = undefined; // Undefined\nconst id = Symbol('id'); // Symbol\nconst bigNumber = 12345678901234567890n; // BigInt",
  },

  {
    id: 49,
    question: "What is hoisting in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before code execution. Variables declared with `var` are hoisted but initialized as `undefined`, whereas `let` and `const` are hoisted but not initialized.",
    example: true,
    codeSnippet:
      "console.log(a); // Undefined\nvar a = 5;\n\nconsole.log(b); // ReferenceError\nlet b = 10;",
  },
  {
    id: 50,
    question: "What is the difference between == and ===?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "`==` (loose equality) compares values but allows type conversion, whereas `===` (strict equality) compares both value and type without conversion.",
    example: true,
    codeSnippet:
      "console.log(5 == '5'); // true (type conversion)\nconsole.log(5 === '5'); // false (different types)",
  },
  {
    id: 51,
    question: "Explain the difference between null and undefined.",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "`null` represents an intentional absence of value, while `undefined` means a variable has been declared but has not been assigned a value.",
    example: true,
    codeSnippet:
      "let x;\nconsole.log(x); // undefined\n\nlet y = null;\nconsole.log(y); // null",
  },
  {
    id: 52,
    question: "What are template literals in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "Template literals are strings enclosed by backticks (``) that allow embedding expressions using `${}` and support multi-line strings.",
    example: true,
    codeSnippet:
      "const name = 'Alice';\nconsole.log(`Hello, ${name}!`); // Output: Hello, Alice!",
  },
  {
    id: 53,
    question:
      "What is the difference between function declaration and function expression?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A function declaration defines a function with the `function` keyword, while a function expression assigns a function to a variable. Function declarations are hoisted, whereas function expressions are not.",
    example: true,
    codeSnippet:
      "// Function declaration\nfunction greet() { return 'Hello'; }\n\n// Function expression\nconst greet = function() { return 'Hello'; };",
  },
  {
    id: 54,
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after its definition. It helps in avoiding global scope pollution.",
    example: true,
    codeSnippet: "(function() { console.log('IIFE executed'); })();",
  },
  {
    id: 55,
    question: "How do you create an object in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "You can create an object in JavaScript using object literals, the Object constructor, or Object.create().",
    example: true,
    codeSnippet: "const obj = { name: 'John', age: 30 };",
  },
  {
    id: 56,
    question: "What is the difference between primitive and reference types?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Primitive types (String, Number, Boolean, Null, Undefined, BigInt, Symbol) store values directly, whereas reference types (Objects, Arrays, Functions) store references to memory locations.",
    example: true,
    codeSnippet:
      "let a = 10; // Primitive\nlet b = a;\nb = 20;\nconsole.log(a); // 10 (unchanged)\n\nlet obj1 = { name: 'Alice' }; // Reference\nlet obj2 = obj1;\nobj2.name = 'Bob';\nconsole.log(obj1.name); // 'Bob' (changed)",
  },
  {
    id: 57,
    question: "What is the difference between map, filter, and forEach?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "map() creates a new array by applying a function to each element. filter() creates a new array with elements that satisfy a condition. forEach() executes a function on each element but does not return a new array.",
    example: true,
    codeSnippet:
      "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\nnumbers.forEach(n => console.log(n));",
  },
  {
    id: 58,
    question: "Explain how the reduce() method works with an example.",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "reduce() applies a function to an accumulator and each element in an array to reduce it to a single value.",
    example: true,
    codeSnippet:
      "const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10",
  },
  {
    id: 59,
    question: "What are higher-order functions in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return functions.",
    example: true,
    codeSnippet:
      "function multiplier(factor) { return num => num * factor; }\nconst double = multiplier(2);\nconsole.log(double(5)); // 10",
  },
  {
    id: 60,
    question: "What is the difference between slice() and splice()?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "slice() returns a new array without modifying the original array, whereas splice() modifies the original array by adding/removing elements.",
    example: true,
    codeSnippet:
      "const arr = [1, 2, 3, 4];\nconst sliced = arr.slice(1, 3); // [2, 3]\narr.splice(1, 2); // arr = [1, 4]",
  },
  {
    id: 61,
    question:
      "What is the difference between push(), pop(), shift(), and unshift()?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "push() adds an element to the end, pop() removes from the end, shift() removes from the start, and unshift() adds to the start.",
    example: true,
    codeSnippet:
      "const arr = [1, 2, 3];\narr.push(4); // [1, 2, 3, 4]\narr.pop(); // [1, 2, 3]\narr.shift(); // [2, 3]\narr.unshift(0); // [0, 2, 3]",
  },
  {
    id: 62,
    question: "How does the typeof operator work?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer: "The typeof operator returns the type of a given variable.",
    example: true,
    codeSnippet:
      "console.log(typeof 42); // 'number'\nconsole.log(typeof 'Hello'); // 'string'\nconsole.log(typeof {}); // 'object'",
  },
  {
    id: 63,
    question:
      "Explain the difference between synchronous and asynchronous JavaScript.",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Synchronous JavaScript executes code sequentially, blocking further execution until the current task is completed. Asynchronous JavaScript allows tasks to run in the background, enabling non-blocking operations using callbacks, promises, or async/await.",
    example: true,
    codeSnippet:
      "console.log('Start') setTimeout(() => console.log('Async Task'), 1000); console.log('End'); ",
  },
  {
    id: 64,
    question: "What are truthy and falsy values in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "Truthy values evaluate to true in a Boolean context, while falsy values evaluate to false. Falsy values include false, 0, '', null, undefined, and NaN. All other values are truthy.",
    example: true,
    codeSnippet:
      "console.log(Boolean(0)); // false console.log(Boolean('Hello')); // true",
  },
  {
    id: 65,
    question: "How does short-circuit evaluation work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Short-circuit evaluation occurs when logical operators (&& and ||) stop evaluating as soon as the result is determined. The && operator returns the first falsy value, while || returns the first truthy value.",
    example: true,
    codeSnippet:
      "console.log(false && 'Hello'); // false console.log(true || 'World'); // true",
  },
  {
    id: 66,
    question: "What is the difference between setTimeout() and setInterval()?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "setTimeout() executes a function once after a delay, whereas setInterval() repeatedly executes a function at specified intervals until cleared.",
    example: true,
    codeSnippet:
      "setTimeout(() => console.log('Executed once'), 1000); setInterval(() => console.log('Executed repeatedly'), 1000);",
  },

  {
    id:68,
    question: "What is the difference between a shallow copy and a deep copy of an array in JavaScript?",
    answer:
      "<p>In JavaScript, a shallow copy of an array means that the new array has the same elements as the original one, but if the elements are objects or arrays themselves, only references to the original objects/arrays are copied. In contrast, a deep copy creates a completely independent copy of the array, including copies of nested objects or arrays, ensuring that changes to the new array do not affect the original array.</p>" +
      "<p><strong>Shallow Copy:</strong> A shallow copy duplicates the top-level elements of the array, but if the elements are objects, only their references are copied. This means changes made to nested objects in the copied array will reflect in the original array.</p>" +
      "<p><strong>Deep Copy:</strong> A deep copy duplicates every element, including nested objects and arrays, creating entirely independent copies. This ensures that changes to the copied array, even to its nested structures, do not affect the original array.</p>" +
      "<p><strong>Example of Shallow Copy:</strong></p>" +
      "<pre><code>const arr = [1, 2, [3, 4]];\nconst shallowCopy = arr.slice();\nshallowCopy[2][0] = 99;\nconsole.log(arr); // Output: [1, 2, [99, 4]]</code></pre>" +
      "<p><strong>Example of Deep Copy:</strong></p>" +
      "<pre><code>const arr = [1, 2, [3, 4]];\nconst deepCopy = JSON.parse(JSON.stringify(arr));\ndeepCopy[2][0] = 99;\nconsole.log(arr); // Output: [1, 2, [3, 4]]</code></pre>",
    codeSnippet:
      "<pre><code>// Shallow Copy\nconst arr = [1, 2, [3, 4]];\nconst shallowCopy = arr.slice();\nshallowCopy[2][0] = 99;\nconsole.log(arr); // Output: [1, 2, [99, 4]]\n\n// Deep Copy\nconst arr = [1, 2, [3, 4]];\nconst deepCopy = JSON.parse(JSON.stringify(arr));\ndeepCopy[2][0] = 99;\nconsole.log(arr); // Output: [1, 2, [3, 4]]</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium",
  },
  
  {
    id: 69,
    question: "What are closures in JavaScript?",
    answer:
      "<p>A closure is a function that retains access to its outer function's variables even after the outer function has finished executing.</p>" +
      "<p>Closures are often used to create private variables or functions in JavaScript, enabling better data encapsulation. They are also a powerful tool for callback functions and event handlers, where the inner function needs to maintain access to variables outside its scope.</p>" +
      "<p><strong>Example:</strong></p>" +
      "<pre><code>function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\n\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2</code></pre>" +
      "<p>In this example, the `inner` function forms a closure, retaining access to the `count` variable from the `outer` function even after `outer` has finished executing.</p>",
    codeSnippet:
      "<pre><code>function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\n\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  },
  
  {
    id: 70,
    question: "What is the behavior of 'this' in different contexts in JavaScript?",
    answer:
      "<p>The value of `this` in JavaScript depends on how a function is called. It can behave differently in various contexts, such as in global scope, inside a function, in object methods, inside arrow functions, and event handlers. Below is an explanation of how `this` behaves in different scenarios:</p>" +
      "<ul>" +
      "<li><strong>Global Context:</strong> In non-strict mode, `this` refers to the global object (e.g., `window` in browsers, {} in node). In strict mode, `this` is `undefined`.</li>" +
      "<li><strong>Inside a Function:</strong> In a regular function, `this` refers to the object that called the function. If the function is called directly (not as a method), `this` refers to the global object (or `undefined` in strict mode).</li>" +
      "<li><strong>Inside an Object Method:</strong> In an object method, `this` refers to the object the method is called on.</li>" +
      "<li><strong>Inside Arrow Functions:</strong> Arrow functions do not have their own `this`. Instead, they inherit the value of `this` from the surrounding (lexical) context in which they were defined.</li>" +
      "<li><strong>Event Handlers:</strong> In event handler functions, `this` refers to the element that triggered the event (unless you use arrow functions, where it will refer to the enclosing context).</li>" +
      "</ul>" +
      "<p><strong>Example of Global Context:</strong></p>" +
      "<pre><code>console.log(this); // In browser, it will log the window object</code></pre>" +
      "<p><strong>Example of Function Context:</strong></p>" +
      "<pre><code>function showThis() {\n  console.log(this); // In non-strict mode, this refers to the global object\n}\nshowThis();</code></pre>" +
      "<p><strong>Example of Object Method Context:</strong></p>" +
      "<pre><code>const person = {\n  name: 'Alice',\n  greet: function() {\n    console.log(this.name); // 'this' refers to the person object\n  }\n};\nperson.greet();</code></pre>" +
      "<p><strong>Example of Arrow Function Context:</strong></p>" +
      "<pre><code>const person = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(() => {\n      console.log(this.name); // 'this' refers to the person object due to lexical binding\n    }, 1000);\n  }\n};\nperson.greet();</code></pre>" +
      "<p><strong>Example of Event Handler Context:</strong></p>" +
      "<pre><code>const button = document.querySelector('button');\nbutton.addEventListener('click', function() {\n  console.log(this); // 'this' refers to the button element\n});</code></pre>",
    codeSnippet:
      "<pre><code>console.log(this); // In browser, it will log the window object</code></pre>" +
      "<pre><code>function showThis() {\n  console.log(this); // In non-strict mode, this refers to the global object\n}\nshowThis();</code></pre>" +
      "<pre><code>const person = {\n  name: 'Alice',\n  greet: function() {\n    console.log(this.name); // 'this' refers to the person object\n  }\n};\nperson.greet();</code></pre>" +
      "<pre><code>const person = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(() => {\n      console.log(this.name); // 'this' refers to the person object due to lexical binding\n    }, 1000);\n  }\n};\nperson.greet();</code></pre>" +
      "<pre><code>const button = document.querySelector('button');\nbutton.addEventListener('click', function() {\n  console.log(this); // 'this' refers to the button element\n});</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  }
  ,
  {
    id: 71,
    question: "What is an arrow function in JavaScript?",
    answer:
      "<p>An arrow function is a concise way to write functions in JavaScript. It was introduced in ECMAScript 6 (ES6) and offers a shorter syntax compared to regular function expressions. Arrow functions use the `=>` syntax, which distinguishes them from traditional function expressions.</p>" +
      "<p><strong>Key characteristics of arrow functions:</strong></p>" +
      "<ul>" +
      "<li><strong>Shorter syntax:</strong> Arrow functions are written using `=>` instead of the `function` keyword.</li>" +
      "<li><strong>Lexical `this` binding:</strong> In arrow functions, `this` is lexically bound, meaning it takes the `this` value from the surrounding context (such as the enclosing function or object), rather than being dynamically set as in regular functions.</li>" +
      "<li><strong>Implicit return:</strong> If the function has a single expression, you can omit the `return` keyword and the function will implicitly return the result of that expression.</li>" +
      "</ul>" +
      "<p><strong>Example:</strong></p>" +
      "<pre><code>// Regular function expression\nconst sum = function(a, b) {\n  return a + b;\n};\n\n// Arrow function\nconst sumArrow = (a, b) => a + b;\n\nconsole.log(sum(2, 3)); // Output: 5\nconsole.log(sumArrow(2, 3)); // Output: 5</code></pre>" +
      "<p><strong>Example of lexical `this` binding:</strong></p>" +
      "<pre><code>const person = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(() => {\n      console.log(`Hello, ${this.name}!`); // 'this' refers to the person object\n    }, 1000);\n  }\n};\nperson.greet(); // Output: Hello, Alice!</code></pre>",
    codeSnippet:
      "<pre><code>// Regular function expression\nconst sum = function(a, b) {\n  return a + b;\n};\n\n// Arrow function\nconst sumArrow = (a, b) => a + b;\n\nconsole.log(sum(2, 3)); // Output: 5\nconsole.log(sumArrow(2, 3)); // Output: 5</code></pre>" +
      "<pre><code>// Lexical 'this' binding example\nconst person = {\n  name: 'Alice',\n  greet: function() {\n    setTimeout(() => {\n      console.log(`Hello, ${this.name}!`); // 'this' refers to the person object\n    }, 1000);\n  }\n};\nperson.greet(); // Output: Hello, Alice!</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Easy"
  }
  ,
  {
    id: 72,
    question: "What is function currying in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Function currying is a technique in which a function is transformed into a sequence of functions, each taking a single argument, allowing partial application of arguments.",
    example: true,
    codeSnippet: "const add = a => b => a + b;\nconsole.log(add(2)(3)); // 5",
  },
  {
    id: 73,
    question: "Explain call, apply, and bind methods.",
    answer:
      "<p><strong>call()</strong>, <strong>apply()</strong>, and <strong>bind()</strong> are methods in JavaScript that allow you to control the value of <code>this</code> when invoking a function.</p>" +
      "<p><strong>call()</strong>: This method invokes the function immediately, with a specified <code>this</code> context and arguments passed one by one. The first argument is the value of <code>this</code>, and subsequent arguments are passed directly to the function.</p>" +
      "<p><strong>apply()</strong>: This method is similar to <code>call()</code>, but instead of passing the arguments one by one, <code>apply()</code> takes an array or array-like object as the second argument.</p>" +
      "<p><strong>bind()</strong>: Unlike <code>call()</code> and <code>apply()</code>, <code>bind()</code> doesn't immediately invoke the function. Instead, it returns a new function that, when called, will have the specified <code>this</code> value and initial arguments. The returned function can be called at a later time.</p>" +
      "<p><strong>Key differences:</strong></p>" +
      "<ul>" +
      "<li><strong>call()</strong>: Invokes the function immediately with specified arguments.</li>" +
      "<li><strong>apply()</strong>: Invokes the function immediately with an array of arguments.</li>" +
      "<li><strong>bind()</strong>: Returns a new function that can be invoked later with a specified <code>this</code> value and initial arguments.</li>" +
      "</ul>",
    codeSnippet:
      "<pre><code>// Example of call()\nfunction greet(name) {\n  console.log('Hello, ' + name + ', ' + this.title);\n}\n\nconst person = { title: 'Mr.' };\ngreet.call(person, 'John');\n\n// Example of apply()\nfunction greetApply(name) {\n  console.log('Hello, ' + name + ', ' + this.title);\n}\n\ngreetApply.apply(person, ['John']);\n\n// Example of bind()\nfunction greetBind(name) {\n  console.log('Hello, ' + name + ', ' + this.title);\n}\n\nconst boundGreet = greetBind.bind(person);\nboundGreet('John');</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium",
  }
,  
  {
    id: 74,
    question: "What is memoization in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
    example: true,
    codeSnippet:
      "function memoize(fn) {\n  let cache = {};\n  return function(...args) {\n    let key = JSON.stringify(args);\n    if (!cache[key]) {\n      cache[key] = fn(...args);\n    }\n    return cache[key];\n  };\n}\nconst factorial = memoize(n => (n <= 1 ? 1 : n * factorial(n - 1)));\nconsole.log(factorial(5)); // 120",
  },
  {
    id: 75,
    question: "What are Debouncing and Throttling in JavaScript?",
    answer: `
        <h2>Debouncing and Throttling in JavaScript</h2>
        <p>Both <strong>debouncing</strong> and <strong>throttling</strong> are techniques used to optimize the performance of high-frequency events like scrolling, resizing, keypress, and mouse movement.</p>

        <h3><strong>Debouncing</strong></h3>
        <p>Debouncing ensures that a function executes only after a certain delay has passed since the last event was triggered. This prevents unnecessary function calls when a user continuously triggers an event.</p>

        <h4><strong>Example Scenario:</strong></h4>
        <p>Imagine a search box that fetches results from an API as the user types. Without debouncing, an API call will be made for every keystroke, leading to excessive API requests.</p>

        <h4>Debounce Function Implementation:</h4>
        <pre>
        <code>
        function debounce(func, delay) {
            let timer;
            return function (...args) {
                clearTimeout(timer); // Clear previous timer
                timer = setTimeout(() => func(...args), delay); // Set new timer
            };
        }

        // Example Usage
        function searchQuery(query) {
            console.log("Searching for:", query);
        }

        const debouncedSearch = debounce(searchQuery, 500);
        debouncedSearch("example");
        </code>
        </pre>

        <h3><strong>Throttling</strong></h3>
        <p>Throttling limits the number of times a function executes within a specific time interval.</p>

        <h4><strong>The Problem:</strong></h4>
        <p>Imagine scrolling on a website without throttling. The event handler will trigger multiple times per second, which can slow down performance.</p>

        <h4><strong>The Solution:</strong></h4>
        <p>With throttling, the function executes only once per set interval, even if the event is triggered multiple times.</p>

        <h4>Without Throttling (Inefficient):</h4>
        <pre>
        <code>
        window.addEventListener("scroll", () => {
            console.log("Scrolling...", Date.now());
        });
        </code>
        </pre>
        <p>This function runs too many times, causing performance issues.</p>

        <h4>With Throttling (Optimized):</h4>
        <pre>
        <code>
        function throttle(func, interval) {
            let lastCall = 0;
            return function (...args) {
                const now = Date.now();
                if (now - lastCall >= interval) {
                    func(...args);
                    lastCall = now;
                }
            };
        }

        // Example Usage
        function logScroll() {
            console.log("Scrolling...", Date.now());
        }

        const throttledScroll = throttle(logScroll, 1000);
        window.addEventListener("scroll", throttledScroll);
        </code>
        </pre>

        <h3>Key Differences Between Debouncing and Throttling</h3>
        <table border="1">
            <tr>
                <th>Feature</th>
                <th>Debouncing</th>
                <th>Throttling</th>
            </tr>
            <tr>
                <td><strong>Definition</strong></td>
                <td>Delays function execution until after a pause</td>
                <td>Limits function execution to once per interval</td>
            </tr>
            <tr>
                <td><strong>Use Case</strong></td>
                <td>Search input, resize event</td>
                <td>Scrolling, mouse movement</td>
            </tr>
            <tr>
                <td><strong>Example</strong></td>
                <td>API call on text input</td>
                <td>Handling scroll events efficiently</td>
            </tr>
        </table>

        <p>Both techniques improve performance by reducing unnecessary function calls, ensuring better user experience and responsiveness.</p>
    `,
    codeSnippet:
      "<pre><code>// Debouncing example\nfunction debounce(func, delay) {\n  let timer;\n  return function() {\n    clearTimeout(timer);\n    timer = setTimeout(func, delay);\n  };\n}\n\n// Throttling example\nfunction throttle(func, delay) {\n  let lastTime = 0;\n  return function() {\n    const now = new Date().getTime();\n    if (now - lastTime >= delay) {\n      func();\n      lastTime = now;\n    }\n  };\n}</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium",
  },
  
  {
    id: 76,
    question:
      "What is the difference between localStorage, sessionStorage, and cookies?",
    answer:
     ` <p><strong>localStorage</strong>: It stores data with no expiration time. Data is stored until explicitly deleted by the user or the browser. It is available across sessions and tabs (within the same origin). <code>localStorage</code> can store up to 5-10 MB of data depending on the browser.</p>" 
      <p><strong>sessionStorage</strong>: It stores data only for the duration of the page session. Data is lost when the page is closed or when the tab/browser is closed. It is available only in the current tab or window, not across multiple tabs or windows. <code>sessionStorage</code> can store up to 5 MB of data.</p>
      <p><strong>Cookies</strong>: Cookies are small pieces of data stored on the client-side and sent with every HTTP request to the server. They have an expiration date, and once the expiration time is reached, the cookie is deleted. Cookies are limited to 4 KB of data, and they can be accessed both client-side (via JavaScript) and server-side. They are mainly used for session management, tracking user activity, and authentication purposes.</p> 
      <p><strong>Key differences:</strong></p> 
      <ul> 
      <li><code>localStorage</code> persists until manually deleted, whereas <code>sessionStorage</code> is cleared when the session ends (e.g., browser/tab closed).</li> 
      <li><code>localStorage</code> and <code>sessionStorage</code> are client-side only and do not send data to the server, unlike cookies.</li> 
      <li>Cookies are automatically sent to the server with every HTTP request, while <code>localStorage</code> and <code>sessionStorage</code> are not.</li> 
      <li>Cookies are limited to 4 KB, while <code>localStorage</code> and <code>sessionStorage</code> can store up to 5-10 MB of data, depending on the browser.</li> 
      </ul>
      <br>
     <strong> When to Use What?</strong>
<p>localStorage → Best for long-term data storage (theme, language settings).</p>
<p>sessionStorage → Best for temporary session-based data (form inputs, temporary login).</p>
<p>cookies → Best for small data that needs to persist across sessions and be sent to the server (auth tokens, preferences).</p> `
,
    codeSnippet:
      "<pre><code>// localStorage example\nlocalStorage.setItem('username', 'JohnDoe');\n\n// sessionStorage example\nsessionStorage.setItem('sessionID', '12345');\n\n// Cookie example\ndocument.cookie = 'user=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/';</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium",
  },

  {
    id: 77,
    question: "What is prototypal inheritance in JavaScript?",
    answer:
      "<p>Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. In JavaScript, every object has an internal property called <code>[[Prototype]]</code> (often referred to as <code>__proto__</code>), which points to another object, known as the prototype. This prototype chain allows an object to access properties and methods of its prototype, and by extension, the prototype of its prototype, forming a chain of inheritance.</p>" +
      "<p>Unlike class-based inheritance, where classes inherit from other classes, JavaScript's prototypal inheritance works directly between objects. This is a dynamic system, meaning properties and methods can be added to an object's prototype, and all objects that inherit from that prototype will automatically have access to those new properties and methods.</p>" +
      "<p><strong>Example of Prototypal Inheritance:</strong></p>" +
      "<pre><code>// Creating an object with a property and method\nconst person = {\n  name: 'John',\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  }\n};\n\n// Creating another object that inherits from person\nconst employee = Object.create(person);\nemployee.job = 'Engineer';\n\nemployee.greet(); // Inherited method\nconsole.log(employee.job); // Own property</code></pre>" +
      "<p><strong>Key Points:</strong></p>" +
      "<ul>" +
      "<li>Every object in JavaScript has a prototype (accessed through <code>__proto__</code> or <code>Object.getPrototypeOf()</code>).</li>" +
      "<li>The prototype itself can have a prototype, creating a chain (prototype chain).</li>" +
      "<li>When a property or method is called on an object, JavaScript looks for it on the object first, then checks its prototype, and continues up the chain.</li>" +
      "<li>It allows for inheritance of properties and methods, making it a powerful tool for code reuse and creating more complex objects.</li>" +
      "</ul>",
    codeSnippet:
      "<pre><code>// Example of Prototypal Inheritance\nconst person = {\n  name: 'John',\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  }\n};\n\nconst employee = Object.create(person);\nemployee.job = 'Engineer';\n\nemployee.greet(); // Inherited method\nconsole.log(employee.job); // Own property</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium",
  }
  ,
  {
    id: 78,
    question: "What is the difference between .call(), .apply(), and .bind()?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "call() and apply() invoke functions immediately with a specified 'this' value, but call() accepts arguments individually, while apply() takes them as an array. bind() returns a new function with the specified 'this' context, which can be called later.",
    example: true,
    codeSnippet: `function greet(greeting) { console.log(greeting + ', ' + this.name); }
const person = { name: 'Alice' };
greet.call(person, 'Hello'); // 'Hello, Alice'
greet.apply(person, ['Hi']); // 'Hi, Alice'
const boundGreet = greet.bind(person, 'Hey');
boundGreet(); // 'Hey, Alice'"`,
  },
  {
    id: 79,
    question: "What is an ES6 class in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "ES6 classes provide a more structured way to create objects and manage inheritance in JavaScript, offering syntactic sugar over prototype-based inheritance.",
    example: true,
    codeSnippet: `class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, ' + this.name);
  }
}
const alice = new Person('Alice');
alice.greet(); // 'Hello, Alice'"`,
  },
  {
    id: 80,
    question: "Explain the spread and rest operators in JavaScript.",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The spread operator (...) expands an iterable into individual elements, while the rest operator (...) gathers multiple elements into an array.",
    example: true,
    codeSnippet: `const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread operator
console.log(newArr); // [1, 2, 3, 4, 5]
function sum(...numbers) { // Rest operator
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6`,
  },
  {
    id: 81,
    question: "What is destructuring in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Destructuring allows extracting values from arrays or properties from objects into distinct variables in a concise way.",
    example: true,
    codeSnippet: `const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age); // 'Alice', 25
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1, 2"`,
  },
 

  {
    id: 84,
    question: "What is the purpose of the Symbol type in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The Symbol type is a unique and immutable primitive used as object keys to prevent naming conflicts.",
    example: true,
    codeSnippet: `const uniqueKey = Symbol('key');
const obj = { [uniqueKey]: 'value' };
console.log(obj[uniqueKey]); // 'value'"`,
  },
  {
    id: 85,
    question: "How does the optional chaining (?.) operator work?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Optional chaining allows safe access to deeply nested object properties without throwing an error if a property is undefined.",
    example: true,
    codeSnippet: `"const user = { profile: { name: 'Alice' } };
console.log(user?.profile?.name); // 'Alice'
console.log(user?.address?.city); // undefined"`,
  },
  {
    id: 86,
    question: "What is Object.freeze() and Object.seal()?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Object.freeze() makes an object immutable, preventing changes to properties. Object.seal() allows modifications to existing properties but prevents adding or deleting properties.",
    example: true,
    codeSnippet: `const obj = { name: 'Alice' };
Object.freeze(obj);
obj.name = 'Bob'; // No effect
console.log(obj.name); // 'Alice'
const obj2 = { age: 25 };
Object.seal(obj2);
obj2.age = 30; // Allowed
delete obj2.age; // Not allowed`,
  },
  {
    id: 90,
    question: "What are generators in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Generators are special functions that can be paused and resumed using the 'yield' keyword. They are defined using the function* syntax and return an iterator.",
    example: true,
    codeSnippet: `
      function* generatorFunction() {
        yield 1;
        yield 2;
        yield 3;
      }
      const gen = generatorFunction();
      console.log(gen.next().value); // Output: 1
      console.log(gen.next().value); // Output: 2
      console.log(gen.next().value); // Output: 3
    `,
  },
  {
    id: 91,
    question: "What is the difference between map and WeakMap?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A Map holds key-value pairs and allows any data type as a key, whereas a WeakMap only accepts objects as keys and does not prevent garbage collection of keys.",
    example: true,
    codeSnippet: `
      let map = new Map();
      let obj = {};
      map.set(obj, 'value');
      console.log(map.get(obj)); // Output: 'value'
      
      let weakMap = new WeakMap();
      let obj2 = {};
      weakMap.set(obj2, 'value');
      console.log(weakMap.get(obj2)); // Output: 'value'
    `,
  },
  {
    id: 92,
    question: "What are Proxies and Reflect in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Proxies allow you to define custom behavior for fundamental operations on objects, such as reading and writing properties. The Reflect API provides methods to perform the same operations as those intercepted by proxies.",
    example: true,
    codeSnippet: `
      let handler = {
        get(target, prop) {
          return prop in target ? target[prop] : 'Property not found';
        }
      };
      let obj = { name: 'Alice' };
      let proxy = new Proxy(obj, handler);
      console.log(proxy.name); // Output: 'Alice'
      console.log(proxy.age); // Output: 'Property not found'
    `,
  },
  {
    id: 93,
    question:
      "What is the difference between setTimeout and requestAnimationFrame?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "setTimeout schedules a function to run after a specified delay, while requestAnimationFrame schedules a function to run before the next repaint, making it more suitable for animations.",
    example: true,
    codeSnippet: `
      function animate() {
        console.log('Animating');
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    `,
  },
  {
    id: 94,
    question: "How does garbage collection work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "JavaScript uses automatic garbage collection via a process called reference counting and mark-and-sweep, where unreachable objects are removed from memory.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 95,
    question: "What is the Temporal Dead Zone (TDZ)?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The TDZ is the time between when a variable is hoisted and when it is initialized. Accessing it in this period results in a ReferenceError.",
    example: true,
    codeSnippet: `
      console.log(a); // ReferenceError
      let a = 10;
    `,
  },
  {
    id: 96,
    question: "What are Web Workers in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Web Workers allow JavaScript to run background tasks in separate threads, preventing the main thread from blocking UI rendering.",
    example: true,
    codeSnippet: `
      let worker = new Worker('worker.js');
      worker.postMessage('Hello');
      worker.onmessage = function(event) {
        console.log('Message from worker:', event.data);
      };
    `,
  },
  {
    id: 97,
    question: "How does the with statement work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The 'with' statement extends the scope chain to simplify accessing properties of an object but is discouraged due to its impact on performance and debugging.",
    example: true,
    codeSnippet: `
      let obj = { name: 'Alice', age: 25 };
      with (obj) {
        console.log(name); // Output: 'Alice'
        console.log(age);  // Output: 25
      }
    `,
  },
  {
    id: 98,
    question: "What is tail call optimization?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Tail call optimization (TCO) occurs when a function call is the last operation in another function, allowing the JavaScript engine to optimize recursion and reduce memory usage.",
    example: true,
    codeSnippet: `
      function factorial(n, acc = 1) {
        if (n === 1) return acc;
        return factorial(n - 1, n * acc);
      }
      console.log(factorial(5)); // Output: 120
    `,
  },
  {
    id: 99,
    question: "How do JavaScript modules (import/export) work?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "JavaScript modules allow code to be divided into separate files using 'export' and 'import' statements, improving maintainability and reusability.",
    example: true,
    codeSnippet: `
      // module.js
      export const greet = name => "Hello,name};
      // main.js
      import { greet } from './module.js';
      console.log(greet('Alice')); // Output: 'Hello, Alice'
    `,
  },
  {
    id: 100,
    question:
      "What is the difference between call, apply, and bind in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The 'call' and 'apply' methods invoke a function with a specific 'this' value and arguments. The difference is that 'call' takes arguments individually, while 'apply' takes them as an array. The 'bind' method, however, returns a new function with a bound 'this' value and does not invoke it immediately.",
    example: true,
    codeSnippet: `
      function greet(greeting, punctuation) {
        console.log(greeting + ', ' + this.name + punctuation);
      }
      
      const person = { name: 'Alice' };
      
      greet.call(person, 'Hello', '!'); // Output: 'Hello, Alice!'
      greet.apply(person, ['Hi', '?']); // Output: 'Hi, Alice?'
      
      const boundGreet = greet.bind(person, 'Hey');
      boundGreet('!'); // Output: 'Hey, Alice!'
    `,
  },
  {
    id: 101,
    question: "What is the purpose of eval() and why is it discouraged?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "The eval() function executes a string as JavaScript code. It is discouraged because it poses security risks, makes debugging harder, and reduces performance due to lack of optimizations.",
    example: true,
    codeSnippet: `
      let x = 10;
      let y = 20;
      let result = eval('x + y');
      console.log(result); // Output: 30
    `,
  },
  {
    id: 102,
    question: "What is a WeakSet in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A WeakSet is a collection of objects that allows only object values and does not prevent garbage collection, meaning it holds 'weak' references to objects.",
    example: true,
    codeSnippet: `
      let obj1 = { name: 'Alice' };
      let obj2 = { name: 'Bob' };
      
      let weakSet = new WeakSet();
      weakSet.add(obj1);
      weakSet.add(obj2);
      
      console.log(weakSet.has(obj1)); // Output: true
    `,
  },
  {
    id: 103,
    question: "How do you handle errors in JavaScript using try...catch?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "The try...catch statement allows handling runtime errors gracefully without stopping script execution.",
    example: true,
    codeSnippet: `
      try {
        let result = riskyFunction();
      } catch (error) {
        console.log('An error occurred:', error.message);
      }
    `,
  },
  {
    id: 104,
    question: "What is the new keyword in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "The 'new' keyword is used to create an instance of an object that has a constructor function.",
    example: true,
    codeSnippet: `
      function Person(name) {
        this.name = name;
      }
      let person1 = new Person('Alice');
      console.log(person1.name); // Output: Alice
    `,
  },
  {
    id: 105,
    question: "How does the instanceof operator work?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The instanceof operator checks whether an object is an instance of a specific constructor function or class.",
    example: true,
    codeSnippet: `
      function Person() {}
      let person = new Person();
      console.log(person instanceof Person); // Output: true
    `,
  },
  {
    id: 106,
    question:
      "What is the difference between Object.assign() and the spread operator?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Object.assign() and the spread operator both copy object properties, but Object.assign() mutates the target object while spread creates a shallow copy.",
    example: true,
    codeSnippet: `
      let obj1 = { a: 1 };
      let obj2 = Object.assign({}, obj1);
      let obj3 = { ...obj1 };
      console.log(obj2, obj3); // Both produce { a: 1 }
    `,
  },
  {
    id: 107,
    question: "How can you prevent modification of an object in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer: "You can use Object.freeze() to make an object immutable.",
    example: true,
    codeSnippet: `
      let obj = { name: 'Alice' };
      Object.freeze(obj);
      obj.name = 'Bob';
      console.log(obj.name); // Output: 'Alice'
    `,
  },
  {
    id: 108,
    question: "What is a polyfill in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A polyfill is a script that adds modern functionality to older browsers that do not support it natively.",
    example: true,
    codeSnippet: `
      if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
          return this.indexOf(search, start) !== -1;
        };
      }
    `,
  },
  {
    id: 109,
    question: "How does optional chaining (?.) work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Optional chaining allows accessing nested object properties without errors if they are undefined or null.",
    example: true,
    codeSnippet: `
      let user = { profile: { name: 'Alice' } };
      console.log(user.profile?.name); // Output: 'Alice'
      console.log(user.account?.balance); // Output: undefined
    `,
  },
  {
    id: 110,
    question: "What are tagged templates in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Tagged templates allow customizing template literals by using a function to process their content.",
    example: true,
    codeSnippet: `
      function tag(strings, name) {
        return 'Hello, name';
      }
      console.log(tag'Hi ${"Alice"}'); // Output: 'Hello, Alice!'
    `,
  },
  {
    id: 111,
    question: "What is the difference between the DOM and BOM?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "The DOM (Document Object Model) represents the structure of an HTML document, allowing JavaScript to interact with it. The BOM (Browser Object Model) represents browser-specific objects like window, navigator, and history.",
    example: false,
    codeSnippet: `
      console.log(window.innerWidth); // BOM example
      document.getElementById('myElement'); // DOM example
    `,
  },
  {
    id: 112,
    question:
      "How do you select elements in JavaScript (getElementById, querySelector, etc.)?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "JavaScript provides various methods to select elements: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().",
    example: true,
    codeSnippet: `
      let element = document.getElementById('myId');
      let elements = document.querySelectorAll('.myClass');
    `,
  },
  {
    id: 113,
    question: "How do you create, remove, and update DOM elements dynamically?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "You can use document.createElement() to create elements, appendChild() or insertBefore() to add them, removeChild() to remove them, and innerHTML or textContent to update content.",
    example: true,
    codeSnippet: `
      let div = document.createElement('div');
      div.textContent = 'Hello World';
      document.body.appendChild(div);
      document.body.removeChild(div);
    `,
  },
  {
    id: 114,
    question: "What is event delegation?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Event delegation is a technique where a parent element handles events for its children using event bubbling.",
    example: true,
    codeSnippet: `
      document.getElementById('parent').addEventListener('click', function(event) {
        if (event.target.matches('.child')) {
          console.log('Child clicked!');
        }
      });
    `,
  },
  {
    id: 115,
    question: "How does event bubbling and capturing work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Event bubbling occurs when an event starts from the target element and propagates up the DOM. Event capturing goes from the top down before reaching the target.",
    example: true,
    codeSnippet: `
      document.getElementById('child').addEventListener('click', function() {
        console.log('Child clicked');
      });
      document.getElementById('parent').addEventListener('click', function() {
        console.log('Parent clicked');
      });
    `,
  },
  {
    id: 116,
    question: "What is the difference between addEventListener and onclick?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "addEventListener() allows multiple event handlers on an element, while onclick overrides any previous handler assigned to the onclick property.",
    example: true,
    codeSnippet: `
      document.getElementById('myButton').addEventListener('click', function() {
        console.log('Clicked!');
      });
    `,
  },
  {
    id: 117,
    question: "How do you prevent the default behavior of an event?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "Use event.preventDefault() to stop the default action of an event, such as preventing a form submission or stopping a link from navigating.",
    example: true,
    codeSnippet: `
      document.getElementById('myLink').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Link click prevented');
      });
    `,
  },
  {
    id: 118,
    question: "How can you stop event propagation?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Use event.stopPropagation() to prevent an event from bubbling up or capturing down the DOM tree.",
    example: true,
    codeSnippet: `
      document.getElementById('child').addEventListener('click', function(event) {
        event.stopPropagation();
        console.log('Child clicked');
      });
    `,
  },
  {
    id: 119,
    question: "What are custom events in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Custom events allow you to define and dispatch events programmatically using the CustomEvent constructor.",
    example: true,
    codeSnippet: `
      let event = new CustomEvent('myEvent', { detail: { message: 'Hello' } });
      document.dispatchEvent(event);
      document.addEventListener('myEvent', function(e) {
        console.log(e.detail.message);
      });
    `,
  },
  {
    id: 120,
    question:
      "What is the difference between innerHTML, textContent, and innerText?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "innerHTML returns the HTML content, textContent returns all text including hidden text, and innerText returns visible text.",
    example: true,
    codeSnippet: `
      let element = document.getElementById('myDiv');
      console.log(element.innerHTML);
      console.log(element.textContent);
      console.log(element.innerText);
    `,
  },
  {
    id: 9121,
    question:
      "What are the different ways to handle asynchronous operations in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "JavaScript handles asynchronous operations using Callbacks, Promises, and Async/Await. Callbacks are functions passed as arguments to other functions. Promises represent a value that might be available now or in the future. Async/Await makes asynchronous code look synchronous, improving readability.",
    example: true,
    codeSnippet: `
      function fetchData(callback) {
        setTimeout(() => callback('Data received'), 1000);
      }
      fetchData(console.log);
    `,
  },

  {
    id: 9123,
    question: "What is object-oriented programming in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Object-oriented programming (OOP) in JavaScript is a paradigm that uses objects to model real-world entities. It helps in organizing code and reusing components efficiently.",
    example: true,
    codeSnippet: `
      class Car {
        constructor(brand) {
          this.brand = brand;
        }
        drive() {
          console.log(this.brand + ' is driving');
        }
      }
      const myCar = new Car('Toyota');
      myCar.drive(); // Output: Toyota is driving
    `,
  },
  {
    id: 9124,
    question: "What are the four principles of OOP?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The four principles of OOP are :      1. Encapsulation - Hiding internal details and exposing only necessary functionality. 2. Abstraction - Simplifying complex logic by exposing only the required parts.3. Inheritance - Reusing code by creating new classes from existing ones.  4. Polymorphism - Allowing different implementations of the same method.",
    example: false,
    codeSnippet: `
      class Animal {
        speak() {
          console.log('Animal speaking');
        }
      }
      class Dog extends Animal {
        speak() {
          console.log('Dog barks');
        }
      }
      const myPet = new Dog();
      myPet.speak(); // Output: Dog barks
    `,
  },

  {
    id: 124,
    question: "What are promise chaining and error handling in promises?",
    answer:
      "<p><strong>Promise Chaining</strong> refers to the ability to chain multiple <code>then()</code> methods together, where each <code>then()</code> returns a new promise. This allows for executing a series of asynchronous operations one after another, in sequence, while ensuring that each operation waits for the previous one to complete. When you return a promise from a <code>then()</code> handler, the next handler waits for it to be resolved or rejected.</p>" +
      "<p><strong>Error Handling in Promises</strong> allows you to catch any errors that occur during the execution of a promise chain. This is typically done with the <code>catch()</code> method. If an error occurs in any <code>then()</code> method, it will propagate through the chain until it reaches a <code>catch()</code> method that handles the error.</p>" +
      "<p><strong>How Promise Chaining Works:</strong></p>" +
      "<p>Each <code>then()</code> method returns a new promise, which allows for subsequent operations to be chained. The result from one <code>then()</code> can be passed to the next one in the chain. If a promise in the chain is rejected, it will skip all remaining <code>then()</code> handlers and jump to the nearest <code>catch()</code> for error handling.</p>" +
      "<p><strong>Example of Promise Chaining and Error Handling:</strong></p>" +
      "<pre><code>const promise1 = new Promise((resolve, reject) => {\n" +
      "  let success = true;\n" +
      "  if (success) {\n" +
      "    resolve('Step 1 complete');\n" +
      "  } else {\n" +
      "    reject('Step 1 failed');\n" +
      "  }\n" +
      "});\n\n" +
      "promise1\n" +
      "  .then(result => {\n" +
      "    console.log(result); // 'Step 1 complete'\n" +
      "    return 'Step 2 complete'; // Return value for next .then()\n" +
      "  })\n" +
      "  .then(result => {\n" +
      "    console.log(result); // 'Step 2 complete'\n" +
      "    return 'Step 3 complete';\n" +
      "  })\n" +
      "  .then(result => {\n" +
      "    console.log(result); // 'Step 3 complete'\n" +
      "  })\n" +
      "  .catch(error => {\n" +
      "    console.log(error); // Catch and handle errors here\n" +
      "  });\n" +
      "</code></pre>" +
      "<p>In this example:</p>" +
      "<ul>" +
      "<li>The promise starts by resolving or rejecting at Step 1.</li>" +
      "<li>If the promise resolves, the next <code>then()</code> handler gets executed, passing the result to the next handler in the chain.</li>" +
      "<li>If an error occurs (e.g., a rejected promise), the <code>catch()</code> method catches the error and handles it.</li>" +
      "</ul>" +
      "<p><strong>Handling Errors:</strong></p>" +
      "<p>Errors can be caught in two ways:</p>" +
      "<ul>" +
      "<li>At the end of the promise chain with a single <code>catch()</code> handler that will handle any errors that occur in any of the <code>then()</code> methods.</li>" +
      "<li>Inside individual <code>then()</code> handlers by returning a rejected promise or throwing an error.</li>" +
      "</ul>" +
      "<p>Promise chaining ensures that the operations are performed sequentially, and error handling makes sure that any issues in the process are managed appropriately.</p>",
    codeSnippet:
      "<pre><code>const promise1 = new Promise((resolve, reject) => {\n" +
      "  let success = true;\n" +
      "  if (success) {\n" +
      "    resolve('Step 1 complete');\n" +
      "  } else {\n" +
      "    reject('Step 1 failed');\n" +
      "  }\n" +
      "});\n\n" +
      "promise1\n" +
      "  .then(result => {\n" +
      "    console.log(result); // 'Step 1 complete'\n" +
      "    return 'Step 2 complete';\n" +
      "  })\n" +
      "  .then(result => {\n" +
      "    console.log(result); // 'Step 2 complete'\n" +
      "    return 'Step 3 complete';\n" +
      "  })\n" +
      "  .then(result => {\n" +
      "    console.log(result); // 'Step 3 complete'\n" +
      "  })\n" +
      "  .catch(error => {\n" +
      "    console.log(error); // Catch and handle errors here\n" +
      "  });\n" +
      "</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  }
  ,

  {
    id: 125,
    question: "How does Promise.all(), Promise.any(), Promise.race() work?",
    answer:
      "<p><strong>Promise.all()</strong> takes an array (or iterable) of promises and returns a single promise. This returned promise resolves when all promises in the array have resolved, or it rejects as soon as any of the promises in the array rejects. It resolves with an array of results in the same order as the promises were passed in, regardless of the order in which they resolve.</p>" +
      "<p><strong>Promise.any()</strong> also takes an array (or iterable) of promises, but it resolves as soon as any one of the promises resolves successfully. If all the promises are rejected, it will return an error. It only resolves with the first successful resolution, and if no promises resolve, it will reject.</p>" +
      "<p><strong>Promise.race()</strong> takes an array (or iterable) of promises and returns a single promise that resolves or rejects as soon as the first promise resolves or rejects. Essentially, it races the promises, and whichever one settles first determines the outcome.</p>" +
      "<p><strong>Example:</strong></p>" +
      "<pre><code>// Promise.all - All promises must resolve\n" +
      "const promiseAll = Promise.all([\n" +
      "  Promise.resolve('Success 1'),\n" +
      "  Promise.resolve('Success 2'),\n" +
      "  Promise.resolve('Success 3')\n" +
      "]).then(results => {\n" +
      "  console.log(results); // ['Success 1', 'Success 2', 'Success 3']\n" +
      "}).catch(error => {\n" +
      "  console.log(error);\n" +
      "});\n\n" +
      "// Promise.any - Resolves as soon as one promise resolves\n" +
      "const promiseAny = Promise.any([\n" +
      "  Promise.reject('Error 1'),\n" +
      "  Promise.resolve('Success 2'),\n" +
      "  Promise.reject('Error 3')\n" +
      "]).then(result => {\n" +
      "  console.log(result); // 'Success 2'\n" +
      "}).catch(error => {\n" +
      "  console.log(error);\n" +
      "});\n\n" +
      "// Promise.race - Resolves with the first settled promise\n" +
      "const promiseRace = Promise.race([\n" +
      "  new Promise(resolve => setTimeout(resolve, 100, 'First')), \n" +
      "  new Promise(resolve => setTimeout(resolve, 50, 'Second'))\n" +
      "]).then(result => {\n" +
      "  console.log(result); // 'Second'\n" +
      "}).catch(error => {\n" +
      "  console.log(error);\n" +
      "});\n" +
      "</code></pre>",
    codeSnippet:
      "<pre><code>// Promise.all - All promises must resolve\n" +
      "const promiseAll = Promise.all([\n" +
      "  Promise.resolve('Success 1'),\n" +
      "  Promise.resolve('Success 2'),\n" +
      "  Promise.resolve('Success 3')\n" +
      "]).then(results => {\n" +
      "  console.log(results); // ['Success 1', 'Success 2', 'Success 3']\n" +
      "}).catch(error => {\n" +
      "  console.log(error);\n" +
      "});\n\n" +
      "// Promise.any - Resolves as soon as one promise resolves\n" +
      "const promiseAny = Promise.any([\n" +
      "  Promise.reject('Error 1'),\n" +
      "  Promise.resolve('Success 2'),\n" +
      "  Promise.reject('Error 3')\n" +
      "]).then(result => {\n" +
      "  console.log(result); // 'Success 2'\n" +
      "}).catch(error => {\n" +
      "  console.log(error);\n" +
      "});\n\n" +
      "// Promise.race - Resolves with the first settled promise\n" +
      "const promiseRace = Promise.race([\n" +
      "  new Promise(resolve => setTimeout(resolve, 100, 'First')), \n" +
      "  new Promise(resolve => setTimeout(resolve, 50, 'Second'))\n" +
      "]).then(result => {\n" +
      "  console.log(result); // 'Second'\n" +
      "}).catch(error => {\n" +
      "  console.log(error);\n" +
      "});\n" +
      "</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  }
    ,
  {
    id: 126,
    question: "What is an async function?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "An async function is a function that always returns a promise. It allows using the 'await' keyword inside it to pause execution until a promise resolves.",
    example: true,
    codeSnippet: `
      async function fetchData() {
        let response = await fetch('https://api.example.com');
        let data = await response.json();
        console.log(data);
      }
      fetchData();
    `,
  },
 
  {
    id: 128,
    question: "How do you handle errors in async/await?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Errors in async/await can be handled using try-catch blocks to catch and manage promise rejections gracefully.",
    example: true,
    codeSnippet: `
      async function fetchData() {
        try {
          let response = await fetch('https://api.example.com');
          let data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      fetchData();
    `,
  },
  {
    id: 129,
    question: "What is the difference between microtasks and macrotasks?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Microtasks (e.g., Promises, MutationObserver) are executed before macrotasks (e.g., setTimeout, setInterval). They are processed right after the current execution context, ensuring faster execution.",
    example: true,
    codeSnippet: `
      console.log('Start');
      setTimeout(() => console.log('Macrotask'), 0);
      Promise.resolve().then(() => console.log('Microtask'));
      console.log('End');
      // Output: Start, End, Microtask, Macrotask
    `,
  },
  {
    id: 130,
    question: "How does the Fetch API work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "The Fetch API allows making HTTP requests in JavaScript. It returns a promise that resolves with the Response object.",
    example: true,
    codeSnippet: `
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    `,
  },
  {
    id: 201,
    question: "What is a constructor function?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "A constructor function is a special type of function used to create and initialize objects in JavaScript.",
    example: true,
    codeSnippet: `
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person('Alice', 25);
console.log(person1.name); // Output: Alice
`,
  },
  {
    id: 202,
    question: "What is a prototype in JavaScript?",
    answer:
      "<p>In JavaScript, a prototype is an object that is associated with every function and object by default. It allows you to share methods and properties between instances of objects. Each object has a prototype, and the prototype is also an object that can contain additional properties and methods that can be accessed by the object.</p>" +
      "<p>Every JavaScript function has a prototype property, which is used to add methods to objects created by that function. For instance, when you create a new object using a constructor function, the new object inherits properties and methods from the constructor's prototype object.</p>" +
      "<p><strong>Example:</strong></p>" +
      "<pre><code>function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function() {\n  console.log('Hello, ' + this.name);\n};\n\nconst person1 = new Person('Alice');\nperson1.greet(); // Hello, Alice</code></pre>" +
      "<p>In this example, the `greet` method is added to the prototype of the `Person` constructor function. Any object created using the `Person` constructor will have access to the `greet` method.</p>",
    codeSnippet:
      "<pre><code>function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function() {\n  console.log('Hello, ' + this.name);\n};\n\nconst person1 = new Person('Alice');\nperson1.greet(); // Hello, Alice</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  }
  ,
  {
    id: 203,
    question: "How does inheritance work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Inheritance in JavaScript allows an object to inherit properties and methods from another object via prototypes.",
    example: true,
    codeSnippet: `
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log('{this.name} makes a noise');
};
function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy makes a noise
`,
  },
  {
    id: 204,
    question: "What is mixin in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A mixin is a way to add reusable behavior to multiple classes without using inheritance.",
    example: true,
    codeSnippet: `
let mixin = {
  sayHello() {
    console.log('Hello!');
  }
};
class Person {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Person.prototype, mixin);
const person = new Person('Alice');
person.sayHello(); // Output: Hello!
`,
  },
  {
    id: 205,
    question: "Explain the Singleton pattern in JavaScript.",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "The Singleton pattern ensures that only one instance of an object exists.",
    example: true,
    codeSnippet: `
const Singleton = (function() {
  let instance;
  function createInstance() {
    return { message: 'I am the only instance' };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true
`,
  },
  {
    id: 210,
    question: "What is the Factory pattern in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The Factory pattern provides a way to create objects without specifying the exact class of the object that will be created.",
    example: true,
    codeSnippet: `
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log('Hello, my name is {this.name}');
    }
  };
}
const person = createPerson('Alice', 25);
person.greet(); // Output: Hello, my name is Alice
`,
  },
  {
    id: 211,
    question: "How does the Observer pattern work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The Observer pattern allows an object (subject) to maintain a list of dependents (observers) that get notified when its state changes.",
    example: true,
    codeSnippet: `
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
const subject = new Subject();
subject.subscribe(data => console.log('Received: {data}'));
subject.notify('Hello'); // Output: Received: Hello
`,
  },
  {
    id: 212,
    question: "What is the Module pattern in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "The Module pattern is used to create encapsulated and reusable code using closures.",
    example: true,
    codeSnippet: `
const Module = (function() {
  let privateVar = 'I am private';
  return {
    getPrivateVar: function() {
      return privateVar;
    }
  };
})();
console.log(Module.getPrivateVar()); // Output: I am private
`,
  },
  {
    id: 301,
    question: "How do you improve performance in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "To improve JavaScript performance, you can follow several best practices. Minimize DOM manipulations since excessive updates can slow down rendering. Use efficient looping methods like forEach or map instead of traditional for loops when possible. Leverage asynchronous programming with async/await or Promises to prevent blocking operations. Enable caching of data to reduce redundant computations and network requests. Utilize web workers for running heavy computations in the background without affecting the main thread.",
    example: true,
    codeSnippet: `
// Example: Using requestAnimationFrame instead of setTimeout for animations
function animate() {
  requestAnimationFrame(animate);
  console.log('Optimized animation');
}
animate();
`,
  },
  {
    id: 302,
    question: "What is lazy loading, and how is it implemented?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Lazy loading is a performance optimization technique where resources such as images, videos, or components are loaded only when they are needed. This reduces initial page load time and improves user experience. It is commonly implemented using the Intersection Observer API, which detects when an element enters the viewport and then loads it dynamically.",
    example: true,
    codeSnippet: `
// Example: Lazy loading images using the Intersection Observer API
const images = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
images.forEach(img => observer.observe(img));
`,
  },
  {
    id: 303,
    question: "How do you optimize DOM manipulation?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Optimizing DOM manipulation involves reducing the number of reflows and repaints. This can be done by batching multiple updates together, using document fragments to build large DOM structures before appending them, and minimizing unnecessary style recalculations. Also, using CSS classes instead of modifying inline styles can help improve performance.",
    example: true,
    codeSnippet: `
// Example: Using a document fragment to minimize reflows
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  let div = document.createElement('div');
  div.textContent = 'Item $ {i}';
  fragment.appendChild(div);
}
document.body.appendChild(fragment);
`,
  },
  {
    id: 304,
    question: "How does browser reflow and repaint work?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Reflow is the process where the browser recalculates the positions and sizes of elements when changes occur in the layout. This is computationally expensive. Repaint happens when visual aspects like colors or shadows are updated without affecting layout. Reducing reflows by modifying styles in batches and avoiding layout thrashing can help optimize performance.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 305,
    question: "What is tree shaking in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Tree shaking is a dead code elimination technique used to remove unused JavaScript code from the final bundle. It relies on ES6 module syntax (import/export) and is commonly used in build tools like Webpack and Rollup to reduce file size and improve loading speed.",
    example: true,
    codeSnippet: `
// Example: ES6 module tree shaking
// Import only necessary functions
import { usefulFunction } from './module';
usefulFunction();
`,
  },
  {
    id: 306,
    question: "How does code splitting work in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Code splitting is a technique where JavaScript code is split into smaller chunks that load only when needed. This helps improve performance by reducing the initial load time of a web page. It is commonly implemented using dynamic imports or Webpack’s built-in code-splitting feature.",
    example: true,
    codeSnippet: `
// Example: Dynamic imports in Webpack
import('./module').then(module => {
  module.default();
});
`,
  },
  {
    id: 307,
    question: "How can you optimize memory usage in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "To optimize memory usage, avoid memory leaks by removing event listeners when they are no longer needed, use weak references when applicable, and manage large objects efficiently by clearing unnecessary references. Additionally, using object pooling can help reduce garbage collection overhead.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 308,
    question:
      "What is the difference between imperative and declarative programming?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Imperative programming focuses on describing how a task should be performed step by step, while declarative programming describes what should be done without explicitly defining the control flow. JavaScript supports both paradigms, making it flexible for various use cases.",
    example: true,
    codeSnippet: `
// Imperative approach
let arr = [1, 2, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}
// Declarative approach
let newArr2 = arr.map(num => num * 2);
`,
  },
  {
    id: 309,
    question: "What are some common memory leaks in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "Memory leaks in JavaScript can occur due to unused references, improperly handled event listeners, accidental global variables, and closures retaining unnecessary data. Keeping track of references and using weak collections can help mitigate these issues.",
    example: false,
    codeSnippet: "",
  },
  {
    id: 310,
    question: "How do you debug JavaScript code efficiently?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "Efficient debugging involves using console.log to track values, setting breakpoints in browser DevTools, using the debugger statement, and leveraging profiling tools to detect performance issues. Additionally, error handling with try-catch can help catch unexpected issues.",
    example: true,
    codeSnippet: `
// Example: Using breakpoints in DevTools
debugger;
console.log('Debugging JavaScript');
`,
  },
  {
    id: 311,
    question: "What is Async/Await?",
    answer:
   ` <b>sync keyword:</b> Used to declare a function as asynchronous.
This function automatically returns a Promise.
<p><b> ⁠await keyword:</b> Pauses the execution of an async function until the Promise is resolved or rejected. It makes asynchronous code look and behave like synchronous code.`,
    codeSnippet:
      "<pre><code>async function fetchData() {\n" +
      "  try {\n" +
      "    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n" +
      "    let data = await response.json();\n" +
      "    console.log(data);\n" +
      "  } catch (error) {\n" +
      "    console.error('Error:', error);\n" +
      "  }\n" +
      "}\n" +
      "fetchData();</code></pre>",
    example: true,
    technology: "JavaScript",
    difficulty: "Medium"
  },

    {
      id: 312,
      topic: "Axios vs Fetch",
      technology: "JavaScript",
      difficulty: "Medium",
      question: "What are the differences between Axios and Fetch?",
      answer: `
        <p>Both <strong>Axios</strong> and <strong>Fetch</strong> are used to make HTTP requests in JavaScript, but they have key differences:</p>
        <table border="1">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Axios</th>
              <th>Fetch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ease of Use</td>
              <td>Automatically transforms JSON responses</td>
              <td>Requires response.json() to parse JSON</td>
            </tr>
            <tr>
              <td>Error Handling</td>
              <td>Throws errors for network failures and HTTP errors (like 404, 500)</td>
              <td>Only rejects on network failures (does not reject on 404, 500)</td>
            </tr>
            <tr>
              <td>Request Cancellation</td>
              <td>Supports request cancellation using AbortController or CancelToken</td>
              <td>Supports AbortController but requires manual setup</td>
            </tr>
            <tr>
              <td>Timeout Handling</td>
              <td>Supports request timeouts</td>
              <td>No built-in timeout handling (needs manual setup)</td>
            </tr>
            <tr>
              <td>Request/Response Interceptors</td>
              <td>Provides built-in request and response interceptors</td>
              <td>No built-in support for interceptors</td>
            </tr>
            <tr>
              <td>Default Headers</td>
              <td>Automatically sets Content-Type: application/json for POST requests</td>
              <td>Requires manual header setting</td>
            </tr>
            <tr>
              <td>Automatic Transformations</td>
              <td>Automatically transforms JSON responses</td>
              <td>Requires manual transformation using .json()</td>
            </tr>
          </tbody>
        </table>
      `,
      example: true,
      codeSnippet: `
        // Axios Example
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
  
        // Fetch Example
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      `
    },
    {
      id: 313,
      question: 'How can you create, read, and delete custom cookies using JavaScript?',
      technology: 'JavaScript',
      difficulty: 'Medium',
      answer: `
        <div>
          <p>You can create, read, and delete cookies using pure JavaScript without any external library.</p>
          <p>Here are the main functions to work with cookies:</p>
          <ul>
            <li><strong>setCookie</strong>: Creates a cookie with a specified expiration date.</li>
            <li><strong>getCookie</strong>: Retrieves the value of a specified cookie.</li>
            <li><strong>deleteCookie</strong>: Deletes a specified cookie.</li>
            <li><strong>cookieExists</strong>: Checks if a cookie exists.</li>
          </ul>
        </div>
      `,
      example: true,
      codeSnippet: `
        // Set a Cookie
        function setCookie(name, value, days) {
          let expires = "";
          if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
        }
        
        // Get a Cookie
        function getCookie(name) {
          const cookies = document.cookie.split("; ");
          for (let cookie of cookies) {
            let [key, value] = cookie.split("=");
            if (key === name) {
              return decodeURIComponent(value);
            }
          }
          return null;
        }
        
        // Delete a Cookie
        function deleteCookie(name) {
          document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        
        // Check if a Cookie Exists
        function cookieExists(name) {
          return getCookie(name) !== null;
        }
        
        // Example Usage
        setCookie("user", "John", 7);
        console.log(getCookie("user")); // Output: "John"
        console.log(cookieExists("user")); // true
        deleteCookie("user");

/*

path=/ in Cookies (Meaning & Usage)
When setting a cookie in JavaScript, path=/ means that the 
cookie is available across the entire website (all pages and routes).

Example: Setting a Cookie with path=/

document.cookie = "user=John; path=/";
✅ This cookie will be accessible on all pages of the website, e.g.:

https://example.com/
https://example.com/dashboard
https://example.com/profile
Without path=/
If you don't specify path=, the cookie is only available on the current page's path.
For example:


document.cookie = "user=John; path=/dashboard";
✅ Now, the cookie is only accessible on /dashboard and its subpaths:

https://example.com/dashboard
https://example.com/dashboard/settings
❌ Not accessible on https://example.com/home
Why Use path=/?
Ensures the cookie is available site-wide.
Used for authentication tokens and user preferences.
Prevents duplicate cookies on different routes.

*/


       /*
       Understanding encodeURIComponent and toUTCString in JavaScript
1️⃣ encodeURIComponent()
encodeURIComponent() is used to encode special characters in a URL or 
query parameter to ensure they are transmitted correctly.


const data = "Hello World!";
const encodedData = encodeURIComponent(data);
console.log(encodedData);
Output:

Hello%20World%21
Spaces ( ) become %20
! becomes %21
Prevents issues when passing data in URLs
🔹 Use Case: Encoding values for query parameters.


const name = "John Doe";
const url = ' https://example.com?name=$ {encodeURIComponent(name)}';
console.log(url);
Output:

https://example.com?name=John%20Doe
2️⃣ toUTCString()
toUTCString() converts a date object into a UTC (Coordinated Universal Time) string.


const date = new Date();
console.log(date.toUTCString());
Output:

Fri, 28 Feb 2025 12:00:00 GMT
🔹 Use Case: Often used when setting cookies with expiration dates.


const expires = new Date();
expires.setDate(expires.getDate() + 7); // Set expiry to 7 days later
document.cookie = ' user=John; expires=$ {expires.toUTCString()}; path=/ ';
       */ 
      `
    }
    
    
  
];
