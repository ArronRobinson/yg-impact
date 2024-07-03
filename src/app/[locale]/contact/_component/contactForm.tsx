"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { sendEmail } from "@/actions/contactActions";

export const contactSchema = z.object({
    fullName: z.string().min(2, {
      message: "Fullname must be at least 2 characters.",
    }),
    email: z.string().email().min(2, {
        message: "Fullname must be at least 2 characters.",
    }),
    message: z.string().min(3, {
        message: "Fullname must be at least 3 characters.",
    }),
})

export default function ContactForm(){

    // 1. Define your form.
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: "Bruh",
            email: "bruh@gmail.com",
            message: "Yo waddup"
        },
    })
    
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof contactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        await sendEmail(values);
    }

    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex justify-between gap-5">
                <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem className="grow">
                    <FormControl>
                        <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                    <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="grow">
                    <FormControl>
                        <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* <Button onClick={(e) => {e.preventDefault();}} className="rounded-full" type="submit">Submit</Button> */}
            <Button className="rounded-full" type="submit">Submit</Button>
        </form>
        </Form>
    )
}