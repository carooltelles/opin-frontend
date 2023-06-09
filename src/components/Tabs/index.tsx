import React from "react"

import { Divider } from "@/components/Divider"

export function Tabs({ children }: React.PropsWithChildren) {
    return (
        <div className="h-24 flex flex-col items-center justify-center">
            <div className="flex">{children}</div>
            <Divider className="-mt-0.5" />
        </div>
    )
}
