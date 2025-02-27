export const dummyQuestionsCss=[
    {
      id: 9001,
      question: "What is CSS and why is it used?",
      technology: "CSS",
      difficulty: "Easy",
      answer: `
        <p><strong>CSS (Cascading Style Sheets)</strong> is used to style HTML elements. It helps in:</p>
        <ul>
          <li>✅ Controlling layout and design</li>
          <li>✅ Applying colors, fonts, and spacing</li>
          <li>✅ Making websites responsive</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        p {
          color: blue;
          font-size: 16px;
        }
      `
    },
    {
      id: 9002,
      question: "What are the different types of CSS?",
      technology: "CSS",
      difficulty: "Easy",
      answer: `
        <p>CSS can be applied in three ways:</p>
        <ul>
          <li>✅ <strong>Inline CSS:</strong> Applied directly to an element using the <code>style</code> attribute.</li>
          <li>✅ <strong>Internal CSS:</strong> Defined within a <code>&lt;style&gt;</code> tag inside the HTML document.</li>
          <li>✅ <strong>External CSS:</strong> Linked via a separate <code>.css</code> file.</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        /* External CSS */
        body {
          background-color: #f0f0f0;
        }
      `
    },
    {
      id: 9003,
      question: "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
      technology: "CSS",
      difficulty: "Medium",
      answer: `
        <p>CSS <code>position</code> determines how elements are placed in a document.</p>
        <ul>
          <li>✅ <strong>Relative:</strong> Positioned relative to its normal position.</li>
          <li>✅ <strong>Absolute:</strong> Positioned relative to the nearest ancestor with a position (except static).</li>
          <li>✅ <strong>Fixed:</strong> Stays in place even when scrolling.</li>
          <li>✅ <strong>Sticky:</strong> Switches between relative and fixed when scrolling.</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        .box {
          position: absolute;
          top: 50px;
          left: 100px;
        }
      `
    },
    {
        "id": 9004,
        "question": "What is the difference between Flexbox and Grid?",
        "technology": "CSS",
        "difficulty": "Medium",
        "answer": `
          <p><strong>Flexbox vs Grid:</strong></p>
          <ul>
            <li>✅ <strong>Flexbox:</strong> One-dimensional layout (row or column). Best for aligning elements dynamically.</li>
            <li>✅ <strong>Grid:</strong> Two-dimensional layout (rows & columns). Best for designing complete page structures.</li>
            <li>📌 <strong>Flexbox is great for navigation bars, buttons, and simple UI layouts.</strong></li>
            <li>📌 <strong>Grid is best for dashboards, galleries, and structured web designs.</strong></li>
          </ul>
        `,
        "example": true,
        "codeSnippet": `
          /* Flexbox */
          .container {
            display: flex;
            justify-content: center;
            gap: 10px;
          }
      
          .item {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            text-align: center;
            line-height: 100px;
          }
      
          /* Grid */
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
        `
      }
      ,
    {
      id: 9005,
      question: "How do media queries work in CSS?",
      technology: "CSS",
      difficulty: "Medium",
      answer: `
        <p>Media queries allow responsive design by applying styles based on screen size.</p>
      `,
      example: true,
      codeSnippet: `
        @media (max-width: 600px) {
          body {
            background-color: lightblue;
          }
        }
      `
    },
    {
      id: 9006,
      question: "What is the difference between em, rem, and px in CSS?",
      technology: "CSS",
      difficulty: "Medium",
      answer: `
        <p><strong>Unit Differences:</strong></p>
        <ul>
          <li>✅ <strong>px:</strong> Fixed unit (not scalable).</li>
          <li>✅ <strong>em:</strong> Relative to parent element’s font size.</li>
          <li>✅ <strong>rem:</strong> Relative to the root (<code>html</code>) font size.</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        body { font-size: 16px; }
        .text { font-size: 2em; /* 32px */ }
      `
    },
    {
      id: 9007,
      question: "What is the difference between visibility: hidden and display: none?",
      technology: "CSS",
      difficulty: "Easy",
      answer: `
        <ul>
          <li>✅ <code>visibility: hidden;</code> → Hides the element but keeps space.</li>
          <li>✅ <code>display: none;</code> → Removes element from layout.</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        .hidden { visibility: hidden; }
        .none { display: none; }
      `
    },
    {
      id: 9008,
      question: "How do you create animations using CSS?",
      technology: "CSS",
      difficulty: "Medium",
      answer: `
        <p>Use <code>@keyframes</code> for animations.</p>
      `,
      example: true,
      codeSnippet: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate {
          animation: fadeIn 2s ease-in-out;
        }
      `
    },
    {
      id: 9009,
      question: "What are pseudo-classes in CSS?",
      technology: "CSS",
      difficulty: "Easy",
      answer: `
        <p>Pseudo-classes define special states of elements.</p>
        <ul>
          <li>✅ <code>:hover</code> → When mouse is over an element.</li>
          <li>✅ <code>:first-child</code> → Selects the first child.</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        p:hover { color: red; }
      `
    },
    {
      id: 9010,
      question: "What is the difference between max-width and min-width in CSS?",
      technology: "CSS",
      difficulty: "Easy",
      answer: `
        <ul>
          <li>✅ <code>max-width:</code> Ensures element does not exceed a certain width.</li>
          <li>✅ <code>min-width:</code> Ensures element does not go below a certain width.</li>
        </ul>
      `,
      example: true,
      codeSnippet: `
        .container {
          max-width: 800px;
          min-width: 400px;
        }
      `
    },
    {
        "id": 9011,
        "question": "What is a pseudo-element in CSS?",
        "technology": "CSS",
        "difficulty": "Medium",
        "answer": `
          <p><strong>Pseudo-Elements in CSS:</strong></p>
          <p>A pseudo-element allows you to style a specific part of an element without modifying the HTML structure.</p>
          <ul>
            <li>✅ <code>::before</code> - Adds content before an element.</li>
            <li>✅ <code>::after</code> - Adds content after an element.</li>
            <li>✅ <code>::first-letter</code> - Styles the first letter of a text block.</li>
            <li>✅ <code>::first-line</code> - Styles the first line of a text block.</li>
            <li>✅ <code>::selection</code> - Styles text when selected.</li>
          </ul>
        `,
        "example": true,
        "codeSnippet": `
          /* ::before Example */
          .button::before {
            content: "🔥 ";
            color: red;
          }
      
          /* ::after Example */
          .button::after {
            content: " ➡";
            color: blue;
          }
      
          /* ::first-letter Example */
          p::first-letter {
            font-size: 2em;
            color: purple;
          }
      
          /* ::selection Example */
          p::selection {
            background-color: yellow;
            color: black;
          }
        `
      }
      
  ];
  