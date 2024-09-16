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
];
