import { useState } from 'react';

export const useForm = (initialValues = { username: '', password: '' }) => {
    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormValues(initialValues);
    };


    return {
        formValues,
        handleInputChange,
        resetForm,
    };
}
