import { ButtonHTMLAttributes } from "react"

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className="text-primary font-bold text-base p-4 border rounded-lg border-primary" {...props} />
}
