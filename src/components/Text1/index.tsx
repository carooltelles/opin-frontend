import React from "react"

type Text1Props = {
    className?: string
}

export function Text1({ className = "", children }: React.PropsWithChildren<Text1Props>) {
    className = `font-normal text-base ${className}`

    return <span className={className}>{children}</span>
}
