import LogoSection from '@/public/img/imageSection2.webp';
import GoToService from '@/pages/buttons/GoToService';

export default function DeuxiemeSection() {
   return (
      <section className="flex items-center justify-between py-16 px-6 max-w-7xl mx-auto">
         <div className="w-1/2 pr-8">
            <h3 className="text-2xl font-semibold mb-4">Nos services</h3>
            <p className="text-lg">
               Nous offrons des services de qualité en installation, réparation et entretien de
               systèmes de chauffage, climatisation et ventilation.
               <br />
               N’hésitez pas à communiquer avec nous.
            </p>
            <GoToService />
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
