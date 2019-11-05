import React from "react";
import css from "./ubi-vat-calculator.module.css";

const UbiVatCalculator = () => {
  const [income, setIncome] = React.useState(2000);
  const [expense, setExpense] = React.useState(1500);
  const totalMonthlyNetBefore = income - expense;
  const totalMonthlyNetAfter = Number(income) + 1000 - Number(expense) * 1.1;

  return (
    <div className={css.container}>
      <h1>UBI + VAT Calculator</h1>
      <div>
        <span>Enter your monthly after tax income: </span>
        <input
          value={income}
          type="text"
          onChange={e => setIncome(e.target.value)}
        />
      </div>

      <div>
        <span>Enter your monthly expense: </span>
        <input
          value={expense}
          type="text"
          onChange={e => setExpense(e.target.value)}
        />
      </div>

      <h3>{`Before UBI + VAT: ${totalMonthlyNetBefore}`}</h3>
      <h3>{`After UBI + VAT: ${totalMonthlyNetAfter}`}</h3>
    </div>
  );
};

export default UbiVatCalculator;
