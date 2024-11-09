import { Field, useField, useFormikContext } from "formik"
import React from "react"

interface Props<T> {
    name: keyof T; 
    label: string
    type: string
    placeholder?: string
}

const Input = <T,> ({ name, label, type, placeholder }: Props<T>) => {
    const [field] = useField(name as string);
    const { errors, touched } = useFormikContext<T>();

    return (
        <>
        {label && <label className="text-black text-base font-medium">{label}</label>}
        <Field id={name} {...field} type={type} className="bg-fuchsia-100 px-4 py-3 rounded-lg placeholder-gray-400 text-sm" placeholder={placeholder}/>
        {errors[name] && touched[name]? (
            <label className="text-red-500 text-sm w-fit">{(errors as any)[name]}</label>
        ) : null}
        </>
    )
}

export default Input;