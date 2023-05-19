import { ButtonHTMLAttributes } from "react"

export function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className="bg-primary text-white font-bold text-base p-4 rounded-lg" {...props} />
}
