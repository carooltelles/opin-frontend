import { Divider } from "../Divider";
import { Eye } from "@/components/icons/Eye"


interface IItemListSharesReceived {
    title: string;
    statusRequest: boolean;
    date: string;
    months: number;
}

export function ItemListSharesReceived({ title, statusRequest, date, months }: IItemListSharesReceived) {
    const dateFormated = new Date(date ?? "").toLocaleDateString();

    return (
        <>
            <div className="flex flex-1 my-5 items-center">
                <span className="flex-1 w-full font-bold text-sm sm:flex-[1_1_20%]">{title}</span>
                <span className={`flex-[1_1_10%] font-normal ${statusRequest ? "text-success" : "text-primary"}`}>{statusRequest ? "Solicitação Autorizada" : "Solicitação Negada"}</span>
                <span className="flex-1">{dateFormated}</span>
                <span className="flex-1">{months} meses</span>
                <span className="flex-0 cursor-pointer" onClick={() => console.log("DETALHES")}>
                    <Eye />
                </span>
            </div>
            <Divider />
        </>
    )
}