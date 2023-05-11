import { Heading1 } from "@/components/Heading1"
import { Text1 } from "@/components/Text1"
import React from "react"

interface TitlePageProps {
    title: string
    subtitle: string
}

export function TitlePage({ title, subtitle }: TitlePageProps) {
    return (
        <div className="mt-8 ">
            <Heading1 className="mt-8">{title}</Heading1>
            <Text1 className="mt-8">{subtitle}</Text1>
        </div>
    )
}
