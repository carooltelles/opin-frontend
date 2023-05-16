import { ButtonHTMLAttributes } from "react"

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className="text-red-600 font-bold text-base p-4 border rounded-lg border-red-600" {...props} />
}
