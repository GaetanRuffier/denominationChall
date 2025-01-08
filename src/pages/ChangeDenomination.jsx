import React from 'react';
import { useDispatch } from 'react-redux';

const ChangeDenomination = () => {
  const dispatch = useDispatch();

  const handleSetDenomination = (newDenominations) => {
    dispatch({ type: 'SET_DENOMINATIONS', payload: newDenominations });
  };

  return (
    <div>
      <h1>Change Denomination</h1>
      <button onClick={() => handleSetDenomination([1, 5, 10, 20, 50, 100])}>
        Set to 1, 5, 10, 20, 50, 100
      </button>
      <button onClick={() => handleSetDenomination([1, 2, 5, 10, 20, 30, 50])}>
        Set to 1, 2, 5, 10, 20, 30, 50
      </button>
      <button onClick={() => handleSetDenomination([1, 10, 20, 30, 40, 50, 100])}>
        Set to 1, 10, 20, 30, 40, 50, 100
      </button>
    </div>
  );
};

export default ChangeDenomination;
