import { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
import DataCard from './components/DataCard';
import StatisticsPanel from './components/StatisticsPanel';
import GameHeader from './components/GameHeader';
import { questions } from './data/data.js';
import './App.css';
import {
  START_PER_KPI,
  QUESTIONS_PER_GAME,
  WIN_SUM_THRESHOLD,
  LOSS_SUM_THRESHOLD,
} from './config/gameRules';

function App() {
  const [questionsForGame, setQuestionsForGame] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(null);
  const [gameStats, setGameStats] = useState({
    customerBase: [START_PER_KPI],
    customerSatisfaction: [START_PER_KPI],
    revenue: [START_PER_KPI],
    dataMaturity: [START_PER_KPI],
  });
  const [gameResult, setGameResult] = useState(null); // 'win' | 'loss' | 'partial' | null

  // Function to calculate impact of decisions on metrics
  const calculateMetricChanges = (question, selectedOption) => {
    const selectedChoice = question.options.find((opt) => opt.id === selectedOption);
    if (!selectedChoice || !question.impacts) return null;

    // Get the impact data for the selected choice
    const impact = question.impacts[selectedOption] || {};

    return {
      customerBase: impact.customerBase || 0,
      customerSatisfaction: impact.customerSatisfaction || 0,
      revenue: impact.revenue || 0,
      dataMaturity: impact.dataMaturity || 0,
    };
  };

  // Function to update game statistics
  const updateGameStats = (impacts) => {
    setGameStats((prevStats) => {
      const newStats = {};
      Object.keys(prevStats).forEach((metric) => {
        const currentValue = prevStats[metric][prevStats[metric].length - 1];
        const change = impacts[metric];
        newStats[metric] = [...prevStats[metric], currentValue + change];
      });
      return newStats;
    });
  };

  

  // Pick N random unique questions
  function pickNRandom(questionsList, n) {
    const copy = [...questionsList];
    // Fisher-Yates shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  }

  function startNewGame() {
    const picked = pickNRandom(questions, Math.min(QUESTIONS_PER_GAME, questions.length));
    setQuestionsForGame(picked);
    setCurrentIndex(0);
    setCurrent(picked[0] || null);
    setGameResult(null);
    setGameStats({
      customerBase: [START_PER_KPI],
      customerSatisfaction: [START_PER_KPI],
      revenue: [START_PER_KPI],
      dataMaturity: [START_PER_KPI],
    });
  }

  useEffect(() => {
    startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <GameHeader />
      <div className="game-content">
        <div className="left-panel">
          <QuestionCard
            current={current}
            onDecisionSubmit={(selectedOption) => {
              if (!current) return;

              // Calculate impacts of the current decision
              const impacts = calculateMetricChanges(current, selectedOption) || {
                customerBase: 0,
                customerSatisfaction: 0,
                revenue: 0,
                dataMaturity: 0,
              };

              // Get last values synchronously so we can evaluate end conditions immediately
              const last = {
                customerBase: gameStats.customerBase[gameStats.customerBase.length - 1],
                customerSatisfaction: gameStats.customerSatisfaction[gameStats.customerSatisfaction.length - 1],
                revenue: gameStats.revenue[gameStats.revenue.length - 1],
                dataMaturity: gameStats.dataMaturity[gameStats.dataMaturity.length - 1],
              };

              const newValues = {
                customerBase: last.customerBase + (impacts.customerBase || 0),
                customerSatisfaction: last.customerSatisfaction + (impacts.customerSatisfaction || 0),
                revenue: last.revenue + (impacts.revenue || 0),
                dataMaturity: last.dataMaturity + (impacts.dataMaturity || 0),
              };

              // Persist stats
              updateGameStats(impacts);

              const nextIndex = currentIndex + 1;

              // If we've reached the end of QUESTIONS_PER_GAME evaluate result
              if (nextIndex >= QUESTIONS_PER_GAME) {
                const totalSum =
                  newValues.customerBase +
                  newValues.customerSatisfaction +
                  newValues.revenue +
                  newValues.dataMaturity;

                if (totalSum >= WIN_SUM_THRESHOLD) setGameResult('win');
                else setGameResult('loss');
                // advance index to end
                setCurrentIndex(nextIndex);
                setCurrent(null);
                return;
              }

              // Advance to next question
              setCurrentIndex(nextIndex);
              const nextQuestion = questionsForGame[nextIndex];
              setCurrent(nextQuestion || null);
            }}
          />
        </div>
        <div className="middle-panel">
          {current?.dataCards?.map((dataCard, index) => (
            <DataCard
              key={index}
              title={dataCard.title}
              label={dataCard.label}
              imageSrc={dataCard.imageSrc}
              chartData={dataCard.chartData}
            />
          ))}
        </div>
        <div className="right-panel">
          <StatisticsPanel metrics={gameStats} />
        </div>
      </div>
      {gameResult && (
        <div className="game-result-overlay">
          <div className="game-result-box">
            <h2>Game result: {gameResult.toUpperCase()}</h2>
            <p>
              Final total:{' '}
              {gameStats.customerBase[gameStats.customerBase.length - 1] +
                gameStats.customerSatisfaction[gameStats.customerSatisfaction.length - 1] +
                gameStats.revenue[gameStats.revenue.length - 1] +
                gameStats.dataMaturity[gameStats.dataMaturity.length - 1]}
            </p>
            {gameResult === 'win' && (
              <p className="game-result-message">Congratulations, you won! Your decisions led to a healthy overall outcome.</p>
            )}
            {gameResult === 'loss' && (
              <p className="game-result-message">You lost! Some choices hurt the overall outcome. Review the KPIs to see where things went wrong.</p>
            )}
            {/* 'partial' state removed: any final result < WIN_SUM_THRESHOLD is treated as loss */}

            <div style={{ marginTop: '12px' }}>
              <button onClick={() => startNewGame()}>Start new game</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
