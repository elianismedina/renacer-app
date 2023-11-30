import Donations from "./_components/Donations";
import Ejes from "./_components/Ejes";
import Gestion from "./_components/Gestion";
import Slideshow from "./_components/Slideshow";
import Testimonios from "./_components/Testimonios";
export default function Home() {
  return (
    <>
      <Slideshow />
      <Gestion />
      <Ejes />
      <Donations />
      <Testimonios />
    </>
  );
}
