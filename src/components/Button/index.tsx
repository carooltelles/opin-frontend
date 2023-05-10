interface ButtonProps {
    variant: "outline" | "solid";
    text: string;
    action?: () => void;
}

export function Button({ variant, text, action = () => { } }: ButtonProps) {
    return (
        <button
            onClick={() => action}
            className={`${variant === "solid" ?
                "bg-primary text-white hover:bg-primary-hover" :
                "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                } p-4 rounded-lg gap-1`}>
            {text}
        </button>
    )
}