import { StepComponentProps } from "@/app/my-shared/new/page"
import { Divider } from "@/components/Divider"
import { Form } from "@/components/Forms"
import { Heading2 } from "@/components/Heading2"
import { Text1 } from "@/components/Text1"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const createClientIdentificationSchema = z.object({
    doc: z.string().nonempty("CPF/CNPJ é obrigatório"),
    societyname: z.string().nonempty("Nome da sociedade é obrigatório"),
})

type ClientIdentificationSchema = z.infer<typeof createClientIdentificationSchema>

function ClientIdentification({ onSubmit, onPreviusStep }: StepComponentProps): JSX.Element {
    const clientIdentificationForm = useForm<ClientIdentificationSchema>({
        resolver: zodResolver(createClientIdentificationSchema),
    })
    const { handleSubmit } = clientIdentificationForm

    function submitNewShare(data: object) {
        const stepData = {
            clientIdentification: data,
        }

        onSubmit(stepData)
    }

    function handlePreviusStep() {
        onPreviusStep()
    }

    return (
        <div>
            <FormProvider {...clientIdentificationForm}>
                <form onSubmit={handleSubmit(submitNewShare)}>
                    <Heading2 className="mt-8">Identificação do Cliente</Heading2>
                    <Text1>Selecione a Instituição para quem iremos solicitar o compartilhamento de seus dados</Text1>
                    <Divider className="mt-6" />
                    <div className="mt-6 flex flex-row">
                        <Form.Field>
                            <Form.Label htmlFor="doc">CPF ou CNPJ *</Form.Label>
                            <Form.Input id="doc" name="doc" className="w-96" />
                            <Form.ErrorMessage field="doc" />
                        </Form.Field>
                        <Form.Field className="ml-8 w-full">
                            <Form.Label htmlFor="societyname">Nome da Sociedade *</Form.Label>
                            <Form.Input id="societyname" name="societyname" />
                            <Form.ErrorMessage field="societyname" />
                        </Form.Field>
                    </div>
                    <Divider className="mt-8" />
                    <div className="mt-6 flex flex-row-reverse gap-6">
                        <Form.PrimaryButton type="submit">Próximo passo</Form.PrimaryButton>
                        <Form.Button onClick={handlePreviusStep}>Cancelar</Form.Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default ClientIdentification
