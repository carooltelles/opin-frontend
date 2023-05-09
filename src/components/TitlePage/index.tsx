import { Heading1 } from "@/components/Heading1"
import { Text1 } from "@/components/Text1"
import React from "react"

import { Container } from "./styles"

interface TitlePageProps {
    title: string
    subtitle: string
}

export function TitlePage({ title, subtitle }: React.PropsWithChildren<TitlePageProps>) {
    return (
        <Container>
            <Heading1>{title}</Heading1>
            <Text1>{subtitle}</Text1>
        </Container>
    )
}
