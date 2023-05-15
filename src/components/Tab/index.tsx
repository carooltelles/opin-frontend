import React from "react"
import { Container, Text, ActiveTab } from "./styles"
interface ITab extends React.PropsWithChildren {
    active?: boolean;
}

export function Tab({ children, active = false }: ITab) {
    return (
        <Container>
            <Text active={active}>{children}</Text>
            {active && <ActiveTab />}
        </Container>
    )
}
