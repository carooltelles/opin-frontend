import { HTMLAttributes } from "react"

type FieldProps = HTMLAttributes<HTMLDivElement> & {
    className?: string
}

export function Field({ className = "", ...props }: FieldProps) {
    className = `flex flex-col ${className}`

    return <div {...props} className={className} />
}
