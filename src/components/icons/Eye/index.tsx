import React from "react"

import { ISvg } from "@/interfaces/icons"

export function Eye({ color = "#D81E05", width = 22, height = 14 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 22 14">
            <path
                fill={color}
                d="M20.525 5.575C18.35 3.175 14.675.625 11 .7 7.325.625 3.65 3.175 1.55 5.65a2.086 2.086 0 000 2.85c2.175 2.325 5.775 4.875 9.375 4.875h.225c3.6 0 7.2-2.55 9.375-4.95.75-.825.75-2.025 0-2.85zM19.4 7.45c-1.95 2.175-5.175 4.425-8.325 4.425H11c-3.225.075-6.45-2.25-8.4-4.425a.589.589 0 010-.825C4.55 4.45 7.85 2.125 11 2.2c3.225-.075 6.45 2.25 8.4 4.425.225.225.225.6 0 .825z"
            ></path>
            <path
                fill={color}
                d="M11 3.25a3.841 3.841 0 00-3.825 3.825c0 .975.375 1.95 1.125 2.7.675.75 1.65 1.125 2.7 1.125 1.05 0 1.95-.45 2.7-1.125.75-.675 1.125-1.65 1.125-2.7 0-.975-.375-1.95-1.125-2.7-.675-.75-1.65-1.125-2.7-1.125zm1.65 5.4c-.45.45-1.05.675-1.65.675-.6 0-1.2-.225-1.65-.675A2.327 2.327 0 018.675 7 2.337 2.337 0 0111 4.675c.6 0 1.2.225 1.65.675.45.45.675 1.05.675 1.65 0 .6-.225 1.2-.675 1.65z"
            ></path>
        </svg>
    )
}
