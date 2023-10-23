import ContactForm from "./components/ContactForm";
import { Map } from "./components/Map";



export const metadata = {
    title: "contacto | RENACER",
    description: "Consejo comunitario",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };

export default function ContactPage (){
    
    return (
        <>
        <div className="mx-auto text-black font-bold bg-slate-50 py-56 mt-0 mb-0">
        <ContactForm/>
        <Map/>
        </div>
        </>
    )
}
