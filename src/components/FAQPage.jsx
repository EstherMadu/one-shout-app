import React from "react";

export function FAQItem(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="faq-item my-6">
      <div className="faq-question bg-slate-200" onClick={toggleOpen}>
        {props.question}
        {isOpen ? (
          <span className="arrow">&#9650;</span>
        ) : (
          <span className="arrow">&#9660;</span>
        )}
      </div>
      {isOpen && <div className="faq-answer">{props.answer}</div>}
    </section>
  );
}
