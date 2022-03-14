import { useEffect, useState } from 'react';
import { validateFormUser } from '../tools/validateForm';

export const useFormUser = (initialForm, usersDb, createUser, updateUser, userToEdit, setUserToEdit) => {
    const [form, setForm] = useState(initialForm);
    const [reset, setReset] = useState(false)

    useEffect(() => {
        if (userToEdit) {
            setForm(userToEdit);
        } else {
            setForm(initialForm);
        }
    }, [userToEdit, initialForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setUserToEdit(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateFormUser(form, usersDb,userToEdit) === true) {
            if (form.estado === null) {
                createUser(form);
                handleReset();
                setReset(!reset)
            } else {
                updateUser(form);
            }    
        }
    };

    return {
        form,
        reset,
        handleChange,
        handleSubmit
    }
}