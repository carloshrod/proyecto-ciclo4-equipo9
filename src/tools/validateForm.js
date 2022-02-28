import { toast } from "react-toastify";

let regexText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexNros = /^[0-9]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
let regexTel = /^[(][1-9][0-9]{2}[)]\s[1-9][0-9]{2}[-][0-9]{4}$/
let regexPass = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])((?=.*\W)|(?=.*_)).*$/;
let regexDec = /^[1-9]([0-9]{1,2})?(([,][0-9]{3})+)?[.][0-9]{2}$/
let regexCod = /^[P][D][-][0-9]{9}$/
let regexCur = /^[1-9][0-9.]*$/
let regexDir = /^(([C][a][l][l][e]\s)|([C][a][r][r][e][r][a]\s))[1-9]([0-9]+)?([a-z])?\s[#]\s[1-9]([0-9]+)?([a-z])?\s[-]\s[1-9]([0-9]+)?$/

export const validateFormUser = (form) => {
    if (!form.nombres || !form.apellidos || !form.tipo_doc ||
        !form.nro_doc || !form.email || !form.telefono || !form.direccion) {
        toast.error("Todos los campos son requeridos!!!")
        return false;
    }

    if (!regexText.test(form.nombres) || !regexText.test(form.apellidos) || !regexNros.test(form.nro_doc) ||
        !regexEmail.test(form.email) || !regexTel.test(form.telefono) || !regexDir.test(form.direccion)) {
        toast.error("Por favor, revise que todos los datos tengan el formato correcto!!!")
        return false;
    }

    return true;
}

export const validateFormRegister = (form, terms) => {
    if (!form.nombres || !form.apellidos || !form.tipo_doc ||
        !form.nro_doc || !form.email || !form.password || !form.telefono || !form.direccion) {
        toast.error("Todos los campos son requeridos!!!")
        return false;
    }

    if (!regexText.test(form.nombres) || !regexText.test(form.apellidos) || !regexNros.test(form.nro_doc) ||
        !regexEmail.test(form.email) || !regexPass.test(form.password) || !regexTel.test(form.telefono) ||
        !regexDir.test(form.direccion)) {
        toast.error("Por favor, revise que todos los datos tengan el formato correcto!!!")
        return false;
    }

    if (!terms) {
        toast.error("Para crear tu cuenta debes aceptar los términos y condiciones!!!")
        return false;
    }

    return true;
}

export const validateFormChangePassword = (form) => {
    if (!form.currentPassword || !form.newPassword || !form.renewPassword) {
        toast.error("Todos los campos son requeridos!!!")
        return false;
    }

    if (!regexPass.test(form.newPassword)) {
        toast.error("Por favor, revisa que la contraseña tenga el formato correcto!!!")
        return false;
    }

    if (form.newPassword !== form.renewPassword) {
        toast.error("Las contraseñas no coinciden!!!");
        return false;
    }

    return true;
}

export const validateFormNewPassword = (form) => {
    if (!form.newPassword || !form.renewPassword) {
        toast.error("Todos los campos son requeridos!!!")
        return false;
    }

    if (!regexPass.test(form.newPassword)) {
        toast.error("Por favor, revisa que la contraseña tenga el formato correcto!!!")
        return false;
    }

    if (form.newPassword !== form.renewPassword) {
        toast.error("Las contraseñas no coinciden!!!");
        return false;
    }

    return true;
}

export const validateFormPredio = (form) => {
    if (!form.codigo || !form.nom_prop || !form.doc_prop || !form.area_c ||
        !form.area_t | !form.valor_predio || !form.direccion_predio || !form.barrio) {
        toast.error("Todos los campos son requeridos!!!")
        return false;
    }

    // !form.fecha_pago || !form.fecha_pago2 || !form.fecha_pago3

    if (!regexCod.test(form.codigo) || !regexText.test(form.nom_prop) || !regexNros.test(form.doc_prop) ||
        !regexDec.test(form.area_c) || !regexDec.test(form.area_t) || !regexCur.test(form.valor_predio) ||
        !regexDir.test(form.direccion_predio) || !regexText.test(form.barrio)
    ) {
        toast.error("Por favor, revise que todos los datos tengan el formato correcto!!!")
        return false;
    }

    if (parseFloat(form.area_c) >= parseFloat(form.area_t)) {
        toast.error("El area construída debe ser menor o igual al area total!!!")
        return false;
    }

    return true;
}

