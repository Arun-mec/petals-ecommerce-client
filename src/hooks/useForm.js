import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    console.log(name, value)
    const keys = name.split('.');
    console.log(keys)
    if (keys.length === 2) {
      setValues({
         ...values,
        [keys[0]]: {
          ...values[keys[0]],
          [keys[1]]: value,
        },
      })
    } else {
      setValues({
        ...values,
        name: value
      })
    }
  };

  const resetForm = () => setValues(initialValues);

  const setFormValues = (formValues) => {
    setValues(formValues);
  }

  return {
    values,
    handleChange,
    resetForm,
    setFormValues
  };
}

export default useForm;

