const formatAmount = (amnt) => {
  return `$${(Math.round(amnt * 100) / 100).toFixed(2)}`.toString();
};

export default formatAmount;
