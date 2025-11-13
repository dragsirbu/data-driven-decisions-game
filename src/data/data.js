export const questions = [
  {
    id: 'q-discount-campaign',
    round: 5,
    scenario: 'Marketing & Growth',
    impact: 'high',
    title: 'Should we run a discount campaign to boost user growth?',
    learningFocus:
      'Compare short-term acquisition boosts with long-term revenue and brand effects.',
    prompt: 'A limited-time discount could drive sign-ups, but might hurt revenue and positioning.',
    options: [
      { id: 'A', label: 'Yes', description: 'Launch a site-wide discount.' },
      { id: 'B', label: 'No', description: 'Keep price as-is; focus on sustainable growth.' },
    ],
    meta: { uses: 'Cohort & price elasticity', goal: 'Balanced growth' },
    impacts: {
      A: { customerBase: +10, customerSatisfaction: +5, revenue: -10, dataMaturity: 0 },
      B: { customerBase: -5, customerSatisfaction: +5, revenue: +10, dataMaturity: +5 },
    },
    dataCards: [
      {
        label: 'Chart · Elasticity',
        title: 'Sign-ups vs Discount Depth',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'New sign-ups (weekly)',
          series: [
            {
              name: 'Sign-ups',
              data: [
                { discount: '0%', value: 620 },
                { discount: '10%', value: 780 },
                { discount: '20%', value: 980 },
              ],
            },
          ],
          notes: 'Deeper discounts drive more sign-ups, but not necessarily healthy revenue.',
        },
      },
      {
        label: 'Chart · ARPU & churn',
        title: 'ARPU and Churn by Discount',
        imageSrc: '',
        chartData: {
          type: 'grouped-bar',
          yLeftLabel: 'ARPU (USD/month)',
          yRightLabel: 'Churn (%)',
          series: [
            {
              name: 'ARPU',
              axis: 'left',
              data: [
                { discount: '0%', value: 27 },
                { discount: '10%', value: 24 },
                { discount: '20%', value: 20 },
              ],
            },
            {
              name: 'Churn',
              axis: 'right',
              data: [
                { discount: '0%', value: 7 },
                { discount: '10%', value: 9 },
                { discount: '20%', value: 12 },
              ],
            },
          ],
          notes: 'Discount cohorts pay less and churn faster.',
        },
      },
      {
        label: 'Chart · Payback',
        title: 'Marketing Payback Period by Discount',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Months to pay back CAC',
          series: [
            {
              name: 'Payback',
              data: [
                { discount: '0%', value: 5.0 },
                { discount: '10%', value: 6.2 },
                { discount: '20%', value: 7.8 },
              ],
            },
          ],
          notes: 'Deep discounts lengthen payback time and hurt runway.',
        },
      },
    ],
  },

  {
    id: 'q-onboarding-complaints',
    round: 6,
    scenario: 'Product Development',
    impact: 'high',
    title: 'Users complain about onboarding. Should we redesign or launch a tutorial?',
    learningFocus: 'Use funnel and qualitative data to remove friction without losing context.',
    prompt: 'Feedback shows confusion in the first session. Decide whether to intervene now.',
    options: [
      { id: 'A', label: 'Yes', description: 'Redesign / add tutorial now.' },
      { id: 'B', label: 'No', description: 'Defer; ship other priorities first.' },
    ],
    meta: { uses: 'Onboarding funnel + user interviews', goal: 'Increase activation' },
    impacts: {
      A: { customerBase: +5, customerSatisfaction: +10, revenue: +10, dataMaturity: +5 },
      B: { customerBase: -5, customerSatisfaction: +5, revenue: +5, dataMaturity: +5 },
    },
    dataCards: [
      {
        label: 'Chart · Funnel',
        title: 'Onboarding Funnel Completion',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Users completing step (%)',
          series: [
            {
              name: 'Completion',
              data: [
                { step: 'Sign-up', value: 100 },
                { step: 'Profile', value: 84 },
                { step: 'Connect data', value: 58 },
                { step: 'First value', value: 41 },
              ],
            },
          ],
          notes: 'Largest drop at “Connect data” and “First value”.',
        },
      },
      {
        label: 'Chart · Variant test',
        title: 'Activation Rate by Onboarding Variant',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Activation rate (%)',
          series: [
            {
              name: 'Activation',
              data: [
                { variant: 'Current', value: 47 },
                { variant: 'Tutorial', value: 61 },
                { variant: 'Redesign', value: 58 },
              ],
            },
          ],
          notes: 'Interactive tutorial outperforms a pure redesign in early tests.',
        },
      },
      {
        label: 'Chart · Time to value',
        title: 'Median Time to First Report',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Minutes',
          series: [
            {
              name: 'TTV',
              data: [
                { variant: 'Current', value: 27 },
                { variant: 'Tutorial', value: 16 },
                { variant: 'Redesign', value: 18 },
              ],
            },
          ],
          notes: 'Reducing time-to-value increases activation and satisfaction.',
        },
      },
    ],
  },

  {
    id: 'q-feature-a-vs-b',
    round: 7,
    scenario: 'Product Development',
    impact: 'high',
    title: 'Should we build feature A (for large clients) or feature B (for general users)?',
    learningFocus: 'Map feature impact to segments, revenue concentration, and churn reasons.',
    prompt: 'Choice between enterprise upsell (A) and broad adoption (B).',
    options: [
      {
        id: 'A',
        label: 'Feature A (large clients)',
        description: 'Enterprise capability; deeper accounts.',
      },
      {
        id: 'B',
        label: 'Feature B (general users)',
        description: 'Broad appeal; improves daily usability.',
      },
    ],
    meta: { uses: 'Feature requests by segment + churn reasons', goal: 'Revenue + retention' },
    impacts: {
      A: { customerBase: -5, customerSatisfaction: +5, revenue: +10, dataMaturity: +5 },
      B: { customerBase: +10, customerSatisfaction: +10, revenue: +5, dataMaturity: +5 },
    },
    dataCards: [
      {
        label: 'Chart · Requests by segment',
        title: 'Feature Requests (SMB vs Enterprise)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: '# of requests',
          series: [
            {
              name: 'Requests',
              data: [
                { segment: 'SMB – Feature B', value: 88 },
                { segment: 'Enterprise – Feature A', value: 52 },
              ],
            },
          ],
          notes: 'Broader SMB demand for Feature B; Feature A addresses fewer but larger accounts.',
        },
      },
      {
        label: 'Chart · Deal impact',
        title: 'Projected Deal Size by Feature',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Avg. ACV uplift (USD)',
          series: [
            {
              name: 'ACV uplift',
              data: [
                { feature: 'Feature A', value: 18000 },
                { feature: 'Feature B', value: 6500 },
              ],
            },
          ],
          notes: 'Feature A unlocks larger enterprise contracts.',
        },
      },
      {
        label: 'Chart · Churn reasons',
        title: 'Top Churn Reasons (Last 60 Days)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: '% of churned users mentioning reason',
          series: [
            {
              name: 'Reasons',
              data: [
                { reason: 'Missing collaboration (B)', value: 28 },
                { reason: 'Missing analytics (B)', value: 21 },
                { reason: 'Missing enterprise controls (A)', value: 14 },
              ],
            },
          ],
          notes: 'General-user gaps (Feature B) appear more frequently in churn interviews.',
        },
      },
    ],
  },

  {
    id: 'q-raise-price-10',
    round: 8,
    scenario: 'Pricing & Revenue',
    impact: 'high',
    title: 'Should we raise our subscription price by 10%?',
    learningFocus: 'Balance ARPU, churn risk, and elasticity by segment.',
    prompt: 'Revenue growth vs. retention and brand perception.',
    options: [
      { id: 'A', label: 'Yes', description: 'Increase price now.' },
      { id: 'B', label: 'No', description: 'Hold price; optimize conversion.' },
    ],
    meta: { uses: 'Elasticity curves & cohort churn', goal: 'Sustainable monetization' },
    impacts: {
      A: { customerBase: -5, customerSatisfaction: -5, revenue: +10, dataMaturity: +5 },
      B: { customerBase: +5, customerSatisfaction: +5, revenue: -5, dataMaturity: 0 },
    },
    dataCards: [
      {
        label: 'Chart · Elasticity',
        title: 'Conversion vs Price (Last Tests)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Checkout conversion (%)',
          series: [
            {
              name: 'Conversion',
              data: [
                { price: '$24', value: 7.2 },
                { price: '$26.4 (+10%)', value: 6.6 },
              ],
            },
          ],
          notes: 'Slight drop in conversion within acceptable range.',
        },
      },
      {
        label: 'Chart · ARPU',
        title: 'ARPU by Price',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'USD / month',
          series: [
            {
              name: 'ARPU',
              data: [
                { price: '$24', value: 20.8 },
                { price: '$26.4', value: 22.9 },
              ],
            },
          ],
          notes: 'ARPU lift offsets small conversion loss.',
        },
      },
      {
        label: 'Chart · Cohort churn',
        title: 'Churn by Price Cohort',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: '30-day churn (%)',
          series: [
            {
              name: 'Churn',
              data: [
                { cohort: '$24', value: 7.4 },
                { cohort: '$26.4', value: 8.2 },
              ],
            },
          ],
          notes: 'Slight churn increase after price rise.',
        },
      },
    ],
  },

  {
    id: 'q-freemium-plan',
    round: 9,
    scenario: 'Pricing & Revenue',
    impact: 'high',
    title: 'Should we offer a freemium plan to attract more users?',
    learningFocus: 'Consider conversion to paid, support costs, and brand positioning.',
    prompt: 'Freemium can widen the funnel but may cannibalize revenue.',
    options: [
      { id: 'A', label: 'Yes', description: 'Introduce a limited free tier.' },
      { id: 'B', label: 'No', description: 'Keep only paid tiers.' },
    ],
    meta: { uses: 'Free→Paid conversion + CAC/LTV', goal: 'Healthy funnel with monetization' },
    impacts: {
      A: { customerBase: +10, customerSatisfaction: -5, revenue: -5, dataMaturity: 0 },
      B: { customerBase: -5, customerSatisfaction: +5, revenue: +10, dataMaturity: +5 },
    },
    dataCards: [
      {
        label: 'Chart · Funnel size',
        title: 'Sign-ups With vs Without Freemium',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Monthly sign-ups',
          series: [
            {
              name: 'Sign-ups',
              data: [
                { model: 'Paid only', value: 2400 },
                { model: 'Freemium', value: 5200 },
              ],
            },
          ],
          notes: 'Freemium meaningfully widens the top of the funnel.',
        },
      },
      {
        label: 'Chart · Conversion',
        title: 'Free→Paid Conversion (90-day)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Conversion rate (%)',
          series: [
            {
              name: 'Conversion',
              data: [
                { model: 'Free→Paid', value: 6.5 },
                { model: 'Trial→Paid', value: 14.2 },
              ],
            },
          ],
          notes: 'Free cohorts convert at lower rates than time-boxed trials.',
        },
      },
      {
        label: 'Chart · Support load',
        title: 'Support Tickets per 1k Users',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Tickets / 1k users',
          series: [
            {
              name: 'Tickets',
              data: [
                { model: 'Paid only', value: 18 },
                { model: 'Freemium', value: 27 },
              ],
            },
          ],
          notes: 'Freemium increases support surface area.',
        },
      },
    ],
  },

  {
    id: 'q-analyst-vs-marketing',
    round: 10,
    scenario: 'Operations & Strategy',
    impact: 'medium',
    title: 'We have limited funds. Should we hire a data analyst or expand the marketing team?',
    learningFocus: 'Short-term growth vs. building data capability.',
    prompt: 'Choose the role that best advances our goals this quarter.',
    options: [
      {
        id: 'A',
        label: 'Hire a data analyst',
        description: 'Improve analytics & experiment quality.',
      },
      {
        id: 'B',
        label: 'Expand the marketing team',
        description: 'Increase acquisition capacity now.',
      },
    ],
    meta: { uses: 'Headcount ROI model', goal: 'ROI and capability building' },
    impacts: {
      A: { customerBase: 0, customerSatisfaction: 0, revenue: +5, dataMaturity: +10 },
      B: { customerBase: +10, customerSatisfaction: 0, revenue: +5, dataMaturity: -5 },
    },
    dataCards: [
      {
        label: 'Chart · CAC trend',
        title: 'CAC by Channel (Before/After Analyst)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'CAC (USD)',
          series: [
            {
              name: 'Before analyst',
              data: [
                { channel: 'Paid social', value: 88 },
                { channel: 'Search', value: 64 },
              ],
            },
            {
              name: 'After analyst',
              data: [
                { channel: 'Paid social', value: 74 },
                { channel: 'Search', value: 55 },
              ],
            },
          ],
          notes: 'Better instrumentation and targeting reduce CAC over time.',
        },
      },
      {
        label: 'Chart · Attribution quality',
        title: 'Share of “Unknown Source” Sign-ups',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: '% of sign-ups',
          series: [
            {
              name: 'Attribution gap',
              data: [
                { period: 'Now', value: 22 },
                { period: 'With analyst', value: 8 },
              ],
            },
          ],
          notes: 'Analyst reduces unknown attributions – improves decision quality.',
        },
      },
      {
        label: 'Chart · Lead volume',
        title: 'Monthly Marketing Qualified Leads',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'MQLs',
          series: [
            {
              name: 'MQLs',
              data: [
                { team: 'Current team', value: 420 },
                { team: 'Expanded team', value: 620 },
              ],
            },
          ],
          notes: 'Headcount directly increases MQL volume but not necessarily efficiency.',
        },
      },
    ],
  },

  {
    id: 'q-expand-new-region',
    round: 11,
    scenario: 'Operations & Strategy',
    impact: 'medium',
    title: 'Should we expand to a new region based on recent traction?',
    learningFocus: 'Evaluate signal strength; avoid premature expansion.',
    prompt: 'Early traction is promising but evidence is limited.',
    options: [
      { id: 'A', label: 'Yes', description: 'Enter the new region now.' },
      { id: 'B', label: 'No', description: 'Wait for stronger signal and readiness.' },
    ],
    meta: { uses: 'Market sizing + unit economics by region', goal: 'Disciplined expansion' },
    impacts: {
      A: { customerBase: +10, customerSatisfaction: +5, revenue: +5, dataMaturity: -5 },
      B: { customerBase: -5, customerSatisfaction: +5, revenue: -5, dataMaturity: +5 },
    },
    dataCards: [
      {
        label: 'Chart · Signal strength',
        title: 'Weekly Sign-ups in New Region',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Sign-ups',
          series: [
            {
              name: 'Sign-ups',
              data: [
                { week: 'W1', value: 90 },
                { week: 'W2', value: 120 },
                { week: 'W3', value: 115 },
                { week: 'W4', value: 160 },
              ],
            },
          ],
          notes: 'Upward trend, but small absolute numbers.',
        },
      },
      {
        label: 'Chart · Unit economics',
        title: 'CAC & ARPU by Region',
        imageSrc: '',
        chartData: {
          type: 'grouped-bar',
          yLeftLabel: 'CAC (USD)',
          yRightLabel: 'ARPU (USD)',
          series: [
            {
              name: 'CAC',
              axis: 'left',
              data: [
                { region: 'Home', value: 66 },
                { region: 'New', value: 92 },
              ],
            },
            {
              name: 'ARPU',
              axis: 'right',
              data: [
                { region: 'Home', value: 24 },
                { region: 'New', value: 19 },
              ],
            },
          ],
          notes: 'Worse unit economics in the new region right now.',
        },
      },
      {
        label: 'Chart · Ops readiness',
        title: 'Localization & Support Readiness Score',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Score (0–100)',
          series: [
            {
              name: 'Readiness',
              data: [
                { area: 'Localization', value: 62 },
                { area: 'Support hours', value: 55 },
                { area: 'Payments', value: 71 },
              ],
            },
          ],
          notes: 'Several readiness gaps increase launch risk.',
        },
      },
    ],
  },

  {
    id: 'q-conflicting-datasets',
    round: 12,
    scenario: 'Reflection & Meta-Decisions',
    impact: 'medium',
    title: 'Some data sources conflict. Which dataset should we trust?',
    learningFocus: 'Assess data lineage, documentation, and recency before acting.',
    prompt: 'One dataset is larger and well-documented; another is smaller but more recent.',
    options: [
      {
        id: 'A',
        label: 'Larger, well-documented dataset',
        description: 'Prioritize reliability and lineage.',
      },
      {
        id: 'B',
        label: 'Smaller but recent dataset',
        description: 'Prioritize recency and speed.',
      },
      {
        id: 'C',
        label: 'Combine both after validation',
        description: 'Reconcile and document differences.',
      },
    ],
    meta: { uses: 'Data governance checklist', goal: 'Trustworthy decisions' },
    impacts: {
      A: { customerBase: 0, customerSatisfaction: 0, revenue: 0, dataMaturity: +10 },
      B: { customerBase: 0, customerSatisfaction: 0, revenue: 0, dataMaturity: +5 },
      C: { customerBase: 0, customerSatisfaction: 0, revenue: +10, dataMaturity: +10 },
    },
    dataCards: [
      {
        label: 'Chart · Coverage',
        title: 'Row Coverage by Dataset',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Rows (millions)',
          series: [
            {
              name: 'Coverage',
              data: [
                { dataset: 'Well-documented', value: 12.4 },
                { dataset: 'Recent small', value: 2.1 },
              ],
            },
          ],
          notes: 'Larger dataset has broader coverage and history.',
        },
      },
      {
        label: 'Chart · Data quality',
        title: 'Quality Checks (Failures per 10k Rows)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Failures / 10k rows',
          series: [
            {
              name: 'DQ failures',
              data: [
                { dataset: 'Well-documented', value: 1.2 },
                { dataset: 'Recent small', value: 3.9 },
              ],
            },
          ],
          notes: 'Higher failure rate on the recent dataset without full lineage.',
        },
      },
      {
        label: 'Chart · Freshness',
        title: 'Data Freshness (Hours since last update)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Hours',
          series: [
            {
              name: 'Freshness',
              data: [
                { dataset: 'Well-documented', value: 8 },
                { dataset: 'Recent small', value: 2 },
              ],
            },
          ],
          notes: 'Recent dataset is fresher, but needs validation before combining.',
        },
      },
    ],
  },

  {
    id: 'q-time-vs-action',
    round: 13,
    scenario: 'Reflection & Meta-Decisions',
    impact: 'medium',
    title: 'How much time should we spend collecting data before acting?',
    learningFocus: 'Trade off analysis paralysis vs. premature action.',
    prompt: 'Decide between speed and rigor given current uncertainty.',
    options: [
      {
        id: 'A',
        label: 'Spend more time collecting data',
        description: 'Push for higher confidence before acting.',
      },
      {
        id: 'B',
        label: 'Act quickly with limited data',
        description: 'Move fast and adjust with new data.',
      },
    ],
    meta: { uses: 'Decision quality vs. speed framework', goal: 'Right speed with evidence' },
    impacts: {
      A: { customerBase: -5, customerSatisfaction: -5, revenue: -5, dataMaturity: +10 },
      B: { customerBase: +5, customerSatisfaction: -5, revenue: +10, dataMaturity: -5 },
    },
    dataCards: [
      {
        label: 'Chart · Confidence',
        title: 'Decision Confidence vs Analysis Time',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Estimated confidence (%)',
          series: [
            {
              name: 'Confidence',
              data: [
                { approach: 'Quick decision', value: 58 },
                { approach: 'More analysis', value: 78 },
              ],
            },
          ],
          notes: 'More analysis increases confidence but delays impact.',
        },
      },
      {
        label: 'Chart · Opportunity cost',
        title: 'Projected Revenue Lost to Delay',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'USD (per month)',
          series: [
            {
              name: 'Lost revenue',
              data: [
                { approach: 'Quick decision', value: 0 },
                { approach: 'More analysis', value: 18000 },
              ],
            },
          ],
          notes: 'Waiting has a measurable cost while competitors move.',
        },
      },
      {
        label: 'Chart · Error rate',
        title: 'Reversal / Rework Probability',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Probability (%)',
          series: [
            {
              name: 'Reversal risk',
              data: [
                { approach: 'Quick decision', value: 32 },
                { approach: 'More analysis', value: 18 },
              ],
            },
          ],
          notes: 'Fast decisions are more likely to need reversal or rework.',
        },
      },
    ],
  },
];
