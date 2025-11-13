import './StatisticsPanel.css';

const metricDefinitions = {
  customerBase: {
    id: 'customerBase',
    label: 'Customer Base',
    unit: 'k users',
    color: 'userbase',
    helper: 'Active users / adoption over rounds',
  },
  customerSatisfaction: {
    id: 'customerSatisfaction',
    label: 'Customer Satisfaction',
    unit: '%',
    color: 'popularity',
    helper: 'Activation, CSAT, and qualitative sentiment proxy',
  },
  revenue: {
    id: 'revenue',
    label: 'Revenue',
    unit: '$k',
    color: 'revenue',
    helper: 'Monthly recurring revenue',
  },
  dataMaturity: {
    id: 'dataMaturity',
    label: 'Data Maturity',
    unit: 'score',
    color: 'runway',
    helper: 'Quality of data, instrumentation, and decision process',
  },
};

function MetricChart({ label, unit, values, colorClass, helper }) {
  if (!values || values.length === 0) return null;

  const maxValue = 100;
  const latest = values[values.length - 1];
  const previous = values.length > 1 ? values[values.length - 2] : latest;
  const diff = latest - previous;
  const diffLabel = diff === 0 ? 'no change' : `${diff > 0 ? '+' : ''}${diff.toFixed(1)}`;

  return (
    <div className="metric-card">
      <div className="metric-card__header">
        <div>
          <p className="metric-card__label">{label}</p>
          <p className="metric-card__value">
            {latest}
            <span className="metric-card__unit"> {unit}</span>
          </p>
        </div>
        <span
          className={
            'metric-card__delta ' +
            (diff > 0
              ? 'metric-card__delta--up'
              : diff < 0
              ? 'metric-card__delta--down'
              : 'metric-card__delta--flat')
          }
        >
          {diffLabel}
        </span>
      </div>

      <div className="metric-chart">
        <div className="metric-chart__bars">
          {values.map((v, index) => {
            const height = maxValue === 0 ? 0 : (v / maxValue) * 100;
            return (
              <div
                key={index}
                className={`metric-chart__bar metric-chart__bar--${colorClass}`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        <div className="metric-chart__ticks">
          {values.map((_, index) => (
            <span
              key={index}
              className="metric-chart__tick"
            >
              R{index + 1}
            </span>
          ))}
        </div>
      </div>

      {/* <p className="metric-card__helper">{helper}</p> */}
    </div>
  );
}

const StatisticsPanel = ({ metrics }) => {
  return (
    <section
      className="statistics-panel"
      aria-label="Startup statistics"
    >
      <div className="statistics-panel__header">
        <h2 className="statistics-panel__title">Key stats</h2>
        <p className="statistics-panel__subtitle">
          How your startup is evolving over the last rounds.
        </p>
      </div>

      <div className="statistics-panel__grid">
        {Object.values(metricDefinitions).map((definition) => (
          <MetricChart
            key={definition.id}
            label={definition.label}
            unit={definition.unit}
            values={metrics?.[definition.id]}
            colorClass={definition.color}
            helper={definition.helper}
          />
        ))}
      </div>
    </section>
  );
};

export default StatisticsPanel;
