import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = () => {
  const [selected, setSelected] = useState('A');

  return (
    <article
      className="question-card"
      aria-label="Decision question"
    >
      <header className="question-card__header">
        <div>
          <p className="question-card__kicker">Question 3</p>
          <p className="question-card__meta-top">Scenario · Marketing Channel</p>
        </div>
        <span className="question-card__tag question-card__tag--impact">High impact</span>
      </header>

      <h2 className="question-card__title">
        Which marketing channel should we invest in next month?
      </h2>

      <p className="question-card__subtitle">
        <strong>Learning focus:</strong> Compare channels on CAC and LTV, not just clicks or
        impressions.
      </p>

      <p className="question-card__question">
        You have a limited budget and must choose where to invest: TikTok ads, LinkedIn ads, or
        email campaigns to existing leads.
      </p>

      <ul className="question-card__options">
        <li>
          <label className="option">
            <input
              type="radio"
              name="channel"
              value="A"
              checked={selected === 'A'}
              onChange={() => setSelected('A')}
              className="option__radio"
            />
            <div className="option__body">
              <div className="option__header-row">
                <span className="option__letter">A</span>
                <span className="option__title">TikTok ads</span>
              </div>
              <p className="option__description">High reach, but past leads looked low-intent.</p>
            </div>
          </label>
        </li>

        <li>
          <label className="option">
            <input
              type="radio"
              name="channel"
              value="B"
              checked={selected === 'B'}
              onChange={() => setSelected('B')}
              className="option__radio"
            />
            <div className="option__body">
              <div className="option__header-row">
                <span className="option__letter">B</span>
                <span className="option__title">LinkedIn ads</span>
              </div>
              <p className="option__description">
                Smaller reach, but potentially more qualified users.
              </p>
            </div>
          </label>
        </li>

        <li>
          <label className="option">
            <input
              type="radio"
              name="channel"
              value="C"
              checked={selected === 'C'}
              onChange={() => setSelected('C')}
              className="option__radio"
            />
            <div className="option__body">
              <div className="option__header-row">
                <span className="option__letter">C</span>
                <span className="option__title">Email campaigns</span>
              </div>
              <p className="option__description">
                Targets users who already know you and may be close to converting.
              </p>
            </div>
          </label>
        </li>
      </ul>

      <div className="question-card__footer-meta">
        <span className="footer-chip">
          Uses: <strong>Past channel performance</strong>
        </span>
        <span className="footer-chip">
          Goal: <strong>Maximize quality sign-ups</strong>
        </span>
      </div>

      <div className="question-card__actions">
        <button
          type="button"
          className="btn btn--ghost"
        >
          View data cards <span className="btn__badge">4</span>
        </button>
        <button
          type="button"
          className="btn btn--primary"
        >
          Confirm decision
        </button>
      </div>
    </article>
  );
};

export default QuestionCard;
