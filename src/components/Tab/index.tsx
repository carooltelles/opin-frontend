import React from "react"

interface TabProps {
    active?: boolean
}

export function Tab({ children, active = false }: React.PropsWithChildren<TabProps>) {
    return (
        <div className="w-40 h-8 flex flex-col items-center justify-between">
            <a
                className={`no-underline text-base font-medium cursor-pointer text-red-600 ${
                    active && "text-slate-800"
                }`}
            >
                {children}
            </a>
            {active && <div className="h-1 w-full bg-slate-800" />}
        </div>
    )
}
