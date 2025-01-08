import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const calculateDenomination = (amount, denominations) => {
  let remainingAmount = amount;
  const result = {};

  denominations.sort((a, b) => b - a).forEach((denomination) => {
    result[denomination] = Math.floor(remainingAmount / denomination);
    remainingAmount %= denomination;
  });

  return result;
};

const Denomination = () => {
  const amount = useSelector((state) => state.amount);
  const denominations = useSelector((state) => state.denominations);
  const result = calculateDenomination(amount, denominations);

  return (
    <div>
      <h2>Denominations</h2>
      {Object.keys(result).map((denomination) => (
        <div key={denomination}>
          {`Denomination ${denomination} unité(s) : ${result[denomination]}`}
        </div>
      ))}
    </div>
  );
};

export default Denomination;
