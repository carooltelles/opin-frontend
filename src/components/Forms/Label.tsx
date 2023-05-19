import { LabelHTMLAttributes } from "react"

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className="text-slate-600 text-sm font-normal" {...props} />
}
