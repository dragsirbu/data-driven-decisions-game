export const questions = [
  {
    id: 'q-marketing-channel',
    round: 1,
    scenario: 'Marketing Channel',
    impact: 'high',
    title: 'Which marketing channel should we invest in next month?',
    learningFocus: 'Compare channels on CAC and LTV, not just clicks or impressions.',
    prompt:
      'You have a limited budget and must choose where to invest: TikTok ads, LinkedIn ads, or email campaigns to existing leads.',
    options: [
      {
        id: 'A',
        label: 'TikTok ads',
        description: 'High reach, but past leads looked low-intent.',
      },
      {
        id: 'B',
        label: 'LinkedIn ads',
        description: 'Smaller reach, but potentially more qualified users.',
      },
      {
        id: 'C',
        label: 'Email campaigns',
        description: 'Targets users who already know you and may be close to converting.',
      },
    ],
    meta: {
      uses: 'Past channel performance',
      goal: 'Maximize quality sign-ups',
    },
    impacts: {
      'A': {  // TikTok ads
        revenue: -1,    // Low LTV users offset by volume
        userbase: +4,   // High reach, many signups
        runway: -2,     // Expensive to maintain
        popularity: +5  // Good brand visibility
      },
      'B': {  // LinkedIn ads
        revenue: +3,    // High-value customers
        userbase: +2,   // Moderate reach
        runway: -1,     // Expensive but justified by LTV
        popularity: +3  // Professional credibility
      },
      'C': {  // Email campaigns
        revenue: +2,    // Good conversion of warm leads
        userbase: +1,   // Limited to existing contacts
        runway: 0,      // Low cost channel
        popularity: +1  // Limited reach but targeted
      }
    },
    dataCards: [
      {
        label: 'Chart · CAC',
        title: 'Customer Acquisition Cost by Channel',
        imageSrc: 'images/datacards/cac-by-channel.png',
        chartData: {
          type: 'bar',
          xLabel: 'Channel',
          yLabel: 'CAC (USD per new user)',
          series: [
            {
              name: 'CAC',
              data: [
                { channel: 'TikTok', value: 40.0 },
                { channel: 'LinkedIn', value: 95 },
                { channel: 'Email', value: 25 },
              ],
            },
          ],
          notes:
            'TikTok looks cheap per signup, but CAC alone does not tell you if those users are valuable.',
        },
      },
      {
        label: 'Chart · LTV & churn',
        title: 'User LTV and Churn by Channel',
        imageSrc: 'images/datacards/ltv-churn-by-channel.png',
        chartData: {
          type: 'grouped-bar',
          xLabel: 'Channel',
          yLeftLabel: 'LTV (USD per user)',
          yRightLabel: 'Churn rate (%)',
          series: [
            {
              name: 'LTV',
              axis: 'left',
              data: [
                { channel: 'TikTok', value: 35 },
                { channel: 'LinkedIn', value: 120 },
                { channel: 'Email', value: 80 },
              ],
            },
            {
              name: 'Churn rate',
              axis: 'right',
              data: [
                { channel: 'TikTok', value: 18 },
                { channel: 'LinkedIn', value: 7 },
                { channel: 'Email', value: 5 },
              ],
            },
          ],
          notes:
            'LinkedIn and Email users bring much higher lifetime value and churn more slowly than TikTok users.',
        },
      },
      {
        label: 'Survey · Channel fit',
        title: 'Audience–Product Fit Survey Results',
        imageSrc: 'images/datacards/audience-fit-survey.png',
        chartData: {
          type: 'bar',
          xLabel: 'Preferred channel',
          yLabel: '% of target respondents',
          series: [
            {
              name: 'Survey responses',
              data: [
                { channel: 'TikTok', value: 30 }, // “I expect to see tools like this here”
                { channel: 'LinkedIn', value: 45 },
                { channel: 'Email', value: 25 },
              ],
            },
          ],
          notes:
            'Your ideal customers are most likely to notice and trust you on LinkedIn, with Email close behind as a follow-up channel.',
        },
      },
    ],
  },

  {
    id: 'q-pricing-strategy',
    round: 2,
    scenario: 'Pricing Strategy',
    impact: 'high',
    title: 'How should we adjust our pricing next month?',
    learningFocus: 'Use historical revenue and churn data to guide pricing instead of guessing.',
    prompt:
      'Our product is getting traction. We can raise prices, keep them the same, or run a discount campaign for new users.',
    options: [
      {
        id: 'A',
        label: 'Raise prices by 20%',
        description: 'Increase ARPU but risk higher churn if users are sensitive.',
      },
      {
        id: 'B',
        label: 'Keep the current price',
        description: 'Lowest risk, but might leave money on the table.',
      },
      {
        id: 'C',
        label: 'Launch a 20% discount for new users',
        description: 'Boost sign-ups quickly, but may attract lower-LTV customers.',
      },
    ],
    meta: {
      uses: 'Cohort revenue report',
      goal: 'Balance revenue growth and retention',
    },
    impacts: {
      'A': {  // Raise prices by 20%
        revenue: +4,    // Higher ARPU
        userbase: -2,   // Fewer new signups
        runway: +2,     // Improved unit economics
        popularity: -3  // Some negative feedback
      },
      'B': {  // Keep current price
        revenue: +1,    // Natural growth
        userbase: +1,   // Steady acquisition
        runway: 0,      // No change to burn rate
        popularity: +1  // Stable perception
      },
      'C': {  // 20% discount for new users
        revenue: -2,    // Lower ARPU
        userbase: +4,   // Many new signups
        runway: -1,     // Higher CAC to break even
        popularity: +4  // Positive market reception
      }
    },
    tags: ['pricing', 'revenue', 'experiments'],
    dataCards: [
      {
        label: 'Chart · Price vs sign-ups',
        title: 'Sign-ups by Price Point (A/B Test)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'New sign-ups (per week)',
          series: [
            {
              name: 'Sign-ups',
              data: [
                { pricePoint: '$19', value: 320 },
                { pricePoint: '$24', value: 260 },
                { pricePoint: '$29', value: 200 },
              ],
            },
          ],
          notes:
            'Higher prices reduce sign-ups, but this does not tell you how much revenue or churn you get from each cohort.',
        },
      },
      {
        label: 'Chart · ARPU',
        title: 'Average Revenue Per User by Price Point',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'ARPU (USD / month)',
          series: [
            {
              name: 'ARPU',
              data: [
                { pricePoint: '$19', value: 15 },
                { pricePoint: '$24', value: 20 },
                { pricePoint: '$29', value: 25 },
              ],
            },
          ],
          notes:
            'ARPU increases with price, but you still need to consider churn and acquisition volume.',
        },
      },
      {
        label: 'Chart · Revenue & churn',
        title: 'Monthly Revenue and Churn by Price Change',
        imageSrc: '',
        chartData: {
          type: 'grouped-bar',
          yLeftLabel: 'Monthly revenue (USD)',
          yRightLabel: 'Churn rate (%)',
          series: [
            {
              name: 'Revenue',
              axis: 'left',
              data: [
                { scenario: 'Discount -20%', value: 24_000 },
                { scenario: 'No change', value: 26_500 },
                { scenario: 'Increase +20%', value: 28_000 },
              ],
            },
            {
              name: 'Churn rate',
              axis: 'right',
              data: [
                { scenario: 'Discount -20%', value: 6 },
                { scenario: 'No change', value: 7 },
                { scenario: 'Increase +20%', value: 10 },
              ],
            },
          ],
          notes:
            'A price increase raises revenue but also churn. The best choice balances long-term revenue with retention.',
        },
      },
    ],
  },

  {
    id: 'q-feature-prioritization',
    round: 3,
    scenario: 'Feature Prioritization',
    impact: 'medium',
    title: 'Which feature should we build next?',
    learningFocus: 'Align the roadmap with user demand, churn reasons, and segment value.',
    prompt:
      'You have capacity for one major feature: social sharing, advanced analytics, or team collaboration.',
    options: [
      {
        id: 'A',
        label: 'Social sharing',
        description: 'May drive virality if users want to share your product.',
      },
      {
        id: 'B',
        label: 'Advanced analytics dashboard',
        description: 'Adds depth for power users who need more insight from your product.',
      },
      {
        id: 'C',
        label: 'Team collaboration (multi-user accounts)',
        description: 'Could help you land and expand inside larger organizations.',
      },
    ],
    meta: {
      uses: 'Feature request analysis',
      goal: 'Reduce churn by solving the most painful problem',
    },
    impacts: {
      'A': {  // Social sharing
        revenue: +1,    // Small boost from virality
        userbase: +3,   // Viral growth potential
        runway: -1,     // Development costs
        popularity: +4  // High visibility feature
      },
      'B': {  // Advanced analytics
        revenue: +4,    // Highly valued by power users
        userbase: +1,   // Appeals to specific segment
        runway: -2,     // Complex feature to build
        popularity: +2  // Appreciated by core users
      },
      'C': {  // Team collaboration
        revenue: +3,    // Team accounts often pay more
        userbase: +2,   // Expansion within companies
        runway: -1,     // Moderate development effort
        popularity: +3  // Highly requested feature
      }
    },
    tags: ['product', 'features', 'roadmap'],
    dataCards: [
      {
        label: 'Chart · Requests',
        title: 'Feature Requests by Segment (Last 60 Days)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: '# of requests',
          series: [
            {
              name: 'Requests',
              data: [
                { feature: 'Social sharing', value: 25 },
                { feature: 'Advanced analytics', value: 52 },
                { feature: 'Team collaboration', value: 41 },
              ],
            },
          ],
          notes:
            'Advanced analytics and team collaboration are requested more often than social sharing, especially by paying teams.',
        },
      },
      {
        label: 'Chart · Impact vs effort',
        title: 'Impact vs Effort Estimates',
        imageSrc: '',
        chartData: {
          type: 'grouped-bar',
          yLeftLabel: 'Estimated impact (1–10)',
          yRightLabel: 'Engineering effort (story points)',
          series: [
            {
              name: 'Impact',
              axis: 'left',
              data: [
                { feature: 'Social sharing', value: 6 },
                { feature: 'Advanced analytics', value: 9 },
                { feature: 'Team collaboration', value: 8 },
              ],
            },
            {
              name: 'Effort',
              axis: 'right',
              data: [
                { feature: 'Social sharing', value: 8 },
                { feature: 'Advanced analytics', value: 10 },
                { feature: 'Team collaboration', value: 7 },
              ],
            },
          ],
          notes:
            'Team collaboration has high impact with slightly lower effort than advanced analytics, making it attractive for this sprint.',
        },
      },
      {
        label: 'Chart · Churn reasons',
        title: 'Top Churn Reasons (Last 30 Days)',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: '% of churned users mentioning reason',
          series: [
            {
              name: 'Churn reasons',
              data: [
                { reason: 'Missing collaboration', value: 32 },
                { reason: 'Lack of analytics', value: 24 },
                { reason: 'Too hard to use', value: 18 },
                { reason: 'Price', value: 12 },
              ],
            },
          ],
          notes:
            'Collaboration and analytics are driving a big share of churn, which suggests focusing your roadmap there.',
        },
      },
    ],
  },

  {
    id: 'q-onboarding-dropoff',
    round: 4,
    scenario: 'Onboarding Drop-off',
    impact: 'medium',
    title: 'How should we fix onboarding drop-off?',
    learningFocus: 'Use funnel analytics to identify the exact step causing users to leave.',
    prompt:
      'New users are dropping off during onboarding. Should we shorten it, add a tutorial, or move email verification later?',
    options: [
      {
        id: 'A',
        label: 'Shorten onboarding by removing steps',
        description: 'Reduces friction but might remove important context.',
      },
      {
        id: 'B',
        label: 'Add interactive tutorial',
        description: 'Could help users understand value but may add extra time up front.',
      },
      {
        id: 'C',
        label: 'Move email verification later',
        description: 'Delays friction to after users have seen some value in the product.',
      },
    ],
    meta: {
      uses: 'Onboarding funnel drop-off chart',
      goal: 'Increase activation rate without confusing users',
    },
    impacts: {
      'A': {  // Shorten onboarding
        revenue: +2,    // Faster conversion
        userbase: +2,   // Lower drop-off
        runway: 0,      // Minor dev effort
        popularity: -1  // Some users may feel lost
      },
      'B': {  // Interactive tutorial
        revenue: +1,    // Better conversion from trials
        userbase: +3,   // Higher activation rate
        runway: -2,     // Development and maintenance costs
        popularity: +2  // Positive first impression
      },
      'C': {  // Move email verification
        revenue: +3,    // Higher conversion rate
        userbase: +4,   // Much lower drop-off
        runway: -1,     // Some development work
        popularity: +3  // Smoother experience
      }
    },
    tags: ['onboarding', 'activation', 'funnel'],
    dataCards: [
      {
        label: 'Chart · Funnel',
        title: 'Onboarding Funnel by Step',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Users completing step (%)',
          series: [
            {
              name: 'Completion rate',
              data: [
                { step: 'Sign-up', value: 100 },
                { step: 'Profile setup', value: 82 },
                { step: 'Connect data source', value: 55 },
                { step: 'Create first report', value: 38 },
              ],
            },
          ],
          notes:
            'Major drop-off happens when users are asked to connect a data source and create their first report.',
        },
      },
      {
        label: 'Chart · Time to value',
        title: 'Time to First Value by Onboarding Variant',
        imageSrc: '',
        chartData: {
          type: 'bar',
          yLabel: 'Median time to first report (minutes)',
          series: [
            {
              name: 'Onboarding variant',
              data: [
                { variant: 'Current flow', value: 26 },
                { variant: 'Shortened flow', value: 18 },
                { variant: 'Guided tutorial', value: 15 },
              ],
            },
          ],
          notes:
            'The guided tutorial and shortened flow both reduce the time to first value compared to the current onboarding.',
        },
      },
      {
        label: 'Chart · Verification friction',
        title: 'Email Verification Placement Test',
        imageSrc: '',
        chartData: {
          type: 'grouped-bar',
          yLeftLabel: 'Activation rate (%)',
          yRightLabel: 'Support tickets about onboarding',
          series: [
            {
              name: 'Activation rate',
              axis: 'left',
              data: [
                { variant: 'Verify before onboarding', value: 46 },
                { variant: 'Verify after first report', value: 63 },
              ],
            },
            {
              name: 'Support tickets',
              axis: 'right',
              data: [
                { variant: 'Verify before onboarding', value: 34 },
                { variant: 'Verify after first report', value: 21 },
              ],
            },
          ],
          notes:
            'Moving email verification later in the flow increases activation and slightly reduces onboarding-related support.',
        },
      },
    ],
  },
];
