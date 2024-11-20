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
        {/* <label className="border-2 rounded ">
            <p className="sr-only">change language</p>
            <select className="bg-porselein" defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
                <option value="en">🇬🇧</option>
                <option value="nl">🇳🇱</option>
            </select>
        </label> */}
        <Select defaultValue={localActive} onValueChange={onSelectChange}>
            <SelectTrigger className="rounded-3xl text-xs text-white">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="it">IT</SelectItem>
            </SelectContent>
        </Select>
    </>)
}