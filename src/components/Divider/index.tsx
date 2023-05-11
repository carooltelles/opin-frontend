interface DividerProps {
    className?: string
}

export function Divider({ className = "" }: React.PropsWithoutRef<DividerProps>) {
    className = `-z-10 w-full h-px bg-slate-200 ${className}`

    return <div className={className} />
}
