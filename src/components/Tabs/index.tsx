import React from "react"

import { Divider } from "src/components/Divider"

import { Container, TabGroup } from "./styles"

export function Tabs({ children }: React.PropsWithChildren) {
    return (
        <Container>
            <TabGroup>{children}</TabGroup>
            <Divider marginTop="-2px" />
        </Container>
    )
}
