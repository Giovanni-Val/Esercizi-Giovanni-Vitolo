import { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Questo input ha autofocus." />
    </div>
  );
};

export default FocusableInput;
