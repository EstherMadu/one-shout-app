import React from "react";

export function FAQItem(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {props.question}
        {isOpen ? <span> &#9650;</span> : <span>&#9660;</span>}
      </div>
      {isOpen && <div className="faq-answer">{props.answer}</div>}
    </div>
  );
}
