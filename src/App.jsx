import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import DataCard from './components/DataCard';
import StatisticsPanel from './components/StatisticsPanel';
import GameHeader from './components/GameHeader';
import { questions } from './data/data.js';
import './App.css';

function App() {
  const [availableQuestions, setAvailableQuestions] = useState([...questions]);
  const [current, setCurrent] = useState(() => getRandomQuestion(availableQuestions));
  const [gameStats, setGameStats] = useState({
    revenue: [12],
    userbase: [4],
    runway: [10],
    popularity: [55],
  });

  // Function to calculate impact of decisions on metrics
  const calculateMetricChanges = (question, selectedOption) => {
    const selectedChoice = question.options.find((opt) => opt.id === selectedOption);
    if (!selectedChoice || !question.impacts) return null;

    // Get the impact data for the selected choice
    const impact = question.impacts[selectedOption] || {};

    return {
      revenue: impact.revenue || 0,
      userbase: impact.userbase || 0,
      runway: impact.runway || 0,
      popularity: impact.popularity || 0,
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

  function getRandomQuestion(questionList) {
    if (questionList.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * questionList.length);
    return questionList[randomIndex];
  }

  return (
    <div className="app-container">
      <GameHeader />
      <div className="game-content">
        <div className="left-panel">
          <QuestionCard
            current={current}
            onDecisionSubmit={(selectedOption) => {
              // Calculate impacts of the current decision
              const impacts = calculateMetricChanges(current, selectedOption);
              if (impacts) {
                updateGameStats(impacts);
              }

              // Filter out the current question and get next one
              const remainingQuestions = availableQuestions.filter((q) => q.id !== current.id);
              setAvailableQuestions(remainingQuestions);
              const nextQuestion = getRandomQuestion(remainingQuestions);
              setCurrent(nextQuestion);
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
    </div>
  );
}

export default App;
