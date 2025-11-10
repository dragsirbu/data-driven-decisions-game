import React from 'react';
import './GameHeader.css';

function GameHeader() {
  return (
    <header className="game-header">
      <h1 className="game-header__title">Product Decision Simulator</h1>
      <div className="game-header__content">
        <p className="game-header__description">
          You're the product manager of a growing startup. Each decision you make will affect your
          company's performance metrics:
        </p>
        <ul className="game-header__list">
          <li>Each round, you’ll see a question about your startup on the left.</li>
          <li>
            Before answering, open one or more Data Cards to inspect charts and surveys (CAC, LTV,
            churn, funnel drop-off, etc.).
          </li>
          <li>
            Click Confirm decision to lock in your choice. Watch the Key Stats panel on the right
            update:
          </li>
          <li>Try to balance short-term gains with long-term sustainability</li>
          <li>
            Play through all rounds. You “win” if you reach the targets with runway left and most of
            your decisions were data-driven, not guesses.
          </li>
        </ul>
      </div>
    </header>
  );
}

export default GameHeader;
