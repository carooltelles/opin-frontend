"use client"

import { BoxShadow } from "@/components/BoxShadow"
import { Button } from "@/components/Button"
import { Divider } from "@/components/Divider"
import { ItemListSharesReceived } from "@/components/ItemListSharesReceived"
import { Loading } from "@/components/Loading"
import { Tab } from "@/components/Tab"
import { Tabs } from "@/components/Tabs"
import { TitlePage } from "@/components/TitlePage"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface ISharesReceivedProps {
    id: number
    title: string
    statusRequest: boolean
    date: string
    months: number
}

export default function MySharedPage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [tabs, setTabs] = useState([
        { id: 1, title: "Recebidos", active: true },
        { id: 2, title: "Transmitidos", active: false },
    ])
    const [sharesReceived, setSharesReceived] = useState<ISharesReceivedProps[]>([])

    useEffect(() => {
        setLoading(true)
        getSharesReceived()
    }, [])

    const getSharesReceived = async () => {
        try {
            const { data } = await axios.get("https://645e6a0a12e0a87ac0efc52e.mockapi.io/mapfre/api/v2/getMyShared")

            setSharesReceived(data)
        } catch (error) {
            console.log("My Shares Received Error: ", error)
        } finally {
            setLoading(false)
        }
    }

    const handleTabChange = () => {
        const newTabs = tabs.map(tab => {
            tab.active = !tab.active
            return tab
        })

        setTabs(newTabs)
    }

    return (
        <div>
            <TitlePage
                title="Meus compartilhamentos de Dados Open Insurance"
                subtitle="Todos os campos são obrigatórios, exceto os que estão indicados como opcional."
            />
            <Tabs>
                {tabs.map(tab => (
                    <div key={tab.id} onClick={handleTabChange}>
                        <Tab active={tab.active}>{tab.title}</Tab>
                    </div>
                ))}
            </Tabs>
            {tabs.find(tab => tab.id == 1)?.active && (
                <div id="recebidos" className="my-8">
                    <div className="flex justify-end">
                        <Button
                            text={"Solicitar Compartilhamento"}
                            variant="solid"
                            action={() => router.push("/shares/new/")}
                        />
                    </div>
                    <BoxShadow className={"mt-8 w-full"}>
                        <span className="text-xl font-medium">Compartilhamentos Solicitados Recebimento</span>
                        <Divider />
                        {loading ? (
                            <div className="flex justify-center items-center my-5">
                                <Loading />
                            </div>
                        ) : (
                            <>
                                {sharesReceived.map((item, index) => (
                                    <ItemListSharesReceived key={index} {...item} />
                                ))}
                            </>
                        )}
                    </BoxShadow>
                </div>
            )}
            {tabs.find(tab => tab.id == 2)?.active && <div id="transmitidos" className="my-8"></div>}
        </div>
    )
}
