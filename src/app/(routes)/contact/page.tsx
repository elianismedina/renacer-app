import ContactForm from "./components/ContactForm";
import { Map } from "./components/Map";

export const metadata = {
  title: "contacto | RENACER",
  description: "Consejo comunitario",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto mb-0 mt-0 bg-slate-50 py-56 font-bold text-black">
        <ContactForm />
        <Map />
      </div>
    </>
  );
}
