'use client';

import Image from 'next/image';
import FormContact from './FormContact';
import Logo from '@/public/img/imgContact.webp';

export default function ContactPage() {
   return (
      <section
         className="relative bg-cover bg-center py-16"
         style={{
            backgroundImage: `url(${Logo.src})`,
         }}
      >
         {/* Overlay blanc semi-transparent */}
         <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0" />

         {/* Contenu */}
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 text-center sm:text-left">
               Questions ou Devis ?<br /> Contactez-nous !
            </h2>

            {/* Image + Formulaire min-h-[500px] */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] overflow-hidden rounded-lg shadow-lg">
               {/* Image */}
               <div className="h-full w-full">
                  <Image
                     src={Logo}
                     alt="Contact ClimaPro"
                     className="w-full h-full object-cover"
                     priority
                  />
               </div>

               {/* Formulaire */}
               <div className="bg-white h-full w-full p-3 flex items-center">
                  <div className="w-full">
                     <FormContact />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
