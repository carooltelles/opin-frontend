"use client"

import { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string
}

export function Input(props: InputProps) {
    const { register } = useFormContext()
    const className = `border border-solid rounded-sm p-2 ${props.className}`

    return <input {...props} className={className} {...register(props.name)} />
}
