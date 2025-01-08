import React from 'react';
import { useDispatch } from 'react-redux';

const AmountInput = () => {
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    dispatch({ type: 'SET_AMOUNT', payload: parseInt(e.target.value, 10) });
  };

  return (
    <div>
      <label>
        Amount:
        <input type="number" onChange={handleAmountChange} />
      </label>
    </div>
  );
};

export default AmountInput;
