import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
  const { name, value } = e.target;

  const keys = name.split('.');
  if (keys.length === 2) {
    setValues((prevValues) => ({
      ...prevValues,
      [keys[0]]: {
        ...prevValues[keys[0]],
        [keys[1]]: value,
      },
    }));
  } else {
    setValues({
      ...values,
      [name]: value,
    });
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

