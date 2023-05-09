import React from "react"

import { Container, Text, ActiveTab } from "./styles"

interface TabProps {
    active?: boolean
}

export function Tab({ children, active = false }: React.PropsWithChildren<TabProps>) {
    return (
        <Container>
            <Text active={active}>{children}</Text>
            {active && <ActiveTab />}
        </Container>
    )
}
