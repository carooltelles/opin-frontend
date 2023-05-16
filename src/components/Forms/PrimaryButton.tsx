import { ButtonHTMLAttributes } from "react"

export function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className="bg-red-600 text-white font-bold text-base p-4 rounded-lg" {...props} />
}
