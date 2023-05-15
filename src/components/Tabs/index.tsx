import { Divider } from "@/components/Divider"
import React from "react"
import { Container, TabGroup } from "./styles"

export function Tabs({ children }: React.PropsWithChildren) {
    return (
        <Container>
            <TabGroup>{children}</TabGroup>
            <Divider marginTop="-2px" />
        </Container>
    )
}
