import { Divider } from "@/components/Divider"
import { Header } from "@/components/Header"
import { Tab } from "@/components/Tab"
import { Tabs } from "@/components/Tabs"
import { TitlePage } from "@/components/TitlePage"

import { Container } from "./styles"

export default function MySharedPage() {
    return (
        <Container>
            <Header />
            <Divider />
            <TitlePage
                title="Meus compartilhamentos de Dados Open Insurance"
                subtitle="Todos os campos são obrigatórios, exceto os que estão indicados como opcional."
            />
            <Tabs>
                <Tab active>Recebidos</Tab>
                <Tab>Transmitidos</Tab>
            </Tabs>
        </Container>
    )
}
