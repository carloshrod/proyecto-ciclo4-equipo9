import { useEffect, useState } from 'react';
import { generatePassword } from '../tools/generatePassword';
import { validateFormUser } from '../tools/validateForm';

const defaultAvatar = process.env.REACT_APP_DEFAULT_AVATAR;

export const useFormUser = (initialForm, usersDb, createUser, updateUser, userToEdit, setUserToEdit, deleteAvatar) => {
    const [form, setForm] = useState(initialForm);
    const [file, setFile] = useState("");
    const [imgUrl, setImgUrl] = useState("")
    const [pathImage, setPathImage] = useState(defaultAvatar)
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (userToEdit) {
            setForm(userToEdit);
            setPathImage(form.imgUrl || defaultAvatar)
            setImgUrl(form.imgUrl)
        } else {
            setForm(initialForm);
        }
    }, [userToEdit, initialForm, form.imgUrl]);

    const onChangeFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const avatar = e.target.files[0];
            if (avatar.type.includes("image")) {
                const reader = new FileReader()
                reader.readAsDataURL(avatar)
                reader.onload = function load() {
                    setPathImage(reader.result)
                }
                setFile(avatar)
            }
        }
    }

    const handleDeleteAvatar = (e) => {
        setFile("")
        setImgUrl("borrar")
        setPathImage(defaultAvatar)
    }

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

        if (validateFormUser(form, usersDb, userToEdit) === true) {
            if (form.estado === null) {
                const formData = new FormData();
                formData.append("estado", 1)
                formData.append("nombres", form.nombres)
                formData.append("apellidos", form.apellidos)
                formData.append("tipo_doc", form.tipo_doc)
                formData.append("nro_doc", form.nro_doc)
                formData.append("email", form.email)
                formData.append("password", generatePassword(8))
                formData.append("telefono", form.telefono)
                formData.append("direccion", form.direccion)
                formData.append("rol", 2)
                formData.append("avatar", file)
                createUser(formData);
                handleReset();
                setReset(!reset);
            } else {
                const formData = new FormData();
                formData.append("nombres", form.nombres)
                formData.append("apellidos", form.apellidos)
                formData.append("tipo_doc", form.tipo_doc)
                formData.append("nro_doc", form.nro_doc)
                formData.append("email", form.email)
                formData.append("telefono", form.telefono)
                formData.append("direccion", form.direccion)
                formData.append("imgUrl", imgUrl)
                formData.append("avatar", file)
                updateUser(formData);
                setFile("");
            }
        }
    };

    return {
        form,
        pathImage,
        reset,
        handleChange,
        onChangeFile,
        handleDeleteAvatar,
        handleSubmit
    }
}