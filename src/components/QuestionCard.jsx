import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ current, onDecisionSubmit }) => {
  const [selected, setSelected] = useState('A');

  const handleConfirmClick = () => {
    if (selected) {
      onDecisionSubmit(selected);
    }
  };

  return (
    <article
      className="question-card"
      aria-label="Decision question"
    >
      <header className="question-card__header">
        <div>
          <p className="question-card__meta-top">{current.scenario}</p>
        </div>
        <span className="question-card__tag question-card__tag--impact">
          {current.impact} impact
        </span>
      </header>

      <h2 className="question-card__title">{current.title}</h2>

      <p className="question-card__question">{current.prompt}</p>

      <ul className="question-card__options">
        {current.options.map((option) => (
          <li key={option.id}>
            <label className="option">
              <input
                type="radio"
                name="question"
                value={option.id}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="option__radio"
              />
              <div className="option__body">
                <div className="option__header-row">
                  <span className="option__title">{option.label}</span>
                </div>
                <p className="option__description">{option.description}</p>
              </div>
            </label>
          </li>
        ))}
      </ul>

      <div className="question-card__footer-meta">
        <span className="footer-chip">
          Uses: <strong>{current.meta.uses}</strong>
        </span>
        <span className="footer-chip">
          Goal: <strong>{current.meta.goal}</strong>
        </span>
      </div>

      <div className="question-card__actions">
        <button
          type="button"
          className="btn btn--primary"
          onClick={handleConfirmClick}
        >
          Confirm decision
        </button>
      </div>
    </article>
  );
};

export default QuestionCard;
