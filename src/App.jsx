import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import InfoPanel from './components/InfoPanel';
import StatisticsPanel from './components/StatisticsPanel';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="left-panel">
        <QuestionCard />
      </div>
      <div className="right-panel">
        <InfoPanel />
        <StatisticsPanel />
      </div>
    </div>
  );
}

export default App;
