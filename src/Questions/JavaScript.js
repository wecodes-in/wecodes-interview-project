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
    question: "What is the difference between let, const, and var?",
    technology: "JavaScript",
    difficulty: "Easy",
    answer:
      "var is function-scoped and allows for redeclaration, while let and const are block-scoped. const is used for variables whose value should not change, whereas let is for variables that may change.",
    example: true,
    codeSnippet: `var x = 1;
let y = 2;
const z = 3; // z cannot be reassigned

if (true) {
  var x = 10; // Redeclared in function scope
  let y = 20; // Block-scoped, new variable
  const z = 30; // Block-scoped, new constant
}

console.log(x); // Output: 10
console.log(y); // Output: 2
console.log(z); // Output: 3`,
  },
  {
    id: 3,
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
    question: "What is a promise in JavaScript?",
    technology: "JavaScript",
    difficulty: "Medium",
    answer:
      "A promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.",
    example: true,
    codeSnippet: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise fulfilled');
  }, 1000);
});

myPromise.then(result => {
  console.log(result); // Output: Promise fulfilled
}).catch(error => {
  console.log(error);
});`,
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
    id: 13,
    question: "Explain the event loop in JavaScript.",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "The event loop is responsible for managing asynchronous callbacks in JavaScript. It continuously checks the call stack to see if there are any functions that need to be run. If the stack is empty, it checks the message queue for pending events and pushes them onto the stack for execution.",
    example: true,
    codeSnippet: `console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

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
    id: 15,
    question: "What is closure in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer:
      "A closure is a function that remembers the variables from its outer scope even when the function is executed outside that scope. It is created every time a function is created in JavaScript.",
    example: true,
    codeSnippet: `function outer() {
  const outerVar = 'I am outside!';
  
  function inner() {
    console.log(outerVar); // Can access outerVar
  }
  
  return inner;
}

const innerFunc = outer();
innerFunc(); // Output: I am outside!`,
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
      "The spread operator creates a shallow copy, meaning nested objects are still passed by reference.",
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
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      The event loop is a mechanism that handles asynchronous events in JavaScript. It continuously checks the call stack and the callback queue. When the call stack is empty, it pushes the first event from the callback queue to the call stack for execution. This allows JavaScript to be non-blocking and single-threaded while handling asynchronous operations.
    `,
    example: false,
    codeSnippet: `
      console.log('Start');

      setTimeout(() => {
        console.log('SetTimeout callback');
      }, 0);

      console.log('End');

      // Output:
      // Start
      // End
      // SetTimeout callback
    `,
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
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. A promise can be in one of three states:
      - **Pending**: The initial state, neither fulfilled nor rejected.
      - **Fulfilled**: The operation completed successfully.
      - **Rejected**: The operation failed.
      Promises allow you to chain asynchronous tasks and handle them more elegantly using \`then\`, \`catch\`, and \`finally\`.
    `,
    example: true,
    codeSnippet: `
      const promise = new Promise((resolve, reject) => {
        const success = true;
        if (success) {
          resolve('Promise fulfilled');
        } else {
          reject('Promise rejected');
        }
      });

      promise
        .then(result => console.log(result))
        .catch(error => console.error(error));

      // Output: Promise fulfilled
    `,
  },
  {
    id: 30,
    question:
      "What is async/await, and how does it simplify working with promises?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      \`async/await\` is a syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code. \`async\` functions return a promise, and \`await\` pauses the execution of the function until the promise resolves or rejects. This simplifies the chaining and handling of promises.
    `,
    example: true,
    codeSnippet: `
      function getData() {
        return new Promise((resolve) => {
          setTimeout(() => resolve('Data received'), 1000);
        });
      }

      async function fetchData() {
        const data = await getData();
        console.log(data);
      }

      fetchData();

      // Output (after 1 second): Data received
    `,
  },
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
    id: 40,
    question:
      "What is the difference between a shallow copy and a deep copy of an array in JavaScript?",
    technology: "JavaScript",
    difficulty: "Advanced",
    answer: `
      - **Shallow Copy**: A shallow copy creates a new array with copies of the original array's elements. However, if the array contains references to objects, the references are copied, not the objects themselves.
      - **Deep Copy**: A deep copy creates a completely independent array, including copies of any nested objects or arrays. Modifying the deep copy does not affect the original array.
    `,
    example: true,
    codeSnippet: `
      const arr = [1, { a: 2 }, 3];

      const shallowCopy = [...arr];
      shallowCopy[1].a = 10;
      console.log(arr[1].a); // Output: 10 (shallow copy affects original)

      const deepCopy = JSON.parse(JSON.stringify(arr));
      deepCopy[1].a = 20;
      console.log(arr[1].a); // Output: 10 (deep copy does not affect original)
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
    "id": 47,
    "question": "What are the different data types in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "JavaScript has several data types, categorized into primitive and reference types. Primitive types include String, Number, Boolean, Null, Undefined, BigInt, and Symbol. Reference types include Objects, Arrays, and Functions.",
    "example": true,
    "codeSnippet": "const name = 'John'; // String\nconst age = 25; // Number\nconst isStudent = false; // Boolean\nconst value = null; // Null\nconst data = undefined; // Undefined\nconst id = Symbol('id'); // Symbol\nconst bigNumber = 12345678901234567890n; // BigInt"
  },
  {
    "id": 48,
    "question": "Explain var, let, and const with examples.",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "In JavaScript, `var`, `let`, and `const` are used to declare variables. `var` has function scope and can be redeclared. `let` has block scope and cannot be redeclared. `const` is also block-scoped but cannot be reassigned.",
    "example": true,
    "codeSnippet": "var x = 10; // Can be redeclared\nlet y = 20; // Block scoped, cannot be redeclared\nconst z = 30; // Cannot be reassigned"
  },
  {
    "id": 49,
    "question": "What is hoisting in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before code execution. Variables declared with `var` are hoisted but initialized as `undefined`, whereas `let` and `const` are hoisted but not initialized.",
    "example": true,
    "codeSnippet": "console.log(a); // Undefined\nvar a = 5;\n\nconsole.log(b); // ReferenceError\nlet b = 10;"
  },
  {
    "id": 50,
    "question": "What is the difference between == and ===?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "`==` (loose equality) compares values but allows type conversion, whereas `===` (strict equality) compares both value and type without conversion.",
    "example": true,
    "codeSnippet": "console.log(5 == '5'); // true (type conversion)\nconsole.log(5 === '5'); // false (different types)"
  },
  {
    "id": 51,
    "question": "Explain the difference between null and undefined.",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "`null` represents an intentional absence of value, while `undefined` means a variable has been declared but has not been assigned a value.",
    "example": true,
    "codeSnippet": "let x;\nconsole.log(x); // undefined\n\nlet y = null;\nconsole.log(y); // null"
  },
  {
    "id": 52,
    "question": "What are template literals in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "Template literals are strings enclosed by backticks (``) that allow embedding expressions using `${}` and support multi-line strings.",
    "example": true,
    "codeSnippet": "const name = 'Alice';\nconsole.log(`Hello, ${name}!`); // Output: Hello, Alice!"
  },
  {
    "id": 53,
    "question": "What is the difference between function declaration and function expression?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A function declaration defines a function with the `function` keyword, while a function expression assigns a function to a variable. Function declarations are hoisted, whereas function expressions are not.",
    "example": true,
    "codeSnippet": "// Function declaration\nfunction greet() { return 'Hello'; }\n\n// Function expression\nconst greet = function() { return 'Hello'; };"
  },{
    "id": 54,
    "question": "What is an Immediately Invoked Function Expression (IIFE)?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after its definition. It helps in avoiding global scope pollution.",
    "example": true,
    "codeSnippet": "(function() { console.log('IIFE executed'); })();"
  },
  {
    "id": 55,
    "question": "How do you create an object in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "You can create an object in JavaScript using object literals, the Object constructor, or Object.create().",
    "example": true,
    "codeSnippet": "const obj = { name: 'John', age: 30 };"
  },
  {
    "id": 56,
    "question": "What is the difference between primitive and reference types?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Primitive types (String, Number, Boolean, Null, Undefined, BigInt, Symbol) store values directly, whereas reference types (Objects, Arrays, Functions) store references to memory locations.",
    "example": true,
    "codeSnippet": "let a = 10; // Primitive\nlet b = a;\nb = 20;\nconsole.log(a); // 10 (unchanged)\n\nlet obj1 = { name: 'Alice' }; // Reference\nlet obj2 = obj1;\nobj2.name = 'Bob';\nconsole.log(obj1.name); // 'Bob' (changed)"
  },
  {
    "id": 57,
    "question": "What is the difference between map, filter, and forEach?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "map() creates a new array by applying a function to each element. filter() creates a new array with elements that satisfy a condition. forEach() executes a function on each element but does not return a new array.",
    "example": true,
    "codeSnippet": "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\nnumbers.forEach(n => console.log(n));"
  },
  {
    "id": 58,
    "question": "Explain how the reduce() method works with an example.",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "reduce() applies a function to an accumulator and each element in an array to reduce it to a single value.",
    "example": true,
    "codeSnippet": "const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10"
  },
  {
    "id": 59,
    "question": "What are higher-order functions in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Higher-order functions are functions that take other functions as arguments or return functions.",
    "example": true,
    "codeSnippet": "function multiplier(factor) { return num => num * factor; }\nconst double = multiplier(2);\nconsole.log(double(5)); // 10"
  },
  {
    "id": 60,
    "question": "What is the difference between slice() and splice()?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "slice() returns a new array without modifying the original array, whereas splice() modifies the original array by adding/removing elements.",
    "example": true,
    "codeSnippet": "const arr = [1, 2, 3, 4];\nconst sliced = arr.slice(1, 3); // [2, 3]\narr.splice(1, 2); // arr = [1, 4]"
  },
  {
    "id": 61,
    "question": "What is the difference between push(), pop(), shift(), and unshift()?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "push() adds an element to the end, pop() removes from the end, shift() removes from the start, and unshift() adds to the start.",
    "example": true,
    "codeSnippet": "const arr = [1, 2, 3];\narr.push(4); // [1, 2, 3, 4]\narr.pop(); // [1, 2, 3]\narr.shift(); // [2, 3]\narr.unshift(0); // [0, 2, 3]"
  },
  {
    "id": 62,
    "question": "How does the typeof operator work?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "The typeof operator returns the type of a given variable.",
    "example": true,
    "codeSnippet": "console.log(typeof 42); // 'number'\nconsole.log(typeof 'Hello'); // 'string'\nconsole.log(typeof {}); // 'object'"
  },
  {
    "id": 63,
    "question": "Explain the difference between synchronous and asynchronous JavaScript.",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Synchronous JavaScript executes code sequentially, blocking further execution until the current task is completed. Asynchronous JavaScript allows tasks to run in the background, enabling non-blocking operations using callbacks, promises, or async/await.",
    "example": true,
    "codeSnippet": "console.log('Start') setTimeout(() => console.log('Async Task'), 1000); console.log('End'); "
  },
  {
    "id": 64,
    "question": "What are truthy and falsy values in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "Truthy values evaluate to true in a Boolean context, while falsy values evaluate to false. Falsy values include false, 0, '', null, undefined, and NaN. All other values are truthy.",
    "example": true,
    "codeSnippet": "console.log(Boolean(0)); // false console.log(Boolean('Hello')); // true"
  },
  {
    "id": 65,
    "question": "How does short-circuit evaluation work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Short-circuit evaluation occurs when logical operators (&& and ||) stop evaluating as soon as the result is determined. The && operator returns the first falsy value, while || returns the first truthy value.",
    "example": true,
    "codeSnippet": "console.log(false && 'Hello'); // false console.log(true || 'World'); // true"
  },
  {
    "id": 66,
    "question": "What is the difference between setTimeout() and setInterval()?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "setTimeout() executes a function once after a delay, whereas setInterval() repeatedly executes a function at specified intervals until cleared.",
    "example": true,
    "codeSnippet": "setTimeout(() => console.log('Executed once'), 1000); setInterval(() => console.log('Executed repeatedly'), 1000);"
  },
  {
    "id": 67,
    "question": "What is the event loop in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "The event loop is a mechanism in JavaScript that handles asynchronous operations by continuously checking the call stack and the callback queue, ensuring non-blocking execution.",
    "example": true,
    "codeSnippet": "console.log('Start');\nsetTimeout(() => console.log('Callback'), 0);\nconsole.log('End');"
  },
  {
    "id": 68,
    "question": "What is the difference between deep copy and shallow copy?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A shallow copy copies only the reference to objects, while a deep copy creates a completely independent clone of the object, preserving its structure.",
    "example": true,
    "codeSnippet": "const obj = { a: 1, b: { c: 2 } };\nconst shallowCopy = { ...obj };\nconst deepCopy = JSON.parse(JSON.stringify(obj));"
  },
  {
    "id": 69,
    "question": "What are closures in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "A closure is a function that remembers the scope in which it was created, allowing it to access variables from its outer function even after that function has executed.",
    "example": true,
    "codeSnippet": "function outer() {\n  let count = 0;\n  return function inner() { count++; console.log(count); };\n}\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2"
  },
  {
    "id": 70,
    "question": "Explain the this keyword in different scenarios.",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The this keyword refers to the execution context of a function. In a method, it refers to the calling object; in a regular function, it refers to the global object (or undefined in strict mode).",
    "example": true,
    "codeSnippet": "const obj = { name: 'Alice', greet() { console.log(this.name); } };\nobj.greet(); // 'Alice'"
  },
  {
    "id": 71,
    "question": "What are arrow functions, and how do they differ from regular functions?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Arrow functions provide a concise syntax and do not have their own this value. Instead, they inherit this from the surrounding lexical context.",
    "example": true,
    "codeSnippet": "const obj = {\n  name: 'Alice',\n  greet: () => console.log(this.name) // 'this' refers to the outer scope, not obj\n};\nobj.greet();"
  },
  {
    "id": 72,
    "question": "What is function currying in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Function currying is a technique in which a function is transformed into a sequence of functions, each taking a single argument, allowing partial application of arguments.",
    "example": true,
    "codeSnippet": "const add = a => b => a + b;\nconsole.log(add(2)(3)); // 5"
  },
  {
    "id": 73,
    "question": "Explain call, apply, and bind methods.",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "call(), apply(), and bind() are methods used to set the this context in JavaScript functions. call() invokes the function with arguments passed individually, apply() takes arguments as an array, and bind() returns a new function with the set context.",
    "example": true,
    "codeSnippet": "function greet(greeting) { console.log(greeting + ', ' + this.name); }\nconst person = { name: 'Alice' };\ngreet.call(person, 'Hello'); // 'Hello, Alice'\ngreet.apply(person, ['Hi']); // 'Hi, Alice'\nconst boundGreet = greet.bind(person, 'Hey');\nboundGreet(); // 'Hey, Alice'"
  },
  {
    "id": 74,
    "question": "What is memoization in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
    "example": true,
    "codeSnippet": "function memoize(fn) {\n  let cache = {};\n  return function(...args) {\n    let key = JSON.stringify(args);\n    if (!cache[key]) {\n      cache[key] = fn(...args);\n    }\n    return cache[key];\n  };\n}\nconst factorial = memoize(n => (n <= 1 ? 1 : n * factorial(n - 1)));\nconsole.log(factorial(5)); // 120"
  },
  {
    "id": 75,
    "question": "How does debouncing and throttling work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Debouncing and throttling are techniques used to control the frequency of function execution. Debouncing ensures a function is executed only after a delay, while throttling ensures a function is executed at most once in a specified interval.",
    "example": true,
    "codeSnippet": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\nfunction throttle(fn, interval) {\n  let lastTime = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastTime >= interval) {\n      lastTime = now;\n      fn(...args);\n    }\n  };\n}"  
  },
  {
    "id": 76,
    "question": "What is the difference between localStorage, sessionStorage, and cookies?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "localStorage and sessionStorage store data in the browser, but localStorage persists until manually cleared, while sessionStorage is cleared when the session ends. Cookies store small amounts of data with an expiration time and can be sent with HTTP requests.",
    "example": true,
    "codeSnippet": "localStorage.setItem('key', 'value');\nsessionStorage.setItem('key', 'value');\ndocument.cookie = 'key=value; expires=Fri, 31 Dec 2025 23:59:59 GMT';"
  },
  {
    "id": 77,
    "question": "Explain the difference between prototypal and classical inheritance.",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Prototypal inheritance allows objects to inherit directly from other objects, while classical inheritance uses classes to create instances and establish hierarchies.",
    "example": true,
    "codeSnippet": `const parent = { greet() { console.log('Hello'); } };
const child = Object.create(parent);
child.greet(); // 'Hello'"`
  },
  {
    "id": 78,
    "question": "What is the difference between .call(), .apply(), and .bind()?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "call() and apply() invoke functions immediately with a specified 'this' value, but call() accepts arguments individually, while apply() takes them as an array. bind() returns a new function with the specified 'this' context, which can be called later.",
    "example": true,
    "codeSnippet": `function greet(greeting) { console.log(greeting + ', ' + this.name); }
const person = { name: 'Alice' };
greet.call(person, 'Hello'); // 'Hello, Alice'
greet.apply(person, ['Hi']); // 'Hi, Alice'
const boundGreet = greet.bind(person, 'Hey');
boundGreet(); // 'Hey, Alice'"`
  },
  {
    "id": 79,
    "question": "What is an ES6 class in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "ES6 classes provide a more structured way to create objects and manage inheritance in JavaScript, offering syntactic sugar over prototype-based inheritance.",
    "example": true,
    "codeSnippet":`class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, ' + this.name);
  }
}
const alice = new Person('Alice');
alice.greet(); // 'Hello, Alice'"`
  },
  {
    "id": 80,
    "question": "Explain the spread and rest operators in JavaScript.",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The spread operator (...) expands an iterable into individual elements, while the rest operator (...) gathers multiple elements into an array.",
    "example": true,
    "codeSnippet": `const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread operator
console.log(newArr); // [1, 2, 3, 4, 5]
function sum(...numbers) { // Rest operator
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6`
  },
  {
    "id": 81,
    "question": "What is destructuring in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Destructuring allows extracting values from arrays or properties from objects into distinct variables in a concise way.",
    "example": true,
    "codeSnippet": `const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age); // 'Alice', 25
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1, 2"`
  },
  {
    "id": 82,
    "question": "How do promises work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Promises represent asynchronous operations and can be in one of three states: pending, fulfilled, or rejected. They provide .then() and .catch() methods for handling success and failure.",
    "example": true,
    "codeSnippet": `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});
myPromise.then(result => console.log(result)); // 'Success!' after 1 second"`
  },
  {
    "id": 83,
    "question": "What are async and await in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "async and await are syntax features that simplify handling asynchronous code, making it look more like synchronous code.",
    "example": true,
    "codeSnippet": `async function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('Data'), 1000));
}
async function getData() {
  const data = await fetchData();
  console.log(data); // 'Data' after 1 second
}
getData();"`
  },
  {
    "id": 84,
    "question": "What is the purpose of the Symbol type in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The Symbol type is a unique and immutable primitive used as object keys to prevent naming conflicts.",
    "example": true,
    "codeSnippet": `const uniqueKey = Symbol('key');
const obj = { [uniqueKey]: 'value' };
console.log(obj[uniqueKey]); // 'value'"`
  },
  {
    "id": 85,
    "question": "How does the optional chaining (?.) operator work?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Optional chaining allows safe access to deeply nested object properties without throwing an error if a property is undefined.",
    "example": true,
    "codeSnippet": `"const user = { profile: { name: 'Alice' } };
console.log(user?.profile?.name); // 'Alice'
console.log(user?.address?.city); // undefined"`
  },
  {
    "id": 86,
    "question": "What is Object.freeze() and Object.seal()?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Object.freeze() makes an object immutable, preventing changes to properties. Object.seal() allows modifications to existing properties but prevents adding or deleting properties.",
    "example": true,
    "codeSnippet": `const obj = { name: 'Alice' };
Object.freeze(obj);
obj.name = 'Bob'; // No effect
console.log(obj.name); // 'Alice'
const obj2 = { age: 25 };
Object.seal(obj2);
obj2.age = 30; // Allowed
delete obj2.age; // Not allowed`
  },
  {
    "id": 90,
    "question": "What are generators in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Generators are special functions that can be paused and resumed using the 'yield' keyword. They are defined using the function* syntax and return an iterator.",
    "example": true,
    "codeSnippet": `
      function* generatorFunction() {
        yield 1;
        yield 2;
        yield 3;
      }
      const gen = generatorFunction();
      console.log(gen.next().value); // Output: 1
      console.log(gen.next().value); // Output: 2
      console.log(gen.next().value); // Output: 3
    `
  },
  {
    "id": 91,
    "question": "What is the difference between map and WeakMap?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A Map holds key-value pairs and allows any data type as a key, whereas a WeakMap only accepts objects as keys and does not prevent garbage collection of keys.",
    "example": true,
    "codeSnippet": `
      let map = new Map();
      let obj = {};
      map.set(obj, 'value');
      console.log(map.get(obj)); // Output: 'value'
      
      let weakMap = new WeakMap();
      let obj2 = {};
      weakMap.set(obj2, 'value');
      console.log(weakMap.get(obj2)); // Output: 'value'
    `
  },
  {
    "id": 92,
    "question": "What are Proxies and Reflect in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Proxies allow you to define custom behavior for fundamental operations on objects, such as reading and writing properties. The Reflect API provides methods to perform the same operations as those intercepted by proxies.",
    "example": true,
    "codeSnippet": `
      let handler = {
        get(target, prop) {
          return prop in target ? target[prop] : 'Property not found';
        }
      };
      let obj = { name: 'Alice' };
      let proxy = new Proxy(obj, handler);
      console.log(proxy.name); // Output: 'Alice'
      console.log(proxy.age); // Output: 'Property not found'
    `
  },
  {
    "id": 93,
    "question": "What is the difference between setTimeout and requestAnimationFrame?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "setTimeout schedules a function to run after a specified delay, while requestAnimationFrame schedules a function to run before the next repaint, making it more suitable for animations.",
    "example": true,
    "codeSnippet": `
      function animate() {
        console.log('Animating');
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    `
  },
  {
    "id": 94,
    "question": "How does garbage collection work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "JavaScript uses automatic garbage collection via a process called reference counting and mark-and-sweep, where unreachable objects are removed from memory.",
    "example": false,
    "codeSnippet": ""
  },
  {
    "id": 95,
    "question": "What is the Temporal Dead Zone (TDZ)?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The TDZ is the time between when a variable is hoisted and when it is initialized. Accessing it in this period results in a ReferenceError.",
    "example": true,
    "codeSnippet": `
      console.log(a); // ReferenceError
      let a = 10;
    `
  },
  {
    "id": 96,
    "question": "What are Web Workers in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Web Workers allow JavaScript to run background tasks in separate threads, preventing the main thread from blocking UI rendering.",
    "example": true,
    "codeSnippet": `
      let worker = new Worker('worker.js');
      worker.postMessage('Hello');
      worker.onmessage = function(event) {
        console.log('Message from worker:', event.data);
      };
    `
  },
  {
    "id": 97,
    "question": "How does the with statement work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The 'with' statement extends the scope chain to simplify accessing properties of an object but is discouraged due to its impact on performance and debugging.",
    "example": true,
    "codeSnippet": `
      let obj = { name: 'Alice', age: 25 };
      with (obj) {
        console.log(name); // Output: 'Alice'
        console.log(age);  // Output: 25
      }
    `
  },
  {
    "id": 98,
    "question": "What is tail call optimization?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Tail call optimization (TCO) occurs when a function call is the last operation in another function, allowing the JavaScript engine to optimize recursion and reduce memory usage.",
    "example": true,
    "codeSnippet": `
      function factorial(n, acc = 1) {
        if (n === 1) return acc;
        return factorial(n - 1, n * acc);
      }
      console.log(factorial(5)); // Output: 120
    `
  },
  {
    "id": 99,
    "question": "How do JavaScript modules (import/export) work?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "JavaScript modules allow code to be divided into separate files using 'export' and 'import' statements, improving maintainability and reusability.",
    "example": true,
    "codeSnippet": `
      // module.js
      export const greet = name => "Hello,name};
      // main.js
      import { greet } from './module.js';
      console.log(greet('Alice')); // Output: 'Hello, Alice'
    `
  },
  {
    "id": 100,
    "question": "What is the difference between call, apply, and bind in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The 'call' and 'apply' methods invoke a function with a specific 'this' value and arguments. The difference is that 'call' takes arguments individually, while 'apply' takes them as an array. The 'bind' method, however, returns a new function with a bound 'this' value and does not invoke it immediately.",
    "example": true,
    "codeSnippet": `
      function greet(greeting, punctuation) {
        console.log(greeting + ', ' + this.name + punctuation);
      }
      
      const person = { name: 'Alice' };
      
      greet.call(person, 'Hello', '!'); // Output: 'Hello, Alice!'
      greet.apply(person, ['Hi', '?']); // Output: 'Hi, Alice?'
      
      const boundGreet = greet.bind(person, 'Hey');
      boundGreet('!'); // Output: 'Hey, Alice!'
    `
  },
  {
    "id": 101,
    "question": "What is the purpose of eval() and why is it discouraged?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "The eval() function executes a string as JavaScript code. It is discouraged because it poses security risks, makes debugging harder, and reduces performance due to lack of optimizations.",
    "example": true,
    "codeSnippet": `
      let x = 10;
      let y = 20;
      let result = eval('x + y');
      console.log(result); // Output: 30
    `
  },
  {
    "id": 102,
    "question": "What is a WeakSet in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A WeakSet is a collection of objects that allows only object values and does not prevent garbage collection, meaning it holds 'weak' references to objects.",
    "example": true,
    "codeSnippet": `
      let obj1 = { name: 'Alice' };
      let obj2 = { name: 'Bob' };
      
      let weakSet = new WeakSet();
      weakSet.add(obj1);
      weakSet.add(obj2);
      
      console.log(weakSet.has(obj1)); // Output: true
    `
  },
  {
    "id": 103,
    "question": "How do you handle errors in JavaScript using try...catch?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "The try...catch statement allows handling runtime errors gracefully without stopping script execution.",
    "example": true,
    "codeSnippet": `
      try {
        let result = riskyFunction();
      } catch (error) {
        console.log('An error occurred:', error.message);
      }
    `
  },
  {
    "id": 104,
    "question": "What is the new keyword in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "The 'new' keyword is used to create an instance of an object that has a constructor function.",
    "example": true,
    "codeSnippet": `
      function Person(name) {
        this.name = name;
      }
      let person1 = new Person('Alice');
      console.log(person1.name); // Output: Alice
    `
  },
  {
    "id": 105,
    "question": "How does the instanceof operator work?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The instanceof operator checks whether an object is an instance of a specific constructor function or class.",
    "example": true,
    "codeSnippet": `
      function Person() {}
      let person = new Person();
      console.log(person instanceof Person); // Output: true
    `
  },
  {
    "id": 106,
    "question": "What is the difference between Object.assign() and the spread operator?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Object.assign() and the spread operator both copy object properties, but Object.assign() mutates the target object while spread creates a shallow copy.",
    "example": true,
    "codeSnippet": `
      let obj1 = { a: 1 };
      let obj2 = Object.assign({}, obj1);
      let obj3 = { ...obj1 };
      console.log(obj2, obj3); // Both produce { a: 1 }
    `
  },
  {
    "id": 107,
    "question": "How can you prevent modification of an object in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "You can use Object.freeze() to make an object immutable.",
    "example": true,
    "codeSnippet": `
      let obj = { name: 'Alice' };
      Object.freeze(obj);
      obj.name = 'Bob';
      console.log(obj.name); // Output: 'Alice'
    `
  },
  {
    "id": 108,
    "question": "What is a polyfill in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A polyfill is a script that adds modern functionality to older browsers that do not support it natively.",
    "example": true,
    "codeSnippet": `
      if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
          return this.indexOf(search, start) !== -1;
        };
      }
    `
  },
  {
    "id": 109,
    "question": "How does optional chaining (?.) work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Optional chaining allows accessing nested object properties without errors if they are undefined or null.",
    "example": true,
    "codeSnippet": `
      let user = { profile: { name: 'Alice' } };
      console.log(user.profile?.name); // Output: 'Alice'
      console.log(user.account?.balance); // Output: undefined
    `
  },
  {
    "id": 110,
    "question": "What are tagged templates in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Tagged templates allow customizing template literals by using a function to process their content.",
    "example": true,
    "codeSnippet": `
      function tag(strings, name) {
        return 'Hello, name';
      }
      console.log(tag'Hi ${'Alice'}'); // Output: 'Hello, Alice!'
    `
  },
  {
    "id": 111,
    "question": "What is the difference between the DOM and BOM?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "The DOM (Document Object Model) represents the structure of an HTML document, allowing JavaScript to interact with it. The BOM (Browser Object Model) represents browser-specific objects like window, navigator, and history.",
    "example": false,
    "codeSnippet": `
      console.log(window.innerWidth); // BOM example
      document.getElementById('myElement'); // DOM example
    `
  },
  {
    "id": 112,
    "question": "How do you select elements in JavaScript (getElementById, querySelector, etc.)?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "JavaScript provides various methods to select elements: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().",
    "example": true,
    "codeSnippet": `
      let element = document.getElementById('myId');
      let elements = document.querySelectorAll('.myClass');
    `
  },
  {
    "id": 113,
    "question": "How do you create, remove, and update DOM elements dynamically?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "You can use document.createElement() to create elements, appendChild() or insertBefore() to add them, removeChild() to remove them, and innerHTML or textContent to update content.",
    "example": true,
    "codeSnippet": `
      let div = document.createElement('div');
      div.textContent = 'Hello World';
      document.body.appendChild(div);
      document.body.removeChild(div);
    `
  },
  {
    "id": 114,
    "question": "What is event delegation?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Event delegation is a technique where a parent element handles events for its children using event bubbling.",
    "example": true,
    "codeSnippet": `
      document.getElementById('parent').addEventListener('click', function(event) {
        if (event.target.matches('.child')) {
          console.log('Child clicked!');
        }
      });
    `
  },
  {
    "id": 115,
    "question": "How does event bubbling and capturing work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Event bubbling occurs when an event starts from the target element and propagates up the DOM. Event capturing goes from the top down before reaching the target.",
    "example": true,
    "codeSnippet": `
      document.getElementById('child').addEventListener('click', function() {
        console.log('Child clicked');
      });
      document.getElementById('parent').addEventListener('click', function() {
        console.log('Parent clicked');
      });
    `
  },
  {
    "id": 116,
    "question": "What is the difference between addEventListener and onclick?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "addEventListener() allows multiple event handlers on an element, while onclick overrides any previous handler assigned to the onclick property.",
    "example": true,
    "codeSnippet": `
      document.getElementById('myButton').addEventListener('click', function() {
        console.log('Clicked!');
      });
    `
  },
  {
    "id": 117,
    "question": "How do you prevent the default behavior of an event?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "Use event.preventDefault() to stop the default action of an event, such as preventing a form submission or stopping a link from navigating.",
    "example": true,
    "codeSnippet": `
      document.getElementById('myLink').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Link click prevented');
      });
    `
  },
  {
    "id": 118,
    "question": "How can you stop event propagation?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Use event.stopPropagation() to prevent an event from bubbling up or capturing down the DOM tree.",
    "example": true,
    "codeSnippet": `
      document.getElementById('child').addEventListener('click', function(event) {
        event.stopPropagation();
        console.log('Child clicked');
      });
    `
  },
  {
    "id": 119,
    "question": "What are custom events in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Custom events allow you to define and dispatch events programmatically using the CustomEvent constructor.",
    "example": true,
    "codeSnippet": `
      let event = new CustomEvent('myEvent', { detail: { message: 'Hello' } });
      document.dispatchEvent(event);
      document.addEventListener('myEvent', function(e) {
        console.log(e.detail.message);
      });
    `
  },
  {
    "id": 120,
    "question": "What is the difference between innerHTML, textContent, and innerText?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "innerHTML returns the HTML content, textContent returns all text including hidden text, and innerText returns visible text.",
    "example": true,
    "codeSnippet": `
      let element = document.getElementById('myDiv');
      console.log(element.innerHTML);
      console.log(element.textContent);
      console.log(element.innerText);
    `
  },
  {
    "id": 9121,
    "question": "What are the different ways to handle asynchronous operations in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "JavaScript handles asynchronous operations using Callbacks, Promises, and Async/Await. Callbacks are functions passed as arguments to other functions. Promises represent a value that might be available now or in the future. Async/Await makes asynchronous code look synchronous, improving readability.",
    "example": true,
    "codeSnippet":`
      function fetchData(callback) {
        setTimeout(() => callback('Data received'), 1000);
      }
      fetchData(console.log);
    `
  },
  {
    "id": 9122,
    "question": "How does the JavaScript event loop work?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "The event loop continuously checks the call stack and the task queue. If the call stack is empty, it picks tasks from the queue and executes them.",
    "example": true,
    "codeSnippet":`
      console.log('Start');
      setTimeout(() => console.log('Timeout'), 0);
      console.log('End');
      // Output: Start, End, Timeout
    `
  },
  {
    "id": 9123,
    "question": "What is object-oriented programming in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Object-oriented programming (OOP) in JavaScript is a paradigm that uses objects to model real-world entities. It helps in organizing code and reusing components efficiently.",
    "example": true,
    "codeSnippet":`
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
    `
  },
  {
    "id": 9124,
    "question": "What are the four principles of OOP?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The four principles of OOP are :      1. Encapsulation - Hiding internal details and exposing only necessary functionality. 2. Abstraction - Simplifying complex logic by exposing only the required parts.3. Inheritance - Reusing code by creating new classes from existing ones.  4. Polymorphism - Allowing different implementations of the same method.",
    "example": false,
    "codeSnippet":`
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
    `
  },
  {
    "id": 123,
    "question": "What is a callback function?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "A callback function is a function that is passed as an argument to another function and executed later. It is commonly used for handling asynchronous operations.",
    "example": true,
    "codeSnippet": `
      function greet(name, callback) {
        console.log('Hello, ' + name);
        callback();
      }
      greet('Alice', () => console.log('Callback executed!'));
    `
  },
  {
    "id": 124,
    "question": "What are promise chaining and error handling in promises?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Promise chaining allows executing multiple asynchronous operations sequentially using 'then'. Error handling in promises is done using 'catch' to handle rejections.",
    "example": true,
    "codeSnippet": `
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    `
  },
  {
    "id": 125,
    "question": "How does Promise.all(), Promise.any(), Promise.race() work?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Promise.all() waits for all promises to resolve, Promise.any() resolves when any one promise resolves, and Promise.race() resolves when the first promise resolves or rejects.",
    "example": true,
    "codeSnippet": `
      Promise.all([fetch(url1), fetch(url2)])
        .then(responses => console.log('All resolved'))
        .catch(error => console.log('One failed'));
    `
  },
  {
    "id": 126,
    "question": "What is an async function?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "An async function is a function that always returns a promise. It allows using the 'await' keyword inside it to pause execution until a promise resolves.",
    "example": true,
    "codeSnippet": `
      async function fetchData() {
        let response = await fetch('https://api.example.com');
        let data = await response.json();
        console.log(data);
      }
      fetchData();
    `
  },
  {
    "id": 127,
    "question": "How does await work inside async functions?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The 'await' keyword pauses the execution of an async function until a promise is resolved, making asynchronous code easier to read and write.",
    "example": true,
    "codeSnippet": `
      async function fetchData() {
        let response = await fetch('https://api.example.com');
        let data = await response.json();
        console.log(data);
      }
      fetchData();
    `
  },
  {
    "id": 128,
    "question": "How do you handle errors in async/await?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Errors in async/await can be handled using try-catch blocks to catch and manage promise rejections gracefully.",
    "example": true,
    "codeSnippet": `
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
    `
  },
  {
    "id": 129,
    "question": "What is the difference between microtasks and macrotasks?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Microtasks (e.g., Promises, MutationObserver) are executed before macrotasks (e.g., setTimeout, setInterval). They are processed right after the current execution context, ensuring faster execution.",
    "example": true,
    "codeSnippet": `
      console.log('Start');
      setTimeout(() => console.log('Macrotask'), 0);
      Promise.resolve().then(() => console.log('Microtask'));
      console.log('End');
      // Output: Start, End, Microtask, Macrotask
    `
  },
  {
    "id": 130,
    "question": "How does the Fetch API work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "The Fetch API allows making HTTP requests in JavaScript. It returns a promise that resolves with the Response object.",
    "example": true,
    "codeSnippet": `
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    `
  },
  {
    "id": 201,
    "question": "What is a constructor function?",
    "technology": "JavaScript",
    "difficulty": "Easy",
    "answer": "A constructor function is a special type of function used to create and initialize objects in JavaScript.",
    "example": true,
    "codeSnippet": `
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person('Alice', 25);
console.log(person1.name); // Output: Alice
`
  },
  {
    "id": 202,
    "question": "What is a prototype in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A prototype is an object from which other objects inherit properties and methods.",
    "example": true,
    "codeSnippet": `
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(Hello, my name is this.name);
};
const person1 = new Person('Alice');
person1.greet(); // Output: Hello, my name is Alice
`
  },
  {
    "id": 203,
    "question": "How does inheritance work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Inheritance in JavaScript allows an object to inherit properties and methods from another object via prototypes.",
    "example": true,
    "codeSnippet": `
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
`
  },
  {
    "id": 204,
    "question": "What is mixin in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "A mixin is a way to add reusable behavior to multiple classes without using inheritance.",
    "example": true,
    "codeSnippet": `
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
`
  },
  {
    "id": 205,
    "question": "Explain the Singleton pattern in JavaScript.",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "The Singleton pattern ensures that only one instance of an object exists.",
    "example": true,
    "codeSnippet": `
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
`
  },
  {
    "id": 210,
    "question": "What is the Factory pattern in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The Factory pattern provides a way to create objects without specifying the exact class of the object that will be created.",
    "example": true,
    "codeSnippet": `
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
`
  },
  {
    "id": 211,
    "question": "How does the Observer pattern work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The Observer pattern allows an object (subject) to maintain a list of dependents (observers) that get notified when its state changes.",
    "example": true,
    "codeSnippet": `
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
`
  },
  {
    "id": 212,
    "question": "What is the Module pattern in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "The Module pattern is used to create encapsulated and reusable code using closures.",
    "example": true,
    "codeSnippet": `
const Module = (function() {
  let privateVar = 'I am private';
  return {
    getPrivateVar: function() {
      return privateVar;
    }
  };
})();
console.log(Module.getPrivateVar()); // Output: I am private
`
  },
  {
    "id": 301,
    "question": "How do you improve performance in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "To improve JavaScript performance, you can follow several best practices. Minimize DOM manipulations since excessive updates can slow down rendering. Use efficient looping methods like forEach or map instead of traditional for loops when possible. Leverage asynchronous programming with async/await or Promises to prevent blocking operations. Enable caching of data to reduce redundant computations and network requests. Utilize web workers for running heavy computations in the background without affecting the main thread.",
    "example": true,
    "codeSnippet": `
// Example: Using requestAnimationFrame instead of setTimeout for animations
function animate() {
  requestAnimationFrame(animate);
  console.log('Optimized animation');
}
animate();
`
  },
  {
    "id": 302,
    "question": "What is lazy loading, and how is it implemented?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Lazy loading is a performance optimization technique where resources such as images, videos, or components are loaded only when they are needed. This reduces initial page load time and improves user experience. It is commonly implemented using the Intersection Observer API, which detects when an element enters the viewport and then loads it dynamically.",
    "example": true,
    "codeSnippet": `
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
`
  },
  {
    "id": 303,
    "question": "How do you optimize DOM manipulation?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Optimizing DOM manipulation involves reducing the number of reflows and repaints. This can be done by batching multiple updates together, using document fragments to build large DOM structures before appending them, and minimizing unnecessary style recalculations. Also, using CSS classes instead of modifying inline styles can help improve performance.",
    "example": true,
    "codeSnippet": `
// Example: Using a document fragment to minimize reflows
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  let div = document.createElement('div');
  div.textContent = 'Item $ {i}';
  fragment.appendChild(div);
}
document.body.appendChild(fragment);
`
  },
  {
    "id": 304,
    "question": "How does browser reflow and repaint work?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Reflow is the process where the browser recalculates the positions and sizes of elements when changes occur in the layout. This is computationally expensive. Repaint happens when visual aspects like colors or shadows are updated without affecting layout. Reducing reflows by modifying styles in batches and avoiding layout thrashing can help optimize performance.",
    "example": false,
    "codeSnippet": ""
  },
  {
    "id": 305,
    "question": "What is tree shaking in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Tree shaking is a dead code elimination technique used to remove unused JavaScript code from the final bundle. It relies on ES6 module syntax (import/export) and is commonly used in build tools like Webpack and Rollup to reduce file size and improve loading speed.",
    "example": true,
    "codeSnippet": `
// Example: ES6 module tree shaking
// Import only necessary functions
import { usefulFunction } from './module';
usefulFunction();
`
  },
  {
    "id": 306,
    "question": "How does code splitting work in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Code splitting is a technique where JavaScript code is split into smaller chunks that load only when needed. This helps improve performance by reducing the initial load time of a web page. It is commonly implemented using dynamic imports or Webpack’s built-in code-splitting feature.",
    "example": true,
    "codeSnippet": `
// Example: Dynamic imports in Webpack
import('./module').then(module => {
  module.default();
});
`
  },
  {
    "id": 307,
    "question": "How can you optimize memory usage in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "To optimize memory usage, avoid memory leaks by removing event listeners when they are no longer needed, use weak references when applicable, and manage large objects efficiently by clearing unnecessary references. Additionally, using object pooling can help reduce garbage collection overhead.",
    "example": false,
    "codeSnippet": ""
  },
  {
    "id": 308,
    "question": "What is the difference between imperative and declarative programming?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Imperative programming focuses on describing how a task should be performed step by step, while declarative programming describes what should be done without explicitly defining the control flow. JavaScript supports both paradigms, making it flexible for various use cases.",
    "example": true,
    "codeSnippet": `
// Imperative approach
let arr = [1, 2, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}
// Declarative approach
let newArr2 = arr.map(num => num * 2);
`
  },
  {
    "id": 309,
    "question": "What are some common memory leaks in JavaScript?",
    "technology": "JavaScript",
    "difficulty": "Advanced",
    "answer": "Memory leaks in JavaScript can occur due to unused references, improperly handled event listeners, accidental global variables, and closures retaining unnecessary data. Keeping track of references and using weak collections can help mitigate these issues.",
    "example": false,
    "codeSnippet": ""
  },
  {
    "id": 310,
    "question": "How do you debug JavaScript code efficiently?",
    "technology": "JavaScript",
    "difficulty": "Medium",
    "answer": "Efficient debugging involves using console.log to track values, setting breakpoints in browser DevTools, using the debugger statement, and leveraging profiling tools to detect performance issues. Additionally, error handling with try-catch can help catch unexpected issues.",
    "example": true,
    "codeSnippet": `
// Example: Using breakpoints in DevTools
debugger;
console.log('Debugging JavaScript');
`
  }
];
