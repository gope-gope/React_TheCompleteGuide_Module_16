import { useState } from "react";

const useInput2 = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const showError = isTouched && !valueIsValid;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    showError,
    valueChangeHandler,
    isTouchedHandler,
    reset,
  };
};

export default useInput2;
