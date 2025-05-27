import Image from 'next/image';
import FormContact from '@/pages/contacts/FormContact';
import Logo from '@/public/img/imgContact.webp';

export default function ContactPage() {
   return (
      <section
         className="relative bg-cover bg-center py-16"
         style={{
            backgroundImage: `url(${Logo.src})`,
         }}
      >
         {/* Overlay pour obscurcir l’arrière-plan */}
         <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

         {/* Contenu principal au-dessus de l’arrière-plan */}
         <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
               Questions ou Devis ?<br /> Contactez-nous!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
               {/* Partie image visible */}
               <div className="w-full">
                  <Image
                     src={Logo}
                     alt="Logo ClimaPro"
                     className="rounded-lg pb-2 shadow-lg w-full h-auto object-cover"
                     priority
                  />
               </div>

               {/* Formulaire */}
               <div>
                  <FormContact />
               </div>
            </div>
         </div>
      </section>
   );
}
