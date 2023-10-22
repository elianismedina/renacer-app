"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";


const FormSchema = z.object({
    email: z.string(),
    message: z.string().min(10).max(1000),
    asunto: z.string().min(10).max(1000),
    });
const ContactForm = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)})

    const onSubmit = () =>{
        console.log("submitted")
    }

    return (
      <div className="grid grid-cols-4 gap-2">
        <div>
          LOGO
        </div>
        <div>
          <h1 className="text-center text-4xl">Contacto</h1>
        </div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 ml-72">
          <div className="space-y-2">
            <p>
            Envíanos un mensaje y pronto nos pondremos en contacto contigo
            </p>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input className="text-xs" placeholder="p. ej., email@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto*</FormLabel>
                <FormControl>
                  <Input className="text-xs" placeholder="p. ej., Ayuda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tu mensaje*</FormLabel>
                <FormControl>
                  <Textarea className="text-xs" placeholder="Escribe aquí" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
          className="w-48  bg-lime-950 text-white pt-2 pb-2 rounded-xl ml-8"
          type="submit"
          variant="secondary"
          size="icon"
          >
            <Mail className="ml-8 h-6 w-6 absolute"/> Enviar
          </Button>
          </div>
        </form>
      </Form>

      </div>
    );
};

export default ContactForm;
