import React from "react"

type Headgin1Props = {
    className?: string
}

export function Heading1({ className = "", children }: React.PropsWithChildren<Headgin1Props>) {
    className = `font-normal text-4xl ${className}`

    return <h1 className={className}>{children}</h1>
}
