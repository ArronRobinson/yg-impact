import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

export default function LocalSwitcher(){
    const [isPending, startTransituion] = useTransition();
    const router = useRouter();
    const pathname = usePathname()
    const localActive = useLocale();

    const onSelectChange = (value: string) => {
        const nextLocale = value;
        const url = pathname.substring(3);
        
        startTransituion(() => {
            router.replace(`/${nextLocale}/${url}`)
        })
    }

    return(
    <>
        <Select defaultValue={localActive} onValueChange={onSelectChange}>
            <SelectTrigger className="rounded-3xl text-[10px] md:text-[12px] h-6 md:h-9 px-2 md:px-3">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="nl">NL</SelectItem>
            </SelectContent>
        </Select>
    </>)
}