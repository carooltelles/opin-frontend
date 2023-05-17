interface BoxShadowProps extends React.PropsWithChildren {
    className?: string;
}

export function BoxShadow({ children, className }: BoxShadowProps) {
    return <div className={`rounded-md p-6 gap-4 bg-white shadow-md ${className}`}>{children}</div>
}