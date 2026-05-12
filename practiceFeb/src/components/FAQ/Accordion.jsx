import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is useState?",
    answer: "useState is a React hook used to manage state in functional components."
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension that lets you write HTML inside JavaScript."
  }
];

function Accordion() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <h2>FAQs</h2>

      {faqs.map((faq) => (
        <div key={faq.id}>
          <h4 onClick={() => handleToggle(faq.id)}>
            {faq.question}
          </h4>

          {openId === faq.id && (
            <p>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;