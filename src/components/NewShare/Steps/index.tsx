type StepsProps = {
    steps: string[]
    currentStep: string
    className?: string
}

type StepType = "PREV" | "CURRENT" | "NEXT"

type IndicatorProps = {
    stepType: StepType
    isLast?: boolean
}

function Indicator({ stepType, isLast = false }: IndicatorProps) {
    const ballClasses: { [key: StepType | string]: string } = {
        PREV: "w-6 h-6 rounded-xl bg-green-500",
        CURRENT: "w-6 h-6 rounded-xl border border-solid border-green-500",
        NEXT: "w-6 h-6 rounded-xl bg-slate-400",
    }

    const lineClasses: { [key: StepType | string]: string } = {
        PREV: "w-40 h-px bg-green-500",
        CURRENT: "w-40 h-px bg-slate-400",
        NEXT: "w-40 h-px bg-slate-400",
    }

    return (
        <div className="flex flex-row items-center">
            <div className={ballClasses[stepType]}></div>
            {!isLast && <div className={lineClasses[stepType]}></div>}
        </div>
    )
}

export function Steps({ className = "", currentStep, steps }: StepsProps) {
    return (
        <div className={className}>
            <div className="flex flex-row items-center">
                {steps?.map((step: string, index) => {
                    let stepType: StepType = "NEXT"

                    if (step === currentStep) stepType = "CURRENT"

                    if (index < steps.indexOf(currentStep)) stepType = "PREV"

                    return <Indicator key={step} stepType={stepType} isLast={index === steps.length - 1} />
                })}
            </div>
            <div className="flex flex-row mt-4">
                {steps?.map((step, index) => (
                    <div key={step} className={`w-40 font-bold text-base ${index ? "ml-6" : ""}`}>
                        Passo {index + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}
