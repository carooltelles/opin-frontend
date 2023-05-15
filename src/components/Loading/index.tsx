import { MoonLoader } from "react-spinners";

interface ILoadingProps {
    size?: number;
}

export function Loading({ size = 30 }: ILoadingProps) {
    return (
        <MoonLoader color="#D81E05" size={size} speedMultiplier={0.5} />
    )
}