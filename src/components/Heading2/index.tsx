import React from "react"

type Headgin1Props = {
    className?: string
}

export function Heading2({ children, className = "" }: React.PropsWithChildren<Headgin1Props>) {
    className = `font-medium text-2xl ${className}`

    return <h1 className={className}>{children}</h1>
}
