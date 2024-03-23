import { useState } from "react";

const initialFaqs = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="top"></div>
      <Bottom />
    </div>
  );
}

function Bottom() {
  return (
    <div className="bottom">
      <Faqs />
    </div>
  );
}

function Faqs() {
  const [faqs, setFaqs] = useState([...initialFaqs]);

  const [selectedFaq, setSelectedFaq] = useState(null);

  function handleSelectFaq(faq) {
    setSelectedFaq(selectedFaq?.id === faq.id ? null : faq);
  }

  return (
    <div className="faqs">
      <div className="title">
        <span></span>
        <h1>FAQs</h1>
      </div>
      <ul>
        {faqs.map((faq) => (
          <Faq
            question={faq.question}
            answer={faq.answer}
            key={faq.id}
            onSelectFaq={handleSelectFaq}
            selectedFaq={selectedFaq}
            faq={faq}
          />
        ))}
      </ul>
    </div>
  );
}

function Faq({ question, answer, faq, selectedFaq, onSelectFaq }) {
  return (
    <li>
      <Question
        selectedFaq={selectedFaq}
        faq={faq}
        onClick={() => onSelectFaq(faq)}
      >
        {question}
      </Question>

      {selectedFaq?.id === faq.id && <Answer>{answer}</Answer>}
    </li>
  );
}

function Question({ selectedFaq, faq, onClick, children }) {
  return (
    <div className="question" onClick={onClick}>
      <p>{children}</p>
      <span
        className={`icon icon-${selectedFaq?.id === faq.id ? "close" : "open"}`}
      ></span>
    </div>
  );
}

function Answer({ children }) {
  return <p className="answer">{children}</p>;
}

export default App;
