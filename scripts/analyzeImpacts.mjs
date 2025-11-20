import { questions } from '../src/data/data.js';

function compute() {
  const items = [];
  for (const q of questions) {
    const impacts = q.impacts || {};
    for (const [optId, vals] of Object.entries(impacts)) {
      const sum = (vals.customerBase || 0) + (vals.customerSatisfaction || 0) + (vals.revenue || 0) + (vals.dataMaturity || 0);
      items.push({ questionId: q.id, optionId: optId, sum, vals });
    }
  }

  items.sort((a, b) => b.sum - a.sum);

  const top5 = items.slice(0, 5);
  const bottom5 = items.slice(-5).reverse();

  const totals = items.map(i => i.sum);
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  const avg = totals.reduce((s, v) => s + v, 0) / totals.length;

  const startTotal = 25 * 4; // 4 KPIs

  const top5sum = top5.reduce((s, i) => s + i.sum, 0);
  const bottom5sum = bottom5.reduce((s, i) => s + i.sum, 0);

  console.log('Options analyzed:', items.length);
  console.log('Per-option sum: min=%d, max=%d, avg=%.2f', min, max, avg.toFixed(2));
  console.log('\nTop 10 options by summed impact:');
  items.slice(0, 10).forEach(i => console.log(`${i.questionId} ${i.optionId} -> ${i.sum}  ${JSON.stringify(i.vals)}`));

  console.log('\nBottom 10 options by summed impact:');
  items.slice(-10).reverse().forEach(i => console.log(`${i.questionId} ${i.optionId} -> ${i.sum}  ${JSON.stringify(i.vals)}`));

  console.log('\nTop 5 total sum impact (best possible across 5 distinct options):', top5sum);
  console.log('Bottom 5 total sum impact (worst possible across 5 distinct options):', bottom5sum);
  console.log('\nIf starting total =', startTotal + ', then after 5 questions:');
  console.log(' Best-case total =', startTotal + top5sum);
  console.log(' Worst-case total =', startTotal + bottom5sum);

  console.log('\nSuggested thresholds for 5-question game (based on above ranges):');
  console.log(' - Win threshold (sum) suggestion: >=', Math.round(startTotal + top5sum * 0.6));
  console.log(' - Loss threshold (sum) suggestion: <=', Math.round(startTotal + bottom5sum * 0.6));
}

compute();
