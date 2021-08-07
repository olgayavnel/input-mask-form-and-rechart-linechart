import { useState } from 'react';

// named function. The name is useFormState()
function useFormState(initialFormRows) {
  const [costs, setCosts] = useState(initialFormRows);

  const handleChange = (event) => {
    const newCosts = [...costs];
    const value = event.target.value;

    // validation for that it's number. If it is number, it will go on
    if (isNaN(value)) {
      return false;
    }

    // decimal point length validation
    if (decimalCount(value) > 2) {
      return false;
    }

    const itemIndex = event.target.dataset.id;
    // newCosts is an array and we select an index of this array
    const currentCost = newCosts[itemIndex];

    currentCost['status'] = '#3F8CB0';
    currentCost[event.target.name] = value;

    setCosts(newCosts);
  };

  // calculating total costs, format to the 2 decimal places
  const getTotalCosts = () => {
    return costs
      .reduce((total, item) => {
        return total + Number(item.price);
      }, 0)
      .toFixed(2);
  };

  return { costs, setCosts, handleChange, getTotalCosts };
}

// anonymous function doesn't have access to the constructor and can't use this keyword.
// Lambdas are usually passed as data.
// The function to calculate the length of the number after dot
const decimalCount = (num) => {
  const numStr = String(num);
  if (numStr.includes('.')) {
    // we only return 2 decimal places after '.', e.g. 89.09 ['89', '09'] -> '89' is [0], '09' is [1].
    // return false if more than 2, meaning 2 is not included. (In the function above)
    // we slit it on 1 and we only select 1 and say legth of this 1 89.98 [98] = [1].length
    return numStr.split('.')[1].length;
  }
  return 0;
};

export default useFormState;
