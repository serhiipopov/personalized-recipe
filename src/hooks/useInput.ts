import { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (enteredValue: string) => {
    setValue(enteredValue);
  }

  return { value, onChange, setValue }
};
