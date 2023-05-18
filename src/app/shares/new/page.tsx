"use client"

import ClientIdentification from "@/components/NewShare/ClientIdentification"
import { Steps } from "@/components/NewShare/Steps"
import { TitlePage } from "@/components/TitlePage"
import { useState } from "react"

type FormsNewShares = {
    [key: string]: object
}

export type StepComponentProps = {
    onSubmit: (data: object) => void
    onPreviusStep: () => void
    formsValue: object
}

export default function NewSharedPage() {
    const [formsValue, setFormsValues] = useState<FormsNewShares>({})

    const steps = [ClientIdentification.name]
    const [currentStep, setCurrentStep] = useState<string>(ClientIdentification.name)

    function onSubmit(data: object) {
        console.log("NewSharedPage onSubmit")
        console.log(formsValue)
        console.log(data)
        setFormsValues(prev => ({ ...prev, ...data }))

        const nextStepIndex = steps.indexOf(currentStep) + 1
        if (nextStepIndex < steps.length) {
            const nextStep = steps[nextStepIndex]
            setCurrentStep(nextStep)
        }
    }

    function onPreviusStep() {
        const previousStepIndex = steps.indexOf(currentStep) - 1
        if (previousStepIndex >= 0) {
            const previousStep = steps[previousStepIndex]
            setCurrentStep(previousStep)
        }
    }

    return (
        <main>
            <TitlePage
                title="Compartilhamento de Dados Open Insurance"
                subtitle="Todos os campos são obrigatórios, exceto os que estão indicados como opcional."
            />
            <Steps className="mt-8" currentStep={currentStep} steps={steps} />
            {currentStep === ClientIdentification.name && (
                <ClientIdentification onSubmit={onSubmit} onPreviusStep={onPreviusStep} formsValue={formsValue} />
            )}
        </main>
    )
}
