import React from "react"

import { Heading1 } from "src/components/Heading1"
import { Text1 } from "src/components/Text1"

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
