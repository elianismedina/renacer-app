"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { BsFillSuitHeartFill, BsTelephoneOutbound} from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';




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
      <div className="grid grid-cols-1 gap-2 mt sm:grid-cols-4 sm:gap-20">
        {/*Columna 1*/}
        <section>
        <div className='ml-28 mb-10 md:py-2 md:block'>
                    <Image
                    
                    src='/images/Logo.svg'
                    alt='logo'
                    width={100}
                    height={100}
                    />
                
                </div>
        </section>

        {/*Columna 2*/}
        <section className="space-y-8 space-x-8">
           <h1 className="ml-24 text-lime-950 font-bold  sm:ml-10 text-start text-2xl lg:text-6xl">
              Contacto
            </h1>
             
          <div className="grid grid-cols-2 w-1/3">

            <div>
            <BsTelephoneOutbound className="mt-8 h-8 w-8" />
            <Mail className="mt-6 h-8 w-8" />
            <AiOutlineClockCircle className="mt-8 h-8 w-8" />
            <CiLocationOn className="mt-12 h-8 w-8" />
            </div>

            <div>
            <p className="w-20 mt-8">3008828214</p>
            <p className="w-20 mt-8">crenacernegro@gmail.com</p>
            <p className="w-40 mt-8">Lunes a Viernes entre 8:00 am y 5:30 pm</p>
            <p className="w-20 mt-8">Timbiqui-Cauca</p>
            </div>
          </div>
        </section>

        {/*Columna 3 */}
        <section className="space-y-10 space-x-8">
        <h1 className="ml-24 mt-10 text-lime-950 font-bold sm:ml-8 sm:mt-0 text-start text-2xl  lg:text-6xl">
        Escribenos
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 p-6 border-solid border-2 border-sky-500 rounded-lg w-2/3 sm:w-full sm:p-6"
          >
            <div>

              <p className="text-md mb-6">
                Envíanos un mensaje y pronto nos pondremos en contacto contigo
              </p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        className="text-xs rounded-lg"
                        placeholder="p. ej., email@ejemplo.com"
                        {...field}
                      />
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
                      <Input
                        className="text-xs rounded-lg"
                        placeholder="p. ej., Ayuda"
                        {...field}
                      />
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
                      <Textarea
                        className="text-xs rounded-lg"
                        placeholder="Escribe aquí"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-48 rounded-xl bg-lime-950 p-2 text-white mt-4 font-bold text-md sm:w-2/3 sm:ml-10"
                type="submit"
                variant="secondary"
                size="icon"
              >
                <Mail className="absolute ml-6 h-6 w-6" /> Enviar
              </Button>
            </div>
          </form>
        </Form>

        </section>
        
        {/*Columna 4*/}
        <section className="space-y-10 space-x-8">
        <Button
          className="w-2/3 ml-8 rounded-xl bg-lime-950 p-6 font-bold text-white mt-20 sm:w-2/3 sm:m-auto sm:mb-6 sm:content-center"
          type="submit"
          variant="secondary"
          size="icon"
        > 
          <BsFillSuitHeartFill className="absolute h-6 w-6" />
          <p className="text-lg mb-2">Dona ahora</p>
          
          
        </Button>
        </section>
       
      </div>
    );
};

export default ContactForm;
