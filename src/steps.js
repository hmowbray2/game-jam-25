export const journeySteps = [
  {
    chapter: "Chapter 1",
    title: "Getting Started with Investing",
    question:
      "You’ve received your first paycheck. What should you do with the money? ",
    answers: [{ emoji: "💰", heading: "Keep money in savings", text: "It's safe, but your money won’t grow much.", points: 0 }, 
      { emoji: "📈", heading: "Invest in stocks", text: "It’s high risk, but there could be high returns.", points: 10 }, 
      { emoji: "📉", heading: "Invest in bonds", text: "It’s lower risk, but you’ll get steady returns. ", points: 20}]
    ,
  },
  {
    chapter: "Chapter 2",
    title: "Stocks, bonds or funds?",
    question: "You want to diversify your investments. What should you choose?",
    answers: [{ emoji: "📈", heading: "Buy individual stocks", text: "It’s high risk, but it could bring high rewards.", points: 0 },
      { emoji: "📊", heading: "Invest in mutual funds", text: "It’s diversified, balancing the risk and return.", points: 10 },
      { emoji: "📉", heading: "Stick to bonds", text: "It’s safe, but the returns are lower over time.", points: 20 }],
  },
  {
    chapter: "Chapter 3",
    title: "Long-Term Growth vs. Quick Wins",
    question:
      "Should you focus on long-term investments or chase quick profits?",
    answers: [{ emoji: "📈", heading: "Invest for long-term growth", text: "You can expect stable growth with lower risk.", points: 0 },
      { emoji: "📊", heading: "Chase short-term high-risk gains", text: "It could bring fast returns, but it’s more volatile.", points: 10 },
      { emoji: "📈📉", heading: "Mix of both", text: "A balance between short-term gains and long-term growth.", points: 20 }],
  },
];
