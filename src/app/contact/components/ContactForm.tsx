"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { BsFillSuitHeartFill, BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";

const FormSchema = z.object({
  email: z.string(),
  message: z.string().min(10).max(1000),
  asunto: z.string().min(10).max(1000),
});
const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <div className="mt grid grid-cols-1 gap-2 sm:grid-cols-4 sm:gap-20">
        {/*Columna 1*/}
        <section>
          <div className="mb-10 ml-28 md:block md:py-2">
            <Image
              src="/images/Vector.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </section>

        {/*Columna 2*/}
        <section className="space-x-8 space-y-8">
          <h1 className="ml-24 text-start text-2xl  font-bold text-lime-950 sm:ml-10 lg:text-6xl">
            Contacto
          </h1>

          <div className="grid w-1/3 grid-cols-2">
            <div>
              <BsTelephoneOutbound className="mt-8 h-8 w-8" />
              <Mail className="mt-6 h-8 w-8" />
              <AiOutlineClockCircle className="mt-8 h-8 w-8" />
              <CiLocationOn className="mt-12 h-8 w-8" />
            </div>

            <div>
              <p className="mt-8 w-20">3167864270</p>
              <p className="mt-8 w-20">crenacernegro@gmail.com</p>
              <p className="mt-8 w-40">
                Lunes a Viernes entre 8:00 am y 5:30 pm
              </p>
              <p className="mt-8 w-20">Timbiqui-Cauca</p>
            </div>
          </div>
        </section>

        {/*Columna 3 */}
        <section className="space-x-8 space-y-10">
          <h1 className="ml-24 mt-10 text-start text-2xl font-bold text-lime-950 sm:ml-8 sm:mt-0  lg:text-6xl">
            Escribenos
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-72 grid-cols-1 rounded-lg border-2 border-solid border-lime-950 p-4  sm:w-full sm:p-6"
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
                          className="rounded-lg text-xs"
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
                          className="rounded-lg text-xs"
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
                          className="rounded-lg text-xs"
                          placeholder="Escribe aquí"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="text-md mb-8 ml-10 mt-8 w-48 rounded-xl bg-lime-950 p-2  font-bold text-white sm:ml-10 sm:w-2/3"
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
        <section className="space-x-8 space-y-10">
          <Button
            className="ml-14 mt-20 w-2/3 rounded-xl bg-lime-500 p-4 font-bold text-white sm:mt-36 sm:w-2/3"
            type="submit"
            variant="secondary"
            size="icon"
          >
            <BsFillSuitHeartFill className="absolute ml-2 h-6 w-6" />
            <p className="mb-2 text-lg">Dona ahora</p>
          </Button>
        </section>
      </div>
    </>
  );
};

export default ContactForm;
