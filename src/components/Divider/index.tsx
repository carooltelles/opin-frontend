import { Container } from "./styles"

interface DividerProps {
    marginTop?: string
}
export function Divider({ marginTop }: React.PropsWithoutRef<DividerProps>) {
    return <Container marginTop={marginTop} />
}
