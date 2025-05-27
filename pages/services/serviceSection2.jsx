import LogoSection from '@/public/img/service1.jpg';
import GoToContact from '@/pages/buttons/GoToContact';

export default function ServiceSection2() {
   return (
      <section className="flex items-center justify-between py-16 px-6 max-w-7xl mx-auto">
         <div className="w-1/2 pr-8">
            <h3 className="text-2xl font-semibold mb-4">
               Installation, Entretien unitaire ou contractuel, Devis & Reparation
            </h3>
            <p className="text-lg">
               Nous sommes en mesure de d'installer, entrenir et réparer toutes les marques de
               climatisation, chauffage, ventilation et beaucoup plus!
            </p>
            <GoToContact />
         </div>
         <div className="w-1/2">
            <img
               src={LogoSection.src}
               alt="Nos services"
               className="w-full h-auto rounded-lg shadow-lg"
            />
         </div>
      </section>
   );
}
