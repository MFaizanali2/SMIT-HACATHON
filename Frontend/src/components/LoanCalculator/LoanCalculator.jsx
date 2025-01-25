import React, { useState } from "react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTenure, setLoanTenure] = useState(12);
  const [firstDeposit, setFirstDeposit] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(10000);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [paymentInput, setPaymentInput] = useState("");

  const calculateLoan = () => {
    const adjustedAmount = loanAmount - firstDeposit;
    const balance = adjustedAmount > 0 ? adjustedAmount : 0;
    setRemainingBalance(balance);

    if (loanTenure > 0) {
      setMonthlyPayment((balance / loanTenure).toFixed(2));
    } else {
      setMonthlyPayment(0);
    }
  };

  const handlePayment = () => {
    const payment = parseFloat(paymentInput) || 0;
    const newBalance = remainingBalance - payment;
    setRemainingBalance(newBalance > 0 ? newBalance : 0);
    setPaymentInput(""); 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Loan Calculator</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>Loan Amount: </label>
        <input type="number" value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}style={{ marginLeft: "10px" }}/>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Loan Tenure (Months): </label>
        <input type="number" value={loanTenure}
          onChange={(e) => setLoanTenure(parseInt(e.target.value) || 0)} style={{ marginLeft: "10px" }}/>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>First Deposit: </label>
        <input type="number" value={firstDeposit}
          onChange={(e) => setFirstDeposit(parseFloat(e.target.value) || 0)} style={{ marginLeft: "10px" }}/>
      </div>
      <button onClick={calculateLoan} style={{ marginTop: "10px", padding: "5px 15px", backgroundColor: "#007BFF",
        color: "#FFF", border: "none", cursor: "pointer", }}>
        Calculate Loan</button>
      <h2 style={{ marginTop: "20px" }}>Your Balance: ${remainingBalance.toFixed(2)}</h2>
      <h2>Monthly Payment: ${monthlyPayment}</h2>
      <div style={{ marginTop: "20px" }}>
        <label>Pay Loan: </label>
        <input type="number" value={paymentInput} onChange={(e) => setPaymentInput(e.target.value)}
          style={{ marginLeft: "10px" }} />
        <button
          onClick={handlePayment} style={{marginLeft: "10px",padding: "5px 10px",backgroundColor: "#28A745",
            color: "#FFF",border: "none",cursor: "pointer",}}>
          Pay Now
        </button>
      </div>
      <h3 style={{ marginTop: "20px" }}>Remaining Amount: ${remainingBalance.toFixed(2)}</h3>
    </div>
  );
};

export default LoanCalculator;
