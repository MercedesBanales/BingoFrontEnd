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
        <Field id={name} {...field} type={type} className="px-3 py-2 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder={placeholder}/>
        {errors[name] && touched[name]? (
            <label className="text-red-500 text-sm w-fit">{(errors as any)[name]}</label>
        ) : null}
        </>
    )
}

export default Input;