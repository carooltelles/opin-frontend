import { Divider } from "@/components/Divider"
import { Header } from "@/components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>
                <Header />
                <Divider />
            </div>
            <div>{children}</div>
        </div>
    )
}
