import React, { useState } from 'react';
import './DataCard.css';

const DataCard = ({
  title,
  imageSrc,
  imageAlt = 'Chart',
  label,
  chartData, // pass chartData here
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Helper: get the category/key name from data objects (e.g. "channel")
  const getCategoryKey = (dataPoint) => {
    if (!dataPoint) return 'category';
    const keys = Object.keys(dataPoint);
    const key = keys.find((k) => k !== 'value') || 'category';
    return key;
  };

  const renderBarChart = (data) => {
    if (!data?.series?.length) return null;

    const firstSeries = data.series[0];
    if (!firstSeries.data?.length) return null;

    const firstPoint = firstSeries.data[0];
    const categoryKey = getCategoryKey(firstPoint);

    const categories = firstSeries.data.map((d) => d[categoryKey]);
    const maxValue = Math.max(...firstSeries.data.map((d) => Number(d.value) || 0));

    return (
      <div className="data-card__chart">
        <div className="data-card__chart-header">
          {data.yLabel && <span className="data-card__axis-label">{data.yLabel}</span>}
        </div>
        <div className="data-card__chart-body">
          <div className="data-card__chart-bars">
            {firstSeries.data.map((point, index) => {
              const value = Number(point.value) || 0;
              const height = maxValue === 0 ? 0 : Math.round((value / maxValue) * 100);
              return (
                <div
                  key={index}
                  className="chart-bar-group"
                >
                  <div
                    className="chart-bar chart-bar--primary"
                    style={{ height: `${height}%` }}
                    title={`${point[categoryKey]}: ${value}`}
                  />
                  <span className="chart-bar__label">{categories[index]}</span>
                </div>
              );
            })}
          </div>
        </div>
        {data.notes && <p className="data-card__chart-notes">{data.notes}</p>}
      </div>
    );
  };

  const renderGroupedBarChart = (data) => {
    if (!data?.series?.length) return null;

    const firstSeries = data.series[0];
    if (!firstSeries.data?.length) return null;

    const firstPoint = firstSeries.data[0];
    const categoryKey = getCategoryKey(firstPoint);

    const categories = firstSeries.data.map((d) => d[categoryKey]);

    const leftSeries = data.series.filter((s) => s.axis !== 'right');
    const rightSeries = data.series.filter((s) => s.axis === 'right');

    const maxLeft = leftSeries.length
      ? Math.max(...leftSeries.flatMap((s) => s.data.map((d) => Number(d.value) || 0)))
      : 0;

    const maxRight = rightSeries.length
      ? Math.max(...rightSeries.flatMap((s) => s.data.map((d) => Number(d.value) || 0)))
      : 0;

    return (
      <div className="data-card__chart">
        <div className="data-card__chart-header">
          {data.yLeftLabel && <span className="data-card__axis-label">{data.yLeftLabel}</span>}
          {data.yRightLabel && (
            <span className="data-card__axis-label data-card__axis-label--secondary">
              {data.yRightLabel}
            </span>
          )}
        </div>

        <div className="data-card__chart-body">
          <div className="data-card__chart-bars">
            {categories.map((category) => (
              <div
                key={category}
                className="chart-bar-group chart-bar-group--grouped"
              >
                {/* Left-axis series (e.g., LTV) */}
                {leftSeries.map((series, sIdx) => {
                  const point = series.data.find((d) => d[categoryKey] === category);
                  const value = Number(point?.value) || 0;
                  const height = maxLeft === 0 ? 0 : Math.round((value / maxLeft) * 100);
                  return (
                    <div
                      key={series.name}
                      className={`chart-bar chart-bar--series-${sIdx}`}
                      style={{ height: `${height}%` }}
                      title={`${series.name} (${category}): ${value}`}
                    />
                  );
                })}

                {/* Right-axis series (e.g., churn %) */}
                {rightSeries.map((series, sIdx) => {
                  const point = series.data.find((d) => d[categoryKey] === category);
                  const value = Number(point?.value) || 0;
                  const height = maxRight === 0 ? 0 : Math.round((value / maxRight) * 100);
                  // offset index for different color
                  const colorIndex = leftSeries.length + sIdx;
                  return (
                    <div
                      key={series.name}
                      className={`chart-bar chart-bar--series-${colorIndex}`}
                      style={{ height: `${height}%` }}
                      title={`${series.name} (${category}): ${value}`}
                    />
                  );
                })}

                <span className="chart-bar__label">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {data.notes && <p className="data-card__chart-notes">{data.notes}</p>}
      </div>
    );
  };

  const renderChart = () => {
    if (!chartData) return null;

    if (chartData.type === 'bar') {
      return renderBarChart(chartData);
    }

    if (chartData.type === 'grouped-bar') {
      return renderGroupedBarChart(chartData);
    }

    return (
      <div className="data-card__image data-card__image--placeholder">
        <span>Unsupported chart type</span>
      </div>
    );
  };

  // Closed state – only centered title
  if (!isOpen) {
    return (
      <article
        className="data-card data-card--closed"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
      >
        <p className="data-card__title data-card__title--center">{title}</p>
      </article>
    );
  }

  // Open state – title + chart (or image / placeholder)
  return (
    <article
      className="data-card data-card--open"
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      <header className="data-card__header">
        <div>
          <p className="data-card__eyebrow">{label || 'Data card'}</p>
          <h3 className="data-card__title">{title}</h3>
        </div>
        <span className="data-card__chip">Click to collapse</span>
      </header>

      <div className="data-card__body">
        {chartData ? (
          renderChart()
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="data-card__image"
          />
        ) : (
          <div className="data-card__image data-card__image--placeholder">
            <span>Chart preview</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default DataCard;
